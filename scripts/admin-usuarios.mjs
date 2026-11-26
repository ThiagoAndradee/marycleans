#!/usr/bin/env node
/* Monta quem pode entrar no /admin (e-mail + senha + 2FA) e manda para a Vercel sem mostrar nada na tela.
   Roda no Terminal do Thiago, dentro da pasta do site (a que tem .vercel/project.json):

     node scripts/admin-usuarios.mjs adicionar          cria ou troca a senha e o 2FA de uma pessoa
     node scripts/admin-usuarios.mjs remover            tira uma pessoa (perde o acesso na hora depois de publicar)
     node scripts/admin-usuarios.mjs listar             mostra só os e-mails
     node scripts/admin-usuarios.mjs girar-sessoes      derruba todas as sessões abertas (depois publique)
     node scripts/admin-usuarios.mjs publicar preview   grava ADMIN_USERS e ADMIN_SESSION_SECRET na Vercel (preview)
     node scripts/admin-usuarios.mjs publicar production   (só depois do ok para produção)

   A lista é UMA para os 3 sites (Want3D, Lacre, Mary Cleans): ~/.config/beabstracto/admin-usuarios.json (chmod 600).
   Cadastre cada pessoa uma vez (dizendo em quais sites entra: Adonaldo só lacre-cargas, Mary só marycleans)
   e rode "publicar" dentro da pasta de cada site. Cada site recebe só quem tem acesso a ele. O mesmo código do app autenticador
   vale nos 3. O segredo da sessão é diferente por site (o login de um site não abre o outro).
   Senha: guardada só como hash scrypt. 2FA: o script mostra a chave UMA vez para cadastrar no app autenticador
   (Google Authenticator, 1Password, Microsoft Authenticator: "inserir chave de configuração", tipo baseada em tempo).
   Para outra pessoa (Adonaldo, Mary): passe a chave e a senha por telefone ou pessoalmente, nunca por e-mail. */
import fs from "fs";
import os from "os";
import path from "path";
import crypto from "crypto";
import readline from "readline";
import { spawn } from "child_process";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const auth = require(path.join(raiz, "lib/admin/auth.js"));
const totp = require(path.join(raiz, "lib/admin/totp.js"));

const projeto = (() => { try { return JSON.parse(fs.readFileSync(path.join(process.cwd(), ".vercel/project.json"), "utf8")).projectName; } catch { return null; } })();
if (!projeto) { console.error("Rode dentro da pasta do site ligada à Vercel (precisa de .vercel/project.json)."); process.exit(1); }
const dir = path.join(os.homedir(), ".config/beabstracto");
const arq = path.join(dir, "admin-usuarios.json");
fs.mkdirSync(dir, { recursive: true, mode: 0o700 });
const ler = () => { try { return JSON.parse(fs.readFileSync(arq, "utf8")); } catch { return { usuarios: [], segredos: {} }; } };
const gravar = (d) => { fs.writeFileSync(arq, JSON.stringify(d, null, 2), { mode: 0o600 }); fs.chmodSync(arq, 0o600); };

function pergunta(q, oculto) {
  return new Promise((ok) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    if (oculto) rl._writeToOutput = (s) => { if (s.includes(q)) rl.output.write(q); };
    rl.question(q, (r) => { rl.close(); if (oculto) process.stdout.write("\n"); ok(r.trim()); });
  });
}

const cmd = process.argv[2];
const pode = (u) => !u.sites || u.sites.includes("*") || u.sites.includes(projeto);
const d = ler();
d.segredos = d.segredos || {};
if (!d.segredos[projeto]) { d.segredos[projeto] = crypto.randomBytes(48).toString("base64url"); gravar(d); }

