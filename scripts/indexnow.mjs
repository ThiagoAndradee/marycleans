// Envia as URLs do sitemap para o IndexNow (Bing, Yandex, Seznam, Naver).
// Só funciona quando o domínio do SITE estiver no ar e servir o ficheiro da chave na raiz.
// Uso: node scripts/indexnow.mjs
import { readFileSync } from "node:fs";

const KEY = "5e8b2c71d94f4a0c8f63b1e7a2d95c40";
const xml = readFileSync("./public/sitemap.xml", "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const host = new URL(urls[0]).host;
const r = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: KEY, keyLocation: `https://${host}/${KEY}.txt`, urlList: urls }),
});
console.log(host, urls.length, "URLs, resposta", r.status);
