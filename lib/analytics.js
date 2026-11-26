/* Analytics próprio (first-party, sem cookies, anônimo). Mesmo arquivo nos 3 sites (Want3D, Lacre Cargas, Mary Cleans).
   - collect(req, res, cfg): recebe os eventos do /a.js (sendBeacon) em /api/collect. Valida, limita, anonimiza e grava.
   - admin(req, res, cfg): /admin/analytics (página) e /api/analytics?op=... (dados, CSV, heatmap, login). Tudo atrás do login.
   Privacidade: nunca grava IP, cookie de visitante nem fingerprint. A visita é contada por um hash diário
   sha256(sal do dia + site + IP + navegador), com sal aleatório que some depois de 2 dias, então não dá para ligar dias
   nem voltar ao IP. Não grava texto digitado, valores de formulário nem parâmetros da URL (só utm_source/medium/campaign).
   Banco: Upstash Redis pela API REST (KV_REST_API_URL + KV_REST_API_TOKEN, os nomes que o Vercel Marketplace cria).
   Cada dia é uma lista a:<site>:e:<AAAA-MM-DD> que expira sozinha em 396 dias (13 meses).
   Login: ANALYTICS_ADMIN_PASSWORD (ou ADMIN_PASSWORD). Sessão em cookie HttpOnly assinado (12 h). Quando o /admin com CRM
   (branch admin-crm) tiver o login dele, trocar authOk() por aquele check. */
"use strict";
const crypto = require("crypto");
const UI = require("./analytics-ui");

const TTL = 396 * 86400;
const RL_MAX = 150; // eventos por visita a cada 10 min
const BOT = /bot|crawl|spider|slurp|facebookexternalhit|preview|headless|lighthouse|pagespeed|pingdom|uptime|monitor|curl|wget|python|node-fetch|axios|go-http|java\/|scrapy|phantom|selenium|playwright|puppeteer/i;

/* ---------- banco ---------- */
function redisCfg() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ""), token } : null;
}
const MEM = { kv: new Map(), ls: new Map() }; // só para teste local (ANALYTICS_DEV=1)
function memPipe(cmds) {
  return cmds.map(([c, k, ...a]) => {
    c = c.toUpperCase();
    if (c === "INCR") { const v = (+MEM.kv.get(k) || 0) + 1; MEM.kv.set(k, String(v)); return v; }
    if (c === "EXPIRE") return 1;
    if (c === "GET") return MEM.kv.has(k) ? MEM.kv.get(k) : null;
    if (c === "SET") { if (a.includes("NX") && MEM.kv.has(k)) return null; MEM.kv.set(k, a[0]); return "OK"; }
    if (c === "RPUSH") { const l = MEM.ls.get(k) || []; l.push(...a); MEM.ls.set(k, l); return l.length; }
    if (c === "LLEN") return (MEM.ls.get(k) || []).length;
    if (c === "LRANGE") { const l = MEM.ls.get(k) || []; const s = +a[0], e = +a[1]; return l.slice(s, e < 0 ? l.length + e + 1 : e + 1); }
    throw new Error("cmd " + c);
  });
}
async function pipe(cmds) {
  const c = redisCfg();
  if (!c) return process.env.ANALYTICS_DEV === "1" ? memPipe(cmds) : null;
  const r = await fetch(c.url + "/pipeline", { method: "POST", headers: { Authorization: "Bearer " + c.token, "Content-Type": "application/json" }, body: JSON.stringify(cmds) });
  if (!r.ok) throw new Error("redis " + r.status);
  return (await r.json()).map((x) => (x.error ? null : x.result));
}
const temBanco = () => !!redisCfg() || process.env.ANALYTICS_DEV === "1";

