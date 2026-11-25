// Índice leve das páginas de serviço por zona: só o que o rodapé e os componentes de cliente
// precisam. O conteúdo completo está em lib/seo-paginas.js e só é lido no build
// (getStaticProps), para não ir para o JavaScript de todas as páginas.
// O prebuild (scripts-sitemap.mjs) falha se este índice e o conteúdo deixarem de coincidir.

export const SEO_DATA = "2026-11-25";

export const GRUPOS_SEO = {
  lisboa: "Lisboa",
  bairro: "Alojamento local por bairro de Lisboa",
  area: "Sintra e Cascais",
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
];
