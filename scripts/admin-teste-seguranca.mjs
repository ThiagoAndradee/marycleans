#!/usr/bin/env node
/* Teste de segurança do /admin (CRM). Roda contra um servidor local ou um preview.
     node scripts/admin-teste-seguranca.mjs http://localhost:4590
   Com usuário de teste (opcional, para os testes depois do login), em variáveis de ambiente:
     ADMIN_TESTE_EMAIL, ADMIN_TESTE_SENHA, ADMIN_TESTE_TOTP (segredo base32)
   Atenção: o teste faz várias tentativas de login erradas de propósito. Depois dele, o IP fica bloqueado
   por 15 minutos no login (é o limite funcionando). Não imprime senha, código nem cookie. */
import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";
const require = createRequire(import.meta.url);
const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const totp = require(path.join(raiz, "lib/admin/totp.js"));

const BASE = (process.argv[2] || "http://localhost:4590").replace(/\/$/, "");
const ORIGEM = new URL(BASE).origin;
const E = process.env.ADMIN_TESTE_EMAIL, SENHA = process.env.ADMIN_TESTE_SENHA, SEG = process.env.ADMIN_TESTE_TOTP;
const res = [];
const ok = (nome, cond, info) => { res.push({ nome, ok: !!cond }); console.log(`${cond ? "PASSOU" : "FALHOU"}  ${nome}${info && !cond ? "  (" + info + ")" : ""}`); };
const vb = (extra) => ({ "Content-Type": "application/json", Origin: ORIGEM, "Sec-Fetch-Site": "same-origin", ...(extra || {}) });
const req = (p, o = {}) => fetch(BASE + p, { redirect: "manual", ...o });
const j = async (r) => { try { return await r.json(); } catch { return {}; } };

