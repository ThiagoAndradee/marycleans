// Fonte unica dos dados do negocio.
//
// Regra desta frente: nada aqui e inventado. Numero nao confirmado nao entra no site, fica
// listado em PENDENTE no fim do ficheiro, com a MC-Qxx que o resolve.

export const EMPRESA = {
  nome: "Mary Cleans",
  descricao: "Serviços de limpeza para alojamento local, mediação imobiliária e habitação, em Sintra e Lisboa.",
  telefone: "+351 911 872 282",
  telefoneDigitos: "351911872282",
  email: null,          // PENDENTE: email profissional do negócio
  concelhoBase: "Sintra",
};

export const WHATSAPP = (texto) =>
  `https://wa.me/${EMPRESA.telefoneDigitos}?text=${encodeURIComponent(texto)}`;

// Verticais: cada uma é uma página própria, porque é assim que o cliente procura.
export const VERTICAIS = [
  {
    slug: "alojamento-local",
    nome: "Alojamento Local",
    resumo:
      "Rotação entre hóspedes, com a casa pronta antes do próximo check-in. Troca de roupa de cama, reposição de consumíveis e relatório fotográfico em cada limpeza.",
    paraQuem: "Proprietários e gestores de casas de arrendamento de curta duração.",
  },
  {
    slug: "imobiliarias",
    nome: "Mediação Imobiliária",
    resumo:
      "Casa pronta para visita, entrega de chaves com registo fotográfico do estado, e limpeza de imóvel devoluto antes de entrar no mercado.",
    paraQuem: "Consultores imobiliários e agências.",
  },
  {
    slug: "habitacao",
    nome: "Habitação",
    resumo:
      "Limpeza de manutenção regular e limpeza profunda, em casa habitada, com a mesma equipa em todas as visitas.",
    paraQuem: "Famílias e particulares.",
  },
];

// Serviços nomeados. Duração e preço só entram quando confirmados (ver PENDENTE).
export const SERVICOS = [
  {
    slug: "limpeza-de-manutencao",
    nome: "Limpeza de Manutenção",
    descricao:
      "A limpeza regular da casa: pó, aspiração, lavagem de pavimentos, cozinha e casas de banho higienizadas.",
    frequencia: "Semanal, quinzenal ou mensal",
    inclui: [
      "Todas as divisões da casa",
      "Cozinha: bancadas, lava-louça, exterior dos electrodomésticos",
      "Casas de banho higienizadas",
      "Aspiração e lavagem de pavimentos",
      "Produtos e equipamento fornecidos por nós",
    ],
  },
  {
    slug: "rotacao-alojamento-local",
    nome: "Rotação de Alojamento Local",
    descricao:
      "A limpeza entre hóspedes, feita para caber na janela entre o check-out e o check-in seguinte.",
    frequencia: "A cada saída de hóspede",
    inclui: [
      "Limpeza completa de todas as divisões",
      "Troca de roupa de cama e toalhas, com jogo fornecido pelo imóvel",
      "Reposição de consumíveis",
      "Conferência final da casa",
      "Relatório fotográfico do estado de entrega",
    ],
  },
  {
    slug: "limpeza-profunda",
    nome: "Limpeza Profunda",
    descricao:
      "A limpeza que a de manutenção não alcança: interior de armários e electrodomésticos, rodapés, azulejo, juntas, vidros interiores.",
    frequencia: "Pontual, ou uma a duas vezes por ano",
    inclui: [
      "Interior de armários e electrodomésticos",
      "Rodapés, portas e interruptores",
      "Azulejo e juntas",
      "Vidros e caixilharia interior",
      "Descalcificação de sanitários e torneiras",
    ],
  },
  {
    slug: "limpeza-de-apresentacao",
    nome: "Limpeza de Apresentação",
    descricao:
      "Imóvel devoluto preparado para visita. O comprador decide nos primeiros minutos, antes de ver a planta.",
    frequencia: "Antes de colocar no mercado, ou antes de uma visita",
    inclui: [
      "Remoção de pó acumulado em casa fechada",
      "Vidros interiores",
      "Casas de banho e cozinha",
      "Arejamento e eliminação de odor de casa fechada",
      "Relatório fotográfico para o processo do imóvel",
    ],
  },
  {
    slug: "entrega-de-chaves",
    nome: "Entrega de Chaves",
    descricao:
      "A limpeza que antecede a entrega ao comprador ou ao arrendatário, com registo fotográfico do estado no momento da entrega.",
    frequencia: "Agendada com a escritura ou com o contrato",
    inclui: [
      "Limpeza completa após saída dos anteriores ocupantes",
      "Registo fotográfico do estado de cada divisão",
      "Nota do que encontrámos e que precisa de atenção",
    ],
  },
  {
    slug: "limpeza-pos-obra",
    nome: "Limpeza Pós-Obra",
    descricao:
      "Remoção de poeira fina de obra, resíduos de tinta, cola e cimento, em várias passagens.",
    frequencia: "Pontual, no fim da empreitada",
    inclui: [
      "Aspiração industrial de poeira fina",
      "Remoção de resíduos de tinta, cola e cimento",
      "Vidros, caixilharia e rodapés",
      "Segunda passagem depois de assentar a poeira",
    ],
  },
  {
    slug: "limpeza-pos-mudanca",
    nome: "Limpeza Pré e Pós-Mudança",
    descricao:
      "Casa vazia limpa antes de entrar, ou limpa depois de sair.",
    frequencia: "Pontual",
    inclui: [
      "Casa vazia, todas as divisões",
      "Interior de armários embutidos",
      "Marcas de móveis removidos",
    ],
  },
];

