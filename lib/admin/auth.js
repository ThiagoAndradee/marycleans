/* Admin/CRM: login, sessão e proteção de rotas. Mesmo arquivo nos 3 sites.

   Quem entra: só quem está em ADMIN_USERS (variável secreta na Vercel, montada por scripts/admin-usuarios.mjs):
     [{"email":"...","nome":"...","senha":"scrypt$...","totp":"BASE32..."}]
   Login: e-mail + senha + código de 6 dígitos do app autenticador (2FA TOTP), numa tela só.
   Sessão: cookie __Host-adm (HttpOnly, Secure, SameSite=Strict, Path=/), 12 h, registrada no armazenamento privado
   (logout apaga de verdade). Assinatura HMAC com ADMIN_SESSION_SECRET.
   Escrita (POST/PUT/PATCH/DELETE): exige mesma origem (Origin/Sec-Fetch-Site) e o cabeçalho X-CSRF-Token.
   Limites: 10 tentativas por IP a cada 15 min; 5 erros seguidos no mesmo e-mail bloqueiam o e-mail por 15 min.
   Log: login, falha, bloqueio, logout e cada alteração vão para admin/_log/AAAA-MM-DD.json (aba Acessos).

   Proteger uma rota nova (ex.: Analytics):
     const auth = require("../lib/admin/auth");
     module.exports = async (req, res) => {
       const s = await auth.exigir(req, res, { escrita: req.method !== "GET" });
       if (!s) return;              // a resposta 401/403 já foi enviada
       ... s.email, s.nome ...
     };
*/
const crypto = require("crypto");
const store = require("./store");
const totp = require("./totp");
const { send, body, ip, cookies, mesmaOrigem, hash, igual, query, erro, travadoEmProducao } = require("./http");

const COOKIE = "__Host-adm";
const DURACAO_MS = 12 * 3600 * 1000;
const JANELA_MS = 15 * 60 * 1000;
const MAX_IP = 10, MAX_EMAIL = 5;

function segredo() {
  const s = process.env.ADMIN_SESSION_SECRET || "";
  return s.length >= 32 ? s : null;
}
function usuarios() {
  try {
    const u = JSON.parse(process.env.ADMIN_USERS || "[]");
    return Array.isArray(u) ? u.filter((x) => x && x.email && x.senha && x.totp).map((x) => ({ ...x, email: String(x.email).trim().toLowerCase() })) : [];
  } catch { return []; }
}
function pronto() { return !travadoEmProducao() && !!segredo() && usuarios().length > 0 && store.configurado(); }

/* ---------- senha (scrypt) ---------- */
function hashSenha(senha, { N = 32768, r = 8, p = 1 } = {}) {
  const salt = crypto.randomBytes(16);
  const h = crypto.scryptSync(String(senha).normalize("NFKC"), salt, 32, { N, r, p, maxmem: 128 * N * r * 2 });
  return `scrypt$${N}$${r}$${p}$${salt.toString("base64")}$${h.toString("base64")}`;
}
const FALSO = "scrypt$32768$8$1$AAAAAAAAAAAAAAAAAAAAAA==$AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
function confereSenha(senha, guardado) {
  const [alg, N, r, p, salt, h] = String(guardado || FALSO).split("$");
  if (alg !== "scrypt") return false;
  const esperado = Buffer.from(h, "base64");
  const n = +N, rr = +r, pp = +p;
  const calc = crypto.scryptSync(String(senha || "").normalize("NFKC"), Buffer.from(salt, "base64"), esperado.length, { N: n, r: rr, p: pp, maxmem: 128 * n * rr * 2 });
  return calc.length === esperado.length && crypto.timingSafeEqual(calc, esperado);
}

