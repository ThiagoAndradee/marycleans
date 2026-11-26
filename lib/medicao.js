// Medição com consentimento (RGPD / DSGVO). Tudo começa NEGADO.
//
// Os IDs vêm das variáveis da Vercel e estão vazios de propósito: dependem das contas do
// Thiago (Google Analytics 4, Google Ads e Meta). Sem nenhum ID definido:
//   - não carrega script de terceiros nenhum;
//   - não aparece banner (não há nada para consentir);
//   - os pontos de conversão só escrevem no dataLayer da própria página, sem cookies.
// Com um ID definido, aparece o banner. Só depois de "Aceitar" é que o gtag.js ou o pixel
// da Meta são carregados (modo básico do Consent Mode v2: nada sai antes do sim).
export const MEDICAO = {
  ga4: process.env.NEXT_PUBLIC_GA4_ID || "", // ex.: G-XXXXXXX
  googleAds: process.env.NEXT_PUBLIC_GADS_ID || "", // ex.: AW-123456789
  // Etiquetas de conversão do Google Ads (Ferramentas > Conversões), uma por ação
  adsEtiquetas: {
    lead_orcamento: process.env.NEXT_PUBLIC_GADS_LABEL_ORCAMENTO || "",
    lead_proposta: process.env.NEXT_PUBLIC_GADS_LABEL_PROPOSTA || "",
    clique_whatsapp: process.env.NEXT_PUBLIC_GADS_LABEL_WHATSAPP || "",
    clique_telefone: process.env.NEXT_PUBLIC_GADS_LABEL_TELEFONE || "",
  },
  metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};

export const TEM_MEDICAO = Boolean(MEDICAO.ga4 || MEDICAO.googleAds || MEDICAO.metaPixel);

export const CHAVE_CONSENTIMENTO = "mc-consentimento-v1"; // "aceite" | "recusado"

// Corre no <head> antes de tudo: estado por omissão NEGADO para todas as finalidades.
// Se a pessoa já aceitou noutra visita, atualiza para concedido (e os scripts entram depois).
export const SCRIPT_CONSENTIMENTO = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500});
gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',false);
try{if(localStorage.getItem('${CHAVE_CONSENTIMENTO}')==='aceite'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'})}}catch(e){}`;

export function escolhaGuardada() {
  try {
    return localStorage.getItem(CHAVE_CONSENTIMENTO);
  } catch {
    return null;
  }
}

function carregar(src) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

// Só é chamada depois de "Aceitar" (agora ou numa visita anterior).
export function carregarEtiquetas() {
  if (typeof window === "undefined" || window.__mcEtiquetas) return;
  window.__mcEtiquetas = true;
  const gtag = window.gtag;
  const idGoogle = MEDICAO.ga4 || MEDICAO.googleAds;
  if (idGoogle && gtag) {
    carregar(`https://www.googletagmanager.com/gtag/js?id=${idGoogle}`);
    gtag("js", new Date());
    if (MEDICAO.ga4) gtag("config", MEDICAO.ga4, { anonymize_ip: true });
    if (MEDICAO.googleAds) gtag("config", MEDICAO.googleAds);
  }
  if (MEDICAO.metaPixel) {
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
    })(window, document);
    /* eslint-enable */
    carregar("https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", MEDICAO.metaPixel);
    window.fbq("track", "PageView");
  }
}

export function definirConsentimento(aceite) {
  try {
    localStorage.setItem(CHAVE_CONSENTIMENTO, aceite ? "aceite" : "recusado");
  } catch {}
  const v = aceite ? "granted" : "denied";
  if (window.gtag)
    window.gtag("consent", "update", {
      ad_storage: v,
      ad_user_data: v,
      ad_personalization: v,
      analytics_storage: v,
    });
  if (aceite) carregarEtiquetas();
  else if (window.fbq) window.fbq("consent", "revoke");
}

// Evento de Meta por ponto de conversão
const META = {
  lead_orcamento: "Lead",
  lead_proposta: "Lead",
  clique_whatsapp: "Contact",
  clique_telefone: "Contact",
  clique_email: "Contact",
};

// Ponto de conversão. Escreve sempre no dataLayer (fica na página, não sai dela).
// Só chega ao Google ou à Meta se houver ID e a pessoa tiver aceitado.
export function conversao(nome, dados = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: nome, pagina: window.location.pathname, ...dados });
  if (escolhaGuardada() !== "aceite") return;
  if (window.gtag && MEDICAO.ga4) window.gtag("event", nome, dados);
  const etiqueta = MEDICAO.adsEtiquetas[nome];
  if (window.gtag && MEDICAO.googleAds && etiqueta)
    window.gtag("event", "conversion", { send_to: `${MEDICAO.googleAds}/${etiqueta}` });
  if (window.fbq && MEDICAO.metaPixel && META[nome]) window.fbq("track", META[nome]);
}

// Cliques em WhatsApp, telefone e email, em qualquer parte do site (um só ouvinte).
export function ouvirCliquesDeContacto() {
  const tratar = (e) => {
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (href.startsWith("https://wa.me/")) conversao("clique_whatsapp");
    else if (href.startsWith("tel:")) conversao("clique_telefone");
    else if (href.startsWith("mailto:")) conversao("clique_email");
  };
  document.addEventListener("click", tratar, { capture: true });
  return () => document.removeEventListener("click", tratar, { capture: true });
}