if (cmd === "listar") {
  console.log(`Projeto ${projeto}:`); d.usuarios.forEach((u) => console.log(`- ${u.email} (${u.nome}) sites: ${(u.sites || ["*"]).join(", ")}${pode(u) ? "" : "  [sem acesso a este site]"}`));
} else if (cmd === "adicionar") {
  const email = (await pergunta("E-mail: ")).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { console.error("E-mail inválido."); process.exit(1); }
  const nome = await pergunta("Nome que aparece no painel: ") || email;
  const sitesTxt = await pergunta("Em quais sites entra? (want3d-muenchen, lacre-cargas, marycleans; separados por vírgula; Enter = todos): ");
  const sites = sitesTxt ? sitesTxt.split(",").map((x) => x.trim()).filter(Boolean) : ["*"];
  const s1 = await pergunta("Senha (mínimo 12 caracteres, não aparece na tela): ", true);
  if (s1.length < 12) { console.error("Senha curta. Use pelo menos 12 caracteres."); process.exit(1); }
  const s2 = await pergunta("Repita a senha: ", true);
  if (s1 !== s2) { console.error("As senhas não são iguais."); process.exit(1); }
  const seg = totp.novoSegredo();
  const u = { email, nome, senha: auth.hashSenha(s1), totp: seg, sites };
  d.usuarios = d.usuarios.filter((x) => x.email !== email).concat(u);
  gravar(d);
  const conta = encodeURIComponent(`Admin Beabstracto:${email}`);
  console.log(`\nCadastre no app autenticador (uma vez só). Chave de configuração, baseada em tempo:\n\n   ${seg.match(/.{1,4}/g).join(" ")}\n`);
  console.log(`Ou abra este link num celular com o app instalado:\n   otpauth://totp/${conta}?secret=${seg}&issuer=${encodeURIComponent("Admin Beabstracto")}&digits=6&period=30\n`);
  const t = await pergunta("Digite o código de 6 dígitos que o app mostra agora, para conferir: ");
  if (totp.verificar(seg, t) < 0) console.log("O código não bateu. Confira a hora do celular e rode 'adicionar' de novo para esse e-mail.");
  else console.log("Código conferido.");
  console.log(`\n${d.usuarios.length} pessoa(s) na lista. Agora rode em cada site: node scripts/admin-usuarios.mjs publicar preview`);
} else if (cmd === "girar-sessoes") {
  d.segredos[projeto] = crypto.randomBytes(48).toString("base64url"); gravar(d);
  console.log(`Segredo novo para ${projeto}. Publique (publicar preview/production) e faça deploy: todas as sessões abertas deste site caem.`);
} else if (cmd === "remover") {
  const email = (await pergunta("E-mail para tirar: ")).toLowerCase();
  d.usuarios = d.usuarios.filter((x) => x.email !== email); gravar(d);
  console.log("Removido da lista. Publique de novo em cada site para valer.");
} else if (cmd === "publicar") {
  const amb = process.argv[3];
  if (!["preview", "production"].includes(amb)) { console.error("Use: publicar preview  ou  publicar production"); process.exit(1); }
  const daqui = d.usuarios.filter(pode).map(({ sites, ...u }) => u); // só quem tem acesso a ESTE site
  if (!daqui.length) { console.error("Ninguém com acesso a este site. Rode 'adicionar' antes."); process.exit(1); }
  console.log(`Publicando ${daqui.length} pessoa(s) em ${projeto}: ${daqui.map((u) => u.email).join(", ")}`);
  const valores = { ADMIN_USERS: JSON.stringify(daqui), ADMIN_SESSION_SECRET: d.segredos[projeto] };
  for (const [nome, valor] of Object.entries(valores)) {
    await new Promise((ok, falha) => {
      // o valor vai pela entrada padrão: não aparece na tela nem no histórico do shell
      const p = spawn("vercel", ["env", "add", nome, amb, "--sensitive", "--force"], { stdio: ["pipe", "inherit", "inherit"] });
      p.stdin.end(valor);
      p.on("exit", (c) => (c === 0 ? ok() : falha(new Error(`vercel env add ${nome} saiu com ${c}`))));
    });
  }
  console.log(`\nPronto: ADMIN_USERS e ADMIN_SESSION_SECRET em ${amb}. Faça um deploy novo para valer (as variáveis entram no próximo deploy).`);
} else {
  console.log("Comandos: adicionar | remover | listar | girar-sessoes | publicar preview | publicar production");
}
