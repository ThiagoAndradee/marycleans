// Gera public/sitemap.xml a partir de lib/negocio.js. Roda no prebuild.
import { writeFileSync } from "node:fs";
import { readFileSync } from "node:fs";

const src = readFileSync("./lib/negocio.js", "utf8");
const slugs = (nomeArray) => {
  const bloco = src.split(`export const ${nomeArray}`)[1] || "";
  const fim = bloco.indexOf("\n];");
  return [...(fim > 0 ? bloco.slice(0, fim) : bloco).matchAll(/slug:\s*"([^"]+)"/g)].map(
    (m) => m[1]
  );
};

const SITE = "https://www.marycleans.pt";
const rotas = [
  "/",
  "/servicos",
  "/contacto",
  "/privacidade",
  "/rgpd",
  ...slugs("VERTICAIS").map((s) => `/servicos/${s}`),
  ...slugs("CONCELHOS").map((s) => `/limpezas/${s}`),
];

const hoje = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rotas
  .map(
    (r) =>
      `  <url><loc>${SITE}${r}</loc><lastmod>${hoje}</lastmod><priority>${
        r === "/" ? "1.0" : r.startsWith("/servicos/") ? "0.9" : "0.7"
      }</priority></url>`
  )
  .join("\n")}
</urlset>
`;
writeFileSync("./public/sitemap.xml", xml);
console.log(`sitemap.xml: ${rotas.length} rotas`);