// 1. A página do admin não tem dado nenhum e manda os cabeçalhos certos
{
  const r = await fetch(BASE + "/admin/", { redirect: "follow" }); // Next.js manda /admin/ para /admin
  const html = await r.text();
  ok("/admin/ responde sem dados pessoais no HTML", r.status === 200 && !/@[a-z0-9-]+\.[a-z]/i.test(html.replace(/<meta[^>]*>/g, "")), r.status);
  const csp = r.headers.get("content-security-policy") || "";
  ok("/admin/ tem CSP sem 'unsafe-inline' e frame-ancestors 'none'", csp.includes("frame-ancestors 'none'") && !csp.includes("unsafe-inline"), csp);
  ok("/admin/ tem X-Frame-Options DENY", (r.headers.get("x-frame-options") || "").toUpperCase() === "DENY");
  ok("/admin/ tem noindex", /noindex/.test(r.headers.get("x-robots-tag") || "") || /noindex/.test(html));
  if (BASE.startsWith("https")) ok("HSTS ligado", /max-age=\d{6,}/.test(r.headers.get("strict-transport-security") || ""));
}
// 2. Sem login: nada de dados
for (const op of ["leads", "lead&id=x", "metricas", "acessos", "exportar&formato=json", "exportar&formato=csv", "config"]) {
  const r = await req(`/api/admin-crm?op=${op}`);
  ok(`sem login: GET op=${op.split("&")[0]} dá 401`, r.status === 401, r.status);
}
{
  const r = await req("/api/admin-crm?op=criar", { method: "POST", headers: vb(), body: JSON.stringify({ empresa: "x" }) });
  ok("sem login: POST criar dá 401", r.status === 401, r.status);
  const f = await req("/api/admin-crm?op=leads", { headers: { Cookie: "__Host-adm=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB" } });
  ok("cookie inventado dá 401", f.status === 401, f.status);
  const inj = await req("/api/admin-crm?op=leads", { headers: { Cookie: "__Host-adm=../../_auth/sessoes/x.json" } });
  ok("cookie com caminho (path traversal) dá 401", inj.status === 401, inj.status);
}
// 3. Login: origem, mensagens genéricas, bloqueio
{
  const r = await req("/api/admin-auth?op=login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: "a@b.c", senha: "x", codigo: "123456" }) });
  ok("login sem Origin/Sec-Fetch-Site dá 403", r.status === 403, r.status);
  const r2 = await req("/api/admin-auth?op=login", { method: "POST", headers: vb({ Origin: "https://evil.example", "Sec-Fetch-Site": "cross-site" }), body: "{}" });
  ok("login vindo de outro site dá 403", r2.status === 403, r2.status);
  const r3 = await req("/api/admin-auth?op=login", { method: "POST", headers: vb(), body: JSON.stringify({ email: "' OR 1=1 --", senha: { $ne: 1 }, codigo: "000000" }) });
  ok("login com injeção (SQL/NoSQL) não entra", r3.status !== 200, r3.status);
}
let cookie = null, csrf = null;
if (E && SENHA && SEG) {
  const cod = totp.codigo(SEG, Math.floor(Date.now() / 30000));
  const r = await req("/api/admin-auth?op=login", { method: "POST", headers: vb(), body: JSON.stringify({ email: E, senha: SENHA, codigo: cod }) });
  const sc = r.headers.get("set-cookie") || "";
  ok("login certo entra", r.status === 200, r.status);
  ok("cookie HttpOnly; Secure; SameSite=Strict; __Host-", /HttpOnly/i.test(sc) && /Secure/i.test(sc) && /SameSite=Strict/i.test(sc) && sc.startsWith("__Host-"), sc.replace(/=.*?;/, "=***;"));
  cookie = sc.split(";")[0]; csrf = (await j(r)).csrf;
  const re = await req("/api/admin-auth?op=login", { method: "POST", headers: vb(), body: JSON.stringify({ email: E, senha: SENHA, codigo: cod }) });
  ok("o mesmo código de 6 dígitos não vale duas vezes", re.status !== 200, re.status);
  const semCod = await req("/api/admin-auth?op=login", { method: "POST", headers: vb(), body: JSON.stringify({ email: E, senha: SENHA, codigo: "" }) });
  ok("senha certa sem código não entra", semCod.status !== 200, semCod.status);
}
// 4. Depois do login: CSRF, injeção, IDOR
if (cookie) {
  const H = (x) => ({ Cookie: cookie, ...(x || {}) });
  const g = await req("/api/admin-crm?op=leads", { headers: H() });
  ok("com login: lista de leads abre", g.status === 200, g.status);
  const sem = await req("/api/admin-crm?op=criar", { method: "POST", headers: H(vb()), body: JSON.stringify({ empresa: "CSRF" }) });
  ok("POST sem X-CSRF-Token dá 403", sem.status === 403, sem.status);
  const outro = await req("/api/admin-crm?op=criar", { method: "POST", headers: H(vb({ Origin: "https://evil.example", "Sec-Fetch-Site": "cross-site", "X-CSRF-Token": csrf })), body: JSON.stringify({ empresa: "CSRF" }) });
  ok("POST de outro site (mesmo com token) dá 403", outro.status === 403, outro.status);
  const XSS = `<img src=x onerror=alert(1)>"><script>alert(2)</script>`;
  const c = await req("/api/admin-crm?op=criar", { method: "POST", headers: H(vb({ "X-CSRF-Token": csrf })), body: JSON.stringify({ empresa: "TESTE-SEGURANCA " + XSS, email: "=HYPERLINK(\"http://evil\")", telefone: "=1+1", etapa: "recorrente", id: "../../x" }).replace(/}$/, ',"__proto__":{"admin":true},"constructor":{"prototype":{"admin":true}}}') });
  const cj = await j(c); const lead = cj.lead || {};
  ok("criar lead com HTML guarda como texto (a UI usa textContent)", c.status === 200 && lead.empresa && lead.empresa.includes("<img"), c.status);
  ok("campos fora da lista são ignorados (etapa, id, __proto__)", lead.etapa === "novo" && lead.id && lead.id !== "../../x" && !("admin" in lead));
  ok("e-mail inválido é descartado", lead.email === "");
  const csv = await (await req("/api/admin-crm?op=exportar&formato=csv", { headers: H({ "Sec-Fetch-Site": "same-origin" }) })).text();
  ok("CSV exportado neutraliza fórmula (=, +, -, @)", csv.includes("'=1+1") && !/,=1\+1/.test(csv));
  const idor = await req("/api/admin-crm?op=lead&id=L" + "A".repeat(12), { headers: H() });
  ok("lead com id adivinhado dá 404", idor.status === 404, idor.status);
  const trav = await req("/api/admin-crm?op=lead&id=" + encodeURIComponent("../../_auth/sessoes"), { headers: H() });
  ok("id com caminho dá 404", trav.status === 404, trav.status);
  const etapaRuim = await req("/api/admin-crm?op=etapa", { method: "POST", headers: H(vb({ "X-CSRF-Token": csrf })), body: JSON.stringify({ id: lead.id, etapa: "admin" }) });
  ok("etapa que não existe dá 400", etapaRuim.status === 400, etapaRuim.status);
  const grande = await req("/api/admin-crm?op=nota", { method: "POST", headers: H(vb({ "X-CSRF-Token": csrf })), body: JSON.stringify({ id: lead.id, texto: "x".repeat(200000) }) });
  ok("corpo grande demais dá 413", grande.status === 413, grande.status);
  await req("/api/admin-crm?op=arquivar", { method: "POST", headers: H(vb({ "X-CSRF-Token": csrf })), body: JSON.stringify({ id: lead.id }) });
  const out = await req("/api/admin-auth?op=logout", { method: "POST", headers: H(vb({ "X-CSRF-Token": csrf })), body: "{}" });
  ok("logout", out.status === 200, out.status);
  const dep = await req("/api/admin-crm?op=leads", { headers: H() });
  ok("cookie antigo não vale depois do logout", dep.status === 401, dep.status);
}
// 5. Formulário público do site (/api/lead), se existir
{
  const r0 = await req("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ nome: "x" }) });
  if (r0.status !== 404) {
    ok("/api/lead sem Origin dá 403 (ou 202 sem CRM ligado)", [403, 202].includes(r0.status), r0.status);
    const big = await req("/api/lead", { method: "POST", headers: vb(), body: JSON.stringify({ mensagem: "x".repeat(40000) }) });
    ok("/api/lead com corpo grande dá 413 (ou 202 sem CRM ligado)", [413, 202].includes(big.status), big.status);
    const g = await req("/api/lead");
    ok("/api/lead não aceita GET", g.status === 405, g.status);
  }
}
// 6. Força bruta: e-mail bloqueia depois de 5 erros e o IP depois de 10 tentativas
{
  let ultimo = 0;
  for (let i = 0; i < 6; i++) ultimo = (await req("/api/admin-auth?op=login", { method: "POST", headers: vb(), body: JSON.stringify({ email: "forca-bruta@exemplo.test", senha: "errada" + i, codigo: "123456" }) })).status;
  ok("5 erros no mesmo e-mail bloqueiam (429)", ultimo === 429, ultimo);
  for (let i = 0; i < 8; i++) ultimo = (await req("/api/admin-auth?op=login", { method: "POST", headers: vb(), body: JSON.stringify({ email: `x${i}@exemplo.test`, senha: "x", codigo: "123456" }) })).status;
  ok("muitas tentativas do mesmo IP bloqueiam (429)", ultimo === 429, ultimo);
}
const f = res.filter((x) => !x.ok).length;
console.log(`\n${res.length - f} de ${res.length} passaram${f ? `, ${f} falharam` : ""}.`);
process.exit(f ? 1 : 0);
