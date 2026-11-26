// Gera public/sitemap.xml, public/robots.txt, lib/rotas.json e acerta o domínio do
// public/llms.txt. Roda no prebuild.
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

// Mesma regra de lib/site.js (aqui não dá para importar, o ficheiro não é ESM).
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://marycleans.vercel.app").replace(/\/+$/, "");
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
console.log(`sitemap.xml: ${rotas.length} rotas em ${SITE}`);

writeFileSync(
  "./public/robots.txt",
  `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin\n\nSitemap: ${SITE}/sitemap.xml\n`
);

// llms.txt é escrito à mão; aqui só se troca o domínio de todos os links para o atual.
const llms = readFileSync("./public/llms.txt", "utf8");
const llmsNovo = llms.replace(/https:\/\/(?:www\.marycleans\.pt|marycleans\.vercel\.app)/g, SITE);
if (llmsNovo !== llms) writeFileSync("./public/llms.txt", llmsNovo);

// Rotas que existem. TextoComLinks usa esta lista para não gerar link para página que
// ainda não foi publicada (evita 404 interno).
writeFileSync("./lib/rotas.json", JSON.stringify(rotas, null, 0) + "\n");

const textos = ["./lib/seo-paginas.js", "./lib/blog.js"].map((f) => [f, readFileSync(f, "utf8")]);
for (const [f, t] of textos) {
  for (const m of t.matchAll(/\]\((\/[^)#?]*)/g)) {
    const r = m[1].replace(/\/+$/, "") || "/";
    if (r !== "/caminho" && !rotas.includes(r)) console.warn(`aviso: ${f} cita ${r}, que não existe (vai como texto, sem link)`);
  }
}
