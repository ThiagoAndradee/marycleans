// Guias para anfitriões e gestores de alojamento local (26/11/2026).
//
// Regras desta frente, as mesmas de lib/negocio.js:
// - nada inventado sobre a Mary Cleans: sem preço, sem número de clientes, sem limpeza noturna,
//   sem lavandaria, sem gestão de chaves como serviço;
// - o que se diz da lei vem do Decreto-Lei n.º 128/2014 (regime do alojamento local, com as
//   alterações até ao Decreto-Lei n.º 76/2024) e das páginas do Turismo de Portugal e das câmaras,
//   sempre com a fonte no fim e com a indicação de confirmar na câmara, porque as regras mudam;
// - nada de números de plataforma (Airbnb, Booking) que não estejam publicados por elas.
//
// Formato do corpo: blocos { t: "h2" | "h3" | "p" | "lista", x }. [rótulo](/caminho) vira link.

export const GUIAS_DATA = "2026-11-26";

export const CATEGORIAS_GUIAS = {
  regras: "Regras e obrigações",
  operacao: "Operação da limpeza",
  casa: "Cuidar do imóvel",
};

const DL128 = {
  rotulo: "Decreto-Lei n.º 128/2014 (Diário da República)",
  url: "https://diariodarepublica.pt/dr/detalhe/decreto-lei/128-2014-56384880",
};
const TP_AL = {
  rotulo: "Turismo de Portugal: Alojamento Local",
  url: "https://business.turismodeportugal.pt/pt/Planear_Iniciar/Licenciamento_Registo_da_Atividade/Alojamento_Local/Paginas/default.aspx",
};
const RNT = { rotulo: "Registo Nacional de Turismo (RNAL)", url: "https://rnt.turismodeportugal.pt/" };
const DL76 = {
  rotulo: "Decreto-Lei n.º 76/2024 (Diário da República)",
  url: "https://diariodarepublica.pt/dr/detalhe/decreto-lei/76-2024-892301177",
};
const CASCAIS_REQ = {
  rotulo: "Câmara Municipal de Cascais: requisitos do alojamento local",
  url: "https://www.cascais.pt/sites/default/files/anexos/gerais/new/requisitos_al_1.pdf",
};
const LIVRO = { rotulo: "Livro de Reclamações Eletrónico", url: "https://www.livroreclamacoes.pt/" };
const AIRBNB_AJUDA = { rotulo: "Centro de Ajuda do Airbnb", url: "https://www.airbnb.pt/help" };
const BOOKING_PARCEIROS = { rotulo: "Booking.com Partner Hub", url: "https://partner.booking.com/pt-pt" };
const CML = { rotulo: "Câmara Municipal de Lisboa", url: "https://www.lisboa.pt/" };

