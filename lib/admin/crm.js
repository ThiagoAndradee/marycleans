/* Admin/CRM: leads, funil, notas, propostas, importação, métricas e backup. Mesmo arquivo nos 3 sites.
   Dados: admin/crm/leads.json no armazenamento privado (ver store.js). Só o servidor lê e grava.
   Config de cada site em lib/admin/site.js (nome, etapas, como o formulário vira lead). */
const crypto = require("crypto");
const store = require("./store");
const auth = require("./auth");
const csv = require("./csv");
const { send, sendFile, body, query, ip, mesmaOrigem, hash, travadoEmProducao } = require("./http");

const ARQ = "crm/leads.json";
const ETAPAS_PADRAO = [
  { id: "novo", nome: "Lead novo" }, { id: "contato", nome: "Primeiro contato" }, { id: "r1", nome: "R1 descoberta" },
  { id: "r2", nome: "R2 proposta e teste" }, { id: "fechamento", nome: "Fechamento" }, { id: "onboarding", nome: "Onboarding" },
  { id: "recorrente", nome: "Recorrente e indicação" }, { id: "perdido", nome: "Perdido" },
];
const TIPOS_NOTA = ["nota", "ligacao", "whatsapp", "email", "linkedin", "reuniao", "visita", "site"];
const STATUS_PROPOSTA = ["rascunho", "enviada", "aceita", "recusada"];
const PRIORIDADES = ["A", "B", "C", ""];

/* Campos editáveis e tamanho máximo. Qualquer outro campo enviado é ignorado. */
const CAMPOS = {
  empresa: 160, contato: 120, cargo: 120, email: 160, telefone: 80, whatsapp: 80, site: 200, linkedin: 200,
  cidade: 80, regiao: 80, segmento: 120, prioridade: 1, valor_estimado: 14, proximo_passo: 300, proximo_data: 10,
  dono: 160, tags: 200, perdido_motivo: 200, resumo: 2000,
};

const agora = () => new Date().toISOString();
const novoId = (p = "L") => p + crypto.randomBytes(9).toString("base64url");
const limpo = (v, n) => String(v === null || v === undefined ? "" : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, n);
const norm = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9@.]/g, "");
const soDigitos = (s) => String(s || "").replace(/\D/g, "").slice(-9);

function etapas(cfg) { return (cfg && cfg.etapas) || ETAPAS_PADRAO; }

