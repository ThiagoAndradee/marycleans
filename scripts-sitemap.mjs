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
  ...[...readFileSync("./lib/seo-paginas.js", "utf8").matchAll(/^    slug:\s*"([^"]+)"/gm)].map(
    (m) => `/${m[1]}`
  ),
  "/blog",
  ...[...readFileSync("./lib/blog.js", "utf8").matchAll(/^    slug:\s*"([^"]+)"/gm)].map(
    (m) => `/blog/${m[1]}`
  ),
];

const noIndice = [...readFileSync("./lib/seo-indice.js", "utf8").matchAll(/slug:\s*"([^"]+)"/g)]
  .map((m) => m[1])
  .join();
const noConteudo = [...readFileSync("./lib/seo-paginas.js", "utf8").matchAll(/^    slug:\s*"([^"]+)"/gm)]
  .map((m) => m[1])
  .join();
if (noIndice !== noConteudo) {
  throw new Error("lib/seo-indice.js e lib/seo-paginas.js têm slugs diferentes");
}

const hoje = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rotas
  .map(
    (r) =>
      `  <url><loc>${SITE}${r}</loc><lastmod>${hoje}</lastmod><priority>${
        r === "/" ? "1.0" : r.startsWith("/servicos/") || r.startsWith("/limpeza-") || r.startsWith("/empresa-") || r.startsWith("/contrato-") ? "0.9" : "0.7"
      }</priority></url>`
  )
  .join("\n")}
</urlset>
`;
writeFileSync("./public/sitemap.xml", xml);
console.log(`sitemap.xml: ${rotas.length} rotas`);