/* ---------- log de acessos ---------- */
async function log(req, email, acao, extra) {
  try {
    const dia = new Date().toISOString().slice(0, 10);
    const ua = String(req.headers["user-agent"] || "").slice(0, 120);
    await store.mutate(`_log/${dia}.json`, [], (l) => {
      l.push({ em: new Date().toISOString(), email: email || null, acao, ip: ip(req), ua, ...(extra || {}) });
      if (l.length > 3000) l.splice(0, l.length - 3000);
    }, { ttl: 400 * 86400 });
  } catch (e) { console.error("[admin] log falhou", e.message); }
}

/* ---------- limites de tentativa ---------- */
async function contar(chave, max) {
  return store.mutate(`_auth/limite/${hash(chave).slice(0, 32)}.json`, { n: 0, desde: 0 }, (c) => {
    const agora = Date.now();
    if (agora - c.desde > JANELA_MS) { c.n = 0; c.desde = agora; }
    c.n += 1;
    return c.n > max;
  }, { ttl: 3600 });
}
async function falhasEmail(email) { return store.readJSON(`_auth/falhas/${hash(email).slice(0, 32)}.json`, { n: 0, ate: 0 }); }
async function marcarFalha(email) {
  return store.mutate(`_auth/falhas/${hash(email).slice(0, 32)}.json`, { n: 0, ate: 0 }, (f) => {
    if (f.ate && Date.now() > f.ate) { f.n = 0; f.ate = 0; }
    f.n += 1;
    if (f.n >= MAX_EMAIL) f.ate = Date.now() + JANELA_MS;
    return f.n >= MAX_EMAIL;
  }, { ttl: 3600 });
}
async function limparFalhas(email) { await store.remove(`_auth/falhas/${hash(email).slice(0, 32)}.json`); }

