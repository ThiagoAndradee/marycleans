# /admin: CRM com login forte

Mesmo código nos três sites (Want3D, Lacre Cargas, Mary Cleans), na branch `admin-crm` de cada repo. Só muda `lib/admin/site.js` (nome, moeda, motivos de perda, como o formulário vira lead).

## Peças

| Arquivo | O que faz |
|---|---|
| `lib/admin/auth.js` | Login (e-mail + senha + 2FA TOTP), sessão, CSRF, limites, log. `exigir()` protege qualquer rota. |
| `lib/admin/crm.js` | Leads, funil, notas, propostas, importação CSV, métricas, backup. `handlerFormulario` recebe o formulário do site. |
| `lib/admin/store.js` | Upstash Redis (o mesmo banco do Analytics, um para os 3 sites, prefixo `admin:<site>:`), ou Vercel Blob privado se não houver Redis. Só servidor. Local: `ADMIN_STORE_DIR=/pasta`. Gravação com etag atômica (duas pessoas ao mesmo tempo não se atropelam). |
| `lib/admin/http.js`, `totp.js`, `csv.js` | Utilidades, sem dependência externa. |
| `api/admin-auth`, `api/admin-crm` (e `api/lead` onde há formulário) | Rotas. |
| `/admin/` (`admin-ui/` ou `public/admin/`) | Interface estática. Não tem dado nenhum: tudo vem da API depois do login. |
| `scripts/admin-usuarios.mjs` | Quem pode entrar. Gera hash da senha e chave do 2FA e grava na Vercel sem mostrar. |
| `scripts/admin-teste-seguranca.mjs` | Teste automático (sem login, injeção, IDOR, CSRF, força bruta). |

Chaves (Redis `admin:<site>:...`, ou Blob `admin/...`): `crm/leads.json` (gzip no Redis), `_auth/sessoes/` (13 h), `_auth/falhas/` e `_auth/limite/` (1 h), `_auth/totp/` (1 dia), `_log/AAAA-MM-DD.json` (400 dias).

## Variáveis (Vercel, nunca no git)

- `KV_REST_API_URL` e `KV_REST_API_TOKEN`: aparecem sozinhas quando o Upstash Redis (Marketplace, plano grátis, Frankfurt) é ligado ao projeto. O mesmo banco do Analytics, ligado aos 3 projetos. Sem Redis, usa `BLOB_READ_WRITE_TOKEN` (a Want3D já tem).
- `ADMIN_USERS` e `ADMIN_SESSION_SECRET`: `node scripts/admin-usuarios.mjs adicionar` (uma vez por pessoa, vale para os 3 sites) e `publicar preview` dentro da pasta de cada site.
- Tirar alguém: `remover` e `publicar` de novo. A pessoa perde o acesso no próximo deploy, mesmo com sessão aberta.
- Derrubar todas as sessões: `node scripts/admin-usuarios.mjs girar-sessoes`, publique e faça deploy.

- `ADMIN_PRODUCAO=1` (só em Production, depois do ok do Thiago): sem ela, em produção as rotas do admin dão 404 e o formulário não grava lead. Um deploy de produção por engano não liga o CRM.

## Proteger uma rota nova (ex.: Analytics)

```js
// api/minha-rota.js
const auth = require("../lib/admin/auth");
module.exports = async (req, res) => {
  const s = await auth.exigir(req, res, { escrita: req.method !== "GET" });
  if (!s) return;                  // 401 ou 403 já foi respondido
  // s.email, s.nome. Para escrita, o front manda o cabeçalho X-CSRF-Token (vem de GET /api/admin-auth?op=eu).
};
```

Na página: chame `GET /api/admin-auth?op=eu`. 401 = mande para `/admin/` (tela de login). 200 = `{ email, nome, csrf }`.
Quem só precisa saber se está logado (sem resposta automática): `const s = await auth.sessao(req)` (null = não está).
Registrar algo no log de acessos: `await auth.log(req, s.email, "analytics_exportar")`.
Analytics (branch `analytics`): em `lib/analytics.js`, troque o login provisório pelo do admin. Onde está `if (!authOk(req, cfg))`, use
`if (!(await require("./admin/auth").sessao(req)))`, e no lugar da tela de senha própria mande para `/admin/` (é lá que se entra).
Para exportar/apagar algo, use `auth.exigir(req, res, { escrita: true })` e mande `X-CSRF-Token`. Aí `ANALYTICS_ADMIN_PASSWORD` deixa de ser preciso.
Nova aba no menu do CRM: em `lib/admin/site.js`, `abas: [{ nome, href }]`. A aba "Analytics" já aponta para `/admin/analytics`.

## Testar localmente

```bash
ADMIN_STORE_DIR=/tmp/admin-teste ADMIN_USERS='[...]' ADMIN_SESSION_SECRET=... node <servidor>
node scripts/admin-teste-seguranca.mjs http://localhost:PORTA   # com ADMIN_TESTE_EMAIL/SENHA/TOTP para os testes logados
```

## Checklist de segurança

- [x] Nenhum dado pessoal no front estático: `/admin/` é só HTML/JS/CSS; leads só pela API com sessão.
- [x] Dados em banco gerenciado (Upstash Redis ou Blob privado), token só no servidor; chaves montadas só com hash ou nomes fixos (sem entrada do usuário); cada site no seu prefixo.
- [x] Login só para e-mails da lista `ADMIN_USERS`; senha scrypt (N=32768) + 2FA TOTP obrigatório; código de 6 dígitos não vale duas vezes.
- [x] Mensagem de erro igual para e-mail inexistente, senha errada e código errado; scrypt roda mesmo sem usuário (tempo igual).
- [x] 5 erros no mesmo e-mail: bloqueio de 15 min. 10 tentativas por IP em 15 min: 429.
- [x] Sessão em cookie `__Host-adm`, HttpOnly, Secure, SameSite=Strict, 12 h, registrada no servidor (logout invalida de verdade).
- [x] CSRF: escrita exige mesma origem (Origin/Sec-Fetch-Site) e `X-CSRF-Token` (HMAC da sessão).
- [x] Cabeçalhos: CSP sem `unsafe-inline` e com `frame-ancestors 'none'`, X-Frame-Options DENY, HSTS, nosniff, Referrer-Policy no-referrer, no-store, X-Robots-Tag noindex.
- [x] `/admin/` com noindex e bloqueado no robots.txt.
- [x] XSS: a interface usa só `textContent`; links só `http(s)` com `rel=noopener noreferrer`.
- [x] Injeção: sem SQL; JSON com lista fixa de campos e tamanho máximo; `__proto__`/`constructor` ignorados; CSV exportado neutraliza fórmulas (`=`, `+`, `-`, `@`).
- [x] IDOR: ids aleatórios de 72 bits; todo acesso passa pela sessão; o cookie de um site não vale no outro (segredo diferente).
- [x] Formulário público (`/api/lead`): só mesma origem, honeypot, 20 por hora por IP, 16 KB, campos limitados. Falha do CRM nunca derruba o envio do e-mail.
- [x] Log de acessos (login, falha, bloqueio, logout, cada alteração, exportação) na aba Acessos.
- [x] Backup: JSON completo e CSV na aba "Importar e backup". Nada é apagado: lead sai com "Arquivar".
- [ ] Ainda depende do Thiago: ligar o Upstash Redis aos projetos, cadastrar as pessoas, publicar as variáveis, aprovar produção.
