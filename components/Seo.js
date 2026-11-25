import Head from "next/head";
import { EMPRESA, CONCELHOS } from "../lib/negocio";

const SITE = "https://www.marycleans.pt"; // PENDENTE MC-Q10: domínio definitivo

export default function Seo({ titulo, descricao, caminho = "/", jsonLd }) {
  const tituloCompleto = titulo
    ? `${titulo} | ${EMPRESA.nome}`
    : `${EMPRESA.nome} | Serviços de limpeza em Lisboa, Sintra e Cascais`;

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
      <meta name="twitter:card" content="summary" />

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
  name: EMPRESA.nome,
  description: EMPRESA.descricao,
  telephone: EMPRESA.telefone,
  url: SITE,
  areaServed: CONCELHOS.map((c) => ({ "@type": "City", name: c.nome })),
  address: {
    "@type": "PostalAddress",
    addressLocality: EMPRESA.concelhoBase,
    addressCountry: "PT",
  },
};
