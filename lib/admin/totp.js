/* TOTP (RFC 6238, SHA-1, 6 dígitos, 30 s), compatível com Google Authenticator, 1Password, Authy, Microsoft Authenticator. */
const crypto = require("crypto");
const B32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

function base32Decode(s) {
  const clean = String(s).toUpperCase().replace(/[^A-Z2-7]/g, "");
  let bits = 0, val = 0; const out = [];
  for (const c of clean) { val = (val << 5) | B32.indexOf(c); bits += 5; if (bits >= 8) { out.push((val >>> (bits - 8)) & 255); bits -= 8; } }
  return Buffer.from(out);
}
function base32Encode(buf) {
  let bits = 0, val = 0, out = "";
  for (const b of buf) { val = (val << 8) | b; bits += 8; while (bits >= 5) { out += B32[(val >>> (bits - 5)) & 31]; bits -= 5; } }
  if (bits > 0) out += B32[(val << (5 - bits)) & 31];
  return out;
}
function codigo(segredo, passo) {
  const key = base32Decode(segredo);
  const msg = Buffer.alloc(8); msg.writeBigUInt64BE(BigInt(passo));
  const h = crypto.createHmac("sha1", key).update(msg).digest();
  const o = h[h.length - 1] & 15;
  const n = ((h[o] & 127) << 24) | (h[o + 1] << 16) | (h[o + 2] << 8) | h[o + 3];
  return String(n % 1e6).padStart(6, "0");
}
/* Aceita o passo atual e 1 para cada lado (relógio do celular adiantado/atrasado). Devolve o passo usado ou -1. */
function verificar(segredo, token, agora = Date.now()) {
  const t = String(token || "").replace(/\s/g, "");
  if (!/^\d{6}$/.test(t) || !segredo) return -1;
  const p = Math.floor(agora / 30000);
  for (const d of [0, -1, 1]) {
    const c = codigo(segredo, p + d);
    if (crypto.timingSafeEqual(Buffer.from(c), Buffer.from(t))) return p + d;
  }
  return -1;
}
function novoSegredo() { return base32Encode(crypto.randomBytes(20)); }

module.exports = { verificar, novoSegredo, codigo, base32Encode, base32Decode };
