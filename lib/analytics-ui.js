/* Telas do /admin/analytics: login e painel (HTML único, sem biblioteca externa). Textos em pt-BR ou de (cfg.lang). */
"use strict";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const CSS = `
:root{--bg:#0d0f14;--card:#161a22;--card2:#1d222c;--line:#2a303c;--tx:#e9ecf2;--mut:#9aa3b2;--ac:#7c9cff;--ac2:#4fd1a5;--warn:#ffb547;--bad:#ff6b6b;color-scheme:dark}
*{box-sizing:border-box}html,body{margin:0;background:var(--bg);color:var(--tx);font:14px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
a{color:var(--ac)}button,select,input{font:inherit;color:var(--tx);background:var(--card2);border:1px solid var(--line);border-radius:8px;padding:7px 10px}
button{cursor:pointer}button:hover{border-color:var(--ac)}button[aria-pressed=true]{background:var(--ac);color:#0d0f14;border-color:var(--ac);font-weight:600}
.wrap{max-width:1320px;margin:0 auto;padding:16px}
header.top{display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--line);position:sticky;top:0;background:rgba(13,15,20,.94);backdrop-filter:blur(8px);z-index:5}
header.top h1{font-size:17px;margin:0}header.top h1 small{color:var(--mut);font-weight:400}
.ctrl{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));margin-top:14px}
.kpis{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-top:14px}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;min-width:0}
.card h2{font-size:15px;margin:0 0 4px}.card p.sub{color:var(--mut);margin:0 0 12px;font-size:13px}
.kpi b{display:block;font-size:26px;font-weight:700;letter-spacing:-.02em}.kpi span{color:var(--mut);font-size:13px}
.bars{display:flex;flex-direction:column;gap:7px}.bar{display:grid;grid-template-columns:minmax(90px,38%) 1fr 52px;gap:8px;align-items:center;font-size:13px}
.bar .t{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bar .f{height:10px;border-radius:5px;background:var(--card2);overflow:hidden}.bar .f i{display:block;height:100%;background:var(--ac);border-radius:5px}
.bar .n{text-align:right;font-variant-numeric:tabular-nums;color:var(--mut)}
table{width:100%;border-collapse:collapse;font-size:13px}th,td{padding:7px 8px;border-bottom:1px solid var(--line);text-align:right;white-space:nowrap}th:first-child,td:first-child{text-align:left}
th{color:var(--mut);font-weight:500;position:sticky;top:0;background:var(--card)}tbody tr{cursor:pointer}tbody tr:hover{background:var(--card2)}
.tbl{overflow:auto;max-height:460px}
.empty{color:var(--mut);padding:10px 0}
.aviso{background:#3a2a10;border:1px solid var(--warn);color:#ffe2b0;border-radius:12px;padding:12px 14px;margin-top:14px}
.funil{display:flex;flex-direction:column;gap:10px}.funil .s{display:grid;grid-template-columns:1fr auto;gap:4px}.funil .s .f{grid-column:1/3;height:26px;background:var(--card2);border-radius:7px;overflow:hidden}
.funil .s .f i{display:block;height:100%;background:linear-gradient(90deg,var(--ac),var(--ac2))}
svg.chart{width:100%;height:180px;display:block}svg.chart text{fill:var(--mut);font-size:11px}
.legend{display:flex;gap:14px;color:var(--mut);font-size:12px;margin-top:6px}.legend i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:5px;vertical-align:-1px}
.stage{position:relative;margin-top:12px;background:#fff;border-radius:10px;overflow:hidden;border:1px solid var(--line)}
.stage iframe{border:0;display:block;transform-origin:0 0;background:#fff}.stage canvas{position:absolute;left:0;top:0;pointer-events:none;transform-origin:0 0}
.heatbar{height:10px;border-radius:5px;background:linear-gradient(90deg,rgba(0,0,255,.2),#00f,#0ff,#0f0,#ff0,#f00);width:180px}
.muted{color:var(--mut)}.row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
@media (max-width:640px){.wrap{padding:10px}header.top{position:static}.kpi b{font-size:22px}}
`;

