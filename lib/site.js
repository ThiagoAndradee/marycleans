// URL base do site, num só lugar. Canonical, og:url, sitemap, robots.txt, llms.txt e
// schema saem daqui. Para mudar de domínio (ex.: www.marycleans.pt, quando existir e
// estiver ligado na Vercel), basta definir NEXT_PUBLIC_SITE_URL no projeto e publicar.
export const SITE_PADRAO = "https://marycleans.vercel.app";

export const SITE = (process.env.NEXT_PUBLIC_SITE_URL || SITE_PADRAO).replace(/\/+$/, "");

// Verificação de propriedade. O token vem do Search Console (meta tag, propriedade
// "prefixo de URL") e do Bing Webmaster Tools. Sem env definida, a meta não é gerada.
export const VERIFICACAO = {
  google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
};
