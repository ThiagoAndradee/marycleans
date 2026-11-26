// Gera public/sitemap.xml, public/robots.txt, lib/rotas.json e acerta o domínio do
// public/llms.txt. Roda no prebuild.
import { writeFileSync } from "node:fs";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

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
// lastmod real, não a data do build: as páginas de zona usam SEO_DATA, os posts BLOG_DATA,
// e as restantes a data do último commit do ficheiro (ou SEO_DATA se o git não estiver à mão).
const constante = (f, nome) =>
  (readFileSync(f, "utf8").match(new RegExp(`${nome}\\s*=\\s*"(\\d{4}-\\d{2}-\\d{2})"`)) || [])[1];
const SEO_DATA = constante("./lib/seo-indice.js", "SEO_DATA") || hoje;
const BLOG_DATA = constante("./lib/blog.js", "BLOG_DATA") || SEO_DATA;
const ficheiroDaRota = {
  "/": "pages/index.js",
  "/servicos": "pages/servicos/index.js",
  "/contacto": "pages/contacto.js",
  "/privacidade": "pages/privacidade.js",
  "/rgpd": "pages/rgpd.js",
  "/blog": "lib/blog.js",
};
const dataGit = (f) => {
  try {
    const d = execFileSync("git", ["log", "-1", "--format=%cs", "--", f], { encoding: "utf8" }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : null;
  } catch {
    return null;
  }
};
const lastmod = (r) => {
  if (r.startsWith("/blog/")) return BLOG_DATA;
  if (r.startsWith("/servicos/")) return dataGit(`pages${r}.js`) || SEO_DATA;
  if (r.startsWith("/limpezas/")) return dataGit("lib/negocio.js") || SEO_DATA;
  if (ficheiroDaRota[r]) return dataGit(ficheiroDaRota[r]) || SEO_DATA;
  return SEO_DATA; // páginas de zona (lib/seo-paginas.js)
};
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rotas
  .map(
    (r) =>
      `  <url><loc>${SITE}${r}</loc><lastmod>${lastmod(r)}</lastmod><priority>${
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
  `# Mary Cleans. Site público: pode ler, indexar e citar.
# Content-Signal: search=yes, ai-input=yes, ai-train=yes
# (fica só como comentário: a linha Content-Signal fora de comentário é "diretiva desconhecida"
# para o Google e para o Lighthouse, e tirava pontos de SEO.)
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

# Robôs de busca e de resposta com IA (liberados de forma explícita)
User-agent: Googlebot
User-agent: Bingbot
User-agent: DuckDuckBot
User-agent: Applebot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: Google-Extended
User-agent: GPTBot
User-agent: ClaudeBot
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: ${SITE}/sitemap.xml
`
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
