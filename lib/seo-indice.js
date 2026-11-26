// Índice leve das páginas de serviço por zona: só o que o rodapé e os componentes de cliente
// precisam. O conteúdo completo está em lib/seo-paginas.js e só é lido no build
// (getStaticProps), para não ir para o JavaScript de todas as páginas.
// O prebuild (scripts-sitemap.mjs) falha se este índice e o conteúdo deixarem de coincidir.

export const SEO_DATA = "2026-11-26";

export const GRUPOS_SEO = {
  lisboa: "Lisboa",
  bairro: "Alojamento local por bairro de Lisboa",
  area: "Sintra, Cascais, Oeiras e Amadora",
  perfil: "Para quem gere imóveis",
};

export const INDICE_SEO = [
  { slug: "limpeza-alojamento-local-lisboa", grupo: "lisboa", rotulo: "Limpeza de alojamento local em Lisboa" },
  { slug: "empresa-de-limpeza-lisboa", grupo: "lisboa", rotulo: "Empresa de limpeza em Lisboa" },
  { slug: "limpeza-pos-obra-lisboa", grupo: "lisboa", rotulo: "Limpeza pós-obra em Lisboa" },
  { slug: "limpeza-para-venda-de-casa-lisboa", grupo: "lisboa", rotulo: "Limpeza para venda de casa em Lisboa" },
  { slug: "limpeza-pos-mudanca-lisboa", grupo: "lisboa", rotulo: "Limpeza pós-mudança em Lisboa" },
  { slug: "contrato-limpeza-alojamento-local", grupo: "lisboa", rotulo: "Contrato de limpeza para vários alojamentos" },
  { slug: "limpeza-alojamento-local-alfama-baixa-chiado", grupo: "bairro", rotulo: "Alfama, Baixa e Chiado" },
  { slug: "limpeza-alojamento-local-bairro-alto-cais-do-sodre", grupo: "bairro", rotulo: "Bairro Alto e Cais do Sodré" },
  { slug: "limpeza-alojamento-local-graca-sao-vicente", grupo: "bairro", rotulo: "Graça e São Vicente" },
  { slug: "limpeza-alojamento-local-arroios-anjos", grupo: "bairro", rotulo: "Arroios e Anjos" },
  { slug: "limpeza-alojamento-local-estrela-campo-de-ourique", grupo: "bairro", rotulo: "Estrela e Campo de Ourique" },
  { slug: "limpeza-alojamento-local-parque-das-nacoes", grupo: "bairro", rotulo: "Parque das Nações" },
  { slug: "limpeza-alojamento-local-sintra", grupo: "area", rotulo: "Limpeza de alojamento local em Sintra" },
  { slug: "limpeza-alojamento-local-cascais", grupo: "area", rotulo: "Limpeza de alojamento local em Cascais" },
  { slug: "empresa-de-limpeza-sintra", grupo: "area", rotulo: "Empresa de limpeza em Sintra" },
  { slug: "limpeza-alojamento-local-belem-ajuda", grupo: "bairro", rotulo: "Belém e Ajuda" },
  { slug: "limpeza-alojamento-local-santos-lapa-madragoa", grupo: "bairro", rotulo: "Santos, Lapa e Madragoa" },
  { slug: "limpeza-alojamento-local-principe-real-avenida", grupo: "bairro", rotulo: "Príncipe Real e Avenida da Liberdade" },
  { slug: "limpeza-alojamento-local-avenidas-novas", grupo: "bairro", rotulo: "Avenidas Novas e Saldanha" },
  { slug: "limpeza-alojamento-local-oeiras-carcavelos", grupo: "area", rotulo: "Alojamento local em Oeiras e Carcavelos" },
  { slug: "limpeza-alojamento-local-colares-praias-sintra", grupo: "area", rotulo: "Alojamento local nas praias de Sintra" },
  { slug: "empresa-de-limpeza-cascais", grupo: "area", rotulo: "Empresa de limpeza em Cascais" },
  { slug: "empresa-de-limpeza-oeiras", grupo: "area", rotulo: "Empresa de limpeza em Oeiras" },
  { slug: "empresa-de-limpeza-amadora", grupo: "area", rotulo: "Empresa de limpeza na Amadora" },
  { slug: "limpeza-profunda-lisboa", grupo: "lisboa", rotulo: "Limpeza profunda em Lisboa" },
  { slug: "limpeza-de-manutencao-lisboa", grupo: "lisboa", rotulo: "Limpeza regular de casa em Lisboa" },
  { slug: "limpeza-fim-de-arrendamento-lisboa", grupo: "lisboa", rotulo: "Limpeza de fim de arrendamento" },
  { slug: "limpeza-para-gestores-de-alojamento-local", grupo: "perfil", rotulo: "Para gestores de alojamento local" },
];