function sanear(entrada, cfg) {
  const out = {};
  for (const [k, n] of Object.entries(CAMPOS)) {
    if (!(k in entrada)) continue;
    let v = limpo(entrada[k], n);
    if (k === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) v = "";
    if (k === "prioridade") v = PRIORIDADES.includes(v.toUpperCase()) ? v.toUpperCase() : "";
    if (k === "proximo_data" && v && !/^\d{4}-\d{2}-\d{2}$/.test(v)) v = "";
    if (k === "valor_estimado") v = v ? String(Math.max(0, Math.round(Number(v.replace(",", ".")) * 100) / 100) || "") : "";
    if ((k === "site" || k === "linkedin") && v && !/^https?:\/\//i.test(v)) v = "https://" + v;
    out[k] = v;
  }
  return out;
}

/* Próximo dia útil (seg a sex), para o SLA de 1 dia útil. */
function proximoDiaUtil(d = new Date()) {
  const x = new Date(d); x.setUTCDate(x.getUTCDate() + 1);
  while ([0, 6].includes(x.getUTCDay())) x.setUTCDate(x.getUTCDate() + 1);
  return x.toISOString().slice(0, 10);
}

function novoLead(campos, por, origem) {
  return {
    id: novoId(), criado: agora(), atualizado: agora(), por, origem: origem || "manual",
    etapa: "novo", prioridade: "", empresa: "", contato: "", email: "", telefone: "",
    ...campos, notas: [], propostas: [], historico: [{ de: null, para: "novo", em: agora(), por }], arquivado: false,
  };
}
function chaves(l) {
  const k = [];
  if (l.email) k.push("e:" + norm(l.email));
  const t = soDigitos(l.telefone || l.whatsapp); if (t.length >= 8) k.push("t:" + t);
  if (l.empresa) { const n = norm(l.empresa); k.push("n:" + n + "|" + norm(l.cidade)); if (n.length >= 5) k.push("nome:" + n); }
  return k;
}
function resumoLista(l) {
  const { notas, propostas, historico, extras, ...r } = l;
  const ult = (notas || []).slice(-1)[0];
  return { ...r, n_notas: (notas || []).length, n_propostas: (propostas || []).length,
    ultimo_contato: ult ? ult.em : null, proposta_aberta: (propostas || []).some((p) => ["rascunho", "enviada"].includes(p.status)) };
}

const vazio = () => ({ versao: 1, leads: [] });
const ler = () => store.readJSON(ARQ, vazio());
const alterar = (fn) => store.mutate(ARQ, vazio, fn);

/* ---------- importação de CSV ---------- */
const ALIASES = {
  empresa: ["empresa", "nome_fantasia", "nome", "razao_social", "company", "firma"],
  contato: ["contato_nome", "contato", "decisor_nome", "nome_contato", "ansprechpartner"],
  cargo: ["contato_cargo", "decisor_cargo", "cargo"],
  email: ["email", "e-mail", "mail"],
  telefone: ["telefone", "phone", "tel", "telefon"],
  whatsapp: ["whatsapp"],
  site: ["site", "website", "url"],
  linkedin: ["linkedin"],
  cidade: ["cidade", "concelho", "city", "ort"],
  regiao: ["uf", "zona", "freguesia", "regiao", "unidade_relevante"],
  segmento: ["setor_rotulo", "segmento", "setor", "tipo", "produto"],
  prioridade: ["prioridade", "classe", "prioridade_lista"],
  proximo_passo: ["proximo_passo"],
  resumo: ["obs", "notas", "motivo", "gancho", "porque", "observacao", "sinal_carga", "volume"],
};
function linhaParaLead(row) {
  const campos = {}; const usados = new Set();
  for (const [campo, nomes] of Object.entries(ALIASES)) {
    for (const n of nomes) if (row[n]) { if (!campos[campo]) campos[campo] = row[n]; usados.add(n); if (campo !== "resumo") break; }
  }
  const resumos = ALIASES.resumo.filter((n) => row[n]).map((n) => `${n}: ${row[n]}`);
  if (resumos.length) campos.resumo = resumos.join("\n");
  const extras = {};
  for (const [k, v] of Object.entries(row)) if (v && !usados.has(k) && Object.keys(extras).length < 30) extras[limpo(k, 40)] = limpo(v, 300);
  return { campos, extras };
}
async function importar(texto, nomeArquivo, por, simular) {
  const linhas = csv.parse(texto);
  if (linhas.length > 5000) throw Object.assign(new Error("arquivo com mais de 5000 linhas"), { status: 413 });
  const origem = "csv:" + limpo(nomeArquivo || "arquivo", 80);
  return alterar((db) => {
    const porChave = new Map(); db.leads.forEach((l) => chaves(l).forEach((k) => porChave.set(k, l)));
    let novos = 0, duplicados = 0, ignorados = 0, completados = 0;
    for (const row of linhas) {
      const { campos, extras } = linhaParaLead(row);
      const c = sanear(campos);
      if (!c.empresa && !c.contato && !c.email) { ignorados++; continue; }
      const k = chaves(c);
      const ja = k.map((x) => porChave.get(x)).find(Boolean);
      if (ja) {
        duplicados++;
        // já existe: só completa o que estiver vazio e guarda as colunas novas, sem apagar nada
        let mudou = false;
        for (const [f, v] of Object.entries(c)) if (v && !ja[f]) { if (!simular) ja[f] = v; mudou = true; }
        for (const [f, v] of Object.entries(extras)) if (!(ja.extras || {})[f]) { if (!simular) ja.extras = { ...(ja.extras || {}), [f]: v }; mudou = true; }
        if (mudou) { completados++; if (!simular) ja.atualizado = agora(); }
        continue;
      }
      const l = novoLead(c, por, origem); l.extras = extras;
      k.forEach((x) => porChave.set(x, l));
      if (!simular) db.leads.push(l);
      novos++;
    }
    if (simular) throw Object.assign(new Error("simulacao"), { simulacao: { novos, duplicados, completados, ignorados, linhas: linhas.length } });
    return { novos, duplicados, completados, ignorados, linhas: linhas.length };
  }).catch((e) => { if (e.simulacao) return { ...e.simulacao, simulacao: true }; throw e; });
}

/* ---------- lead vindo do site (formulário ou pedido) ---------- */
async function doSite(cfg, campos, { origem, resumo, ref } = {}) {
  if (travadoEmProducao()) return null;
  const c = sanear(campos);
  if (!c.empresa && !c.contato && !c.email && !c.telefone) return null;
  const texto = limpo(resumo, 3000);
  return alterar((db) => {
    if (ref && db.leads.some((l) => (l.refs || []).includes(ref))) return { id: null, repetido: true };
    const k = chaves(c);
    let l = db.leads.find((x) => !x.arquivado && chaves(x).some((y) => k.includes(y)));
    const existia = !!l;
    const nota = { id: novoId("N"), em: agora(), por: "site", tipo: "site", texto: `${origem || "site"}${texto ? "\n" + texto : ""}` };
    if (l) {
      l.notas.push(nota); l.atualizado = agora();
      if (["perdido", "recorrente", "onboarding"].includes(l.etapa)) l.historico.push({ de: l.etapa, para: l.etapa, em: agora(), por: "site", obs: "pedido novo pelo site" });
    } else {
      l = novoLead({ ...c, proximo_passo: "Responder o pedido do site", proximo_data: proximoDiaUtil() }, "site", origem || "site");
      l.notas.push(nota); db.leads.push(l);
    }
    if (ref) l.refs = [...(l.refs || []), ref].slice(-50);
    return { id: l.id, novo: !existia };
  });
}

/* Limite por IP para o formulário público: 20 envios por hora. */
async function limiteForm(req) {
  return store.mutate(`_auth/limite/form-${hash(ip(req)).slice(0, 32)}.json`, { n: 0, desde: 0 }, (c) => {
    if (Date.now() - c.desde > 3600e3) { c.n = 0; c.desde = Date.now(); }
    c.n++; return c.n > 20;
  }, { ttl: 3600 });
}

/* POST /api/lead: formulário do site cria lead. Público, então: mesma origem, honeypot, limite, campos limitados. */
async function handlerFormulario(req, res, cfg) {
  try {
    if (req.method !== "POST") return send(res, 405, { erro: "método" });
    if (travadoEmProducao() || !store.configurado()) return send(res, 202, { ok: true, crm: false });
    if (!mesmaOrigem(req)) return send(res, 403, { erro: "origem" });
    const b = await body(req, 16 * 1024);
    if (b._honey || b.website_url) return send(res, 200, { ok: true });
    if (await limiteForm(req)) return send(res, 429, { erro: "limite" });
    const { campos, origem, resumo } = cfg.formParaLead(b);
    const r = await doSite(cfg, campos, { origem, resumo });
    return send(res, 200, { ok: true, crm: !!r });
  } catch (e) {
    console.error("[lead]", e && e.message);
    return send(res, e.status || 500, { erro: e.status ? e.message : "erro" });
  }
}

/* ---------- métricas ---------- */
function metricas(db, cfg) {
  const ativos = db.leads.filter((l) => !l.arquivado);
  const hoje = new Date().toISOString().slice(0, 10);
  const d7 = Date.now() - 7 * 864e5, d30 = Date.now() - 30 * 864e5;
  const porEtapa = Object.fromEntries(etapas(cfg).map((e) => [e.id, 0]));
  ativos.forEach((l) => { porEtapa[l.etapa] = (porEtapa[l.etapa] || 0) + 1; });
  const contatos7 = {}; let notas7 = 0;
  const chegou = {}; etapas(cfg).forEach((e) => (chegou[e.id] = 0));
  const motivos = {};
  let atrasados = 0, semPasso = 0, propAbertas = 0, propValor = 0, fechados30 = 0, receita30 = 0, slaEstourado = 0, novos7 = 0;
  const ordem = etapas(cfg).map((e) => e.id);
  for (const l of ativos) {
    if (Date.parse(l.criado) > d7) novos7++;
    for (const n of l.notas || []) if (Date.parse(n.em) > d7 && n.por !== "site") { notas7++; contatos7[n.tipo] = (contatos7[n.tipo] || 0) + 1; }
    const max = Math.max(...(l.historico || []).map((h) => ordem.indexOf(h.para)).filter((i) => i >= 0 && ordem[i] !== "perdido"), 0);
    ordem.forEach((id, i) => { if (i <= max && id !== "perdido") chegou[id]++; });
    if (l.etapa === "perdido") motivos[l.perdido_motivo || "sem motivo"] = (motivos[l.perdido_motivo || "sem motivo"] || 0) + 1;
    if (!["perdido", "recorrente"].includes(l.etapa)) {
      if (!l.proximo_data) semPasso++; else if (l.proximo_data < hoje) atrasados++;
    }
    if (l.etapa === "novo" && l.origem && l.origem.startsWith("site") && proximoDiaUtil(new Date(l.criado)) < hoje) slaEstourado++;
    for (const p of l.propostas || []) {
      if (["rascunho", "enviada"].includes(p.status)) { propAbertas++; propValor += Number(p.valor) || 0; }
      if (p.status === "aceita" && Date.parse(p.atualizado || p.em) > d30) receita30 += Number(p.valor) || 0;
    }
    if ((l.historico || []).some((h) => h.para === "fechamento" && Date.parse(h.em) > d30)) fechados30++;
  }
  return { total: ativos.length, porEtapa, novos7, notas7, contatos7, chegou, motivos, atrasados, semPasso, slaEstourado,
    propostasAbertas: propAbertas, propostasValor: Math.round(propValor * 100) / 100, fechados30, receita30: Math.round(receita30 * 100) / 100 };
}

/* ---------- API do CRM: /api/admin-crm?op=... (tudo atrás do login) ---------- */
async function handler(req, res, cfg) {
  if (travadoEmProducao()) return send(res, 404, { erro: "não encontrado" });
  try {
    const q = query(req);
    const op = String(q.op || "");
    const escrita = req.method !== "GET";
    const s = await auth.exigir(req, res, { escrita });
    if (!s) return;
    const por = s.email;
    const E = etapas(cfg).map((e) => e.id);

    if (!escrita) {
      if (op === "config") return send(res, 200, { site: cfg.nome, moeda: cfg.moeda, idioma: cfg.idioma, etapas: etapas(cfg), tiposNota: TIPOS_NOTA, statusProposta: STATUS_PROPOSTA, motivosPerda: cfg.motivosPerda || [], extrasAbas: cfg.abas || [], sincronizar: !!cfg.sincronizar, eu: { email: s.email, nome: s.nome } });
      if (op === "leads") { const db = await ler(); return send(res, 200, { leads: db.leads.filter((l) => q.arquivados === "1" || !l.arquivado).map(resumoLista) }); }
      if (op === "lead") { const db = await ler(); const l = db.leads.find((x) => x.id === q.id); return l ? send(res, 200, { lead: l }) : send(res, 404, { erro: "não encontrado" }); }
      if (op === "metricas") { const db = await ler(); return send(res, 200, metricas(db, cfg)); }
      if (op === "acessos") {
        const dia = /^\d{4}-\d{2}-\d{2}$/.test(q.dia || "") ? q.dia : new Date().toISOString().slice(0, 10);
        const l = await store.readJSON(`_log/${dia}.json`, []);
        return send(res, 200, { dia, itens: l.slice(-500).reverse() });
      }
      if (op === "exportar") {
        if (!mesmaOrigem(req)) return send(res, 403, { erro: "origem" });
        const db = await ler();
        await auth.log(req, por, "crm_exportar", { formato: q.formato || "json" });
        const dia = new Date().toISOString().slice(0, 10);
        if (q.formato === "csv") {
          const cols = ["id", "empresa", "contato", "cargo", "email", "telefone", "whatsapp", "cidade", "regiao", "segmento", "prioridade", "etapa", "proximo_passo", "proximo_data", "valor_estimado", "dono", "origem", "criado", "atualizado", "perdido_motivo", "tags"];
          return sendFile(res, 200, csv.gerar(db.leads, cols), "text/csv; charset=utf-8", `crm-${cfg.slug}-${dia}.csv`);
        }
        return sendFile(res, 200, JSON.stringify({ exportado: agora(), site: cfg.nome, ...db }, null, 1), "application/json; charset=utf-8", `crm-${cfg.slug}-${dia}.json`);
      }
      return send(res, 404, { erro: "op" });
    }

    const b = await body(req, op === "importar" || op === "restaurar" ? 4 * 1024 * 1024 : 64 * 1024);
    const achar = (db) => { const l = db.leads.find((x) => x.id === String(b.id || "")); if (!l) throw Object.assign(new Error("não encontrado"), { status: 404 }); return l; };
    let r;
    switch (op) {
      case "criar": {
        const c = sanear(b);
        if (!c.empresa && !c.contato) return send(res, 400, { erro: "Informe a empresa ou o contato." });
        r = await alterar((db) => { const l = novoLead(c, por, "manual"); db.leads.push(l); return { lead: l }; });
        break;
      }
      case "atualizar": {
        const c = sanear(b.campos || {});
        r = await alterar((db) => {
          const l = achar(db);
          if (b.atualizado && b.atualizado !== l.atualizado) throw Object.assign(new Error("Outra pessoa mudou este lead agora. Abra de novo para ver a versão nova."), { status: 409 });
          Object.assign(l, c); l.atualizado = agora(); return { lead: l };
        });
        break;
      }
      case "etapa": {
        const para = String(b.etapa || "");
        if (!E.includes(para)) return send(res, 400, { erro: "etapa inválida" });
        r = await alterar((db) => {
          const l = achar(db);
          if (l.etapa !== para) { l.historico.push({ de: l.etapa, para, em: agora(), por, obs: limpo(b.obs, 300) || undefined }); l.etapa = para; }
          if (para === "perdido") l.perdido_motivo = limpo(b.motivo, 200) || l.perdido_motivo || "";
          l.atualizado = agora(); return { lead: l };
        });
        break;
      }
      case "nota": {
        const tipo = TIPOS_NOTA.includes(b.tipo) ? b.tipo : "nota";
        const texto = limpo(b.texto, 4000);
        if (!texto) return send(res, 400, { erro: "Escreva a nota." });
        r = await alterar((db) => {
          const l = achar(db);
          l.notas.push({ id: novoId("N"), em: agora(), por, tipo, texto });
          if (b.proximo_passo !== undefined) Object.assign(l, sanear({ proximo_passo: b.proximo_passo, proximo_data: b.proximo_data || "" }));
          l.atualizado = agora(); return { lead: l };
        });
        break;
      }
      case "proposta": {
        const p = { titulo: limpo(b.titulo, 160), valor: Math.max(0, Number(String(b.valor || 0).replace(",", ".")) || 0), status: STATUS_PROPOSTA.includes(b.status) ? b.status : "rascunho",
          validade: /^\d{4}-\d{2}-\d{2}$/.test(b.validade || "") ? b.validade : "", link: /^https:\/\//i.test(b.link || "") ? limpo(b.link, 300) : "", detalhe: limpo(b.detalhe, 3000) };
        if (!p.titulo) return send(res, 400, { erro: "Dê um título para a proposta." });
        r = await alterar((db) => {
          const l = achar(db);
          if (b.pid) { const x = (l.propostas || []).find((y) => y.id === b.pid); if (!x) throw Object.assign(new Error("proposta não encontrada"), { status: 404 }); Object.assign(x, p, { atualizado: agora(), por }); }
          else (l.propostas = l.propostas || []).push({ id: novoId("P"), em: agora(), por, ...p });
          l.atualizado = agora(); return { lead: l };
        });
        break;
      }
      case "arquivar": {
        r = await alterar((db) => { const l = achar(db); l.arquivado = b.arquivado !== false; l.atualizado = agora(); return { lead: l }; });
        break;
      }
      case "importar": {
        r = await importar(String(b.csv || ""), b.nome, por, !!b.simular);
        break;
      }
      case "sincronizar": {
        if (!cfg.sincronizar) return send(res, 404, { erro: "op" });
        r = await cfg.sincronizar({ doSite: (c, o) => doSite(cfg, c, o) });
        break;
      }
      default: return send(res, 404, { erro: "op" });
    }
    if (!(op === "importar" && b.simular)) await auth.log(req, por, "crm_" + op, { lead: b.id ? String(b.id).slice(0, 20) : undefined, n: r && r.novos });
    if (Math.random() < 0.05) auth.limparSessoes();
    return send(res, 200, r);
  } catch (e) {
    if (e.code === "SEM_STORE") return send(res, 503, { erro: "O armazenamento do CRM ainda não foi ligado neste site." });
    console.error("[admin-crm]", e && e.message);
    return send(res, e.status || (e.code === "CONFLITO" ? 409 : 500), { erro: e.status || e.code === "CONFLITO" ? e.message : "erro interno" });
  }
}

module.exports = { handler, handlerFormulario, doSite, importar, metricas, sanear, proximoDiaUtil, ETAPAS_PADRAO };
