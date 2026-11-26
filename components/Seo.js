import Head from "next/head";
import { EMPRESA, CONCELHOS } from "../lib/negocio";
import { SITE, VERIFICACAO } from "../lib/site";

export { SITE };

// Imagem de partilha em 1200x630 e ~100 KB. A original (6000x4000, 1,3 MB) não gerava
// pré-visualização no WhatsApp.
const IMAGEM_PARTILHA = { src: "/og.jpg", largura: 1200, altura: 630 };

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#site`,
  url: `${SITE}/`,
  name: EMPRESA.nome,
  inLanguage: "pt-PT",
  publisher: { "@id": `${SITE}/#negocio` },
};

export default function Seo({ titulo, descricao, caminho = "/", jsonLd, noindex = false }) {
  const tituloCompleto = titulo
    ? `${titulo} | ${EMPRESA.nome}`
    : `${EMPRESA.nome} | Serviços de limpeza em Lisboa, Sintra e Cascais`;

  return (
    <Head>
      <title>{tituloCompleto}</title>
      <meta name="description" content={descricao} />
      <link rel="canonical" href={SITE + caminho} />
      {noindex ? <meta name="robots" content="noindex, follow" /> : null}
      {VERIFICACAO.google ? (
        <meta name="google-site-verification" content={VERIFICACAO.google} />
      ) : null}
      {VERIFICACAO.bing ? <meta name="msvalidate.01" content={VERIFICACAO.bing} /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={EMPRESA.nome} />
      <meta property="og:title" content={tituloCompleto} />
      <meta property="og:description" content={descricao} />
      <meta property="og:url" content={SITE + caminho} />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:image" content={SITE + IMAGEM_PARTILHA.src} />
      <meta property="og:image:width" content={String(IMAGEM_PARTILHA.largura)} />
      <meta property="og:image:height" content={String(IMAGEM_PARTILHA.altura)} />
      <meta property="og:image:alt" content={EMPRESA.nome} />
      <meta name="twitter:card" content="summary_large_image" />

      {caminho === "/" ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      ) : null}

      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </Head>
  );
}

// LocalBusiness: o que faz o negócio aparecer na busca por concelho.
// Sem avaliação e sem contagem de clientes: só entra quando existir de verdade (MC-Q07).
export const negocioJsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseCleaningService",
  "@id": `${SITE}/#negocio`,
  name: EMPRESA.nome,
  description: EMPRESA.descricao,
  telephone: EMPRESA.telefone,
  email: EMPRESA.email,
  url: SITE,
  image: SITE + IMAGEM_PARTILHA.src,
  areaServed: CONCELHOS.map((c) => ({ "@type": "City", name: c.nome })),
  address: {
    "@type": "PostalAddress",
    addressLocality: EMPRESA.concelhoBase,
    addressRegion: "Lisboa",
    addressCountry: "PT",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: EMPRESA.telefone,
    email: EMPRESA.email,
    contactType: "customer service",
    availableLanguage: "pt-PT",
  },
};
