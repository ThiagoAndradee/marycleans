/* Admin/CRM: armazenamento privado. Mesmo arquivo nos 3 sites (Want3D, Lacre Cargas, Mary Cleans).
   Produção, em ordem de preferência:
   1. Upstash Redis (KV_REST_API_URL + KV_REST_API_TOKEN, criado pelo Vercel Marketplace). O mesmo banco do Analytics,
      um só para os 3 sites: cada site usa o prefixo "admin:<slug do site>:" (lib/admin/site.js). Valores gzip.
   2. Vercel Blob privado (BLOB_READ_WRITE_TOKEN), se não houver Redis.
   Tudo só no servidor. Nada disto vai para o navegador.
   Local/teste: ADMIN_STORE_DIR=/pasta grava em arquivos, com a mesma interface (inclui etag para concorrência).
   Prefixo: tudo do admin fica em ADMIN_PREFIX (padrão "admin/"), separado dos dados do site. */
const crypto = require("crypto");

const PREFIX = (process.env.ADMIN_PREFIX || "admin/").replace(/^\/+/, "");
const full = (p) => {
  const s = String(p);
  if (!/^[a-zA-Z0-9/_.\-]+$/.test(s) || s.includes("..")) throw new Error("caminho inválido");
  return PREFIX + s;
};

class Conflito extends Error { constructor() { super("conflito"); this.code = "CONFLITO"; } }

function blobAdapter() {
  const { put, get, del, list } = require("@vercel/blob");
  const ACCESS = "private";
  return {
    tipo: "blob",
    async read(p) {
      try {
        const r = await get(full(p), { access: ACCESS, useCache: false });
        if (!r || r.statusCode !== 200) return null;
        const buf = Buffer.from(await new Response(r.stream).arrayBuffer());
        return { data: JSON.parse(buf.toString("utf8")), etag: r.blob.etag };
      } catch (e) {
        if (e && /not.?found/i.test(String(e.name || e.message))) return null;
        throw e;
      }
    },
    async write(p, data, { etag, novo } = {}) {
      const opts = { access: ACCESS, addRandomSuffix: false, contentType: "application/json", cacheControlMaxAge: 60 };
      if (novo) opts.allowOverwrite = false; else { opts.allowOverwrite = true; if (etag) opts.ifMatch = etag; }
      try {
        const r = await put(full(p), JSON.stringify(data), opts);
        return { etag: r.etag };
      } catch (e) {
        const n = String((e && (e.name || e.constructor && e.constructor.name)) || "") + " " + String(e && e.message);
        if (/Precondition|already exists|exists/i.test(n)) throw new Conflito();
        throw e;
      }
    },
    async remove(p) { try { await del(full(p)); } catch (e) { /* já não existe */ } },
    async list(prefix) {
      const out = []; let cursor;
      do {
        const r = await list({ prefix: full(prefix), cursor, limit: 1000 });
        for (const b of r.blobs) out.push({ path: b.pathname.slice(PREFIX.length), size: b.size, em: b.uploadedAt });
        cursor = r.hasMore ? r.cursor : undefined;
      } while (cursor);
      return out;
    },
  };
}