export const GUIAS = [
  // ───────────────────────── Regras e obrigações ─────────────────────────
  {
    slug: "regras-alojamento-local-portugal",
    categoria: "regras",
    rotulo: "Regras do alojamento local em Portugal",
    titulo: "Regras do Alojamento Local em Portugal",
    h1: "Regras do alojamento local em Portugal: o que o anfitrião tem de cumprir",
    descricao:
      "Registo, número no anúncio, capacidade, requisitos da casa, segurança, seguro e livro de reclamações. O regime do alojamento local, com fontes oficiais.",
    resposta:
      "Para explorar um alojamento local em Portugal é preciso registar o estabelecimento no Balcão Único Eletrónico, ter o número de registo em todos os anúncios, cumprir os requisitos gerais e de segurança do Decreto-Lei n.º 128/2014 e manter a casa em condições de higiene e limpeza. As câmaras podem ter regras próprias, como áreas de contenção, por isso confirme sempre na câmara do imóvel.",
    corpo: [
      {
        t: "p",
        x: "Este guia resume as obrigações que mais pesam no dia a dia de quem tem um alojamento local em Lisboa, Sintra ou Cascais. Não substitui a lei nem um jurista. As regras mudaram em 2023 e voltaram a mudar em 2024, e cada câmara pode acrescentar as suas. No fim estão as fontes oficiais.",
      },
      { t: "h2", x: "Registo e número no anúncio" },
      {
        t: "p",
        x: "O alojamento local só pode funcionar depois de registado. O registo é uma comunicação prévia feita eletronicamente no Balcão Único Eletrónico (ePortugal). A câmara municipal pode opor-se dentro do prazo, que é mais longo nas áreas de contenção. O documento com o número de registo é o título que permite abrir ao público e anunciar.",
      },
      {
        t: "lista",
        x: [
          "Não é permitido anunciar nem intermediar um alojamento sem registo ou com o registo desatualizado.",
          "As plataformas, como o Airbnb e o Booking, têm de pedir e mostrar o número de registo no RNAL.",
          "Qualquer pessoa pode consultar o registo no Registo Nacional de Turismo.",
        ],
      },
      { t: "h2", x: "Modalidades e capacidade" },
      {
        t: "p",
        x: "O regime distingue moradia, apartamento, estabelecimento de hospedagem (incluindo hostel) e quartos. Com exceção dos hostels, a capacidade máxima é de nove quartos e trinta utentes. Há também um limite ao número de apartamentos em alojamento local que o mesmo titular pode explorar por edifício.",
      },
      { t: "h2", x: "Requisitos da casa" },
      {
        t: "p",
        x: "Os requisitos gerais são os que se verificam numa vistoria e os que um hóspede nota primeiro. A casa deve:",
      },
      {
        t: "lista",
        x: [
          "Ter instalações e equipamentos em bom estado de conservação e a funcionar",
          "Estar ligada à rede de água e de esgotos, ou a sistemas próprios controlados",
          "Ter água corrente quente e fria",
          "Reunir sempre condições de higiene e limpeza",
          "Ter, em cada quarto, janela ou sacada para o exterior, mobiliário e equipamento adequados, forma de escurecer o quarto e porta com sistema que garanta a privacidade",
          "Ter casas de banho com sistema que garanta a privacidade",
        ],
      },
      {
        t: "p",
        x: "A condição de higiene e limpeza não tem uma frequência fixada na lei para o alojamento local, mas tem de se verificar sempre. Na prática, isso quer dizer uma limpeza completa a cada mudança de hóspede. O que deve entrar nessa limpeza está na [checklist de check-out](/blog/checklist-check-out-alojamento-local).",
      },
      { t: "h2", x: "Segurança" },
      {
        t: "p",
        x: "Num alojamento com capacidade até dez utentes, a lei pede extintor e manta de incêndio acessíveis aos hóspedes, equipamento de primeiros socorros acessível e o número de emergência 112 afixado em local visível. Acima de dez utentes aplicam-se as regras gerais de segurança contra incêndio em edifícios. O detalhe e o que se costuma verificar estão no guia de [vistoria ao alojamento local](/guias/vistoria-alojamento-local).",
      },
      { t: "h2", x: "Outras obrigações do dia a dia" },
      {
        t: "lista",
        x: [
          "Seguro: a lei exige um seguro que cubra a responsabilidade civil e os danos no imóvel ligados à atividade. Confirme com a sua seguradora que a apólice está em nome do titular e válida para alojamento local.",
          "Livro de reclamações: o alojamento local está obrigado ao livro de reclamações, em papel e no formato eletrónico.",
          "Hóspedes estrangeiros: a estadia de cidadãos estrangeiros tem de ser comunicada às autoridades através do SIBA, o sistema de boletins de alojamento.",
          "Taxa turística: Lisboa, Sintra e Cascais cobram taxa municipal turística por noite. Os valores, as isenções e a forma de entrega estão no site de cada câmara.",
          "Placa identificativa: é obrigatória apenas nos estabelecimentos de hospedagem.",
        ],
      },
      { t: "h2", x: "Câmaras e áreas de contenção" },
      {
        t: "p",
        x: "O Decreto-Lei n.º 76/2024 alterou o regime e deu mais peso às câmaras, que podem aprovar regulamentos próprios e definir áreas de contenção onde novos registos ficam limitados. Lisboa tem áreas de contenção definidas em regulamento municipal desde 2019, e as regras municipais têm sido revistas. Antes de comprar um imóvel para alojamento local, ou de registar um novo, confirme na câmara o estado da freguesia e da rua.",
      },
      {
        t: "p",
        x: "Para a parte da limpeza que a lei pede, veja também [obrigações de limpeza no alojamento local](/guias/obrigacoes-limpeza-alojamento-local).",
      },
    ],
    faq: [
      {
        p: "Preciso de licença para ter um alojamento local?",
        r: "Precisa de registo. O registo faz-se por comunicação prévia no Balcão Único Eletrónico e dá um número que tem de constar em todos os anúncios.",
      },
      {
        p: "Posso anunciar no Airbnb antes de ter o número de registo?",
        r: "Não. A lei proíbe anunciar um alojamento local sem registo, e as plataformas têm de mostrar o número de registo no anúncio.",
      },
      {
        p: "Quantos hóspedes pode ter um alojamento local?",
        r: "Com exceção dos hostels, até nove quartos e trinta utentes. A capacidade de cada imóvel é a que consta do registo.",
      },
      {
        p: "As regras são iguais em Lisboa, Sintra e Cascais?",
        r: "O regime nacional é o mesmo, mas cada câmara pode ter regulamento próprio, áreas de contenção e taxa turística diferente. Confirme na câmara do imóvel.",
      },
    ],
    fontes: [DL128, DL76, TP_AL, RNT, LIVRO],
    ligacoes: [
      { href: "/guias/vistoria-alojamento-local", rotulo: "Vistoria ao alojamento local" },
      { href: "/guias/obrigacoes-limpeza-alojamento-local", rotulo: "Obrigações de limpeza no alojamento local" },
      { href: "/guias/preparar-alojamento-local-primeiro-hospede", rotulo: "Preparar a casa para o primeiro hóspede" },
      { href: "/limpeza-alojamento-local-lisboa", rotulo: "Limpeza de alojamento local em Lisboa" },
    ],
  },
  {
    slug: "vistoria-alojamento-local",
    categoria: "regras",
    rotulo: "Vistoria ao alojamento local",
    titulo: "Vistoria ao Alojamento Local: o que se Verifica",
    h1: "Vistoria ao alojamento local: o que se verifica e como preparar a casa",
    descricao:
      "O que uma vistoria ao alojamento local verifica: requisitos da casa, extintor, manta, primeiros socorros, 112 e livro de reclamações. Lista para preparar.",
    resposta:
      "Numa vistoria ao alojamento local verifica-se se a casa cumpre os requisitos gerais e de segurança do Decreto-Lei n.º 128/2014: conservação, água quente e fria, janela para o exterior em cada quarto, privacidade, higiene e limpeza, extintor e manta de incêndio, primeiros socorros e o 112 afixado. A câmara e a ASAE podem fiscalizar a qualquer momento, por isso a casa deve estar sempre nesse estado.",
    corpo: [
      {
        t: "p",
        x: "Há duas vistorias que importam a um anfitrião. A das autoridades, que pode acontecer depois do registo ou numa fiscalização, e a que o próprio anfitrião, ou quem limpa por ele, faz em cada rotação. A segunda é o que garante que a primeira corre bem.",
      },
      { t: "h2", x: "Quem fiscaliza" },
      {
        t: "p",
        x: "A câmara municipal pode fazer vistorias para verificar os requisitos do alojamento local, e a ASAE fiscaliza o funcionamento dos estabelecimentos. As coimas e o eventual cancelamento do registo estão previstos no regime do alojamento local. O que se segue é a lista dos requisitos que normalmente se confirmam.",
      },
      { t: "h2", x: "Lista para preparar uma vistoria" },
      { t: "h3", x: "Segurança (até dez utentes)" },
      {
        t: "lista",
        x: [
          "Extintor acessível aos hóspedes, dentro do prazo de manutenção indicado na etiqueta",
          "Manta de incêndio acessível, normalmente na cozinha",
          "Equipamento de primeiros socorros completo e dentro da validade",
          "Número de emergência 112 afixado em local visível",
        ],
      },
      { t: "h3", x: "Casa e quartos" },
      {
        t: "lista",
        x: [
          "Instalações e equipamentos a funcionar: torneiras, autoclismos, esquentador ou termoacumulador, eletrodomésticos e iluminação",
          "Água quente e fria em todas as casas de banho e na cozinha",
          "Janela ou sacada para o exterior em cada quarto, que abra e permita arejar",
          "Estores, portadas ou cortinas que escureçam o quarto",
          "Portas dos quartos e das casas de banho com fecho que garanta privacidade",
          "Mobiliário e utensílios em bom estado",
          "Casa limpa e arrumada, sem bolor visível, sem cheiros e sem pragas",
        ],
      },
      { t: "h3", x: "Documentos e informação" },
      {
        t: "lista",
        x: [
          "Comprovativo do registo e número de registo igual ao dos anúncios",
          "Livro de reclamações disponível e informação sobre o livro eletrónico",
          "Apólice de seguro válida para a atividade",
          "Placa identificativa, só nos estabelecimentos de hospedagem",
        ],
      },
      { t: "h2", x: "A vistoria de cada rotação" },
      {
        t: "p",
        x: "Quem limpa é quem mais vezes entra na casa. Numa rotação bem feita, a conferência final é também uma pequena vistoria: confirma-se que o extintor e a manta estão no sítio, que o kit de primeiros socorros não foi usado sem reposição, que as fechaduras funcionam e que não há fugas, bolor ou estragos novos. Na Mary Cleans essa conferência termina com um relatório fotográfico enviado ao proprietário, com o que precisa de atenção.",
      },
      {
        t: "p",
        x: "O relatório também serve de prova perante a plataforma quando um hóspede deixa danos, porque mostra o estado da casa antes e depois da estadia. Para a lista completa da limpeza de saída, veja a [checklist de check-out](/blog/checklist-check-out-alojamento-local).",
      },
    ],
    faq: [
      {
        p: "A câmara faz sempre vistoria depois do registo?",
        r: "A câmara pode fazer vistoria para verificar os requisitos, e a ASAE pode fiscalizar a qualquer momento. O mais seguro é manter a casa sempre conforme.",
      },
      {
        p: "Que equipamento de segurança é obrigatório num apartamento em alojamento local?",
        r: "Até dez utentes: extintor e manta de incêndio acessíveis, equipamento de primeiros socorros acessível e o 112 afixado em local visível.",
      },
      {
        p: "A empresa de limpeza pode verificar estes pontos?",
        r: "Pode conferi-los em cada rotação e avisar o proprietário. A Mary Cleans inclui essa conferência na lista do imóvel e no relatório fotográfico. A manutenção do extintor e as reparações ficam com o proprietário.",
      },
    ],
    fontes: [DL128, CASCAIS_REQ, TP_AL, LIVRO],
    ligacoes: [
      { href: "/guias/regras-alojamento-local-portugal", rotulo: "Regras do alojamento local em Portugal" },
      { href: "/guias/obrigacoes-limpeza-alojamento-local", rotulo: "Obrigações de limpeza no alojamento local" },
      { href: "/blog/checklist-check-out-alojamento-local", rotulo: "Checklist de check-out" },
      { href: "/servicos/alojamento-local", rotulo: "Limpeza de alojamento local" },
    ],
  },
  {
    slug: "obrigacoes-limpeza-alojamento-local",
    categoria: "regras",
    rotulo: "Obrigações de limpeza no alojamento local",
    titulo: "Obrigações de Limpeza no Alojamento Local",
    h1: "Obrigações de limpeza no alojamento local: o que a lei pede e o que o hóspede espera",
    descricao:
      "O que diz a lei sobre higiene e limpeza no alojamento local, o que as plataformas pedem e como fazer disso uma rotina de limpeza entre hóspedes.",
    resposta:
      "A lei do alojamento local exige que a casa reúna sempre condições de higiene e limpeza, sem fixar uma frequência. Na prática isso obriga a uma limpeza completa a cada mudança de hóspede, com troca de roupa de cama e toalhas, e a uma casa sem bolor, pragas nem equipamento avariado. As plataformas acrescentam as suas regras e a nota de limpeza das avaliações.",
    corpo: [
      { t: "h2", x: "O que a lei diz" },
      {
        t: "p",
        x: "O Decreto-Lei n.º 128/2014 inclui entre os requisitos gerais do alojamento local reunir sempre condições de higiene e limpeza, a par de ter instalações em bom estado de conservação e a funcionar. Não diz de quantos em quantos dias se limpa, nem quem limpa. Diz que a condição tem de se verificar sempre, o que inclui o dia em que entra um hóspede e o dia em que aparece uma fiscalização.",
      },
      { t: "h2", x: "O que isto quer dizer na prática" },
      {
        t: "lista",
        x: [
          "Limpeza completa a cada saída de hóspede, de todas as divisões",
          "Roupa de cama e toalhas lavadas para cada hóspede novo",
          "Cozinha e casas de banho higienizadas, incluindo o interior do frigorífico e do micro-ondas quando houver restos",
          "Lixo retirado e separado, sem sacos deixados no imóvel",
          "Casa arejada, sem cheiros, sem bolor visível e sem sinais de pragas",
          "Equipamento a funcionar: o que avariou durante a estadia fica registado e é reparado antes da próxima reserva",
        ],
      },
      { t: "h2", x: "O que as plataformas acrescentam" },
      {
        t: "p",
        x: "O Airbnb e o Booking pedem nas suas regras para anfitriões que o alojamento esteja limpo e tal como foi anunciado, e dão aos hóspedes uma categoria de avaliação para a limpeza. Uma nota baixa nessa categoria pesa na visibilidade do anúncio. O guia [nota de limpeza no Airbnb e no Booking](/guias/nota-limpeza-airbnb-booking) explica o que mais costuma aparecer nas queixas.",
      },
      { t: "h2", x: "Quem é responsável" },
      {
        t: "p",
        x: "A responsabilidade perante a lei e perante o hóspede é sempre do titular do alojamento local, mesmo quando contrata uma empresa de limpeza. Por isso vale a pena ter por escrito o que a empresa faz em cada visita, como prova que fez e o que acontece quando encontra um problema. Na Mary Cleans isso fica numa lista escrita por imóvel, e cada rotação termina com um relatório fotográfico.",
      },
      {
        t: "p",
        x: "O que não fazemos também fica escrito: trocamos a roupa de cama e as toalhas, mas a lavagem e a engomadoria ficam com o proprietário ou com a lavandaria dele. Sobre isso, veja [roupa de cama no alojamento local](/guias/roupa-de-cama-alojamento-local).",
      },
    ],
    faq: [
      {
        p: "A lei obriga a trocar a roupa de cama a cada hóspede?",
        r: "A lei do alojamento local exige condições de higiene e limpeza sempre, sem fixar frequência. Na prática, cada hóspede novo tem de encontrar roupa de cama e toalhas lavadas.",
      },
      {
        p: "Se contratar uma empresa de limpeza, a responsabilidade passa para ela?",
        r: "Não perante a lei nem perante o hóspede. O titular continua responsável. O contrato com a empresa define o que ela faz e como o comprova.",
      },
      {
        p: "Preciso de limpar a casa se não houver reservas?",
        r: "Uma casa fechada semanas junta pó e, em prédios húmidos, bolor. Uma passagem antes da primeira reserva depois de um período parado evita queixas logo à entrada.",
      },
    ],
    fontes: [DL128, AIRBNB_AJUDA, BOOKING_PARCEIROS],
    ligacoes: [
      { href: "/guias/regras-alojamento-local-portugal", rotulo: "Regras do alojamento local em Portugal" },
      { href: "/guias/nota-limpeza-airbnb-booking", rotulo: "Nota de limpeza no Airbnb e no Booking" },
      { href: "/limpeza-alojamento-local-lisboa", rotulo: "Limpeza de alojamento local em Lisboa" },
    ],
  },

  // ───────────────────────── Operação da limpeza ─────────────────────────
  {
    slug: "preparar-alojamento-local-primeiro-hospede",
    categoria: "operacao",
    rotulo: "Preparar a casa para o primeiro hóspede",
    titulo: "Preparar o AL para o Primeiro Hóspede",
    h1: "Como preparar um alojamento local para o primeiro hóspede",
    descricao:
      "Lista para abrir um alojamento local: limpeza inicial, inventário, roupa de cama, consumíveis, segurança, acesso e lista do imóvel para quem vai limpar.",
    resposta:
      "Antes do primeiro hóspede, a casa precisa de uma limpeza inicial mais funda do que uma rotação, de um inventário escrito, de pelo menos três jogos de roupa de cama por cama, de consumíveis de reserva, do equipamento de segurança obrigatório e de uma lista do imóvel que diga a quem limpa como a casa deve ficar.",
    corpo: [
      {
        t: "p",
        x: "A primeira reserva define o padrão. O que fica bem preparado agora poupa trabalho em cada rotação seguinte. Esta lista segue a ordem em que as coisas costumam ser feitas.",
      },
      { t: "h2", x: "1. Limpeza inicial" },
      {
        t: "p",
        x: "Uma casa que vem de obra, de mudança ou de um inquilino anterior precisa de uma limpeza profunda antes de entrar no circuito das rotações: interior de armários e eletrodomésticos, rodapés, juntas, calcário, vidros e caixilharia. Se houve obra, a primeira passagem é uma [limpeza pós-obra](/limpeza-pos-obra-lisboa). Se a casa estava só fechada, uma [limpeza profunda](/limpeza-profunda-lisboa) chega.",
      },
      { t: "h2", x: "2. Inventário escrito" },
      {
        t: "lista",
        x: [
          "Loiça, copos e talheres contados por tipo",
          "Tachos, frigideiras e utensílios de cozinha",
          "Roupa de cama e toalhas por tamanho",
          "Pequenos eletrodomésticos, comandos e carregadores",
          "Decoração e objetos de valor, com fotografia",
        ],
      },
      {
        t: "p",
        x: "O inventário é o que permite dizer, no fim de uma estadia, o que falta ou se partiu. Quem limpa confere-o em cada rotação.",
      },
      { t: "h2", x: "3. Roupa de cama e toalhas" },
      {
        t: "p",
        x: "A regra mais usada é ter três jogos por cama: um na cama, um na lavandaria e um de reserva no armário. O mesmo para toalhas. O guia [roupa de cama no alojamento local](/guias/roupa-de-cama-alojamento-local) explica como organizar a troca e a lavagem.",
      },
      { t: "h2", x: "4. Consumíveis e reservas" },
      {
        t: "lista",
        x: [
          "Papel higiénico, rolo de cozinha, sabão de mãos e gel de duche",
          "Detergente da loiça e da máquina, esponjas e sacos do lixo",
          "Café, chá, açúcar, sal e óleo, se o anúncio os prometer",
          "Um armário ou caixa fechada só para as reservas, para quem limpa saber o que repor",
        ],
      },
      { t: "h2", x: "5. Segurança e documentos" },
      {
        t: "p",
        x: "Extintor, manta de incêndio, primeiros socorros e o 112 afixado, mais o livro de reclamações e o número de registo. A lista completa está no guia de [vistoria ao alojamento local](/guias/vistoria-alojamento-local).",
      },
      { t: "h2", x: "6. Acesso e lista do imóvel" },
      {
        t: "p",
        x: "Defina como entram o hóspede e quem limpa: chave, cofre ou fechadura com código. Depois escreva a lista do imóvel, com fotografias de como cada divisão deve ficar. Há um guia para cada uma destas partes: [acesso ao imóvel](/guias/acesso-imovel-chaves-cofre-limpeza) e [manual da casa para a limpeza](/guias/manual-do-imovel-para-a-limpeza).",
      },
    ],
    faq: [
      {
        p: "Quantos jogos de roupa de cama preciso por cama?",
        r: "Três é o número mais usado: um na cama, um a lavar e um de reserva. Com rotações diárias ou lavandaria lenta, quatro.",
      },
      {
        p: "A primeira limpeza é diferente das seguintes?",
        r: "Sim. A primeira é uma limpeza profunda ou pós-obra, conforme o estado da casa. As seguintes são rotações entre hóspedes.",
      },
      {
        p: "A Mary Cleans faz o inventário?",
        r: "O inventário é do proprietário. Nós conferimo-lo em cada rotação, a partir da lista do imóvel, e registamos no relatório o que falta.",
      },
    ],
    fontes: [DL128, TP_AL],
    ligacoes: [
      { href: "/guias/manual-do-imovel-para-a-limpeza", rotulo: "Manual da casa para a limpeza" },
      { href: "/guias/roupa-de-cama-alojamento-local", rotulo: "Roupa de cama no alojamento local" },
      { href: "/limpeza-profunda-lisboa", rotulo: "Limpeza profunda em Lisboa" },
      { href: "/limpeza-alojamento-local-lisboa", rotulo: "Limpeza de alojamento local em Lisboa" },
    ],
  },
  {
    slug: "roupa-de-cama-alojamento-local",
    categoria: "operacao",
    rotulo: "Roupa de cama e toalhas no alojamento local",
    titulo: "Roupa de Cama no Alojamento Local",
    h1: "Roupa de cama e toalhas no alojamento local: quantos jogos, troca e lavandaria",
    descricao:
      "Quantos jogos de roupa de cama e toalhas ter por cama, como organizar a troca em cada rotação, a lavandaria, as manchas e o armazenamento num alojamento local.",
    resposta:
      "Num alojamento local conte com três jogos de roupa de cama e de toalhas por cama: um em uso, um na lavandaria e um de reserva. Em cada rotação a roupa é trocada pelo jogo limpo e a usada fica separada para lavar. A Mary Cleans faz a troca e deixa a roupa usada separada, mas não faz a lavagem nem a engomadoria.",
    corpo: [
      { t: "h2", x: "Quantos jogos ter" },
      {
        t: "lista",
        x: [
          "Três jogos por cama é o mínimo prático: um na cama, um na lavandaria, um no armário",
          "Quatro jogos quando há rotações quase diárias ou quando a lavandaria demora mais de um dia",
          "Toalhas: por hóspede, uma de banho e uma de mãos, mais tapete de casa de banho; nas casas de praia, toalhas de praia à parte",
          "Capas de colchão e de almofada laváveis em todas as camas",
        ],
      },
      { t: "h2", x: "Como organizar a troca" },
      {
        t: "p",
        x: "A troca corre bem quando a roupa limpa está no imóvel antes da rotação, guardada num sítio fixo e contada. Quem limpa tira a roupa usada, faz a cama com o jogo limpo, confere que não falta nada e deixa a usada em sacos no sítio combinado, para a lavandaria recolher ou para o proprietário levar.",
      },
      {
        t: "lista",
        x: [
          "Um armário ou caixa fechada só para a roupa limpa, com etiqueta por tamanho de cama",
          "Sacos de roupa usada separados de sacos de lixo, para não haver enganos",
          "Contagem dos jogos limpos no fim de cada rotação, para avisar a tempo quando faltar",
          "Peças com mancha, rasgão ou queimadura separadas e fotografadas",
        ],
      },
      { t: "h2", x: "Lavandaria" },
      {
        t: "p",
        x: "A lavagem e a engomadoria ficam a cargo do proprietário ou da lavandaria que ele contratar. Há lavandarias em Lisboa, Sintra e Cascais que recolhem e entregam no imóvel. O que vale a pena combinar com elas: dia e hora de recolha, prazo de entrega, o que fazer com manchas e como se faz a contagem. Quando a lavandaria entrega no imóvel, a roupa limpa fica pronta para a rotação seguinte.",
      },
      { t: "h2", x: "Manchas e fim de vida" },
      {
        t: "p",
        x: "Maquilhagem, protector solar, vinho e sangue são as manchas mais comuns. Quanto mais cedo a peça for separada, mais fácil é recuperá-la. Uma peça com manchas que não saem, fios puxados ou cor gasta já não deve voltar à cama: o hóspede fotografa e escreve na avaliação. O relatório fotográfico de cada rotação mostra estas peças para o proprietário decidir se substitui.",
      },
    ],
    faq: [
      {
        p: "A Mary Cleans lava a roupa de cama?",
        r: "Não. Trocamos a roupa de cama e as toalhas com o jogo limpo do imóvel e deixamos a usada separada. A lavagem fica com o proprietário ou com a lavandaria dele.",
      },
      {
        p: "Quantos jogos de toalhas devo ter?",
        r: "Três por hóspede, tal como a roupa de cama: um em uso, um a lavar e um de reserva.",
      },
      {
        p: "O que acontece se faltar um jogo limpo?",
        r: "Avisamos o proprietário assim que a contagem mostra que vai faltar. Se faltar no dia, a cama fica feita com o que existir e o relatório diz o que não foi possível trocar.",
      },
    ],
    fontes: [],
    ligacoes: [
      { href: "/guias/preparar-alojamento-local-primeiro-hospede", rotulo: "Preparar a casa para o primeiro hóspede" },
      { href: "/guias/manual-do-imovel-para-a-limpeza", rotulo: "Manual da casa para a limpeza" },
      { href: "/servicos/alojamento-local", rotulo: "Limpeza de alojamento local" },
    ],
  },
  {
    slug: "nota-limpeza-airbnb-booking",
    categoria: "operacao",
    rotulo: "Nota de limpeza no Airbnb e no Booking",
    titulo: "Nota de Limpeza no Airbnb e no Booking",
    h1: "Como subir a nota de limpeza no Airbnb e no Booking",
    descricao:
      "O que os hóspedes mais criticam na limpeza de um alojamento local e como evitar: cabelos, casa de banho, cozinha, cheiros, roupa de cama e pó em altura.",
    resposta:
      "A nota de limpeza sobe quando a casa não deixa nada para o hóspede encontrar: nenhum cabelo no duche ou na almofada, cozinha limpa por dentro, sem cheiro a casa fechada, roupa de cama sem marcas e sem pó nos sítios altos. Uma lista escrita por imóvel e uma conferência final com fotografias evitam a maior parte das queixas.",
    corpo: [
      {
        t: "p",
        x: "O Airbnb e o Booking pedem aos hóspedes uma avaliação separada da limpeza. Os comentários mostram que a queixa raramente é sobre a casa toda: é quase sempre sobre um detalhe que se vê de perto. São esses detalhes que a rotação tem de apanhar.",
      },
      { t: "h2", x: "O que mais aparece nas queixas" },
      {
        t: "lista",
        x: [
          "Cabelos no duche, no ralo, no lavatório, na almofada ou no chão da casa de banho",
          "Calcário e manchas de água nas torneiras, no vidro do duche e nos espelhos",
          "Restos no frigorífico, no micro-ondas ou na máquina da loiça",
          "Cheiro a casa fechada, a humidade ou a tabaco",
          "Lençóis com marcas, toalhas gastas ou com cheiro",
          "Pó em cima de armários, candeeiros e molduras, que o hóspede vê deitado na cama",
          "Migalhas no sofá e debaixo das almofadas",
        ],
      },
      { t: "h2", x: "Como evitar" },
      {
        t: "h3",
        x: "Uma lista por imóvel, sempre a mesma",
      },
      {
        t: "p",
        x: "Cada casa tem os seus pontos fracos: um duche que acumula calcário, uma varanda que junta folhas, um sofá claro. A lista do imóvel escreve-os, e a rotação confere-os todos, todas as vezes. O guia [manual da casa para a limpeza](/guias/manual-do-imovel-para-a-limpeza) mostra como escrevê-la.",
      },
      { t: "h3", x: "Conferência final com olhos de hóspede" },
      {
        t: "p",
        x: "No fim, alguém percorre a casa como o próximo hóspede vai fazer: abre o frigorífico, olha para o ralo, deita-se na cama e olha para o tecto. É nessa volta que aparecem os cabelos e o pó que escaparam.",
      },
      { t: "h3", x: "Fotografias que provam" },
      {
        t: "p",
        x: "Um relatório fotográfico de cada divisão no fim da rotação serve para duas coisas: o proprietário vê o estado sem lá ir, e tem prova se um hóspede disser que a casa estava suja à chegada. Na Mary Cleans cada rotação termina com esse relatório.",
      },
      { t: "h2", x: "Quando a queixa chega" },
      {
        t: "p",
        x: "Responda com calma, agradeça e diga o que mudou. Depois acrescente o ponto à lista do imóvel, para que não se repita. Uma resposta pública curta e concreta mostra aos próximos hóspedes que a crítica foi levada a sério.",
      },
    ],
    faq: [
      {
        p: "O que pesa mais na nota de limpeza?",
        r: "A casa de banho e a cama. São os sítios onde o hóspede está mais perto das superfícies e onde um cabelo ou uma mancha se nota logo.",
      },
      {
        p: "As fotografias da limpeza ajudam numa disputa com a plataforma?",
        r: "Ajudam a mostrar o estado da casa antes da entrada do hóspede. Guarde-as com a data e a hora da rotação.",
      },
      {
        p: "Mudar de empresa de limpeza resolve uma nota baixa?",
        r: "Só se a nova trabalhar com lista escrita por imóvel, conferência final e prova fotográfica. Sem isso, os mesmos detalhes voltam a escapar.",
      },
    ],
    fontes: [AIRBNB_AJUDA, BOOKING_PARCEIROS],
    ligacoes: [
      { href: "/blog/checklist-check-out-alojamento-local", rotulo: "Checklist de check-out" },
      { href: "/guias/manual-do-imovel-para-a-limpeza", rotulo: "Manual da casa para a limpeza" },
      { href: "/limpeza-alojamento-local-lisboa", rotulo: "Limpeza de alojamento local em Lisboa" },
    ],
  },
  {
    slug: "horario-check-out-check-in-limpeza",
    categoria: "operacao",
    rotulo: "Horário de check-out e check-in",
    titulo: "Check-out e Check-in: a Janela da Limpeza",
    h1: "Horário de check-out e check-in: como definir a janela da limpeza",
    descricao:
      "Como escolher a hora de saída e de entrada no alojamento local para caber a limpeza, e o que fazer com saídas tardias e entradas antecipadas.",
    resposta:
      "A janela da limpeza é o tempo entre a hora de saída de um hóspede e a hora de entrada do seguinte. Em Lisboa a maioria dos anúncios tem saída de manhã e entrada a meio da tarde. Defina essa janela a pensar no tamanho da casa e na logística do prédio, e só aceite saídas tardias ou entradas antecipadas quando quem limpa confirmar que ainda cabe.",
    corpo: [
      { t: "h2", x: "O que define o tempo de limpeza" },
      {
        t: "lista",
        x: [
          "Tipologia e número de camas: um T3 com seis camas não se faz no tempo de um T0",
          "Estado em que a casa fica: estadias longas e grupos deixam mais trabalho",
          "Logística do prédio: andares sem elevador, rua sem estacionamento, contentores longe",
          "Onde está a roupa limpa e os consumíveis: no imóvel, ou a trazer de fora",
          "Se há relatório fotográfico e conferência final, que também levam tempo",
        ],
      },
      { t: "h2", x: "Como escolher as horas" },
      {
        t: "p",
        x: "A hora de saída e a hora de entrada são as do anúncio, e é a partir delas que as rotações são marcadas. Antes de as fixar, pergunte a quem limpa quanto tempo precisa para aquela casa, e junte uma margem para o imprevisto: o hóspede que sai atrasado, a chave que não aparece, a máquina da loiça a meio. Na Mary Cleans a hora de saída e de entrada de cada imóvel fica escrita na lista, e as rotações são marcadas a contar com ela.",
      },
      { t: "h2", x: "Saída tardia e entrada antecipada" },
      {
        t: "p",
        x: "São os pedidos que mais apertam a janela. Uma regra simples ajuda: só se confirmam ao hóspede depois de quem limpa dizer que ainda cabe. Quando há reserva no mesmo dia, a saída tardia de um hóspede é a entrada atrasada do seguinte. Quando não há, é fácil dizer que sim.",
      },
      { t: "h2", x: "Vários imóveis no mesmo dia" },
      {
        t: "p",
        x: "Quem gere vários alojamentos tem dias, normalmente o domingo e a segunda, em que as saídas se juntam. Enviar o calendário de reservas com antecedência permite ordenar as rotações por hora de entrada e por zona. Para esse caso, veja o [contrato de limpeza para vários alojamentos](/contrato-limpeza-alojamento-local).",
      },
    ],
    faq: [
      {
        p: "Qual é a hora de check-out mais comum em Lisboa?",
        r: "A manhã, com a entrada do hóspede seguinte a meio da tarde. Cada anfitrião define as suas horas no anúncio.",
      },
      {
        p: "Posso aceitar uma saída tardia se tiver outro hóspede a entrar no mesmo dia?",
        r: "Só depois de confirmar com quem limpa que a rotação ainda cabe antes da hora de entrada.",
      },
      {
        p: "Quanto tempo leva a limpeza de um alojamento local?",
        r: "Depende da tipologia, do estado da casa e do prédio. O tempo de cada imóvel fica definido na proposta, depois de conhecermos a casa.",
      },
    ],
    fontes: [],
    ligacoes: [
      { href: "/contrato-limpeza-alojamento-local", rotulo: "Contrato para vários alojamentos" },
      { href: "/guias/acesso-imovel-chaves-cofre-limpeza", rotulo: "Acesso ao imóvel: chaves e cofres" },
      { href: "/limpeza-alojamento-local-lisboa", rotulo: "Limpeza de alojamento local em Lisboa" },
    ],
  },
  {
    slug: "acesso-imovel-chaves-cofre-limpeza",
    categoria: "operacao",
    rotulo: "Acesso ao imóvel: chaves, cofres e fechaduras",
    titulo: "Chaves, Cofres e Fechaduras para a Limpeza do AL",
    h1: "Acesso ao imóvel para a limpeza: chaves, cofres e fechaduras com código",
    descricao:
      "Como dar acesso à equipa de limpeza num alojamento local: chave física, cofre de chaves, fechadura com código. Vantagens, riscos e o que deixar por escrito.",
    resposta:
      "Há três formas comuns de dar acesso a quem limpa um alojamento local: chave entregue em mão, cofre de chaves com código e fechadura com código ou aplicação. A melhor é a que permite mudar o código sem trocar a fechadura e saber quem entrou. Seja qual for, o acesso deve ficar escrito na lista do imóvel, separado do acesso dos hóspedes.",
    corpo: [
      { t: "h2", x: "As três opções" },
      { t: "h3", x: "Chave em mão" },
      {
        t: "p",
        x: "Simples e sem custo. O risco é a cópia que se perde e o tempo de ir buscar e devolver a chave. Funciona bem com uma equipa fixa, que fica com uma cópia identificada só por um código, nunca com a morada.",
      },
      { t: "h3", x: "Cofre de chaves com código" },
      {
        t: "p",
        x: "O mais usado em Lisboa. Fica junto à porta ou num ponto combinado, e o código pode mudar entre hóspedes. Confirme que o condomínio aceita o cofre na fachada ou na entrada, e que o código de quem limpa é diferente do dos hóspedes, se o modelo o permitir.",
      },
      { t: "h3", x: "Fechadura com código ou aplicação" },
      {
        t: "p",
        x: "Permite códigos diferentes para cada hóspede e para a limpeza, com hora de início e de fim, e mostra quem entrou e quando. Pede bateria e rede. Vale a pena ter uma chave física de reserva num cofre, para o dia em que a bateria falha.",
      },
      { t: "h2", x: "O que deixar por escrito" },
      {
        t: "lista",
        x: [
          "Como se entra no prédio e no imóvel, com fotografia da porta e do cofre",
          "Códigos ou o sítio onde estão, enviados à parte e não no anúncio",
          "O que fazer se o hóspede ainda estiver dentro à hora combinada",
          "O que fazer se o acesso falhar: a quem ligar e quanto tempo esperar",
          "Garagem, comando ou cartão, quando existirem",
        ],
      },
      { t: "h2", x: "Segurança e privacidade" },
      {
        t: "p",
        x: "Os códigos e as moradas são dados sensíveis. Partilhe-os só com quem precisa, por um canal privado, e mude-os quando a equipa ou o hóspede mudarem. Na Mary Cleans o acesso de cada imóvel é combinado por escrito antes da primeira limpeza e fica na lista do imóvel. Este guia trata do acesso para a limpeza; o check-in dos hóspedes é organizado pelo proprietário ou pela gestora dele.",
      },
    ],
    faq: [
      {
        p: "Preciso de estar presente durante a limpeza?",
        r: "Não. Com o acesso combinado por escrito, a limpeza faz-se sem o proprietário, e o estado da casa chega pelo relatório fotográfico.",
      },
      {
        p: "O código da limpeza deve ser o mesmo dos hóspedes?",
        r: "Melhor não. Com códigos separados, o código da limpeza não muda a cada hóspede e o registo de entradas mostra quem entrou e quando.",
      },
      {
        p: "Que opção de acesso é mais segura?",
        r: "A fechadura com códigos individuais e registo de entradas, com uma chave física de reserva num cofre para quando a bateria falha.",
      },
    ],
    fontes: [],
    ligacoes: [
      { href: "/guias/manual-do-imovel-para-a-limpeza", rotulo: "Manual da casa para a limpeza" },
      { href: "/guias/horario-check-out-check-in-limpeza", rotulo: "Horário de check-out e check-in" },
      { href: "/servicos/alojamento-local", rotulo: "Limpeza de alojamento local" },
    ],
  },
  {
    slug: "manual-do-imovel-para-a-limpeza",
    categoria: "operacao",
    rotulo: "Manual da casa para a limpeza",
    titulo: "Manual da Casa para a Empresa de Limpeza do AL",
    h1: "Manual da casa para a limpeza: o que escrever para cada imóvel",
    descricao:
      "Como escrever a lista do imóvel para a empresa de limpeza do alojamento local: acesso, horas, fotografias, roupa, consumíveis e o que avisar.",
    resposta:
      "O manual da casa para a limpeza é uma lista escrita, com fotografias, que diz a quem limpa como entrar, a que horas, onde está a roupa e os consumíveis, como cada divisão deve ficar e o que avisar. É o que faz com que a casa fique igual em todas as rotações, seja quem for que limpe.",
    corpo: [
      {
        t: "p",
        x: "Na Mary Cleans chamamos-lhe a lista do imóvel. É combinada por escrito antes da primeira limpeza e conferida em cada rotação. Se ainda não tem uma, esta é a estrutura que usamos.",
      },
      { t: "h2", x: "1. Dados do imóvel" },
      {
        t: "lista",
        x: [
          "Tipologia, número de camas e de casas de banho",
          "Andar, elevador, estacionamento e contentores mais próximos",
          "Acesso: chave, cofre ou código, e o que fazer se falhar",
          "Hora de saída e de entrada do anúncio",
        ],
      },
      { t: "h2", x: "2. Fotografias de referência" },
      {
        t: "p",
        x: "Uma fotografia por divisão, tirada com a casa pronta, de como deve ficar: a cama feita, as almofadas, as toalhas dobradas, o que fica em cima da bancada. É a forma mais rápida de garantir que a casa fica igual à do anúncio.",
      },
      { t: "h2", x: "3. Roupa e consumíveis" },
      {
        t: "lista",
        x: [
          "Onde está a roupa limpa e quantos jogos há",
          "Onde se deixa a roupa usada e quando a lavandaria recolhe",
          "Que consumíveis se repõem, em que quantidade, e onde está a reserva",
        ],
      },
      { t: "h2", x: "4. Pontos próprios da casa" },
      {
        t: "lista",
        x: [
          "Superfícies que pedem produto próprio: soalho encerado, mármore, cimento, inox",
          "Pontos fracos conhecidos: o duche com calcário, o ralo que entope, a janela que não fecha bem",
          "Equipamento de bebé, varanda, terraço ou duche exterior",
          "Regras do prédio: horários, zonas comuns, contentores",
        ],
      },
      { t: "h2", x: "5. O que avisar e como" },
      {
        t: "p",
        x: "Danos, objetos esquecidos, avarias, consumíveis a acabar, sinais de humidade ou de pragas. Combine por escrito o canal e o prazo do aviso. Na Mary Cleans isso segue no relatório fotográfico de cada rotação, com o que precisa de atenção.",
      },
      {
        t: "p",
        x: "Com a lista feita, a [checklist de check-out](/blog/checklist-check-out-alojamento-local) dá a ordem de trabalho divisão a divisão.",
      },
    ],
    faq: [
      {
        p: "Quem escreve a lista do imóvel?",
        r: "Escreve-se em conjunto. O proprietário sabe como quer a casa; quem limpa sabe o que costuma falhar. Na Mary Cleans fica fechada antes da primeira limpeza.",
      },
      {
        p: "A lista muda com o tempo?",
        r: "Sim. Cada queixa de hóspede ou avaria nova entra na lista, para que não se repita.",
      },
      {
        p: "Preciso de uma lista diferente por imóvel?",
        r: "Sim. Duas casas da mesma tipologia têm acessos, superfícies e pontos fracos diferentes.",
      },
    ],
    fontes: [],
    ligacoes: [
      { href: "/blog/checklist-check-out-alojamento-local", rotulo: "Checklist de check-out" },
      { href: "/guias/acesso-imovel-chaves-cofre-limpeza", rotulo: "Acesso ao imóvel: chaves e cofres" },
      { href: "/guias/preparar-alojamento-local-primeiro-hospede", rotulo: "Preparar a casa para o primeiro hóspede" },
    ],
  },
  {
    slug: "lixo-reciclagem-alojamento-local-lisboa",
    categoria: "operacao",
    rotulo: "Lixo e reciclagem no alojamento local em Lisboa",
    titulo: "Lixo e Reciclagem no Alojamento Local em Lisboa",
    h1: "Lixo e reciclagem no alojamento local em Lisboa",
    descricao:
      "Como organizar o lixo num alojamento local em Lisboa: separação, ecopontos, recolha porta a porta nos bairros históricos, horários e o que explicar ao hóspede.",
    resposta:
      "Num alojamento local em Lisboa o lixo tem de seguir as regras da rua: em muitos bairros históricos a recolha é porta a porta, com horário para pôr o saco na rua, e noutras zonas há contentores e ecopontos. Deixe ao hóspede instruções simples com o horário e o local, e combine com quem limpa onde fica o lixo de cada rotação.",
    corpo: [
      {
        t: "p",
        x: "O lixo é uma das queixas mais frequentes dos vizinhos de alojamentos locais em Lisboa. Sacos deixados fora de horas, à porta do prédio ou no patamar dão problemas com o condomínio e podem dar coima. Uma regra clara para o hóspede e para quem limpa resolve quase tudo.",
      },
      { t: "h2", x: "Como funciona a recolha" },
      {
        t: "lista",
        x: [
          "Em várias zonas históricas, como Alfama, Mouraria, Bairro Alto e partes da Baixa, a recolha é feita porta a porta e o saco só pode ir para a rua no horário definido para aquela rua",
          "Noutras zonas há contentores de indiferenciado na rua e ecopontos para embalagens, papel e vidro",
          "Os horários e os pontos de recolha de cada rua estão no site da Câmara Municipal de Lisboa e podem mudar, por isso confirme-os para o seu imóvel",
        ],
      },
      { t: "h2", x: "O que explicar ao hóspede" },
      {
        t: "p",
        x: "Uma folha curta na cozinha, em português e em inglês, com o sítio do contentor ou o horário de recolha, e com cores para a separação: amarelo para embalagens, azul para papel e cartão, verde para vidro. Se a recolha for porta a porta, diga claramente que o saco não fica no patamar nem na rua fora do horário.",
      },
      { t: "h2", x: "O que fica com quem limpa" },
      {
        t: "p",
        x: "Na rotação recolhe-se o lixo que o hóspede deixou, separa-se e leva-se ao contentor ou ao ecoponto indicado na lista do imóvel. Se a recolha for porta a porta e o horário não coincidir com a limpeza, o lixo fica num sítio combinado e fechado, nunca à vista. Na Mary Cleans isso fica escrito na lista do imóvel, e garrafas e lixo fora do normal aparecem no relatório.",
      },
      { t: "h2", x: "Grupos e estadias longas" },
      {
        t: "p",
        x: "Uma saída de grupo pode deixar vários sacos e muitas garrafas. Nestes imóveis vale a pena ter um caixote maior e sacos de reserva, e contar com mais tempo de rotação. Ver também a página de [Alfama, Baixa e Chiado](/limpeza-alojamento-local-alfama-baixa-chiado) e a de [Bairro Alto e Cais do Sodré](/limpeza-alojamento-local-bairro-alto-cais-do-sodre).",
      },
    ],
    faq: [
      {
        p: "Posso deixar o lixo no patamar para a limpeza levar?",
        r: "Não é boa ideia. Os vizinhos queixam-se e o condomínio pode proibir. O lixo deve ficar dentro do imóvel, num sítio combinado, até ser levado.",
      },
      {
        p: "Onde vejo o horário de recolha da minha rua em Lisboa?",
        r: "No site da Câmara Municipal de Lisboa, na área de higiene urbana e recolha de resíduos. Os horários variam por rua e podem mudar.",
      },
      {
        p: "A limpeza separa o lixo para reciclagem?",
        r: "Sim. Separamos o lixo deixado pelo hóspede e levamo-lo ao contentor ou ao ecoponto indicado na lista do imóvel.",
      },
    ],
    fontes: [CML],
    ligacoes: [
      { href: "/limpeza-alojamento-local-alfama-baixa-chiado", rotulo: "Alfama, Baixa e Chiado" },
      { href: "/limpeza-alojamento-local-bairro-alto-cais-do-sodre", rotulo: "Bairro Alto e Cais do Sodré" },
      { href: "/guias/manual-do-imovel-para-a-limpeza", rotulo: "Manual da casa para a limpeza" },
    ],
  },

  // ───────────────────────── Cuidar do imóvel ─────────────────────────
  {
    slug: "humidade-bolor-alojamento-local",
    categoria: "casa",
    rotulo: "Humidade e bolor no alojamento local",
    titulo: "Humidade e Bolor no Alojamento Local: Prevenir",
    h1: "Humidade e bolor no alojamento local: prevenir entre reservas",
    descricao:
      "Porque aparece bolor nos alojamentos locais de Lisboa e de Sintra, como prevenir entre reservas, o que a limpeza resolve e quando é preciso chamar um técnico.",
    resposta:
      "O bolor no alojamento local aparece sobretudo em casas de banho sem janela, armários encostados a paredes frias e casas que ficam fechadas entre reservas. Previne-se arejando em cada visita, deixando a casa de banho seca, afastando móveis das paredes e usando desumidificador nos meses húmidos. A limpeza remove o bolor de superfície; manchas que voltam pedem um técnico.",
    corpo: [
      {
        t: "p",
        x: "Em Lisboa, os prédios antigos de paredes grossas e pouca ventilação são os mais afetados. Em Sintra, a humidade da serra faz-se sentir o ano inteiro. Em ambos os casos, um hóspede que encontra bolor no duche ou cheiro a humidade no armário escreve isso na avaliação.",
      },
      { t: "h2", x: "Onde aparece primeiro" },
      {
        t: "lista",
        x: [
          "Juntas e silicone do duche e da banheira",
          "Tecto e cantos de casas de banho sem janela ou com exaustor fraco",
          "Interior de armários embutidos e roupeiros encostados a paredes exteriores",
          "Atrás de cortinados, cabeceiras e sofás encostados à parede",
          "Caixilharia de alumínio sem corte térmico, onde a condensação escorre",
        ],
      },
      { t: "h2", x: "Como prevenir entre reservas" },
      {
        t: "lista",
        x: [
          "Arejar a casa em cada visita, com as janelas abertas durante a limpeza",
          "Deixar o duche e o chão da casa de banho secos no fim da rotação",
          "Afastar alguns centímetros os móveis das paredes exteriores",
          "Nos meses húmidos, deixar um desumidificador ligado com reservatório grande, ou programado",
          "Não guardar roupa de cama em armários com cheiro a humidade",
        ],
      },
      { t: "h2", x: "O que a limpeza resolve e o que não resolve" },
      {
        t: "p",
        x: "O bolor de superfície em azulejo, juntas e silicone sai com limpeza adequada. Manchas que voltam em poucas semanas, paredes que descascam ou cheiro persistente indicam uma causa, como infiltração, ponte térmica ou falta de ventilação, que só um técnico resolve. Na Mary Cleans limpamos o que sai com a limpeza e fotografamos o resto no relatório, com a indicação do sítio, para o proprietário decidir a tempo.",
      },
      {
        t: "p",
        x: "Para casas em Sintra, veja [limpeza de alojamento local em Sintra](/limpeza-alojamento-local-sintra). Para uma limpeza mais funda de juntas e silicone, a [limpeza profunda](/limpeza-profunda-lisboa).",
      },
    ],
    faq: [
      {
        p: "A limpeza normal tira o bolor do duche?",
        r: "Tira o bolor de superfície. Silicone que fica preto por dentro tem de ser substituído, e isso é uma reparação.",
      },
      {
        p: "Devo deixar o desumidificador ligado com a casa vazia?",
        r: "Nos meses húmidos ajuda, sobretudo em Sintra e em prédios antigos de Lisboa. Use um modelo com desligar automático quando o reservatório enche.",
      },
      {
        p: "Avisam se encontrarem bolor novo?",
        r: "Sim. Fica no relatório fotográfico da rotação, com a divisão e o sítio exato.",
      },
    ],
    fontes: [],
    ligacoes: [
      { href: "/limpeza-alojamento-local-sintra", rotulo: "Alojamento local em Sintra" },
      { href: "/limpeza-profunda-lisboa", rotulo: "Limpeza profunda em Lisboa" },
      { href: "/limpeza-alojamento-local-penha-de-franca", rotulo: "Penha de França" },
    ],
  },
  {
    slug: "percevejos-alojamento-local",
    categoria: "casa",
    rotulo: "Percevejos no alojamento local",
    titulo: "Percevejos no Alojamento Local: o que Fazer",
    h1: "Percevejos no alojamento local: sinais, o que fazer e como evitar",
    descricao:
      "Como reconhecer percevejos num alojamento local, o que fazer quando aparecem, porque a limpeza sozinha não chega e como reduzir o risco entre hóspedes.",
    resposta:
      "Os percevejos chegam na bagagem dos hóspedes e escondem-se nas costuras do colchão, na cabeceira e nas frestas junto à cama. Os sinais são pontos escuros nos lençóis e no colchão, peles largadas e picadas em fila. Quando aparecem, o imóvel deve sair de reserva e ser tratado por uma empresa de controlo de pragas; a limpeza ajuda depois, mas não elimina a infestação sozinha.",
    corpo: [
      {
        t: "p",
        x: "Percevejos não são sinal de casa suja. Viajam em malas e roupa e podem aparecer em qualquer alojamento com muitas entradas e saídas. O que faz a diferença é encontrá-los cedo, antes de um hóspede o fazer.",
      },
      { t: "h2", x: "Sinais a procurar em cada rotação" },
      {
        t: "lista",
        x: [
          "Pontos escuros, como tinta de caneta, nas costuras do colchão, nos lençóis e na cabeceira",
          "Pequenas manchas de sangue nos lençóis",
          "Peles translúcidas largadas pelos insetos",
          "Insetos castanhos, achatados, do tamanho de uma semente de maçã",
          "Queixa de picadas em fila ou em grupo",
        ],
      },
      { t: "h2", x: "O que fazer quando aparecem" },
      {
        t: "lista",
        x: [
          "Bloquear as reservas seguintes até ao tratamento",
          "Chamar uma empresa de controlo de pragas e seguir as instruções dela",
          "Não mudar móveis nem roupa para outro imóvel",
          "Pôr a roupa de cama e as toalhas em sacos fechados e lavar a alta temperatura, conforme a etiqueta",
          "Depois do tratamento, fazer uma limpeza profunda com aspiração de costuras, frestas e rodapés",
        ],
      },
      { t: "h2", x: "Como reduzir o risco" },
      {
        t: "lista",
        x: [
          "Capas de colchão com fecho, de cor clara, onde os sinais se veem melhor",
          "Cabeceiras e mesas de cabeceira simples, sem frestas",
          "Um porta-malas afastado da cama",
          "Conferência das costuras e da cabeceira em cada troca de roupa de cama",
        ],
      },
      {
        t: "p",
        x: "A Mary Cleans não faz desinfestação. Em cada troca de roupa de cama olhamos para o colchão e para a cabeceira e, se virmos sinais, fotografamos e avisamos o proprietário no próprio dia, para ele decidir antes da entrada seguinte.",
      },
    ],
    faq: [
      {
        p: "A limpeza elimina percevejos?",
        r: "Não sozinha. É preciso tratamento por uma empresa de controlo de pragas. A limpeza profunda ajuda depois do tratamento.",
      },
      {
        p: "Percevejos querem dizer que a casa estava suja?",
        r: "Não. Chegam na bagagem e aparecem em casas limpas. O importante é detetá-los cedo.",
      },
      {
        p: "O que faz a empresa de limpeza se encontrar sinais?",
        r: "Na Mary Cleans, fotografamos e avisamos o proprietário no próprio dia, para bloquear reservas e chamar o tratamento.",
      },
    ],
    fontes: [],
    ligacoes: [
      { href: "/guias/roupa-de-cama-alojamento-local", rotulo: "Roupa de cama no alojamento local" },
      { href: "/limpeza-profunda-lisboa", rotulo: "Limpeza profunda em Lisboa" },
      { href: "/guias/vistoria-alojamento-local", rotulo: "Vistoria ao alojamento local" },
    ],
  },
];

export const guiaPorSlug = (slug) => GUIAS.find((g) => g.slug === slug);
