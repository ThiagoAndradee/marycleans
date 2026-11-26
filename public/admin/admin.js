/* Admin/CRM: interface. Não guarda dado nenhum no navegador (nem localStorage): tudo vem da API depois do login.
   Todo texto vindo dos dados entra com textContent (nunca innerHTML), então não executa HTML/JS de lead nenhum. */
(function () {
  "use strict";
  var API_AUTH = "/api/admin-auth", API = "/api/admin-crm";
  var app = document.getElementById("app");
  var S = { eu: null, csrf: "", cfg: null, leads: [], aba: "funil", filtro: { q: "", etapa: "", prioridade: "", origem: "", atraso: false }, ordem: "proximo_data" };

  /* ---------- utilidades ---------- */
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) continue;
      if (k === "on") for (var ev in v) el.addEventListener(ev, v[ev]);
      else if (k === "text") el.textContent = v;
      else if (k === "class") el.className = v;
      else if (k === "value") el.value = v;
      else if (k === "style") el.style.cssText = v; /* CSSOM: permitido pela CSP sem 'unsafe-inline' */
      else el.setAttribute(k, v === true ? "" : String(v));
    }
    for (var i = 2; i < arguments.length; i++) add(el, arguments[i]);
    return el;
  }
  function add(el, c) {
    if (c === null || c === undefined || c === false) return;
    if (Array.isArray(c)) c.forEach(function (x) { add(el, x); });
    else el.appendChild(typeof c === "object" ? c : document.createTextNode(String(c)));
  }
  function limpar(el) { while (el.firstChild) el.removeChild(el.firstChild); }
  function hoje() { return new Date().toISOString().slice(0, 10); }
  function data(s) { if (!s) return ""; var d = new Date(s); return isNaN(d) ? s : d.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }); }
  function dia(s) { if (!s) return ""; var p = s.split("-"); return p.length === 3 ? p[2] + "/" + p[1] + "/" + p[0] : s; }
  function dinheiro(v) { return (Number(v) || 0).toLocaleString("pt-BR", { style: "currency", currency: (S.cfg && S.cfg.moeda) || "BRL" }); }
  function linkSeguro(u, texto) { return /^https?:\/\//i.test(u || "") ? h("a", { href: u, target: "_blank", rel: "noopener noreferrer nofollow", text: texto || u }) : (u || ""); }
  function nomeEtapa(id) { var e = (S.cfg.etapas || []).find(function (x) { return x.id === id; }); return e ? e.nome : id; }
  var toastT;
  function toast(msg) { var t = document.querySelector(".toast"); if (t) t.remove(); t = h("div", { class: "toast", role: "status", text: msg }); document.body.appendChild(t); clearTimeout(toastT); toastT = setTimeout(function () { t.remove(); }, 2600); }

  function api(url, opts) {
    opts = opts || {};
    var o = { method: opts.method || "GET", credentials: "same-origin", headers: { Accept: "application/json" } };
    if (opts.body !== undefined) { o.headers["Content-Type"] = "application/json"; o.body = JSON.stringify(opts.body); }
    if (o.method !== "GET") o.headers["X-CSRF-Token"] = S.csrf;
    return fetch(url, o).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (r.status === 401 && url.indexOf("op=login") < 0) { S.eu = null; telaLogin("Sua sessão terminou. Entre de novo."); throw new Error("login"); }
        if (!r.ok) throw new Error(j.mensagem || j.erro || ("Erro " + r.status));
        return j;
      });
    });
  }
  function crm(op, body, extra) { return api(API + "?op=" + op + (extra || ""), body === undefined ? {} : { method: "POST", body: body }); }

  /* ---------- login ---------- */
  function telaLogin(msg) {
    limpar(app);
    var err = h("div", { class: "erro", role: "alert", text: msg || "" });
    var email = h("input", { type: "email", id: "l-email", autocomplete: "username", required: true, maxlength: 160 });
    var senha = h("input", { type: "password", id: "l-senha", autocomplete: "current-password", required: true, maxlength: 200 });
    var cod = h("input", { type: "text", id: "l-cod", inputmode: "numeric", autocomplete: "one-time-code", pattern: "[0-9]{6}", maxlength: 6, required: true });
    var btn = h("button", { class: "btn pri", type: "submit", text: "Entrar" });
    var f = h("form", { class: "login", on: { submit: function (e) {
      e.preventDefault(); err.textContent = ""; btn.disabled = true;
      api(API_AUTH + "?op=login", { method: "POST", body: { email: email.value, senha: senha.value, codigo: cod.value } })
        .then(function (j) { S.csrf = j.csrf; S.eu = j; senha.value = ""; return iniciar(); })
        .catch(function (x) { err.textContent = x.message; cod.value = ""; })
        .then(function () { btn.disabled = false; });
    } } },
      h("h1", { text: "Entrar no painel" }),
      h("p", { text: "Acesso só para a equipe. Use o e-mail, a senha e o código de 6 dígitos do app autenticador." }),
      h("label", { for: "l-email", text: "E-mail" }), email,
      h("label", { for: "l-senha", text: "Senha" }), senha,
      h("label", { for: "l-cod", text: "Código do app autenticador" }), cod,
      h("div", { style: "margin-top:16px" }, btn), err);
    app.appendChild(f); email.focus();
  }

  /* ---------- estrutura ---------- */
  function abas() {
    var l = [["funil", "Funil"], ["leads", "Leads"], ["metricas", "Métricas"], ["importar", "Importar e backup"], ["acessos", "Acessos"], ["analytics", "Analytics"]];
    (S.cfg.extrasAbas || []).forEach(function (a) { l.push(["link:" + a.href, a.nome]); });
    return l;
  }
  function moldura() {
    limpar(app);
    var nav = h("nav", { class: "abas", "aria-label": "Seções" });
    abas().forEach(function (a) {
      nav.appendChild(h("button", { type: "button", "aria-current": S.aba === a[0] ? "page" : null, text: a[1], on: { click: function () {
        if (a[0].indexOf("link:") === 0) { location.href = a[0].slice(5); return; }
        if (a[0] === "analytics") { location.href = "/admin/analytics"; return; }
        S.aba = a[0]; render();
      } } }));
    });
    var sair = h("button", { class: "btn peq", type: "button", text: "Sair", on: { click: function () {
      api(API_AUTH + "?op=logout", { method: "POST", body: {} }).catch(function () {}).then(function () { S.eu = null; S.leads = []; telaLogin("Você saiu."); });
    } } });
    app.appendChild(h("header", { class: "top" }, h("strong", { text: S.cfg.site + " · CRM" }), nav, h("div", { class: "eu" }, h("span", { text: S.cfg.eu.nome }), sair)));
    var main = h("main", { id: "conteudo" }); app.appendChild(main); return main;
  }
  function render() {
    var m = moldura();
    if (S.aba === "funil") return vFunil(m);
    if (S.aba === "leads") return vLeads(m);
    if (S.aba === "metricas") return vMetricas(m);
    if (S.aba === "importar") return vImportar(m);
    if (S.aba === "acessos") return vAcessos(m);
  }
  function recarregar() { return crm("leads").then(function (j) { S.leads = j.leads; }); }

  /* ---------- filtros ---------- */
  function filtrados() {
    var f = S.filtro, q = f.q.trim().toLowerCase(), t = hoje();
    return S.leads.filter(function (l) {
      if (f.etapa && l.etapa !== f.etapa) return false;
      if (f.prioridade && (l.prioridade || "") !== f.prioridade) return false;
      if (f.origem && String(l.origem || "").indexOf(f.origem) !== 0) return false;
      if (f.atraso && !(l.proximo_data && l.proximo_data < t)) return false;
      if (q) { var s = [l.empresa, l.contato, l.email, l.telefone, l.cidade, l.regiao, l.segmento, l.tags, l.proximo_passo].join(" ").toLowerCase(); if (s.indexOf(q) < 0) return false; }
      return true;
    });
  }
  function barraFiltros(m, comEtapa) {
    var origens = {}; S.leads.forEach(function (l) { origens[String(l.origem || "").split(":")[0]] = 1; });
    var busca = h("input", { type: "search", id: "f-q", placeholder: "Empresa, contato, e-mail, cidade…", value: S.filtro.q });
    var deb; busca.addEventListener("input", function () { clearTimeout(deb); deb = setTimeout(function () { S.filtro.q = busca.value; corpo(); }, 180); });
    function sel(id, rot, chave, ops) {
      var s = h("select", { id: id, on: { change: function () { S.filtro[chave] = s.value; corpo(); } } }, h("option", { value: "", text: "Todas" }), ops.map(function (o) { return h("option", { value: o[0], text: o[1] }); }));
      s.value = S.filtro[chave]; return h("div", null, h("label", { for: id, text: rot }), s);
    }
    var atraso = h("input", { type: "checkbox", id: "f-at", style: "width:auto", on: { change: function () { S.filtro.atraso = atraso.checked; corpo(); } } }); atraso.checked = S.filtro.atraso;
    var novo = h("button", { class: "btn pri", type: "button", text: "Novo lead", on: { click: function () { abrirLead(null); } } });
    var corpoEl = h("div", { id: "corpo" });
    m.appendChild(h("div", { class: "barra" },
      h("div", { class: "busca" }, h("label", { for: "f-q", text: "Buscar" }), busca),
      comEtapa ? sel("f-et", "Etapa", "etapa", S.cfg.etapas.map(function (e) { return [e.id, e.nome]; })) : null,
      sel("f-pr", "Prioridade", "prioridade", [["A", "A"], ["B", "B"], ["C", "C"]]),
      sel("f-or", "Origem", "origem", Object.keys(origens).filter(Boolean).map(function (o) { return [o, o === "csv" ? "Lista importada" : o === "site" ? "Site" : o === "manual" ? "Manual" : o]; })),
      h("div", null, h("label", { for: "f-at", text: "Só atrasados" }), atraso),
      novo));
    m.appendChild(corpoEl);
    var corpo = function () { limpar(corpoEl); S._corpo(corpoEl); };
    return corpo;
  }

  function tagsLead(l) {
    var t = hoje(), out = [];
    if (l.prioridade) out.push(h("span", { class: "tag " + l.prioridade, text: "Prioridade " + l.prioridade }));
    if (l.proximo_data) out.push(h("span", { class: "tag " + (l.proximo_data < t ? "atraso" : l.proximo_data === t ? "hoje" : ""), text: (l.proximo_data < t ? "Atrasado " : "") + dia(l.proximo_data) }));
    if (l.proposta_aberta) out.push(h("span", { class: "tag", text: "Proposta aberta" }));
    if (String(l.origem || "").indexOf("site") === 0) out.push(h("span", { class: "tag", text: "Site" }));
    return out;
  }

  /* ---------- funil (kanban) ---------- */
  function vFunil(m) {
    S._corpo = function (el) {
      var lista = filtrados(), kb = h("div", { class: "kanban" });
      S.cfg.etapas.forEach(function (e) {
        var itens = lista.filter(function (l) { return l.etapa === e.id; }).sort(function (a, b) { return (a.proximo_data || "9") < (b.proximo_data || "9") ? -1 : 1; });
        var col = h("div", { class: "col", "data-etapa": e.id }, h("h3", null, h("span", { text: e.nome }), h("span", { text: String(itens.length) })));
        col.addEventListener("dragover", function (ev) { ev.preventDefault(); col.classList.add("alvo"); });
        col.addEventListener("dragleave", function () { col.classList.remove("alvo"); });
        col.addEventListener("drop", function (ev) { ev.preventDefault(); col.classList.remove("alvo"); var id = ev.dataTransfer.getData("text/plain"); if (id) mudarEtapa(id, e.id); });
        itens.slice(0, 60).forEach(function (l) {
          var c = h("div", { class: "cartao", draggable: "true", tabindex: "0", role: "button", "aria-label": (l.empresa || l.contato) + ", abrir" },
            h("b", { text: l.empresa || l.contato || "(sem nome)" }), h("small", { text: [l.contato, l.cidade].filter(Boolean).join(" · ") }),
            l.proximo_passo ? h("small", { text: "Próximo: " + l.proximo_passo }) : null, h("div", { class: "linha" }, tagsLead(l)));
          c.addEventListener("dragstart", function (ev) { ev.dataTransfer.setData("text/plain", l.id); });
          c.addEventListener("click", function () { abrirLead(l.id); });
          c.addEventListener("keydown", function (ev) { if (ev.key === "Enter") abrirLead(l.id); });
          col.appendChild(c);
        });
        if (itens.length > 60) col.appendChild(h("div", { class: "mais", text: "+" + (itens.length - 60) + " (use a busca ou a aba Leads)" }));
        kb.appendChild(col);
      });
      el.appendChild(kb);
    };
    barraFiltros(m, false)();
  }
  function pedirMotivo() {
    return new Promise(function (ok) {
      var ops = (S.cfg.motivosPerda || []);
      var s = h("select", { id: "mot" }, h("option", { value: "", text: "Escolha" }), ops.map(function (o) { return h("option", { value: o, text: o }); }), h("option", { value: "outro", text: "Outro" }));
      var d = h("dialog", null, h("form", { method: "dialog" }, h("h3", { text: "Por que foi perdido?" }), h("label", { for: "mot", text: "Motivo" }), s,
        h("div", { style: "margin-top:14px;display:flex;gap:8px" }, h("button", { class: "btn pri", value: "ok", text: "Salvar" }), h("button", { class: "btn", value: "cancelar", text: "Cancelar" }))));
      document.body.appendChild(d); d.showModal();
      d.addEventListener("close", function () { var v = d.returnValue === "ok" ? (s.value || "sem motivo") : null; d.remove(); ok(v); });
    });
  }
  function mudarEtapa(id, etapa) {
    var p = etapa === "perdido" ? pedirMotivo() : Promise.resolve("");
    return p.then(function (motivo) {
      if (motivo === null) return;
      return crm("etapa", { id: id, etapa: etapa, motivo: motivo }).then(function (j) { trocar(j.lead); toast("Movido para " + nomeEtapa(etapa)); if (!S.painel) render(); });
    }).catch(function (e) { toast(e.message); });
  }
  function trocar(lead) {
    var i = S.leads.findIndex(function (x) { return x.id === lead.id; });
    var r = Object.assign({}, lead, { n_notas: (lead.notas || []).length, proposta_aberta: (lead.propostas || []).some(function (p) { return p.status === "rascunho" || p.status === "enviada"; }) });
    delete r.notas; delete r.propostas; delete r.historico; delete r.extras;
    if (lead.arquivado) { if (i >= 0) S.leads.splice(i, 1); } else if (i >= 0) S.leads[i] = r; else S.leads.unshift(r);
  }

  /* ---------- lista ---------- */
  function vLeads(m) {
    var pagina = 0;
    S._corpo = function (el) {
      var o = S.ordem, lista = filtrados().sort(function (a, b) { var x = a[o] || "~", y = b[o] || "~"; return x < y ? -1 : x > y ? 1 : 0; });
      var cols = [["empresa", "Empresa"], ["contato", "Contato"], ["cidade", "Cidade"], ["etapa", "Etapa"], ["prioridade", "Prior."], ["proximo_data", "Próximo passo"], ["origem", "Origem"]];
      var tb = h("tbody");
      lista.slice(pagina * 100, pagina * 100 + 100).forEach(function (l) {
        var tr = h("tr", { class: "cl", tabindex: "0" },
          h("td", null, h("b", { text: l.empresa || "" }), l.segmento ? h("div", { class: "tag", text: l.segmento }) : null),
          h("td", { text: [l.contato, l.email, l.telefone].filter(Boolean).join(" · ") }),
          h("td", { text: [l.cidade, l.regiao].filter(Boolean).join(", ") }),
          h("td", { text: nomeEtapa(l.etapa) }), h("td", { text: l.prioridade || "" }),
          h("td", null, l.proximo_data ? h("span", { class: "tag " + (l.proximo_data < hoje() ? "atraso" : ""), text: dia(l.proximo_data) }) : null, " ", l.proximo_passo || ""),
          h("td", { text: String(l.origem || "").replace(/^csv:/, "lista: ") }));
        tr.addEventListener("click", function () { abrirLead(l.id); });
        tr.addEventListener("keydown", function (ev) { if (ev.key === "Enter") abrirLead(l.id); });
        tb.appendChild(tr);
      });
      var thead = h("thead", null, h("tr", null, cols.map(function (c) { return h("th", { scope: "col", "aria-sort": S.ordem === c[0] ? "ascending" : null, text: c[1], on: { click: function () { S.ordem = c[0]; el.textContent = ""; S._corpo(el); } } }); })));
      el.appendChild(h("p", { class: "mut", text: lista.length + " leads" }));
      el.appendChild(lista.length ? h("div", { class: "tabela" }, h("table", null, thead, tb)) : h("div", { class: "vazio", text: "Nenhum lead com esses filtros." }));
      var pags = Math.ceil(lista.length / 100);
      if (pags > 1) el.appendChild(h("div", { class: "barra", style: "margin-top:10px" },
        h("button", { class: "btn peq", disabled: pagina === 0, text: "Anterior", on: { click: function () { pagina--; limpar(el); S._corpo(el); } } }),
        h("span", { text: "Página " + (pagina + 1) + " de " + pags }),
        h("button", { class: "btn peq", disabled: pagina >= pags - 1, text: "Próxima", on: { click: function () { pagina++; limpar(el); S._corpo(el); } } })));
    };
    barraFiltros(m, true)();
  }

  /* ---------- painel do lead ---------- */
  var CAMPOS = [["empresa", "Empresa"], ["contato", "Contato"], ["cargo", "Cargo"], ["email", "E-mail", "email"], ["telefone", "Telefone", "tel"], ["whatsapp", "WhatsApp", "tel"],
    ["cidade", "Cidade"], ["regiao", "Estado ou zona"], ["segmento", "Segmento"], ["site", "Site", "url"], ["linkedin", "LinkedIn", "url"], ["prioridade", "Prioridade"],
    ["valor_estimado", "Valor estimado por mês", "number"], ["dono", "Responsável"], ["tags", "Etiquetas"]];
  function fecharPainel() { if (S.painel) { S.painel.remove(); S.fundo.remove(); S.painel = null; render(); } }
  function abrirLead(id) {
    if (!id) return painel(null);
    crm("lead", undefined, "&id=" + encodeURIComponent(id)).then(function (j) { painel(j.lead); }).catch(function (e) { toast(e.message); });
  }
  function painel(l) {
    if (S.painel) { S.painel.remove(); S.fundo.remove(); }
    var novo = !l; l = l || { etapa: "novo", notas: [], propostas: [], historico: [] };
    S.fundo = h("div", { class: "fundo", on: { click: fecharPainel } });
    var p = h("aside", { class: "painel", role: "dialog", "aria-modal": "true", "aria-label": "Lead" });
    S.painel = p;
    var inputs = {};
    var form = h("form", { class: "grade", on: { submit: function (e) { e.preventDefault(); salvar(); } } });
    CAMPOS.forEach(function (c) {
      var id = "c-" + c[0], el;
      if (c[0] === "prioridade") el = h("select", { id: id }, ["", "A", "B", "C"].map(function (v) { return h("option", { value: v, text: v || "Sem" }); }));
      else el = h("input", { id: id, type: c[2] || "text", maxlength: 200, step: c[2] === "number" ? "0.01" : null });
      el.value = l[c[0]] || ""; inputs[c[0]] = el;
      form.appendChild(h("div", null, h("label", { for: id, text: c[1] }), el));
    });
    var pp = h("input", { id: "c-pp", maxlength: 300 }); pp.value = l.proximo_passo || ""; inputs.proximo_passo = pp;
    var pd = h("input", { id: "c-pd", type: "date" }); pd.value = l.proximo_data || ""; inputs.proximo_data = pd;
    var res = h("textarea", { id: "c-res", maxlength: 2000 }); res.value = l.resumo || ""; inputs.resumo = res;
    form.appendChild(h("div", null, h("label", { for: "c-pp", text: "Próximo passo" }), pp));
    form.appendChild(h("div", null, h("label", { for: "c-pd", text: "Data do próximo passo" }), pd));
    form.appendChild(h("div", { style: "grid-column:1/-1" }, h("label", { for: "c-res", text: "Resumo (dores, volume, decisor, concorrente atual)" }), res));
    form.appendChild(h("div", { style: "grid-column:1/-1;margin-top:12px" }, h("button", { class: "btn pri", type: "submit", text: novo ? "Criar lead" : "Salvar dados" })));
    function salvar() {
      var campos = {}; for (var k in inputs) campos[k] = inputs[k].value;
      var pr = novo ? crm("criar", campos) : crm("atualizar", { id: l.id, atualizado: l.atualizado, campos: campos });
      pr.then(function (j) { trocar(j.lead); toast(novo ? "Lead criado" : "Salvo"); painel(j.lead); }).catch(function (e) { toast(e.message); });
    }
    var etapaSel = h("select", { id: "c-et", "aria-label": "Etapa" }, S.cfg.etapas.map(function (e) { return h("option", { value: e.id, text: e.nome }); }));
    etapaSel.value = l.etapa;
    etapaSel.addEventListener("change", function () { mudarEtapa(l.id, etapaSel.value).then(function () { abrirLead(l.id); }); });
    p.appendChild(h("header", null, h("h2", { text: novo ? "Novo lead" : (l.empresa || l.contato) }), novo ? null : etapaSel, h("button", { class: "btn peq", type: "button", text: "Fechar", on: { click: fecharPainel } })));
    if (!novo) {
      var contatos = h("div", { class: "linha", style: "display:flex;gap:10px;flex-wrap:wrap" },
        l.telefone ? h("a", { href: "tel:" + String(l.telefone).replace(/[^\d+]/g, ""), text: "Ligar" }) : null,
        l.whatsapp || l.telefone ? h("a", { href: "https://wa.me/" + String(l.whatsapp || l.telefone).replace(/\D/g, ""), target: "_blank", rel: "noopener noreferrer", text: "WhatsApp" }) : null,
        l.email ? h("a", { href: "mailto:" + l.email, text: "E-mail" }) : null, l.site ? linkSeguro(l.site, "Site") : null, l.linkedin ? linkSeguro(l.linkedin, "LinkedIn") : null);
      p.appendChild(h("section", null, contatos, h("small", { class: "mut", text: " Origem: " + (l.origem || "") + " · criado " + data(l.criado) + (l.perdido_motivo ? " · motivo da perda: " + l.perdido_motivo : "") })));
    }
    p.appendChild(h("section", null, h("h3", { text: "Dados" }), form));
    if (!novo) {
      p.appendChild(secaoNotas(l)); p.appendChild(secaoPropostas(l));
      var hist = h("section", null, h("h3", { text: "Histórico de etapas" }));
      (l.historico || []).slice().reverse().forEach(function (x) { hist.appendChild(h("div", { class: "nota" }, h("small", { text: data(x.em) + " · " + (x.por || "") }), h("p", { text: (x.de ? nomeEtapa(x.de) + " → " : "") + nomeEtapa(x.para) + (x.obs ? " (" + x.obs + ")" : "") }))); });
      p.appendChild(hist);
      if (l.extras && Object.keys(l.extras).length) {
        var dl = h("dl", { class: "extras" }); Object.keys(l.extras).forEach(function (k) { dl.appendChild(h("dt", { text: k })); dl.appendChild(h("dd", { text: l.extras[k] })); });
        p.appendChild(h("section", null, h("h3", { text: "Dados da lista importada" }), dl));
      }
      p.appendChild(h("section", null, h("button", { class: "btn bad", type: "button", text: l.arquivado ? "Tirar do arquivo" : "Arquivar lead", on: { click: function () {
        if (!l.arquivado && !confirm("Arquivar este lead? Ele sai das listas, mas nada é apagado e o backup continua com ele.")) return;
        crm("arquivar", { id: l.id, arquivado: !l.arquivado }).then(function (j) { trocar(j.lead); toast(j.lead.arquivado ? "Arquivado" : "Voltou para a lista"); fecharPainel(); }).catch(function (e) { toast(e.message); });
      } } })));
    }
    document.body.appendChild(S.fundo); document.body.appendChild(p);
    p.addEventListener("keydown", function (e) { if (e.key === "Escape") fecharPainel(); });
    (novo ? inputs.empresa : p.querySelector("header button")).focus();
  }
  var NOMES_NOTA = { nota: "Nota", ligacao: "Ligação", whatsapp: "WhatsApp", email: "E-mail", linkedin: "LinkedIn", reuniao: "Reunião", visita: "Visita", site: "Pedido do site" };
  function secaoNotas(l) {
    var tipo = h("select", { id: "n-t" }, S.cfg.tiposNota.filter(function (t) { return t !== "site"; }).map(function (t) { return h("option", { value: t, text: NOMES_NOTA[t] || t }); }));
    var tx = h("textarea", { id: "n-x", maxlength: 4000, placeholder: "O que foi falado, o que ficou combinado" });
    var pp = h("input", { id: "n-pp", maxlength: 300, placeholder: "Ex.: mandar cotação SP" }); pp.value = l.proximo_passo || "";
    var pd = h("input", { id: "n-pd", type: "date" }); pd.value = l.proximo_data || "";
    var s = h("section", null, h("h3", { text: "Contatos e notas" }),
      h("form", { on: { submit: function (e) {
        e.preventDefault();
        crm("nota", { id: l.id, tipo: tipo.value, texto: tx.value, proximo_passo: pp.value, proximo_data: pd.value }).then(function (j) { trocar(j.lead); toast("Registrado"); painel(j.lead); }).catch(function (x) { toast(x.message); });
      } } },
        h("div", { class: "grade" }, h("div", null, h("label", { for: "n-t", text: "Tipo" }), tipo), h("div", null)),
        h("label", { for: "n-x", text: "Registro" }), tx,
        h("div", { class: "grade" }, h("div", null, h("label", { for: "n-pp", text: "Próximo passo" }), pp), h("div", null, h("label", { for: "n-pd", text: "Data" }), pd)),
        h("div", { style: "margin-top:10px" }, h("button", { class: "btn pri", type: "submit", text: "Registrar contato" }))));
    (l.notas || []).slice().reverse().forEach(function (n) { s.appendChild(h("div", { class: "nota" }, h("small", { text: (NOMES_NOTA[n.tipo] || n.tipo) + " · " + data(n.em) + " · " + n.por }), h("p", { text: n.texto }))); });
    return s;
  }
  var NOMES_PROP = { rascunho: "Rascunho", enviada: "Enviada", aceita: "Aceita", recusada: "Recusada" };
  function secaoPropostas(l) {
    var s = h("section", null, h("h3", { text: "Propostas" }));
    function formProp(pr) {
      pr = pr || {};
      var t = h("input", { maxlength: 160, required: true, "aria-label": "Título", placeholder: "Título (ex.: Carga fechada Cambé → SP, 4 viagens/mês)" }); t.value = pr.titulo || "";
      var v = h("input", { type: "number", step: "0.01", min: "0", "aria-label": "Valor" }); v.value = pr.valor || "";
      var st = h("select", { "aria-label": "Situação" }, S.cfg.statusProposta.map(function (x) { return h("option", { value: x, text: NOMES_PROP[x] }); })); st.value = pr.status || "rascunho";
      var va = h("input", { type: "date", "aria-label": "Validade" }); va.value = pr.validade || "";
      var lk = h("input", { type: "url", placeholder: "https://… (link do PDF, opcional)", "aria-label": "Link" }); lk.value = pr.link || "";
      var dt = h("textarea", { maxlength: 3000, placeholder: "Condições, rota, volume, observações", "aria-label": "Detalhes" }); dt.value = pr.detalhe || "";
      return h("form", { class: "prop", on: { submit: function (e) {
        e.preventDefault();
        crm("proposta", { id: l.id, pid: pr.id, titulo: t.value, valor: v.value, status: st.value, validade: va.value, link: lk.value, detalhe: dt.value }).then(function (j) { trocar(j.lead); toast("Proposta salva"); painel(j.lead); }).catch(function (x) { toast(x.message); });
      } } }, t, h("div", { class: "grade" }, h("div", null, h("label", { text: "Valor (" + ((S.cfg && S.cfg.moeda) || "BRL") + ")" }), v), h("div", null, h("label", { text: "Situação" }), st), h("div", null, h("label", { text: "Validade" }), va), h("div", null, h("label", { text: "Link" }), lk)), dt,
        h("div", { style: "margin-top:8px" }, h("button", { class: "btn pri peq", type: "submit", text: pr.id ? "Salvar proposta" : "Adicionar proposta" })));
    }
    (l.propostas || []).slice().reverse().forEach(function (pr) {
      var box = h("div", { class: "prop" }, h("b", { text: pr.titulo }), h("div", { class: "linha" }, h("span", { class: "tag", text: NOMES_PROP[pr.status] || pr.status }), h("span", { class: "tag", text: dinheiro(pr.valor) }), pr.validade ? h("span", { class: "tag", text: "Válida até " + dia(pr.validade) }) : null, pr.link ? linkSeguro(pr.link, "Abrir") : null),
        pr.detalhe ? h("p", { style: "white-space:pre-wrap", text: pr.detalhe }) : null, h("small", { class: "mut", text: data(pr.em) + " · " + pr.por }),
        h("div", null, h("button", { class: "btn peq", type: "button", text: "Editar", on: { click: function () { box.replaceWith(formProp(pr)); } } })));
      s.appendChild(box);
    });
    s.appendChild(formProp(null));
    return s;
  }

  /* ---------- métricas ---------- */
  function vMetricas(m) {
    m.appendChild(h("p", { text: "Carregando métricas…" }));
    crm("metricas").then(function (x) {
      limpar(m);
      function kpi(rot, v) { return h("div", { class: "kpi" }, h("span", { text: rot }), h("b", { text: String(v) })); }
      m.appendChild(h("h2", { text: "Semana" }));
      m.appendChild(h("div", { class: "cards" }, kpi("Leads ativos", x.total), kpi("Leads novos em 7 dias", x.novos7), kpi("Contatos registrados em 7 dias", x.notas7),
        kpi("Próximos passos atrasados", x.atrasados), kpi("Leads sem data de próximo passo", x.semPasso), kpi("Pedidos do site sem resposta há mais de 1 dia útil", x.slaEstourado),
        kpi("Propostas abertas", x.propostasAbertas), kpi("Valor em propostas abertas", dinheiro(x.propostasValor)), kpi("Fechamentos em 30 dias", x.fechados30), kpi("Propostas aceitas em 30 dias", dinheiro(x.receita30))));
      var f = h("div", { class: "funil" }), max = Math.max.apply(null, Object.values(x.chegou).concat([1]));
      m.appendChild(h("h2", { text: "Funil: quantos leads já chegaram a cada etapa" })); m.appendChild(f);
      S.cfg.etapas.filter(function (e) { return e.id !== "perdido"; }).forEach(function (e) {
        var n = x.chegou[e.id] || 0;
        f.appendChild(h("div", { class: "barra-h" }, h("span", { text: e.nome }), h("div", { class: "fill", style: "width:" + Math.round((n / max) * 100) + "%" }), h("b", { text: n + " (" + (x.porEtapa[e.id] || 0) + " agora)" })));
      });
      var mot = Object.keys(x.motivos);
      m.appendChild(h("h2", { text: "Perdidos por motivo" }));
      m.appendChild(mot.length ? h("ul", null, mot.map(function (k) { return h("li", { text: k + ": " + x.motivos[k] }); })) : h("p", { class: "mut", text: "Nenhum lead perdido." }));
      var ct = Object.keys(x.contatos7);
      if (ct.length) { m.appendChild(h("h2", { text: "Contatos da semana por canal" })); m.appendChild(h("ul", null, ct.map(function (k) { return h("li", { text: (NOMES_NOTA[k] || k) + ": " + x.contatos7[k] }); }))); }
    }).catch(function (e) { limpar(m); m.appendChild(h("p", { class: "erro", text: e.message })); });
  }

  /* ---------- importar e backup ---------- */
  function vImportar(m) {
    var arq = h("input", { type: "file", id: "imp", accept: ".csv,text/csv" });
    var out = h("div", { role: "status" });
    var btnSim = h("button", { class: "btn", type: "button", text: "Conferir antes" });
    var btnImp = h("button", { class: "btn pri", type: "button", text: "Importar" });
    function ler(simular) {
      var f = arq.files[0]; if (!f) { out.textContent = "Escolha um arquivo CSV."; return; }
      if (f.size > 3.5 * 1024 * 1024) { out.textContent = "Arquivo grande demais (máximo 3,5 MB)."; return; }
      f.text().then(function (t) { return crm("importar", { nome: f.name, csv: t, simular: simular }); }).then(function (r) {
        out.textContent = (r.simulacao ? "Conferência: " : "Importado: ") + r.linhas + " linhas, " + r.novos + " novos, " + r.duplicados + " já estavam no CRM (" + (r.completados || 0) + " deles ganharam dados novos), " + r.ignorados + " sem nome nem e-mail.";
        if (!r.simulacao) recarregar();
      }).catch(function (e) { out.textContent = e.message; });
    }
    btnSim.addEventListener("click", function () { ler(true); }); btnImp.addEventListener("click", function () { ler(false); });
    m.appendChild(h("h2", { text: "Importar lista (CSV)" }));
    m.appendChild(h("p", { text: "Aceita ; ou , como separador. Colunas reconhecidas: empresa ou nome_fantasia, contato, cargo, email, telefone, whatsapp, site, linkedin, cidade ou concelho, uf ou zona, setor ou segmento, prioridade ou classe, proximo_passo e observações. Quem já está no CRM (mesmo e-mail, telefone ou empresa na mesma cidade) não entra de novo. As outras colunas ficam guardadas no lead." }));
    m.appendChild(h("div", { class: "barra" }, h("div", null, h("label", { for: "imp", text: "Arquivo" }), arq), btnSim, btnImp));
    m.appendChild(out);
    if (S.cfg.sincronizar) {
      var so = h("div", { role: "status" });
      m.appendChild(h("h2", { text: "Pedidos e pedidos de orçamento do site" }));
      m.appendChild(h("p", { text: "Traz para o CRM os pedidos e pedidos de orçamento que já estão no sistema. Quem já está no CRM ganha uma nota, sem lead repetido." }));
      m.appendChild(h("button", { class: "btn", type: "button", text: "Sincronizar agora", on: { click: function () { so.textContent = "Sincronizando…"; crm("sincronizar", {}).then(function (r) { so.textContent = "Pronto: " + r.novos + " novos, " + r.atualizados + " atualizados, " + r.repetidos + " já sincronizados."; recarregar(); }).catch(function (e) { so.textContent = e.message; }); } } }));
      m.appendChild(so);
    }
    m.appendChild(h("h2", { text: "Backup" }));
    m.appendChild(h("p", { text: "Baixe uma cópia completa do CRM. O arquivo tem dados pessoais: guarde num lugar protegido e não mande por e-mail." }));
    m.appendChild(h("div", { class: "barra" }, h("a", { class: "btn", href: API + "?op=exportar&formato=json", text: "Baixar backup completo (JSON)" }), h("a", { class: "btn", href: API + "?op=exportar&formato=csv", text: "Baixar planilha (CSV)" })));
  }

  /* ---------- acessos ---------- */
  var NOMES_ACAO = { login: "Entrou", logout: "Saiu", login_falha: "Erro de login", login_falha_bloqueio: "Erro de login, e-mail bloqueado", login_bloqueado: "Tentou entrar bloqueado", login_limite_ip: "Limite por IP" };
  function vAcessos(m) {
    var d = h("input", { type: "date", id: "ac-d", value: hoje() });
    var out = h("div");
    function carregar() {
      limpar(out);
      crm("acessos", undefined, "&dia=" + d.value).then(function (r) {
        if (!r.itens.length) { out.appendChild(h("p", { class: "vazio", text: "Nada registrado neste dia." })); return; }
        var tb = h("tbody"); r.itens.forEach(function (i) { tb.appendChild(h("tr", null, h("td", { text: data(i.em) }), h("td", { text: i.email || "" }), h("td", { text: NOMES_ACAO[i.acao] || i.acao.replace(/^crm_/, "CRM: ") + (i.lead ? " (" + i.lead + ")" : "") }), h("td", { text: i.ip }), h("td", { text: i.ua }))); });
        out.appendChild(h("div", { class: "tabela" }, h("table", null, h("thead", null, h("tr", null, ["Quando", "Quem", "O quê", "IP", "Navegador"].map(function (x) { return h("th", { text: x }); }))), tb)));
      }).catch(function (e) { out.appendChild(h("p", { class: "erro", text: e.message })); });
    }
    d.addEventListener("change", carregar);
    m.appendChild(h("h2", { text: "Acessos e alterações" }));
    m.appendChild(h("div", { class: "barra" }, h("div", null, h("label", { for: "ac-d", text: "Dia" }), d)));
    m.appendChild(out); carregar();
  }

  /* ---------- início ---------- */
  function iniciar() {
    return crm("config").then(function (c) { S.cfg = c; return recarregar(); }).then(render).catch(function (e) {
      if (e.message === "login") return;
      limpar(app); app.appendChild(h("div", { class: "login" }, h("h1", { text: "Não deu para abrir o CRM" }), h("p", { text: e.message })));
    });
  }
  fetch(API_AUTH + "?op=eu", { credentials: "same-origin", headers: { Accept: "application/json" } }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); }).then(function (x) {
    if (!x.ok) return telaLogin(x.j.configurado === false ? "O acesso ainda não foi configurado neste site." : "");
    S.csrf = x.j.csrf; S.eu = x.j; iniciar();
  }).catch(function () { telaLogin("Sem conexão com o servidor."); });
})();