function dirAdapter(dir) {
  const fs = require("fs"), path = require("path");
  const root = path.resolve(dir);
  const ab = (p) => { const x = path.resolve(root, full(p)); if (!x.startsWith(root + path.sep)) throw new Error("caminho"); return x; };
  const tag = (s) => crypto.createHash("sha1").update(s).digest("hex");
  return {
    tipo: "dir",
    async read(p) { try { const s = fs.readFileSync(ab(p), "utf8"); return { data: JSON.parse(s), etag: tag(s) }; } catch { return null; } },
    async write(p, data, { etag, novo } = {}) {
      const f = ab(p); fs.mkdirSync(path.dirname(f), { recursive: true });
      let atual = null; try { atual = fs.readFileSync(f, "utf8"); } catch {}
      if (novo && atual !== null) throw new Conflito();
      if (etag && atual !== null && tag(atual) !== etag) throw new Conflito();
      const s = JSON.stringify(data); fs.writeFileSync(f, s); return { etag: tag(s) };
    },
    async remove(p) { try { fs.unlinkSync(ab(p)); } catch {} },
    async list(prefix) {
      const base = path.resolve(root, PREFIX), out = [];
      const walk = (d) => { let es = []; try { es = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
        for (const e of es) { const f = path.join(d, e.name); if (e.isDirectory()) walk(f); else { const rel = path.relative(base, f).split(path.sep).join("/"); if (rel.startsWith(prefix)) { const st = fs.statSync(f); out.push({ path: rel, size: st.size, em: st.mtime }); } } } };
      walk(base); return out;
    },
  };
}

function redisAdapter(url, token) {
  const zlib = require("zlib");
  const ns = () => "admin:" + (process.env.ADMIN_NS || require("./site").slug) + ":";
  const chave = (p) => ns() + full(p).slice(PREFIX.length);
  async function cmd(...args) {
    const r = await fetch(url, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(args) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || j.error) throw new Error("redis: " + (j.error || r.status));
    return j.result;
  }
  // valor = "z:" + etag (16 hex) + ":" + JSON gzip em base64. O etag muda a cada gravação.
  const empacotar = (d, tag) => "z:" + tag + ":" + zlib.gzipSync(JSON.stringify(d)).toString("base64");
  const abrir = (v) => JSON.parse(zlib.gunzipSync(Buffer.from(v.slice(19), "base64")).toString("utf8"));
  // grava só se o etag atual ainda for o que foi lido, numa operação só no Redis (sem corrida entre duas pessoas)
  const CAS = "local v = redis.call('GET', KEYS[1]) " +
    "if ARGV[2] == '' then if v then return 0 end elseif (not v) or string.sub(v, 3, 18) ~= ARGV[2] then return 0 end " +
    "if tonumber(ARGV[3]) > 0 then redis.call('SET', KEYS[1], ARGV[1], 'EX', ARGV[3]) else redis.call('SET', KEYS[1], ARGV[1]) end return 1";
  return {
    tipo: "redis",
    async read(p) { const v = await cmd("GET", chave(p)); return v === null || v === undefined ? null : { data: abrir(v), etag: v.slice(2, 18) }; },
    async write(p, data, { etag, novo, ttl } = {}) {
      const tag = crypto.randomBytes(8).toString("hex");
      const v = empacotar(data, tag);
      if (etag || novo) {
        const ok = await cmd("EVAL", CAS, "1", chave(p), v, novo ? "" : etag, String(ttl || 0));
        if (!ok) throw new Conflito();
      } else if (ttl) await cmd("SET", chave(p), v, "EX", String(ttl));
      else await cmd("SET", chave(p), v);
      return { etag: tag };
    },
    async remove(p) { await cmd("DEL", chave(p)); },
    async list() { return []; }, // no Redis as chaves vencem sozinhas (TTL); não precisa listar
  };
}

let _a;
function adapter() {
  if (_a) return _a;
  if (process.env.ADMIN_STORE_DIR) return (_a = dirAdapter(process.env.ADMIN_STORE_DIR));
  const ru = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL, rt = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (ru && rt) return (_a = redisAdapter(ru, rt));
  if (process.env.BLOB_READ_WRITE_TOKEN) return (_a = blobAdapter());
  return null;
}
function configurado() { return !!adapter(); }
function a() { const x = adapter(); if (!x) { const e = new Error("armazenamento não configurado"); e.code = "SEM_STORE"; throw e; } return x; }

/* Lê, aplica fn(dados) e grava com etag. Se outra pessoa gravou no meio, lê de novo e repete (até 15 vezes). */
async function mutate(p, vazio, fn, opts = {}) {
  for (let i = 0; i < 15; i++) {
    const atual = await a().read(p);
    const dados = atual ? atual.data : (typeof vazio === "function" ? vazio() : JSON.parse(JSON.stringify(vazio)));
    const ret = await fn(dados);
    try {
      await a().write(p, dados, atual ? { etag: atual.etag, ttl: opts.ttl } : { novo: true, ttl: opts.ttl });
      return ret;
    } catch (e) {
      if (e.code !== "CONFLITO") throw e;
      await new Promise((r) => setTimeout(r, Math.random() * 40 * 2 ** Math.min(i, 5)));
    }
  }
  const e = new Error("muitas gravações ao mesmo tempo, tente de novo"); e.code = "CONFLITO"; throw e;
}

module.exports = {
  configurado,
  tipo: () => (adapter() ? adapter().tipo : null),
  async readJSON(p, fb) { const r = await a().read(p); return r ? r.data : fb; },
  writeJSON: (p, d, opts) => a().write(p, d, opts || {}),
  remove: (p) => a().remove(p),
  list: (prefix) => a().list(prefix),
  mutate,
  Conflito,
};
