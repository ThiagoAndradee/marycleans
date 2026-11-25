import Head from "next/head";
import { EMPRESA, CONCELHOS } from "../lib/negocio";
import imagemPartilha from "../assets/cleaningImgFour.jpg";

export const SITE = "https://www.marycleans.pt"; // PENDENTE MC-Q10: domínio definitivo

export default function Seo({ titulo, descricao, caminho = "/", jsonLd }) {
  const tituloCompleto = titulo
    ? `${titulo} | ${EMPRESA.nome}`
    : `${EMPRESA.nome} | Serviços de limpeza em Lisboa`;

  return (
    <Head>
      <title>{tituloCompleto}</title>
      <meta name="description" content={descricao} />
      <link rel="canonical" href={SITE + caminho} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={EMPRESA.nome} />
      <meta property="og:title" content={tituloCompleto} />
      <meta property="og:description" content={descricao} />
      <meta property="og:url" content={SITE + caminho} />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:image" content={SITE + imagemPartilha.src} />
      <meta name="twitter:card" content="summary_large_image" />

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
  url: SITE,
  image: SITE + imagemPartilha.src,
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
    contactType: "customer service",
    availableLanguage: "pt-PT",
  },
};