// Concelhos atendidos. Uma página por concelho, com o nome no title e na H1.
// O que não fazemos. Dizer isto no site evita a pergunta na primeira chamada e evita
// prometer o que não se entrega.
export const NAO_FAZEMOS = [
  {
    o_que: "Lavagem e engomadoria de roupa de cama e toalhas",
    porque:
      "Trocamos a roupa de cama e deixamos a usada separada, mas a lavagem e a engomadoria ficam a cargo do proprietário ou de lavandaria por ele contratada.",
  },
];

export const CONCELHOS = [
  {
    slug: "sintra",
    nome: "Sintra",
    base: true,
    freguesias: [
      "Sintra (Santa Maria e São Miguel, São Martinho e São Pedro de Penaferrim)",
      "Algueirão-Mem Martins",
      "Colares",
      "Rio de Mouro",
      "Cacém e São Marcos",
      "Queluz e Belas",
      "Massamá e Monte Abraão",
      "Agualva e Mira-Sintra",
      "Almargem do Bispo, Pêro Pinheiro e Montelavar",
      "São João das Lampas e Terrugem",
    ],
  },
  { slug: "lisboa", nome: "Lisboa", freguesias: [] },
  { slug: "cascais", nome: "Cascais", freguesias: [] },
  { slug: "oeiras", nome: "Oeiras", freguesias: [] },
  { slug: "amadora", nome: "Amadora", freguesias: [] },
];

export const TIPOLOGIAS = ["T0", "T1", "T2", "T3", "T4", "T5 ou maior", "Moradia", "Outro"];

export const FREQUENCIAS = [
  "Pontual, uma vez",
  "Semanal",
  "Quinzenal",
  "Mensal",
  "A cada saída de hóspede",
  "Contrato, a definir",
];

// O que ainda não pode ir para o site porque não está confirmado.
// Cada item corresponde a uma MC-Qxx da Fase 0 do PIPELINE em Documentos/MaryCleans/.
export const PENDENTE = {
  precos: "MC-Q02, MC-P10: tabela de preços por tipologia e por serviço",
  noturno: "MC-Q09: se a limpeza noturna é viável. Enquanto não confirmado, não é anunciada.",
  legal: "MC-Q06: NIF, denominação social e sede, para as páginas legais e a fatura",
  google: "MC-Q07: Google Business Profile e avaliações, a única prova social honesta",
  depoimentos: "MC-Q08: quais clientes aceitam ser citados pelo nome",
  email: "email profissional do negócio",
  equipa: "MC-Q05: quantas pessoas em campo, o que define capacidade",
};
