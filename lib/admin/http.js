/* Admin/CRM: utilidades HTTP. Funciona em Vercel Functions puras (req, res do Node) e em rotas /api do Next.js. */
const crypto = require("crypto");

const API_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store, max-age=0",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "no-referrer",
  "X-Robots-Tag": "noindex, nofollow",
  "Content-Security-Policy": "default-src 'none'; frame-ancestors 'none'",
  "Strict-Transport-Security": "max-age=63072000",
};

function send(res, status, obj, extra) {
  res.statusCode = status;
  for (const [k, v] of Object.entries({ ...API_HEADERS, ...(extra || {}) })) res.setHeader(k, v);
  res.end(typeof obj === "string" ? obj : JSON.stringify(obj));
}
function sendFile(res, status, body, contentType, nome) {
  res.statusCode = status;
  for (const [k, v] of Object.entries(API_HEADERS)) res.setHeader(k, v);
  res.setHeader("Content-Type", contentType);
  if (nome) res.setHeader("Content-Disposition", `attachment; filename="${nome.replace(/[^a-zA-Z0-9._-]/g, "_")}"`);
  res.end(body);
}

/* Corpo da requisição com limite de tamanho. No Next.js o corpo já vem em req.body. */
async function body(req, limite = 256 * 1024) {
  if (req.body !== undefined && req.body !== null && !(req.body instanceof Buffer)) {
    if (typeof req.body === "string") { if (req.body.length > limite) throw erro(413, "corpo grande demais"); return parse(req, req.body); }
    if (JSON.stringify(req.body).length > limite) throw erro(413, "corpo grande demais");
    return req.body;
  }
  if (req.body instanceof Buffer) return parse(req, req.body.toString("utf8"));
  const chunks = []; let n = 0, grande = false;
  for await (const c of req) { n += c.length; if (n > limite) { grande = true; chunks.length = 0; if (n > 8 * 1024 * 1024) break; continue; } chunks.push(c); }
  if (grande) throw erro(413, "corpo grande demais"); // lê até o fim (descartando) para não quebrar a conexão
  return parse(req, Buffer.concat(chunks).toString("utf8"));
}
function parse(req, s) {
  if (!s) return {};
  const ct = String(req.headers["content-type"] || "");
  if (ct.includes("application/x-www-form-urlencoded")) return Object.fromEntries(new URLSearchParams(s));
  try { const j = JSON.parse(s); return j && typeof j === "object" ? j : {}; } catch { throw erro(400, "JSON inválido"); }
}

function erro(status, msg) { const e = new Error(msg); e.status = status; return e; }

function ip(req) {
  const x = String(req.headers["x-real-ip"] || req.headers["x-forwarded-for"] || (req.socket && req.socket.remoteAddress) || "");
  return x.split(",")[0].trim().slice(0, 64) || "?";
}
function cookies(req) {
  const o = {};
  String(req.headers.cookie || "").split(";").forEach((p) => { const i = p.indexOf("="); if (i > 0) o[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim()); });
  return o;
}
function query(req) {
  if (req.query) return req.query;
  try { return Object.fromEntries(new URL(req.url, "http://x").searchParams); } catch { return {}; }
}
function host(req) { return String(req.headers["x-forwarded-host"] || req.headers.host || "").split(",")[0].trim().toLowerCase(); }

/* A requisição veio do próprio site? Usa Sec-Fetch-Site e Origin (o navegador não deixa a página falsificar). */
function mesmaOrigem(req) {
  const sfs = req.headers["sec-fetch-site"];
  if (sfs && sfs !== "same-origin") return false;
  const o = req.headers.origin;
  if (o) { try { return new URL(o).host.toLowerCase() === host(req); } catch { return false; } }
  return !!sfs; // sem Origin e sem Sec-Fetch-Site: recusa (navegadores atuais mandam um dos dois)
}

const hash = (s) => crypto.createHash("sha256").update(String(s)).digest("hex");
function igual(a, b) {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

module.exports = { send, sendFile, body, erro, ip, cookies, query, host, mesmaOrigem, hash, igual, API_HEADERS };
