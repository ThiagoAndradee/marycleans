/* CSV simples: lê com ; ou , (detecta pela primeira linha), aspas, BOM e quebras de linha dentro de aspas. */
function parse(texto) {
  const s = String(texto || "").replace(/^﻿/, "");
  const primeira = s.split(/\r?\n/, 1)[0] || "";
  const sep = (primeira.match(/;/g) || []).length > (primeira.match(/,/g) || []).length ? ";" : ",";
  const linhas = []; let campo = "", linha = [], aspas = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (aspas) {
      if (c === '"') { if (s[i + 1] === '"') { campo += '"'; i++; } else aspas = false; }
      else campo += c;
    } else if (c === '"') aspas = true;
    else if (c === sep) { linha.push(campo); campo = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && s[i + 1] === "\n") i++;
      linha.push(campo); campo = "";
      if (linha.some((x) => x !== "")) linhas.push(linha);
      linha = [];
    } else campo += c;
  }
  linha.push(campo); if (linha.some((x) => x !== "")) linhas.push(linha);
  if (!linhas.length) return [];
  const cab = linhas[0].map((h) => h.trim().toLowerCase());
  return linhas.slice(1).map((l) => Object.fromEntries(cab.map((h, i) => [h, (l[i] || "").trim()])));
}
/* Célula segura para Excel/Sheets: nada que comece com = + - @ vira fórmula. */
function celula(v) {
  let s = v === null || v === undefined ? "" : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return /[";\n\r,]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
function gerar(linhas, colunas) {
  return "﻿" + [colunas.join(","), ...linhas.map((l) => colunas.map((c) => celula(l[c])).join(","))].join("\r\n");
}
module.exports = { parse, gerar, celula };