const T = {
  pt: {
    titulo: "Analytics", entrar: "Entrar", senha: "Senha", errSenha: "Senha errada.", errLimite: "Muitas tentativas. Espere 15 minutos.",
    semSenha: "Falta configurar a senha (ANALYTICS_ADMIN_PASSWORD) neste site.", loginSub: "Área interna. Os dados são anônimos: sem cookies de visitante e sem IP guardado.",
  },
  de: {
    titulo: "Analytics", entrar: "Anmelden", senha: "Passwort", errSenha: "Falsches Passwort.", errLimite: "Zu viele Versuche. Bitte 15 Minuten warten.",
    semSenha: "Das Passwort (ANALYTICS_ADMIN_PASSWORD) ist für diese Seite noch nicht eingerichtet.", loginSub: "Interner Bereich. Die Daten sind anonym: keine Besucher-Cookies, keine gespeicherten IP-Adressen.",
  },
};

function shell({ nonce, cfg, body, script }) {
  const L = cfg.lang === "de" ? "de" : "pt-BR";
  return `<!doctype html><html lang="${L}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow">
<title>${esc(cfg.name)} · Analytics</title><style>${CSS}</style></head><body>${body}${script ? `<script nonce="${nonce}">${script}</script>` : ""}</body></html>`;
}

function login({ nonce, cfg, erro, semSenha }) {
  const t = T[cfg.lang === "de" ? "de" : "pt"];
  const msg = semSenha ? t.semSenha : erro === "senha" ? t.errSenha : erro === "limite" ? t.errLimite : "";
  return shell({ nonce, cfg, body: `<main class="wrap" style="max-width:420px;padding-top:12vh">
<div class="card"><h2 style="font-size:20px">${esc(cfg.name)} · ${t.titulo}</h2><p class="sub">${t.loginSub}</p>
${msg ? `<p class="aviso" role="alert" style="margin:0 0 12px">${esc(msg)}</p>` : ""}
<form method="post" action="/api/analytics?op=login" class="row" style="flex-direction:column;align-items:stretch">
<label for="s">${t.senha}</label><input id="s" name="senha" type="password" autocomplete="current-password" required ${semSenha ? "disabled" : "autofocus"}>
<button type="submit" ${semSenha ? "disabled" : ""}>${t.entrar}</button></form></div></main>` });
}