/* ---------- utilidades ---------- */
const sha = (s) => crypto.createHash("sha256").update(s).digest("hex");
function dia(ms, tz) { return new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(ms)); }
function hora(ms, tz) { return new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date(ms)); }
function end(res, code, body, type) {
  res.statusCode = code;
  if (body === undefined) return res.end();
  res.setHeader("Content-Type", type || "application/json; charset=utf-8");
  res.end(typeof body === "string" ? body : JSON.stringify(body));
}
function readBody(req, max) {
  let b;
  try { b = req.body; } catch (e) { return Promise.reject(e); } // no Vercel o getter já leu o corpo
  if (b !== undefined && b !== null) {
    if (Buffer.isBuffer(b)) b = b.toString("utf8");
    if (typeof b === "string") return b.length > max ? Promise.reject(new Error("grande")) : Promise.resolve(b);
    if (typeof b === "object") return JSON.stringify(b).length > max ? Promise.reject(new Error("grande")) : Promise.resolve(b);
  }
  return new Promise((ok, no) => {
    let n = 0; const parts = [];
    req.on("data", (c) => { n += c.length; if (n > max) { no(new Error("grande")); req.destroy(); } else parts.push(c); });
    req.on("end", () => ok(Buffer.concat(parts).toString("utf8")));
    req.on("error", no);
  });
}
function ipDe(req) { return String(req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || (req.socket && req.socket.remoteAddress) || "").split(",")[0].trim(); }
function hostDe(req) { return String(req.headers["x-forwarded-host"] || req.headers.host || "").split(",")[0].trim().split(":")[0].toLowerCase(); }
const str = (x, n) => (typeof x === "string" && x ? x.replace(/[\u0000-\u001f<>"`\\]/g, "").trim().slice(0, n) || undefined : undefined);
const num = (x, a, b) => { x = Number(x); return Number.isFinite(x) ? Math.min(b, Math.max(a, x)) : undefined; };

function limparCaminho(p) {
  if (typeof p !== "string" || p[0] !== "/") return null;
  p = p.split(/[?#]/)[0].slice(0, 200);
  try { p = decodeURIComponent(p); } catch (e) { /* fica como veio */ }
  p = p.replace(/[^\w\-./~À-ÿ]/g, "");
  // números de pedido, tokens e ids viram :id (não guardar identificador de cliente)
  p = p.split("/").map((s) => (/\d{4,}|^[A-Z]{2,5}-[\w-]{3,}$|^[0-9a-f-]{16,}$|^[\w-]{24,}$/i.test(s) ? ":id" : s)).join("/");
  if (/^\/(admin|api)(\/|$)/i.test(p)) return null;
  return p || "/";
}
function utm(x) { const v = str(x, 60); return v ? v.toLowerCase().replace(/[^a-z0-9._\-/ ]/g, "").slice(0, 60) || undefined : undefined; }

/* ---------- origem, dispositivo, CTA ---------- */
const IA = /(^|\.)(chatgpt\.com|chat\.openai\.com|openai\.com|perplexity\.ai|gemini\.google\.com|bard\.google\.com|copilot\.microsoft\.com|copilot\.com|claude\.ai|you\.com|phind\.com|deepseek\.com|meta\.ai|grok\.com|x\.ai|poe\.com|mistral\.ai|kagi\.com)$/;
const BUSCA = /(^|\.)(google\.[a-z.]{2,6}|bing\.com|duckduckgo\.com|ecosia\.org|yahoo\.[a-z.]{2,6}|yandex\.[a-z.]{2,6}|baidu\.com|search\.brave\.com|startpage\.com|qwant\.com|sapo\.pt|web\.de|t-online\.de|gmx\.(net|de))$/;
const SOCIAL = /(^|\.)(facebook\.com|fb\.com|instagram\.com|linkedin\.com|lnkd\.in|t\.co|twitter\.com|x\.com|youtube\.com|tiktok\.com|whatsapp\.com|wa\.me|pinterest\.[a-z.]{2,6}|reddit\.com|threads\.net|telegram\.org|t\.me)$/;
function tipoHost(h) { return IA.test(h) ? "ia" : BUSCA.test(h) ? "busca" : SOCIAL.test(h) ? "social" : null; }
function origem(refHost, host, us, um) {
  if (us) {
    if (/^(cpc|ppc|paid|ads?|display|paidsearch|paid_social)$/.test(um || "")) return "anuncio";
    const t = tipoHost(us.replace(/^https?:\/\//, "").split("/")[0]) || (/chatgpt|openai|perplexity|gemini|copilot|claude/.test(us) ? "ia" : null);
    return t || "campanha";
  }
  if (!refHost) return "direto";
  if (refHost === host || refHost.replace(/^www\./, "") === host.replace(/^www\./, "")) return "interno";
  return tipoHost(refHost) || "site";
}
function aparelho(ua, w) {
  if (w) return w < 768 ? "m" : w < 1024 ? "t" : "d";
  return /iPad|Tablet/i.test(ua) ? "t" : /Mobi|Android|iPhone/i.test(ua) ? "m" : "d";
}
function navegador(ua) {
  return /Edg\//.test(ua) ? "Edge" : /OPR\/|Opera/.test(ua) ? "Opera" : /SamsungBrowser/.test(ua) ? "Samsung" : /Firefox|FxiOS/.test(ua) ? "Firefox" : /Chrome|CriOS/.test(ua) ? "Chrome" : /Safari/.test(ua) ? "Safari" : "Outro";
}
function sistema(ua) {
  return /iPhone|iPad|iPod/.test(ua) ? "iOS" : /Android/.test(ua) ? "Android" : /Windows/.test(ua) ? "Windows" : /Mac OS X|Macintosh/.test(ua) ? "macOS" : /CrOS/.test(ua) ? "ChromeOS" : /Linux/.test(ua) ? "Linux" : "Outro";
}
const COTACAO = /cotac|orcament|anfrage|angebot|quote|proposta|kontakt|contact|contato|contacto|\/app\/?$|preco|preis/i;
function tipoCta(hr, tg) {
  hr = hr || "";
  if (/wa\.me|whatsapp/i.test(hr)) return "whatsapp";
  if (/^tel:|^sms:/i.test(hr)) return "telefone";
  if (/^mailto:/i.test(hr)) return "email";
  if (tg === "submit") return "formulario";
  if (hr && COTACAO.test(hr)) return "cotacao";
  return undefined;
}

/* ---------- coleta ---------- */
let SAL = {};
async function sal(d) {
  if (SAL[d]) return SAL[d];
  const k = "a:sal:" + d, novo = crypto.randomBytes(16).toString("hex");
  const r = await pipe([["SET", k, novo, "NX", "EX", "172800"], ["GET", k]]);
  const s = (r && r[1]) || novo;
  SAL = { [d]: s };
  return s;
}
const RL = new Map();
function rlLocal(k) {
  const agora = Date.now(), j = Math.floor(agora / 600000);
  if (RL.size > 5000) RL.clear();
  const x = RL.get(k);
  if (!x || x.j !== j) { RL.set(k, { j, n: 1 }); return true; }
  return ++x.n <= RL_MAX;
}

function limparEvento(b, host, ua) {
  if (!b || typeof b !== "object" || Array.isArray(b)) return null;
  const k = b.k;
  if (!["pv", "c", "f", "l"].includes(k)) return null;
  const p = limparCaminho(b.p);
  if (!p) return null;
  const i = typeof b.i === "string" && /^[a-z0-9]{4,12}$/.test(b.i) ? b.i : undefined;
  const e = { t: Date.now(), k, p, i };
  const w = num(b.w, 200, 8000);
  e.d = aparelho(ua, w);
  if (k === "pv") {
    e.w = w; e.h = num(b.h, 100, 100000);
    const rh = typeof b.r === "string" ? b.r.toLowerCase().replace(/[^a-z0-9.-]/g, "").slice(0, 80) : "";
    e.us = utm(b.us); e.um = utm(b.um); e.uc = utm(b.uc);
    e.src = origem(rh, host, e.us, e.um);
    if (rh && e.src !== "interno") e.rh = rh.replace(/^www\./, "");
    e.b = navegador(ua); e.o = sistema(ua);
  } else if (k === "c") {
    if (b.x !== undefined && b.y !== undefined) { e.x = num(b.x, 0, 1); e.y = Math.round(num(b.y, 0, 100000)); }
    e.w = w; e.h = num(b.h, 100, 100000);
    let hr = str(b.hr, 120);
    if (hr && /^(tel|mailto|sms):/i.test(hr)) hr = hr.split(":")[0].toLowerCase() + ":"; // nunca o número/e-mail
    if (hr && hr[0] === "/") hr = hr.split(/[?#]/)[0];
    e.hr = hr;
    e.tg = typeof b.tg === "string" && /^[a-z]{1,10}$/.test(b.tg) ? b.tg : undefined;
    e.el = str(b.el, 50);
    if (e.el && /@|\d{6,}/.test(e.el)) e.el = undefined; // parece dado pessoal: descarta
    e.cta = tipoCta(hr, e.tg);
  } else if (k === "f") {
    e.f = str(b.f, 40) || "form";
    if (/@|\d{6,}/.test(e.f)) e.f = "form";
  } else if (k === "l") {
    e.sd = Math.round(num(b.sd, 0, 100) || 0);
    e.et = Math.round(num(b.et, 0, 3600000) || 0);
  }
  for (const x in e) if (e[x] === undefined) delete e[x];
  return e;
}

async function collect(req, res, cfg) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Robots-Tag", "noindex");
  if (req.method !== "POST") return end(res, 405);
  const host = hostDe(req);
  const origin = req.headers.origin;
  if (origin) { try { if (new URL(origin).hostname.toLowerCase() !== host) return end(res, 403); } catch (e) { return end(res, 403); } }
  else if (req.headers["sec-fetch-site"] && !["same-origin", "none"].includes(req.headers["sec-fetch-site"])) return end(res, 403);
  const ua = String(req.headers["user-agent"] || "").slice(0, 400);
  if (!ua || BOT.test(ua)) return end(res, 204);
  let raw;
  try { raw = await readBody(req, 2048); } catch (e) { return end(res, 413); }
  let b;
  try { b = typeof raw === "object" ? raw : JSON.parse(raw); } catch (e) { return end(res, 400); }
  const ev = limparEvento(b, host, ua);
  if (!ev) return end(res, 400);
  if (!temBanco()) return end(res, 204);
  try {
    const d = dia(ev.t, cfg.tz);
    const v = sha((await sal(d)) + "|" + cfg.site + "|" + ipDe(req) + "|" + ua).slice(0, 12); // IP só na memória, nunca gravado
    if (!rlLocal(v)) return end(res, 429);
    ev.v = v;
    if (ev.k === "pv") {
      const pais = String(req.headers["x-vercel-ip-country"] || "").toUpperCase();
      if (/^[A-Z]{2}$/.test(pais)) ev.c = pais;
      let cid = String(req.headers["x-vercel-ip-city"] || "");
      try { cid = decodeURIComponent(cid); } catch (e) { /* ok */ }
      cid = str(cid, 40); if (cid) ev.ci = cid;
    }
    const rk = `a:rl:${v}:${Math.floor(ev.t / 600000)}`;
    const r1 = await pipe([["INCR", rk], ["EXPIRE", rk, "700"]]);
    if (r1 && r1[0] > RL_MAX) return end(res, 429);
    const key = `a:${cfg.site}:e:${d}`;
    await pipe([["RPUSH", key, JSON.stringify(ev)], ["EXPIRE", key, String(TTL)]]);
    return end(res, 204);
  } catch (e) {
    console.error("analytics collect", e.message);
    return end(res, 204);
  }
}

/* ---------- login ---------- */
function senha() { return process.env.ANALYTICS_ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || ""; }
function chave(cfg) { return crypto.createHmac("sha256", "analytics-sessao|" + (process.env.ADMIN_SESSION_SECRET || "")).update(cfg.site + "|" + senha()).digest(); }
function assinar(cfg, exp) { return exp + "." + crypto.createHmac("sha256", chave(cfg)).update(String(exp)).digest("base64url"); }
function cookies(req) {
  const o = {};
  String(req.headers.cookie || "").split(";").forEach((p) => { const i = p.indexOf("="); if (i > 0) o[p.slice(0, i).trim()] = p.slice(i + 1).trim(); });
  return o;
}
function authOk(req, cfg) {
  if (!senha()) return false;
  const c = cookies(req).adm_analytics || "";
  const exp = +c.split(".")[0];
  if (!exp || exp < Date.now()) return false;
  const a = Buffer.from(c), b = Buffer.from(assinar(cfg, exp));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
const TENT = new Map();
async function login(req, res, cfg) {
  const ip = ipDe(req), j = Math.floor(Date.now() / 900000);
  const t = TENT.get(ip); const n = t && t.j === j ? ++t.n : (TENT.set(ip, { j, n: 1 }), 1);
  let remoto = 0;
  try { const r = await pipe([["INCR", `a:login:${sha(ip).slice(0, 16)}:${j}`], ["EXPIRE", `a:login:${sha(ip).slice(0, 16)}:${j}`, "960"]]); remoto = r ? r[0] : 0; } catch (e) { /* segue com o limite local */ }
  if (n > 10 || remoto > 10) return redirecionar(res, cfg.base + "?erro=limite");
  let raw = "";
  try { raw = await readBody(req, 2048); } catch (e) { return end(res, 413); }
  const s = String((typeof raw === "string" ? new URLSearchParams(raw).get("senha") : raw && raw.senha) || "");
  const certa = senha();
  const ok = !!certa && crypto.timingSafeEqual(Buffer.from(sha(s), "hex"), Buffer.from(sha(certa), "hex"));
  if (!ok) { await new Promise((r) => setTimeout(r, 600)); return redirecionar(res, cfg.base + "?erro=senha"); }
  const exp = Date.now() + 12 * 3600 * 1000;
  const seguro = hostDe(req) === "localhost" || hostDe(req) === "127.0.0.1" ? "" : "; Secure";
  res.setHeader("Set-Cookie", `adm_analytics=${assinar(cfg, exp)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=43200${seguro}`);
  return redirecionar(res, cfg.base);
}
function redirecionar(res, to) { res.statusCode = 303; res.setHeader("Location", to); res.end(); }

/* ---------- leitura e agregação ---------- */
function dias(de, ate) {
  const out = []; let t = Date.parse(de + "T12:00:00Z"); const fim = Date.parse(ate + "T12:00:00Z");
  while (t <= fim && out.length < 400) { out.push(new Date(t).toISOString().slice(0, 10)); t += 864e5; }
  return out;
}
async function lerEventos(cfg, de, ate) {
  const ds = dias(de, ate), evs = [];
  for (let i = 0; i < ds.length; i += 31) {
    const bloco = ds.slice(i, i + 31);
    const lens = (await pipe(bloco.map((d) => ["LLEN", `a:${cfg.site}:e:${d}`]))) || [];
    const cmds = [];
    bloco.forEach((d, j) => { for (let s = 0; s < (lens[j] || 0); s += 5000) cmds.push(["LRANGE", `a:${cfg.site}:e:${d}`, String(s), String(s + 4999)]); });
    for (let c = 0; c < cmds.length; c += 20) {
      const r = (await pipe(cmds.slice(c, c + 20))) || [];
      r.forEach((l) => (l || []).forEach((x) => { try { evs.push(JSON.parse(x)); } catch (e) { /* linha ruim */ } }));
    }
  }
  return evs;
}
const conta = (m, k, n = 1) => { if (k !== undefined && k !== null && k !== "") m[k] = (m[k] || 0) + n; };
const top = (m, n = 20) => Object.entries(m).sort((a, b) => b[1] - a[1]).slice(0, n);
function agregar(evs, cfg, pagina) {
  evs.sort((a, b) => a.t - b.t);
  // visita = hash do dia (v) + dia
  const vis = new Map(), saidas = new Map(); // por pageview (i): maior rolagem e tempo
  for (const e of evs) {
    if (!e.v) continue;
    const vk = e.v + dia(e.t, cfg.tz);
    let x = vis.get(vk);
    if (!x) { x = { pvs: [], cta: false, form: false, src: null, rh: null, camp: null, d: e.d, b: e.b, o: e.o, c: e.c, ci: e.ci }; vis.set(vk, x); }
    e._vk = vk;
    if (e.k === "pv") { x.pvs.push(e); if (!x.src || x.src === "interno") { if (e.src && e.src !== "interno") { x.src = e.src; x.rh = e.rh; x.camp = e.us ? [e.us, e.um || "", e.uc || ""].join(" / ") : null; } else if (!x.src) x.src = e.src; } if (e.b) { x.b = e.b; x.o = e.o; } if (e.c) { x.c = e.c; x.ci = e.ci; } }
    if (e.k === "l" && e.i) { const s = saidas.get(e.i) || { sd: 0, et: 0 }; s.sd = Math.max(s.sd, e.sd || 0); s.et = Math.max(s.et, e.et || 0); saidas.set(e.i, s); }
  }
  const P = {}; const pg = (p) => (P[p] = P[p] || { pagina: p, views: 0, visitas: new Set(), entradas: 0, saidas: 0, tempo: 0, nt: 0, rol: 0, nr: 0, cta: 0, ctaVis: new Set(), forms: 0, formVis: new Set() });
  for (const [vk, x] of vis) {
    if (x.pvs.length) { pg(x.pvs[0].p).entradas++; pg(x.pvs[x.pvs.length - 1].p).saidas++; }
  }
  const T = { visitas: new Set(), views: 0, cta: 0, ctaVis: new Set(), forms: 0, formVis: new Set(), tempo: 0, nt: 0, rol: 0, nr: 0 };
  const diario = {}, ctas = {}, ctaEl = {}, forms = {}, origens = {}, refs = {}, camps = {}, aparelhos = {}, navs = {}, sos = {}, paises = {}, cidades = {};
  const dd = (d) => (diario[d] = diario[d] || { dia: d, visitas: new Set(), views: 0, cta: 0, forms: 0 });
  for (const e of evs) {
    const p = pg(e.p);
    const d = dia(e.t, cfg.tz);
    if (pagina && e.p !== pagina) continue;
    if (e.k === "pv") {
      p.views++; p.visitas.add(e._vk); T.views++; T.visitas.add(e._vk); dd(d).views++; dd(d).visitas.add(e._vk);
      const s = e.i && saidas.get(e.i);
      if (s) { if (s.et > 0) { p.tempo += s.et; p.nt++; T.tempo += s.et; T.nt++; } p.rol += s.sd; p.nr++; T.rol += s.sd; T.nr++; }
    } else if (e.k === "c" && e.cta) {
      p.cta++; p.ctaVis.add(e._vk); T.cta++; T.ctaVis.add(e._vk); dd(d).cta++;
      conta(ctas, e.cta); conta(ctaEl, [e.cta, e.el || e.hr || "", e.p].join("\u0001"));
      if (e._vk && vis.get(e._vk)) vis.get(e._vk).cta = true;
    } else if (e.k === "f") {
      p.forms++; p.formVis.add(e._vk); T.forms++; T.formVis.add(e._vk); dd(d).forms++;
      conta(forms, [e.f, e.p].join("\u0001"));
      if (e._vk && vis.get(e._vk)) vis.get(e._vk).form = true;
    }
  }
  for (const vk of T.visitas) {
    const x = vis.get(vk); if (!x) continue;
    conta(origens, x.src || "direto"); conta(refs, x.rh); conta(camps, x.camp); conta(aparelhos, x.d); conta(navs, x.b); conta(sos, x.o); conta(paises, x.c); conta(cidades, x.ci ? x.ci + (x.c ? " (" + x.c + ")" : "") : null);
  }
  const media = (s, n) => (n ? Math.round(s / n) : 0);
  const paginas = Object.values(P).filter((p) => p.views || p.cta || p.forms).map((p) => ({
    pagina: p.pagina, views: p.views, visitas: p.visitas.size, entradas: p.entradas, saidas: p.saidas,
    tempo_ms: media(p.tempo, p.nt), rolagem: media(p.rol, p.nr), cta: p.cta, cta_visitas: p.ctaVis.size, forms: p.forms, form_visitas: p.formVis.size,
    conversao: p.visitas.size ? Math.round((p.formVis.size / p.visitas.size) * 1000) / 10 : 0,
  })).sort((a, b) => b.views - a.views);
  return {
    total: { visitas: T.visitas.size, views: T.views, cta: T.cta, cta_visitas: T.ctaVis.size, forms: T.forms, form_visitas: T.formVis.size, tempo_ms: media(T.tempo, T.nt), rolagem: media(T.rol, T.nr) },
    diario: Object.values(diario).sort((a, b) => (a.dia < b.dia ? -1 : 1)).map((x) => ({ dia: x.dia, visitas: x.visitas.size, views: x.views, cta: x.cta, forms: x.forms })),
    paginas, ctas: top(ctas), cta_elementos: top(ctaEl, 30).map(([k, n]) => [...k.split("\u0001"), n]), forms: top(forms).map(([k, n]) => [...k.split("\u0001"), n]),
    origens: top(origens), refs: top(refs), campanhas: top(camps), aparelhos: top(aparelhos), navegadores: top(navs), sistemas: top(sos), paises: top(paises), cidades: top(cidades),
    todas_paginas: [...new Set(evs.filter((e) => e.k === "pv").map((e) => e.p))].sort(),
  };
}
function heat(evs, pagina, dev) {
  const ok = (e) => e.p === pagina && (dev === "m" ? e.d === "m" : e.d !== "m");
  const cliques = [], hs = [], pvIds = new Set(), sds = new Map();
  for (const e of evs) {
    if (!ok(e)) continue;
    if (e.k === "c" && e.x !== undefined && cliques.length < 20000) cliques.push([e.x, e.y, e.cta ? 1 : 0]);
    if (e.k === "pv") { if (e.i) pvIds.add(e.i); if (e.h) hs.push(e.h); }
    if (e.k === "l" && e.i) sds.set(e.i, Math.max(sds.get(e.i) || 0, e.sd || 0));
  }
  // histograma: quantos pageviews chegaram a cada 5% da página
  const chegou = new Array(21).fill(0); let n = 0;
  for (const id of pvIds) { const s = sds.has(id) ? sds.get(id) : null; if (s === null) continue; n++; for (let b = 0; b <= 20; b++) if (s >= b * 5) chegou[b]++; }
  hs.sort((a, b) => a - b);
  return { cliques, rolagem: { n, chegou }, altura_mediana: hs.length ? hs[Math.floor(hs.length / 2)] : 0, views: pvIds.size };
}
function csvLinha(a) { return a.map((x) => { x = x === undefined || x === null ? "" : String(x); return /[",;\n]/.test(x) ? '"' + x.replace(/"/g, '""') + '"' : x; }).join(","); }
const NOME_ORIGEM = { direto: "Direto", busca: "Busca", ia: "IA (ChatGPT, Perplexity...)", social: "Rede social", campanha: "Campanha (UTM)", anuncio: "Anúncio", site: "Outro site", interno: "Interno" };

async function admin(req, res, cfg) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  res.setHeader("Referrer-Policy", "no-referrer");
  const q = req.query || Object.fromEntries(new URL(req.url, "http://x").searchParams);
  const op = String(q.op || "page");
  cfg = { base: "/admin/analytics", ...cfg };
  if (op === "login" && req.method === "POST") return login(req, res, cfg);
  if (op === "sair") { res.setHeader("Set-Cookie", "adm_analytics=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0"); return redirecionar(res, cfg.base); }
  const nonce = crypto.randomBytes(12).toString("base64");
  if (op === "page") {
    res.setHeader("Content-Security-Policy", `default-src 'self'; script-src 'nonce-${nonce}'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; frame-src 'self'; connect-src 'self'; frame-ancestors 'none'; form-action 'self'; base-uri 'none'`);
    res.setHeader("X-Frame-Options", "DENY");
    if (!authOk(req, cfg)) return end(res, senha() ? 200 : 503, UI.login({ nonce, cfg, erro: q.erro, semSenha: !senha() }), "text/html; charset=utf-8");
    return end(res, 200, UI.painel({ nonce, cfg, banco: temBanco() }), "text/html; charset=utf-8");
  }
  if (!authOk(req, cfg)) return end(res, 401, { erro: "login" });
  if (!temBanco()) return end(res, 503, { erro: "banco" });
  const hoje = dia(Date.now(), cfg.tz);
  const re = /^\d{4}-\d{2}-\d{2}$/;
  const ate = re.test(q.ate) ? q.ate : hoje;
  const de = re.test(q.de) ? q.de : dia(Date.now() - 29 * 864e5, cfg.tz);
  if (de > ate) return end(res, 400, { erro: "periodo" });
  const pagina = typeof q.pagina === "string" && q.pagina[0] === "/" ? q.pagina.slice(0, 200) : "";
  try {
    const evs = await lerEventos(cfg, de, ate);
    if (op === "dados") return end(res, 200, { de, ate, pagina, ...agregar(evs, cfg, pagina) });
    if (op === "heat") return end(res, 200, heat(evs, pagina || "/", q.dev === "m" ? "m" : "d"));
    if (op === "csv") {
      let linhas;
      if (q.tipo === "paginas") {
        const a = agregar(evs, cfg, pagina);
        linhas = [csvLinha(["pagina", "visualizacoes", "visitas", "entradas", "saidas", "tempo_medio_s", "rolagem_media_pct", "cliques_cta", "formularios", "conversao_pct"])]
          .concat(a.paginas.map((p) => csvLinha([p.pagina, p.views, p.visitas, p.entradas, p.saidas, Math.round(p.tempo_ms / 1000), p.rolagem, p.cta, p.forms, p.conversao])));
      } else {
        linhas = [csvLinha(["dia", "hora", "evento", "pagina", "visita_anonima", "aparelho", "navegador", "sistema", "pais", "cidade", "origem", "site_de_origem", "utm_source", "utm_medium", "utm_campaign", "cta", "elemento", "link", "formulario", "rolagem_pct", "tempo_s", "x_pct", "y_px"])]
          .concat(evs.filter((e) => !pagina || e.p === pagina).map((e) => csvLinha([dia(e.t, cfg.tz), hora(e.t, cfg.tz), { pv: "visualizacao", c: "clique", f: "formulario", l: "saida" }[e.k], e.p, e.v, { m: "celular", t: "tablet", d: "computador" }[e.d], e.b, e.o, e.c, e.ci, e.src ? NOME_ORIGEM[e.src] || e.src : "", e.rh, e.us, e.um, e.uc, e.cta, e.el, e.hr, e.f, e.sd, e.et !== undefined ? Math.round(e.et / 1000) : "", e.x !== undefined ? Math.round(e.x * 1000) / 10 : "", e.y])));
      }
      res.setHeader("Content-Disposition", `attachment; filename="analytics-${cfg.site}-${q.tipo === "paginas" ? "paginas" : "eventos"}-${de}_${ate}.csv"`);
      return end(res, 200, "﻿" + linhas.join("\n"), "text/csv; charset=utf-8");
    }
    return end(res, 400, { erro: "op" });
  } catch (e) {
    console.error("analytics admin", e.message);
    return end(res, 500, { erro: "leitura" });
  }
}

module.exports = { collect, admin, _t: { limparEvento, limparCaminho, origem, tipoCta, agregar, heat, memPipe } };
