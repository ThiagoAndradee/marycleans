// Títulos e descrições acertados ao tamanho que o Google mostra (título até 60 caracteres,
// descrição entre 70 e 160), conforme a auditoria de 26/11/2026 (onpage-8020_todas.csv).
//
// Ficam aqui, por caminho, para não mexer nos ficheiros de conteúdo (lib/seo-paginas.js e
// lib/blog.js) que outras frentes estão a editar. O <h1> e o texto da página não mudam:
// só o <title>, a meta description e o og:title/og:description.
// Quando o texto de origem já couber, apague a linha daqui.
export const META_AJUSTES = {
  // Posts: o título do artigo (h1) continua longo; o <title> fica com o essencial.
  // O primeiro deixa de disputar "limpeza de alojamento local Lisboa" com a página de serviço.
  "/blog/limpeza-alojamento-local-lisboa": {
    titulo: "Rotação entre hóspedes no alojamento local: como funciona",
    descricao:
      "O que entra numa limpeza entre hóspedes em Lisboa, Sintra ou Cascais, quanto tempo pede a janela entre check-out e check-in e o que perguntar ao contratar.",
  },
  "/blog/checklist-check-out-alojamento-local": {
    titulo: "Checklist de check-out do alojamento local por divisão",
  },
  "/blog/limpeza-para-vender-casa": {
    titulo: "Limpeza para vender casa: preparar o imóvel para visitas",
  },
  "/limpeza-alojamento-local-santos-lapa-madragoa": {
    descricao:
      "Limpeza entre hóspedes em Santos, na Lapa e na Madragoa: prédios pombalinos, escadas íngremes e soalho antigo. Relatório fotográfico em cada saída.",
  },
  "/limpeza-alojamento-local-principe-real-avenida": {
    descricao:
      "Limpeza entre hóspedes no Príncipe Real, na Avenida da Liberdade e no Rato: apartamentos de gama alta e acabamentos delicados. Relatório fotográfico.",
  },
  "/limpeza-alojamento-local-avenidas-novas": {
    descricao:
      "Limpeza entre hóspedes nas Avenidas Novas, no Saldanha e no Areeiro: estadias de trabalho, prédios com elevador e saídas a meio da semana.",
  },
  "/limpeza-alojamento-local-oeiras-carcavelos": {
    descricao:
      "Limpeza entre hóspedes em Oeiras, Carcavelos, Paço de Arcos e Algés: casas de praia, areia e salitre. Troca de roupa de cama e relatório fotográfico.",
  },
  "/limpeza-alojamento-local-colares-praias-sintra": {
    descricao:
      "Limpeza entre hóspedes na Praia das Maçãs, Azenhas do Mar, Colares e Praia Grande: casas de férias e humidade do mar. Relatório fotográfico.",
  },
  "/empresa-de-limpeza-cascais": {
    descricao:
      "Empresa de limpeza em Cascais, Estoril e Parede: casas habitadas, moradias, imóveis para venda e alojamento local. Preço fechado e sempre a mesma equipa.",
  },
  "/empresa-de-limpeza-oeiras": {
    descricao:
      "Empresa de limpeza em Oeiras, Carcavelos, Linda-a-Velha e Algés: casa habitada, limpeza profunda e pós-mudança. Preço fechado e a mesma equipa.",
  },
  "/limpeza-para-gestores-de-alojamento-local": {
    descricao:
      "Parceiro de limpeza para gestoras de alojamento local em Lisboa, Sintra e Cascais: preço fechado por imóvel, relatório fotográfico e calendário fixo.",
  },
};