/* ---- script do painel (roda no navegador; vem de toString) ---- */
function cliente(CFG) {
  const DE = CFG.lang === "de";
  const L = DE ? {
    periodo: "Zeitraum", hoje: "Heute", d7: "7 Tage", d30: "30 Tage", d90: "90 Tage", m12: "12 Monate", de: "von", ate: "bis", todas: "Alle Seiten", pagina: "Seite",
    csvE: "CSV Ereignisse", csvP: "CSV Seiten", sair: "Abmelden", visitas: "Besuche", views: "Seitenaufrufe", cta: "CTA-Klicks", forms: "Formulare gesendet", tempo: "Ø Zeit auf der Seite", rol: "Ø Scrolltiefe",
    diario: "Verlauf pro Tag", mapa: "Ereignis-Karte", mapaSub: "Klicks auf Handlungsaufrufe und gesendete Formulare", funil: "Trichter", funilSub: "Besuche, die bis zum jeweiligen Schritt kamen",
    paginas: "Seiten", paginasSub: "Klick auf eine Zeile filtert alles nach dieser Seite", entradas: "Einstiege", saidas: "Ausstiege", conv: "Konversion",
    origem: "Herkunft", sitesOrigem: "Verweisende Seiten", campanhas: "Kampagnen (UTM)", aparelhos: "Geräte", navegadores: "Browser", sistemas: "Systeme", paises: "Länder", cidades: "Städte (ungefähr)",
    heat: "Heatmap", heatSub: "Klicks und Scrolltiefe direkt über der Seite. Position ist ungefähr (je nach Bildschirmbreite).", desktop: "Computer", mobile: "Handy", cliques: "Klicks", rolagem: "Scrollen",
    poucos: "wenig", muitos: "viel", nada: "Noch keine Daten in diesem Zeitraum.", semBanco: "Die Datenbank ist noch nicht verbunden (Upstash Redis über den Vercel Marketplace). Bis dahin werden keine Ereignisse gespeichert.",
    elementos: "Was angeklickt wurde", formularios: "Formulare", chegam: "erreichen diese Stelle", baseHeat: "Aufrufe", carregando: "Lädt…", erro: "Konnte die Daten nicht laden.",
    passo1: "Besuche", passo2: "mit Klick auf CTA", passo3: "mit gesendetem Formular", sessao: "Sitzung abgelaufen. Bitte neu anmelden.",
    tipos: { whatsapp: "WhatsApp", cotacao: "Angebot / Anfrage", formulario: "Formular absenden (Klick)", telefone: "Telefon", email: "E-Mail" },
    origens: { direto: "Direkt", busca: "Suche", ia: "KI (ChatGPT, Perplexity …)", social: "Soziale Netzwerke", campanha: "Kampagne (UTM)", anuncio: "Anzeige", site: "Andere Website", interno: "Intern" },
    aps: { d: "Computer", t: "Tablet", m: "Handy" },
  } : {
    periodo: "Período", hoje: "Hoje", d7: "7 dias", d30: "30 dias", d90: "90 dias", m12: "12 meses", de: "de", ate: "até", todas: "Todas as páginas", pagina: "Página",
    csvE: "CSV eventos", csvP: "CSV páginas", sair: "Sair", visitas: "Visitas", views: "Visualizações", cta: "Cliques em CTA", forms: "Formulários enviados", tempo: "Tempo médio na página", rol: "Rolagem média",
    diario: "Por dia", mapa: "Mapa de eventos", mapaSub: "Cliques nos botões de ação e formulários enviados", funil: "Funil", funilSub: "Visitas que chegaram a cada passo",
    paginas: "Páginas", paginasSub: "Clique numa linha para filtrar tudo por essa página", entradas: "Entradas", saidas: "Saídas", conv: "Conversão",
    origem: "Origem", sitesOrigem: "Sites de origem", campanhas: "Campanhas (UTM)", aparelhos: "Aparelhos", navegadores: "Navegadores", sistemas: "Sistemas", paises: "Países", cidades: "Cidades (aproximado)",
    heat: "Heatmap", heatSub: "Cliques e rolagem por cima da página. A posição é aproximada (depende da largura da tela).", desktop: "Computador", mobile: "Celular", cliques: "Cliques", rolagem: "Rolagem",
    poucos: "pouco", muitos: "muito", nada: "Ainda sem dados neste período.", semBanco: "O banco ainda não está conectado (Upstash Redis pelo Vercel Marketplace). Até lá, nenhum evento é guardado.",
    elementos: "O que foi clicado", formularios: "Formulários", chegam: "chegam até aqui", baseHeat: "visualizações", carregando: "Carregando…", erro: "Não deu para carregar os dados.",
    passo1: "Visitas", passo2: "clicaram num CTA", passo3: "enviaram formulário", sessao: "A sessão expirou. Entre de novo.",
    tipos: { whatsapp: "WhatsApp", cotacao: "Cotação / orçamento", formulario: "Botão de enviar formulário", telefone: "Telefone", email: "E-mail" },
    origens: { direto: "Direto", busca: "Busca", ia: "IA (ChatGPT, Perplexity...)", social: "Rede social", campanha: "Campanha (UTM)", anuncio: "Anúncio", site: "Outro site", interno: "Interno" },
    aps: { d: "Computador", t: "Tablet", m: "Celular" },
  };
  const $ = (s) => document.querySelector(s);
  const h = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (n) => Number(n || 0).toLocaleString(DE ? "de-DE" : "pt-BR");
  const seg = (ms) => { const s = Math.round((ms || 0) / 1000); return s < 60 ? s + " s" : Math.floor(s / 60) + " min " + (s % 60) + " s"; };
  const iso = (d) => d.toISOString().slice(0, 10);
  const st = { de: iso(new Date(Date.now() - 29 * 864e5)), ate: iso(new Date()), pagina: "", dev: "d", modo: "ambos", dados: null, heat: null };
  try { const s = JSON.parse(sessionStorage.getItem("an_f") || "{}"); Object.assign(st, s); } catch (e) { /* sem storage */ }
  const salvar = () => { try { sessionStorage.setItem("an_f", JSON.stringify({ de: st.de, ate: st.ate, pagina: st.pagina, dev: st.dev, modo: st.modo })); } catch (e) { /* ok */ } };

  document.body.insertAdjacentHTML("afterbegin", `
<header class="top"><h1>${h(CFG.name)} <small>· Analytics</small></h1>
<div class="ctrl" role="group" aria-label="${L.periodo}">
 <button data-p="0">${L.hoje}</button><button data-p="6">${L.d7}</button><button data-p="29">${L.d30}</button><button data-p="89">${L.d90}</button><button data-p="364">${L.m12}</button>
 <label class="muted">${L.de} <input type="date" id="de"></label><label class="muted">${L.ate} <input type="date" id="ate"></label>
 <select id="pag" aria-label="${L.pagina}"><option value="">${L.todas}</option></select>
 <a id="csvE" href="#"><button type="button">${L.csvE}</button></a><a id="csvP" href="#"><button type="button">${L.csvP}</button></a>
 <a href="/api/analytics?op=sair"><button type="button">${L.sair}</button></a>
</div></header>
<main class="wrap">
 ${CFG.banco ? "" : `<div class="aviso" role="status">${L.semBanco}</div>`}
 <div id="erro"></div>
 <section class="kpis" id="kpis" aria-live="polite"></section>
 <section class="card" style="margin-top:14px"><h2>${L.diario}</h2><div id="chart"></div>
  <div class="legend"><span><i style="background:var(--ac)"></i>${L.visitas}</span><span><i style="background:#3b4660"></i>${L.views}</span><span><i style="background:var(--ac2)"></i>${L.forms}</span></div></section>
 <section class="grid">
  <div class="card"><h2>${L.mapa}</h2><p class="sub">${L.mapaSub}</p><div id="ctas"></div><h2 style="margin-top:16px;font-size:14px">${L.elementos}</h2><div id="ctaEl"></div><h2 style="margin-top:16px;font-size:14px">${L.formularios}</h2><div id="forms"></div></div>
  <div class="card"><h2>${L.funil}</h2><p class="sub">${L.funilSub}</p><div id="funil" class="funil"></div></div>
 </section>
 <section class="card" style="margin-top:14px"><h2>${L.paginas}</h2><p class="sub">${L.paginasSub}</p><div class="tbl" id="paginas"></div></section>
 <section class="grid">
  <div class="card"><h2>${L.origem}</h2><div id="origens"></div><h2 style="margin-top:16px;font-size:14px">${L.sitesOrigem}</h2><div id="refs"></div><h2 style="margin-top:16px;font-size:14px">${L.campanhas}</h2><div id="camps"></div></div>
  <div class="card"><h2>${L.aparelhos}</h2><div id="aps"></div><h2 style="margin-top:16px;font-size:14px">${L.navegadores}</h2><div id="navs"></div><h2 style="margin-top:16px;font-size:14px">${L.sistemas}</h2><div id="sos"></div></div>
  <div class="card"><h2>${L.paises}</h2><div id="paises"></div><h2 style="margin-top:16px;font-size:14px">${L.cidades}</h2><div id="cidades"></div></div>
 </section>
 <section class="card" style="margin-top:14px" id="heatbox"><h2>${L.heat}</h2><p class="sub">${L.heatSub}</p>
  <div class="row"><select id="hpag" aria-label="${L.pagina}"></select>
   <span class="ctrl" role="group"><button data-dev="d">${L.desktop}</button><button data-dev="m">${L.mobile}</button></span>
   <span class="ctrl" role="group"><button data-modo="ambos">${L.cliques} + ${L.rolagem}</button><button data-modo="cliques">${L.cliques}</button><button data-modo="rolagem">${L.rolagem}</button></span>
   <span class="row muted"><span>${L.poucos}</span><span class="heatbar"></span><span>${L.muitos}</span></span><span class="muted" id="hinfo"></span></div>
  <div class="stage" id="stage"><iframe id="fr" title="${L.heat}" loading="lazy" sandbox="allow-same-origin allow-scripts"></iframe><canvas id="cv"></canvas></div>
 </section>
</main>`);

  const bars = (el, rows, nomes, cor) => {
    const max = Math.max(1, ...rows.map((r) => r[r.length - 1]));
    $(el).innerHTML = rows.length ? `<div class="bars">${rows.map((r) => { const n = r[r.length - 1], nome = nomes ? nomes[r[0]] || r[0] : r[0]; return `<div class="bar"><span class="t" title="${h(nome)}">${h(nome)}</span><span class="f"><i style="width:${(n / max) * 100}%;${cor ? "background:" + cor : ""}"></i></span><span class="n">${fmt(n)}</span></div>`; }).join("")}</div>` : `<div class="empty">${L.nada}</div>`;
  };
  const api = async (q) => {
    const r = await fetch("/api/analytics?" + new URLSearchParams(q), { credentials: "same-origin" });
    if (r.status === 401) { $("#erro").innerHTML = `<div class="aviso">${L.sessao} <a href="/admin/analytics">${L.sair}</a></div>`; throw new Error("401"); }
    if (!r.ok) throw new Error(r.status);
    return r.json();
  };
  function grafico(dd) {
    if (!dd.length) { $("#chart").innerHTML = `<div class="empty">${L.nada}</div>`; return; }
    const W = 1000, H = 180, pad = 22, n = dd.length, bw = (W - pad) / n, max = Math.max(1, ...dd.map((d) => d.views));
    let s = `<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="${L.diario}">`;
    dd.forEach((d, i) => {
      const x = pad + i * bw, y = (v) => H - 18 - (v / max) * (H - 30);
      s += `<rect x="${x + bw * 0.1}" y="${y(d.views)}" width="${bw * 0.8}" height="${H - 18 - y(d.views)}" fill="#3b4660" rx="2"><title>${d.dia}: ${d.views} ${L.views}, ${d.visitas} ${L.visitas}, ${d.forms} ${L.forms}</title></rect>`;
      s += `<rect x="${x + bw * 0.25}" y="${y(d.visitas)}" width="${bw * 0.5}" height="${H - 18 - y(d.visitas)}" fill="var(--ac)" rx="2"/>`;
      if (d.forms) s += `<circle cx="${x + bw / 2}" cy="${y(d.forms) - 4}" r="4" fill="var(--ac2)"/>`;
      if (n <= 31 ? i % Math.ceil(n / 10) === 0 : i % Math.ceil(n / 12) === 0) s += `<text x="${x + bw / 2}" y="${H - 4}" text-anchor="middle">${d.dia.slice(5)}</text>`;
    });
    s += `<text x="0" y="12">${fmt(max)}</text></svg>`;
    $("#chart").innerHTML = s;
  }
  function render(a) {
    const t = a.total;
    $("#kpis").innerHTML = [[L.visitas, fmt(t.visitas)], [L.views, fmt(t.views)], [L.cta, fmt(t.cta)], [L.forms, fmt(t.forms)], [L.tempo, seg(t.tempo_ms)], [L.rol, t.rolagem + " %"]]
      .map(([k, v]) => `<div class="card kpi"><b>${v}</b><span>${k}</span></div>`).join("");
    grafico(a.diario);
    bars("#ctas", a.ctas, L.tipos);
    $("#ctaEl").innerHTML = a.cta_elementos.length ? `<table><thead><tr><th>${L.cta}</th><th style="text-align:left">${L.elementos}</th><th style="text-align:left">${L.pagina}</th><th>#</th></tr></thead><tbody>${a.cta_elementos.slice(0, 15).map(([ti, el, p, n]) => `<tr data-pg="${h(p)}"><td>${h(L.tipos[ti] || ti)}</td><td style="text-align:left;max-width:220px;overflow:hidden;text-overflow:ellipsis">${h(el)}</td><td style="text-align:left">${h(p)}</td><td>${fmt(n)}</td></tr>`).join("")}</tbody></table>` : `<div class="empty">${L.nada}</div>`;
    bars("#forms", a.forms.map(([f, p, n]) => [f + " · " + p, n]), null, "var(--ac2)");
    const passos = [[L.passo1, t.visitas], [L.passo2, t.cta_visitas], [L.passo3, t.form_visitas]];
    $("#funil").innerHTML = passos.map(([k, v], i) => `<div class="s"><span>${k}</span><b>${fmt(v)}${i ? ` <small class="muted">${t.visitas ? Math.round((v / t.visitas) * 1000) / 10 : 0} %</small>` : ""}</b><span class="f"><i style="width:${t.visitas ? (v / t.visitas) * 100 : 0}%"></i></span></div>`).join("");
    $("#paginas").innerHTML = a.paginas.length ? `<table><thead><tr><th>${L.pagina}</th><th>${L.views}</th><th>${L.visitas}</th><th>${L.entradas}</th><th>${L.saidas}</th><th>${L.tempo}</th><th>${L.rol}</th><th>${L.cta}</th><th>${L.forms}</th><th>${L.conv}</th></tr></thead><tbody>${a.paginas.map((p) => `<tr data-pg="${h(p.pagina)}"><td>${h(p.pagina)}</td><td>${fmt(p.views)}</td><td>${fmt(p.visitas)}</td><td>${fmt(p.entradas)}</td><td>${fmt(p.saidas)}</td><td>${seg(p.tempo_ms)}</td><td>${p.rolagem} %</td><td>${fmt(p.cta)}</td><td>${fmt(p.forms)}</td><td>${p.conversao} %</td></tr>`).join("")}</tbody></table>` : `<div class="empty">${L.nada}</div>`;
    bars("#origens", a.origens, L.origens); bars("#refs", a.refs); bars("#camps", a.campanhas);
    bars("#aps", a.aparelhos, L.aps); bars("#navs", a.navegadores); bars("#sos", a.sistemas); bars("#paises", a.paises); bars("#cidades", a.cidades);
    const opts = (sel, todas) => { const v = sel.value; sel.innerHTML = (todas ? `<option value="">${L.todas}</option>` : "") + [...new Set([...(a.todas_paginas || []), st.pagina].filter(Boolean))].map((p) => `<option>${h(p)}</option>`).join(""); sel.value = v; };
    opts($("#pag"), true); $("#pag").value = st.pagina;
    const hp = $("#hpag"); const antes = hp.value; opts(hp, false); hp.value = st.pagina || antes || (a.paginas[0] && a.paginas[0].pagina) || "/";
    if (!hp.value) hp.innerHTML = `<option>/</option>`;
  }
  async function carregar() {
    salvar();
    $("#de").value = st.de; $("#ate").value = st.ate;
    document.querySelectorAll("[data-p]").forEach((b) => b.setAttribute("aria-pressed", String(st.ate === iso(new Date()) && st.de === iso(new Date(Date.now() - b.dataset.p * 864e5)))));
    const q = { de: st.de, ate: st.ate }; if (st.pagina) q.pagina = st.pagina;
    $("#csvE").href = "/api/analytics?" + new URLSearchParams({ ...q, op: "csv", tipo: "eventos" });
    $("#csvP").href = "/api/analytics?" + new URLSearchParams({ ...q, op: "csv", tipo: "paginas" });
    if (!CFG.banco) { render({ total: { visitas: 0, views: 0, cta: 0, forms: 0, cta_visitas: 0, form_visitas: 0, tempo_ms: 0, rolagem: 0 }, diario: [], paginas: [], ctas: [], cta_elementos: [], forms: [], origens: [], refs: [], campanhas: [], aparelhos: [], navegadores: [], sistemas: [], paises: [], cidades: [], todas_paginas: ["/"] }); carregarHeat(); return; }
    $("#kpis").innerHTML = `<div class="empty">${L.carregando}</div>`;
    try { st.dados = await api({ op: "dados", ...q }); render(st.dados); $("#erro").innerHTML = ""; } catch (e) { if (e.message !== "401") $("#erro").innerHTML = `<div class="aviso">${L.erro}</div>`; }
    carregarHeat();
  }

  /* ---------- heatmap ---------- */
  const fr = $("#fr"), cv = $("#cv"), stage = $("#stage");
  let paleta = null;
  function corPaleta() {
    const c = document.createElement("canvas"); c.width = 256; c.height = 1; const g = c.getContext("2d"); const gr = g.createLinearGradient(0, 0, 256, 0);
    [[0, "rgba(0,0,255,0)"], [0.25, "#00f"], [0.45, "#0ff"], [0.6, "#0f0"], [0.8, "#ff0"], [1, "#f00"]].forEach(([o, k]) => gr.addColorStop(o, k));
    g.fillStyle = gr; g.fillRect(0, 0, 256, 1); return g.getImageData(0, 0, 256, 1).data;
  }
  function desenhar() {
    const hd = st.heat; if (!hd) return;
    const W = st.dev === "m" ? 390 : 1280, VH = st.dev === "m" ? 780 : 800;
    let doc = null; try { doc = fr.contentDocument; } catch (e) { /* outro domínio */ }
    const sy = doc && doc.defaultView ? doc.defaultView.scrollY : 0;
    const docH = doc ? Math.max(doc.documentElement.scrollHeight, doc.body ? doc.body.scrollHeight : 0) : hd.altura_mediana || VH;
    cv.width = W; cv.height = VH;
    const g = cv.getContext("2d"); g.clearRect(0, 0, W, VH);
    if (st.modo !== "cliques" && hd.rolagem.n) {
      // faixa de rolagem: cor = % das visualizações que chegam até essa altura da página
      for (let y = 0; y < VH; y += 4) {
        const pct = Math.min(100, ((sy + y) / docH) * 100), b = Math.min(20, Math.floor(pct / 5)), f = hd.rolagem.chegou[b] / hd.rolagem.n;
        const k = Math.max(0, Math.min(255, Math.round(f * 255))) * 4;
        g.fillStyle = `rgba(${paleta[k]},${paleta[k + 1]},${paleta[k + 2]},${st.modo === "rolagem" ? 0.35 : 0.18})`; g.fillRect(0, y, W, 4);
      }
      [75, 50, 25].forEach((m) => {
        let b = hd.rolagem.chegou.findIndex((c) => (c / hd.rolagem.n) * 100 < m); if (b < 0) return;
        const y = ((b * 5) / 100) * docH - sy; if (y < 0 || y > VH) return;
        g.strokeStyle = "rgba(0,0,0,.6)"; g.setLineDash([6, 4]); g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); g.setLineDash([]);
        g.font = "600 13px system-ui"; const tx = `${m} % ${L.chegam}`; const tw = g.measureText(tx).width;
        g.fillStyle = "rgba(0,0,0,.75)"; g.fillRect(8, y - 20, tw + 12, 18); g.fillStyle = "#fff"; g.fillText(tx, 14, y - 7);
      });
    }
    if (st.modo !== "rolagem" && hd.cliques.length) {
      const off = document.createElement("canvas"); off.width = W; off.height = VH; const o = off.getContext("2d");
      const r = st.dev === "m" ? 18 : 24, alpha = Math.max(0.04, Math.min(0.5, 6 / Math.sqrt(hd.cliques.length)));
      for (const [x, y] of hd.cliques) {
        const px = x * W, py = y - sy; if (py < -r || py > VH + r) continue;
        const gr = o.createRadialGradient(px, py, 0, px, py, r); gr.addColorStop(0, `rgba(0,0,0,${alpha})`); gr.addColorStop(1, "rgba(0,0,0,0)");
        o.fillStyle = gr; o.fillRect(px - r, py - r, 2 * r, 2 * r);
      }
      const img = o.getImageData(0, 0, W, VH), d = img.data;
      for (let i = 0; i < d.length; i += 4) { const a = d[i + 3]; if (!a) continue; const k = a * 4; d[i] = paleta[k]; d[i + 1] = paleta[k + 1]; d[i + 2] = paleta[k + 2]; d[i + 3] = Math.min(230, a * 1.6 + 40); }
      const tmp = document.createElement("canvas"); tmp.width = W; tmp.height = VH; tmp.getContext("2d").putImageData(img, 0, 0); g.drawImage(tmp, 0, 0);
    }
  }
  function escala() {
    const W = st.dev === "m" ? 390 : 1280, VH = st.dev === "m" ? 780 : 800;
    const k = Math.min(1, (stage.parentElement.clientWidth - 34) / W);
    fr.style.width = W + "px"; fr.style.height = VH + "px"; fr.style.transform = cv.style.transform = `scale(${k})`;
    cv.style.width = W + "px"; cv.style.height = VH + "px";
    stage.style.width = W * k + "px"; stage.style.height = VH * k + "px";
  }
  async function carregarHeat() {
    const pg = $("#hpag").value || "/";
    document.querySelectorAll("[data-dev]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.dev === st.dev)));
    document.querySelectorAll("[data-modo]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.modo === st.modo)));
    escala();
    if (fr.dataset.src !== pg) { fr.dataset.src = pg; fr.src = pg; }
    if (!CFG.banco) { st.heat = { cliques: [], rolagem: { n: 0, chegou: [] }, views: 0 }; desenhar(); return; }
    try {
      st.heat = await api({ op: "heat", de: st.de, ate: st.ate, pagina: pg, dev: st.dev });
      $("#hinfo").textContent = `${fmt(st.heat.views)} ${L.baseHeat} · ${fmt(st.heat.cliques.length)} ${L.cliques.toLowerCase()}`;
      desenhar();
    } catch (e) { /* aviso já mostrado */ }
  }
  fr.addEventListener("load", () => {
    try { fr.contentWindow.addEventListener("scroll", () => requestAnimationFrame(desenhar), { passive: true }); } catch (e) { /* ok */ }
    setTimeout(desenhar, 400);
  });
  paleta = corPaleta();
  addEventListener("resize", () => { escala(); });

  /* ---------- controles ---------- */
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-p],[data-dev],[data-modo],tr[data-pg]"); if (!b) return;
    if (b.dataset.p !== undefined) { st.ate = iso(new Date()); st.de = iso(new Date(Date.now() - b.dataset.p * 864e5)); carregar(); }
    else if (b.dataset.dev) { st.dev = b.dataset.dev; fr.dataset.src = ""; carregarHeat(); }
    else if (b.dataset.modo) { st.modo = b.dataset.modo; carregarHeat(); }
    else if (b.dataset.pg) { st.pagina = b.dataset.pg; $("#hpag").value = st.pagina; carregar(); $("#heatbox").scrollIntoView({ behavior: "smooth" }); }
  });
  $("#de").addEventListener("change", (e) => { if (e.target.value) { st.de = e.target.value; carregar(); } });
  $("#ate").addEventListener("change", (e) => { if (e.target.value) { st.ate = e.target.value; carregar(); } });
  $("#pag").addEventListener("change", (e) => { st.pagina = e.target.value; if (st.pagina) $("#hpag").value = st.pagina; carregar(); });
  $("#hpag").addEventListener("change", () => carregarHeat());
  carregar();
}

function painel({ nonce, cfg, banco }) {
  const c = JSON.stringify({ name: cfg.name, lang: cfg.lang, banco }).replace(/</g, "\\u003c");
  return shell({ nonce, cfg, body: "", script: `(${cliente.toString()})(${c});` });
}

module.exports = { login, painel };