/* ---------- sessão ---------- */
function assinar(sid) { return crypto.createHmac("sha256", segredo()).update("sessao:" + sid).digest("base64url"); }
function csrfDe(sid) { return crypto.createHmac("sha256", segredo()).update("csrf:" + sid).digest("base64url"); }
function cookieSessao(valor, maxAge) {
  return `${COOKIE}=${valor}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}

async function sessao(req) {
  if (travadoEmProducao() || !segredo() || !store.configurado()) return null;
  const v = cookies(req)[COOKIE];
  if (!v || v.length > 200) return null;
  const [sid, sig] = v.split(".");
  if (!sid || !sig || !igual(sig, assinar(sid))) return null;
  const reg = await store.readJSON(`_auth/sessoes/${hash(sid).slice(0, 40)}.json`, null);
  if (!reg || Date.now() > reg.exp) return null;
  const u = usuarios().find((x) => x.email === reg.email);
  if (!u) return null; // tirado da lista: perde o acesso na hora
  return { email: u.email, nome: u.nome || u.email, sid, csrf: csrfDe(sid), exp: reg.exp };
}

/* Exige login. Escrita exige também mesma origem + X-CSRF-Token. Devolve a sessão ou null (resposta já enviada). */
async function exigir(req, res, { escrita = false } = {}) {
  const s = await sessao(req);
  if (!s) { send(res, 401, { erro: "login", mensagem: "Entre de novo para continuar." }); return null; }
  const metodoEscrita = !["GET", "HEAD"].includes(req.method);
  if (escrita || metodoEscrita) {
    if (!mesmaOrigem(req)) { send(res, 403, { erro: "origem" }); return null; }
    const t = req.headers["x-csrf-token"];
    if (!t || !igual(t, s.csrf)) { send(res, 403, { erro: "csrf" }); return null; }
  }
  return s;
}

async function login(req, res) {
  if (req.method !== "POST") return send(res, 405, { erro: "método" });
  if (!mesmaOrigem(req)) return send(res, 403, { erro: "origem" });
  if (!pronto()) return send(res, 503, { erro: "nao_configurado", mensagem: "O acesso ainda não foi configurado neste site." });
  const b = await body(req, 4096);
  const email = String(b.email || "").trim().toLowerCase().slice(0, 160);
  const senha = String(b.senha || "").slice(0, 200);
  const codigo = String(b.codigo || "").slice(0, 10);
  const GENERICO = { erro: "credenciais", mensagem: "E-mail, senha ou código não conferem." };
  const BLOQ = { erro: "bloqueado", mensagem: "Muitas tentativas. Espere 15 minutos e tente de novo." };

  if (await contar("ip:" + ip(req), MAX_IP)) { await log(req, email, "login_limite_ip"); return send(res, 429, BLOQ, { "Retry-After": "900" }); }
  if (!email || !senha || !codigo) return send(res, 400, GENERICO);
  const f = await falhasEmail(email);
  if (f.ate && Date.now() < f.ate) { await log(req, email, "login_bloqueado"); return send(res, 429, BLOQ, { "Retry-After": "900" }); }

  const u = usuarios().find((x) => x.email === email);
  const senhaOk = confereSenha(senha, u ? u.senha : null); // roda o scrypt mesmo sem usuário (mesmo tempo de resposta)
  const passo = u && senhaOk ? totp.verificar(u.totp, codigo) : -1;
  let ok = !!u && senhaOk && passo >= 0;
  if (ok) {
    // código de 6 dígitos só vale uma vez
    const reuso = await store.mutate(`_auth/totp/${hash(email).slice(0, 32)}.json`, { ultimo: 0 }, (t) => {
      if (passo <= t.ultimo) return true;
      t.ultimo = passo; return false;
    }, { ttl: 86400 });
    if (reuso) ok = false;
  }
  if (!ok) {
    const bloqueou = await marcarFalha(email);
    await log(req, email, bloqueou ? "login_falha_bloqueio" : "login_falha");
    return send(res, bloqueou ? 429 : 401, bloqueou ? BLOQ : GENERICO);
  }
  await limparFalhas(email);
  const sid = crypto.randomBytes(32).toString("base64url");
  const exp = Date.now() + DURACAO_MS;
  await store.writeJSON(`_auth/sessoes/${hash(sid).slice(0, 40)}.json`, { email, exp, criada: new Date().toISOString(), ip: ip(req), ua: String(req.headers["user-agent"] || "").slice(0, 120) }, { ttl: DURACAO_MS / 1000 + 600 });
  await log(req, email, "login");
  return send(res, 200, { ok: true, nome: u.nome || email, email, csrf: csrfDe(sid) }, { "Set-Cookie": cookieSessao(`${sid}.${assinar(sid)}`, DURACAO_MS / 1000) });
}

async function logout(req, res) {
  const s = await exigir(req, res, { escrita: true });
  if (!s) return;
  await store.remove(`_auth/sessoes/${hash(s.sid).slice(0, 40)}.json`);
  await log(req, s.email, "logout");
  return send(res, 200, { ok: true }, { "Set-Cookie": cookieSessao("", 0) });
}

/* /api/admin-auth?op=eu | login | logout */
async function handler(req, res) {
  if (travadoEmProducao()) return send(res, 404, { erro: "não encontrado" });
  try {
    const op = query(req).op;
    if (op === "login") return await login(req, res);
    if (op === "logout") return await logout(req, res);
    if (op === "eu") {
      const s = await sessao(req);
      if (!s) return send(res, 401, { erro: "login", configurado: pronto() });
      return send(res, 200, { email: s.email, nome: s.nome, csrf: s.csrf, exp: s.exp });
    }
    return send(res, 404, { erro: "op" });
  } catch (e) {
    console.error("[admin-auth]", e && e.message);
    return send(res, e.status || 500, { erro: e.status ? e.message : "erro interno" });
  }
}

/* Limpeza: sessões vencidas (chamada pelo CRM de vez em quando). */
async function limparSessoes() {
  try {
    const l = await store.list("_auth/sessoes/");
    const velhas = l.filter((x) => Date.now() - new Date(x.em).getTime() > DURACAO_MS + 3600e3);
    for (const v of velhas.slice(0, 50)) await store.remove(v.path);
  } catch {}
}

module.exports = { handler, exigir, sessao, log, hashSenha, confereSenha, pronto, limparSessoes, COOKIE };
