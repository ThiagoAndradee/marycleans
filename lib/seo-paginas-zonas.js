// Páginas de alojamento local por zona, segunda leva (26/11/2026).
// Mesmo formato e mesmas regras de lib/seo-paginas.js: nada inventado sobre a Mary Cleans,
// sem preço, sem número de clientes, sem limpeza noturna, sem lavandaria.
// O que se diz de cada zona é facto público da zona (tipo de prédio, acessos, quem lá fica).
// Ficam num ficheiro à parte para não chocar com as outras frentes que mexem em seo-paginas.js.
//
// Texto: [rótulo](/caminho) vira link interno (components/blog/TextoComLinks).

const ROTACAO = "Rotação de Alojamento Local";
const BASE = {
  servicoTipo: "Limpeza de alojamento local",
  servicoForm: ROTACAO,
  inclui: "rotacao-alojamento-local",
};

export const PAGINAS_ZONAS = [
  {
    slug: "limpeza-alojamento-local-alcantara",
    grupo: "bairro",
    rotulo: "Alcântara e Santo Amaro",
    ...BASE,
    local: "Alcântara, Lisboa",
    freguesia: "Alcântara",
    titulo: "Limpeza de Alojamento Local em Alcântara",
    descricao:
      "Limpeza entre hóspedes em Alcântara e Santo Amaro, junto à LX Factory e à ponte. Pó do trânsito nas janelas, fins de semana cheios e relatório fotográfico.",
    h1: "Limpeza de alojamento local em Alcântara",
    resposta:
      "A Mary Cleans faz a limpeza entre hóspedes de alojamentos locais em Alcântara e Santo Amaro, em Lisboa. Cada rotação inclui limpeza completa, troca de roupa de cama e toalhas, reposição de consumíveis e relatório fotográfico, com atenção às janelas e varandas, que aqui sujam mais depressa por causa do trânsito e da ponte.",
    intro:
      "Alcântara vive debaixo da Ponte 25 de Abril, entre a LX Factory, as docas de Santo Amaro e a linha de comboio de Cascais. Ao lado dos prédios operários antigos há edifícios recentes junto ao rio. Muitos hóspedes vêm para o fim de semana, pela restauração e pela vida noturna das docas, e saem no domingo ou na segunda de manhã.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "O trânsito da ponte e das avenidas deixa um pó escuro e fino nos parapeitos, nas caixilharias e nas varandas. Entra na rotina de cada rotação, e não só na limpeza profunda.",
              "Com ruído de rua, muitas casas têm vidro duplo e as janelas passam o dia fechadas. Arejamos a casa durante a limpeza e confirmamos que fica tudo fechado à saída.",
              "As saídas concentram-se ao domingo e à segunda de manhã. Num imóvel com várias reservas curtas seguidas, o calendário de rotações fica fechado com antecedência.",
              "Nos prédios antigos há escadas estreitas e andares sem elevador. A roupa de cama limpa e os consumíveis ficam guardados no próprio imóvel, para não subir sacos a cada visita.",
            ],
          },
        ],
      },
      {
        h2: "Estadias de fim de semana",
        blocos: [
          {
            t: "p",
            x: "Uma estadia de duas noites com saída tardia de sábado à noite chega ao check-out com copos, garrafas e cinzeiros na varanda. A rotação começa pelo lixo e pela loiça, para que a cozinha e a sala fiquem prontas primeiro. O relatório fotográfico mostra o estado em que a casa foi encontrada sempre que há algo fora do normal, como uma mancha no sofá ou um copo partido.",
          },
          {
            t: "p",
            x: "Para o funcionamento geral das rotações, veja [limpeza de alojamento local em Lisboa](/limpeza-alojamento-local-lisboa). Para a separação do lixo e os horários de recolha, há um guia próprio: [lixo e reciclagem no alojamento local em Lisboa](/guias/lixo-reciclagem-alojamento-local-lisboa).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Limpam alojamentos locais perto da LX Factory?",
        r: "Sim. Alcântara, Santo Amaro e a zona da LX Factory fazem parte da nossa área em Lisboa.",
      },
      {
        p: "Com que frequência devem ser limpas as janelas numa casa em Alcântara?",
        r: "Os vidros interiores e os parapeitos são limpos em cada rotação. Os vidros exteriores que se alcançam com segurança a partir de dentro entram na limpeza profunda, uma ou duas vezes por ano, ou quando o proprietário pedir.",
      },
      {
        p: "Recolhem o lixo deixado pelos hóspedes?",
        r: "Sim. Separamos o lixo e deixamo-lo no contentor ou no ecoponto indicado na lista do imóvel, respeitando o horário de recolha da rua.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-belem-ajuda",
      "limpeza-alojamento-local-santos-lapa-madragoa",
      "limpeza-alojamento-local-estrela-campo-de-ourique",
      "limpeza-alojamento-local-lisboa",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-campolide-amoreiras",
    grupo: "bairro",
    rotulo: "Campolide e Amoreiras",
    ...BASE,
    local: "Campolide e Amoreiras, Lisboa",
    freguesia: "Campolide",
    titulo: "Limpeza de Alojamento Local em Campolide",
    descricao:
      "Limpeza entre hóspedes em Campolide e nas Amoreiras. Prédios com elevador, estadias de trabalho e de estudo, limpezas intermédias e relatório fotográfico.",
    h1: "Limpeza de alojamento local em Campolide e nas Amoreiras",
    resposta:
      "A Mary Cleans limpa alojamentos locais em Campolide e nas Amoreiras, em Lisboa. Faz a rotação entre hóspedes, com troca de roupa de cama, reposição e relatório fotográfico, e limpezas intermédias para estadias de várias semanas, que nesta zona são comuns por causa da universidade e dos escritórios.",
    intro:
      "Campolide fica entre as Amoreiras, o Aqueduto das Águas Livres e o campus da Universidade Nova, com a estação de comboio de Campolide e o Marquês de Pombal a poucos minutos. Grande parte dos prédios é de habitação das décadas de 60 a 80, com elevador e garagem. Quem fica aqui vem muitas vezes em trabalho ou para estudar.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Estadias de duas semanas a três meses são frequentes. A casa precisa de limpezas intermédias com o hóspede lá dentro, em dia e hora combinados com ele.",
              "Quem trabalha em casa usa a secretária, a cadeira e a cozinha todos os dias. Estes pontos entram na lista do imóvel e são conferidos em cada visita.",
              "Os prédios têm elevador e regras de condomínio para o uso das zonas comuns. Os sacos de roupa e de lixo não ficam no patamar.",
              "Com garagem no prédio, o acesso faz-se muitas vezes por comando ou cartão. Isso fica escrito na lista do imóvel, junto com a chave.",
            ],
          },
        ],
      },
      {
        h2: "Estadias longas sem surpresas no check-out",
        blocos: [
          {
            t: "p",
            x: "Depois de dois meses de uso, a saída pede mais do que uma rotação de fim de semana: forno, frigorífico, exaustor, calcário no duche e colchão a verificar. Quando o imóvel recebe sobretudo estadias longas, o orçamento já prevê uma limpeza de saída mais funda. As limpezas intermédias seguem o âmbito da [limpeza de manutenção](/limpeza-de-manutencao-lisboa).",
          },
          {
            t: "p",
            x: "Se tem vários imóveis na zona, o modelo é o do [contrato de limpeza para vários alojamentos](/contrato-limpeza-alojamento-local).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Fazem limpeza semanal durante uma estadia de um mês?",
        r: "Sim. A limpeza intermédia é marcada com o hóspede e a frequência, semanal ou quinzenal, fica definida no orçamento.",
      },
      {
        p: "Trocam a roupa de cama a meio da estadia?",
        r: "Quando fica combinado. Usamos o jogo limpo do imóvel e deixamos o usado separado para a lavandaria do proprietário.",
      },
      {
        p: "Trabalham nas Amoreiras e junto ao Marquês?",
        r: "Sim. Campolide, Amoreiras e a zona do Marquês de Pombal fazem parte da nossa área em Lisboa.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-avenidas-novas",
      "limpeza-alojamento-local-principe-real-avenida",
      "limpeza-alojamento-local-arroios-anjos",
      "contrato-limpeza-alojamento-local",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-alvalade-roma",
    grupo: "bairro",
    rotulo: "Alvalade e Avenida de Roma",
    ...BASE,
    local: "Alvalade, Lisboa",
    freguesia: "Alvalade",
    titulo: "Limpeza de Alojamento Local em Alvalade",
    descricao:
      "Limpeza de alojamento local em Alvalade e na Avenida de Roma. Prédios com porteira, famílias e estadias médias, com relatório fotográfico em cada rotação.",
    h1: "Limpeza de alojamento local em Alvalade e na Avenida de Roma",
    resposta:
      "A Mary Cleans faz a limpeza de alojamentos locais em Alvalade e na zona da Avenida de Roma, em Lisboa. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição de consumíveis e relatório fotográfico. Os prédios aqui são de habitação permanente, por isso cumprimos as regras do condomínio e os horários do prédio.",
    intro:
      "Alvalade é um bairro planeado dos anos 40 e 50, com ruas largas, comércio de rua na Avenida de Roma e na Avenida da Igreja, e o metro à porta. Fica perto da Cidade Universitária, do Hospital de Santa Maria e do aeroporto. Quem aluga aqui vem em família, em visita académica, para acompanhar alguém no hospital ou para ficar algumas semanas a trabalhar.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Os prédios têm vizinhos permanentes, porteira ou administração. O aspirador, os sacos de lixo e as entradas e saídas seguem os horários do prédio.",
              "Os apartamentos são grandes para Lisboa, com três ou quatro quartos. Cada rotação conta com mais camas para fazer e mais roupa para contar.",
              "Muitas casas têm marquise e varanda fechada, que acumulam pó e são esquecidas. Entram na lista do imóvel como uma divisão.",
              "Estadias de uma a quatro semanas pedem uma cozinha bem equipada e limpa por dentro: forno, frigorífico, micro-ondas e máquina da loiça são conferidos em todas as saídas.",
            ],
          },
        ],
      },
      {
        h2: "Hóspedes que vêm por motivos de saúde ou de estudo",
        blocos: [
          {
            t: "p",
            x: "Quem fica perto do hospital ou da universidade sai e entra a horas pouco previsíveis e valoriza uma casa silenciosa e sem cheiros fortes. Usamos produtos sem perfume intenso quando o proprietário o pede, e deixamos a casa arejada. O que está incluído em cada visita está abaixo, e o processo completo está em [alojamento local](/servicos/alojamento-local).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Cumprem o regulamento do condomínio?",
        r: "Sim. Os horários e as regras do prédio ficam escritos na lista do imóvel antes da primeira limpeza.",
      },
      {
        p: "Limpam marquises e varandas fechadas?",
        r: "Sim, quando fazem parte do imóvel. Entram na lista como uma divisão e são limpas em cada rotação.",
      },
      {
        p: "Podem usar produtos sem perfume?",
        r: "Sim. Quando o proprietário pede, usamos produtos neutros, o que ajuda com hóspedes sensíveis a cheiros.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-avenidas-novas",
      "limpeza-alojamento-local-lumiar-telheiras",
      "limpeza-alojamento-local-olivais-aeroporto",
      "limpeza-alojamento-local-lisboa",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-penha-de-franca",
    grupo: "bairro",
    rotulo: "Penha de França",
    ...BASE,
    local: "Penha de França, Lisboa",
    freguesia: "Penha de França",
    titulo: "Limpeza de Alojamento Local na Penha de França",
    descricao:
      "Limpeza entre hóspedes na Penha de França: prédios antigos sem elevador, ruas inclinadas e estadias mais longas. Troca de roupa de cama e relatório fotográfico.",
    h1: "Limpeza de alojamento local na Penha de França",
    resposta:
      "A Mary Cleans faz a limpeza entre hóspedes de alojamentos locais na Penha de França, em Lisboa. Cada rotação inclui limpeza completa, troca de roupa de cama e toalhas, reposição de consumíveis e relatório fotográfico. A logística conta com prédios antigos sem elevador e com ruas onde não se estaciona.",
    intro:
      "A Penha de França fica no alto, entre Arroios, a Graça e o Alto de São João, com o miradouro da igreja da Penha e a Rua Morais Soares como eixo de comércio. Os preços de estadia são mais contidos do que no centro histórico, e por isso muitos hóspedes ficam mais noites e usam a casa como casa.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Prédios de três a cinco andares sem elevador. A roupa limpa e os consumíveis ficam guardados no imóvel, e a roupa usada fica separada no sítio que o proprietário indicar.",
              "Ruas inclinadas e estacionamento difícil. A janela de limpeza conta com esse tempo de chegada e de saída.",
              "Casas antigas com soalho de madeira e azulejo original. Os produtos certos para cada superfície ficam anotados na lista do imóvel.",
              "Estadias de uma ou duas semanas deixam mais uso na cozinha e na casa de banho. A rotação de saída inclui o interior do frigorífico e do micro-ondas e a remoção de calcário no duche.",
            ],
          },
        ],
      },
      {
        h2: "Humidade em prédios antigos",
        blocos: [
          {
            t: "p",
            x: "Nos prédios mais antigos, com paredes grossas e pouca ventilação, a casa de banho e os armários embutidos ganham bolor se a casa ficar fechada entre reservas. Arejamos em cada visita e anotamos no relatório qualquer mancha nova, para o proprietário decidir antes de piorar. Há um guia sobre isto: [humidade e bolor no alojamento local](/guias/humidade-bolor-alojamento-local).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Trabalham na Penha de França e no Alto de São João?",
        r: "Sim. Toda a freguesia da Penha de França faz parte da nossa área em Lisboa.",
      },
      {
        p: "O que acontece se encontrarem bolor?",
        r: "Limpamos o que sai com a limpeza normal e fotografamos o resto no relatório, com a indicação de onde está. A reparação da causa, como uma infiltração, fica com o proprietário.",
      },
      {
        p: "Preciso de levar a roupa de cama ao imóvel?",
        r: "A roupa de cama limpa tem de estar no imóvel antes da rotação. Trocamos a roupa, deixamos a usada separada e não fazemos a lavagem.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-arroios-anjos",
      "limpeza-alojamento-local-graca-sao-vicente",
      "limpeza-alojamento-local-lisboa",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-benfica",
    grupo: "bairro",
    rotulo: "Benfica e São Domingos de Benfica",
    ...BASE,
    local: "Benfica e São Domingos de Benfica, Lisboa",
    freguesia: "Benfica",
    titulo: "Limpeza de Alojamento Local em Benfica",
    descricao:
      "Limpeza entre hóspedes em Benfica e São Domingos de Benfica, perto do Estádio da Luz. Rotações em dias de jogo e de concerto, com relatório fotográfico.",
    h1: "Limpeza de alojamento local em Benfica",
    resposta:
      "A Mary Cleans limpa alojamentos locais em Benfica e em São Domingos de Benfica, em Lisboa. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição de consumíveis e relatório fotográfico. Aqui a procura acompanha o calendário do Estádio da Luz, por isso as rotações concentram-se nos dias a seguir aos jogos e aos concertos.",
    intro:
      "Benfica junta o Estádio da Luz, o Colombo, a Estrada de Benfica e a orla de Monsanto. Em São Domingos de Benfica ficam o Jardim Zoológico e Sete Rios. O metro azul liga tudo ao centro. Fora dos dias de evento os hóspedes são famílias e quem vem trabalhar; em dia de jogo ou de concerto chegam grupos que ficam uma ou duas noites.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Dias de jogo e de concerto trazem saídas todas à mesma hora no dia seguinte. Para quem tem mais de um imóvel na zona, as rotações são marcadas com antecedência, imóvel a imóvel.",
              "Grupos de amigos usam mais camas, mais toalhas e mais loiça. A contagem da roupa disponível é feita antes de começar, para não faltar um jogo.",
              "Prédios com elevador e garagem facilitam a logística. O acesso por comando ou cartão fica na lista do imóvel.",
              "Apartamentos virados para Monsanto têm mais pó de pólen na Primavera nos parapeitos e nas varandas.",
            ],
          },
        ],
      },
      {
        h2: "Depois de um grupo",
        blocos: [
          {
            t: "p",
            x: "Uma saída de grupo pede mais tempo do que uma saída de casal: lixo, garrafas, loiça, sofá e varanda. O relatório fotográfico mostra o estado em que a casa foi encontrada quando há danos ou falta algo do inventário, o que serve de prova junto da plataforma. Para saber como guardar essa prova, veja o [guia de vistoria ao alojamento local](/guias/vistoria-alojamento-local).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Conseguem fazer várias rotações no dia a seguir a um jogo?",
        r: "Marcamos as rotações com antecedência, imóvel a imóvel, quando o proprietário nos envia o calendário de reservas. A disponibilidade de cada data confirma-se na proposta.",
      },
      {
        p: "Fotografam danos deixados pelos hóspedes?",
        r: "Sim. O relatório fotográfico mostra o que encontrámos partido, manchado ou em falta, com a data e a divisão.",
      },
      {
        p: "Trabalham perto do Jardim Zoológico e de Sete Rios?",
        r: "Sim. São Domingos de Benfica, Sete Rios e a zona do Jardim Zoológico fazem parte da nossa área.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-campolide-amoreiras",
      "limpeza-alojamento-local-alvalade-roma",
      "limpeza-alojamento-local-lumiar-telheiras",
      "limpeza-alojamento-local-lisboa",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-marvila-beato",
    grupo: "bairro",
    rotulo: "Marvila, Beato e Xabregas",
    ...BASE,
    local: "Marvila, Beato e Xabregas, Lisboa",
    freguesia: "Marvila e Beato",
    titulo: "Limpeza de Alojamento Local em Marvila",
    descricao:
      "Limpeza de alojamento local em Marvila, no Beato e em Xabregas: lofts em antigos armazéns, pavimento de cimento e janelas grandes, com relatório fotográfico.",
    h1: "Limpeza de alojamento local em Marvila e no Beato",
    resposta:
      "A Mary Cleans faz a limpeza de alojamentos locais em Marvila, no Beato e em Xabregas, em Lisboa. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição de consumíveis e relatório fotográfico, com os cuidados que pedem os lofts e os espaços abertos em antigos armazéns e fábricas.",
    intro:
      "A zona oriental de Lisboa, entre Santa Apolónia e o Parque das Nações, mudou muito com o Hub Criativo do Beato, as cervejeiras artesanais de Marvila e as galerias em antigos armazéns. Ao lado dos bairros de habitação há lofts com pé-direito alto, pavimento de cimento e janelas industriais. Quem fica aqui vem muitas vezes em trabalho, para eventos ou para estadias de algumas semanas.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Pavimentos de cimento afagado ou de resina mostram cada marca de água e de produto. Usamos o produto e a dose certos para não deixar véu, e o pano seco no fim.",
              "Janelas industriais grandes, com muitos vidros pequenos e caixilharia de ferro. Os vidros interiores ficam na rotina, e a caixilharia na limpeza profunda.",
              "Espaços abertos sem paredes entre cozinha, sala e quarto. O cheiro da cozinha espalha-se por tudo, por isso a casa é arejada e o exaustor e os filtros são conferidos.",
              "Pé-direito alto e candeeiros suspensos acumulam pó onde não se vê do chão. Entram na limpeza profunda, uma ou duas vezes por ano.",
            ],
          },
        ],
      },
      {
        h2: "Hóspedes em trabalho e em eventos",
        blocos: [
          {
            t: "p",
            x: "Com eventos e escritórios à porta, há reservas de dias úteis e saídas a meio da semana. A janela de limpeza é marcada a partir da hora de saída e de entrada de cada imóvel, que fica escrita na lista. Para ver como organizar essa janela, leia o guia sobre [horário de check-out e check-in](/guias/horario-check-out-check-in-limpeza).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Limpam lofts e espaços abertos?",
        r: "Sim. A lista do imóvel divide o espaço aberto em zonas, para que cozinha, sala e quarto sejam conferidos em separado.",
      },
      {
        p: "Que cuidado têm com pavimento de cimento ou de resina?",
        r: "Usamos produto neutro na dose indicada para a superfície e secamos no fim, para não deixar marcas. O produto fica anotado na lista do imóvel.",
      },
      {
        p: "Trabalham em Xabregas e perto do Museu do Azulejo?",
        r: "Sim. Marvila, Beato e Xabregas fazem parte da nossa área em Lisboa.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-parque-das-nacoes",
      "limpeza-alojamento-local-olivais-aeroporto",
      "limpeza-alojamento-local-graca-sao-vicente",
      "limpeza-alojamento-local-lisboa",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-olivais-aeroporto",
    grupo: "bairro",
    rotulo: "Olivais e zona do aeroporto",
    ...BASE,
    local: "Olivais e Encarnação, Lisboa",
    freguesia: "Olivais",
    titulo: "Limpeza de Alojamento Local perto do Aeroporto",
    descricao:
      "Limpeza entre hóspedes nos Olivais e na Encarnação, perto do aeroporto de Lisboa. Estadias de uma noite, rotações frequentes e relatório fotográfico.",
    h1: "Limpeza de alojamento local nos Olivais, perto do aeroporto",
    resposta:
      "A Mary Cleans faz a limpeza de alojamentos locais nos Olivais e na Encarnação, a poucos minutos do aeroporto de Lisboa. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição de consumíveis e relatório fotográfico. Com muitas estadias de uma noite, o mesmo imóvel pode precisar de várias rotações na mesma semana.",
    intro:
      "Os Olivais foram planeados nos anos 60, com prédios de habitação no meio de muito verde e o metro vermelho a ligar ao aeroporto e ao Oriente. Quem fica aqui vem por causa de um voo: chega tarde, sai cedo, ou fica uma noite entre duas viagens. A casa roda muito e cada rotação tem de ser rápida e sem falhas.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Estadias de uma noite multiplicam as rotações. Num imóvel destes, o calendário semanal de limpezas é combinado com o proprietário a partir das reservas.",
              "Hóspedes com malas e pouco tempo usam pouco a cozinha, mas usam sempre a casa de banho e a cama. A lista do imóvel dá prioridade a esses pontos.",
              "Chegadas a qualquer hora pedem acesso autónomo, com cofre ou fechadura com código. A limpeza tem de estar concluída antes da hora de entrada mais cedo que o anúncio aceita.",
              "Com o ruído dos aviões, as janelas ficam fechadas e a casa precisa de ser arejada em cada visita.",
            ],
          },
        ],
      },
      {
        h2: "Muitas rotações, mesmo padrão",
        blocos: [
          {
            t: "p",
            x: "Quando a casa roda quase todos os dias, o risco é a limpeza ficar mais curta com o tempo. Cada rotação segue a mesma lista escrita do imóvel e termina com o relatório fotográfico, o que permite ao proprietário comparar uma semana com a outra sem lá ir. Para quem gere vários imóveis perto do aeroporto, o modelo é o do [contrato de limpeza para vários alojamentos](/contrato-limpeza-alojamento-local).",
          },
          {
            t: "p",
            x: "Sobre o acesso ao imóvel, há um guia próprio: [chaves, cofres e fechaduras para a limpeza](/guias/acesso-imovel-chaves-cofre-limpeza).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Fazem limpeza em imóveis com estadias de uma noite?",
        r: "Sim. O calendário das rotações é combinado a partir das reservas e cada rotação segue a lista completa do imóvel.",
      },
      {
        p: "E se o hóspede seguinte chegar de madrugada?",
        r: "A rotação fica concluída dentro da janela entre a saída e a entrada combinadas para o imóvel, por isso a casa já está pronta quando ele chega.",
      },
      {
        p: "Trabalham na Encarnação e junto ao metro do aeroporto?",
        r: "Sim. Olivais, Encarnação e a zona junto ao aeroporto fazem parte da nossa área em Lisboa.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-parque-das-nacoes",
      "limpeza-alojamento-local-marvila-beato",
      "limpeza-alojamento-local-alvalade-roma",
      "contrato-limpeza-alojamento-local",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-lumiar-telheiras",
    grupo: "bairro",
    rotulo: "Lumiar e Telheiras",
    ...BASE,
    local: "Lumiar e Telheiras, Lisboa",
    freguesia: "Lumiar",
    titulo: "Limpeza de Alojamento Local no Lumiar",
    descricao:
      "Limpeza de alojamento local no Lumiar, em Telheiras e na Alta de Lisboa. Condomínios com garagem, famílias e estadias médias, com relatório fotográfico.",
    h1: "Limpeza de alojamento local no Lumiar e em Telheiras",
    resposta:
      "A Mary Cleans limpa alojamentos locais no Lumiar, em Telheiras e na Alta de Lisboa. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição de consumíveis e relatório fotográfico. Nesta zona predominam condomínios recentes e apartamentos familiares, com estadias mais longas do que no centro.",
    intro:
      "O Lumiar é a parte norte de Lisboa, com a Quinta das Conchas, o Museu do Traje, o Estádio José Alvalade ao lado e o metro verde a terminar em Telheiras. Muitos prédios são condomínios das últimas décadas, com garagem, arrecadação e por vezes piscina comum. Quem fica aqui vem em família, para trabalhar ou para acompanhar um evento no estádio.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Condomínios com portaria ou videoporteiro e regras para o uso das zonas comuns. A forma de entrar e o lugar da garagem ficam escritos na lista do imóvel.",
              "Arrecadação no prédio é um bom sítio para a roupa de cama limpa e os consumíveis de reserva, quando o proprietário a disponibiliza.",
              "Apartamentos familiares com cozinha completa, máquina da loiça e da roupa. Na rotação de saída o interior dos eletrodomésticos é conferido.",
              "Varandas grandes com móveis de exterior juntam pó e folhas. Entram na lista do imóvel quando fazem parte do anúncio.",
            ],
          },
        ],
      },
      {
        h2: "Estadias de uma semana ou mais",
        blocos: [
          {
            t: "p",
            x: "Com menos rotações por mês, cada saída pesa mais na avaliação. A conferência final é feita divisão a divisão e o relatório fotográfico mostra cada quarto com a cama feita. Uma ou duas vezes por ano vale a pena uma [limpeza profunda](/limpeza-profunda-lisboa) num período sem reservas.",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Limpam a piscina ou as zonas comuns do condomínio?",
        r: "A rotação cobre o interior do imóvel e as varandas que fazem parte dele. As zonas comuns e a piscina do prédio são da responsabilidade do condomínio.",
      },
      {
        p: "Podem guardar a roupa de cama na arrecadação?",
        r: "Sim, se o proprietário o indicar. O sítio fica anotado na lista do imóvel, junto com a contagem dos jogos.",
      },
      {
        p: "Trabalham na Alta de Lisboa e em Telheiras?",
        r: "Sim. Lumiar, Telheiras e a Alta de Lisboa fazem parte da nossa área.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-alvalade-roma",
      "limpeza-alojamento-local-benfica",
      "limpeza-alojamento-local-lisboa",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },

  // ───────────────────────── Cascais ─────────────────────────
  {
    slug: "limpeza-alojamento-local-guincho-malveira-cascais",
    grupo: "area",
    rotulo: "Guincho e Malveira da Serra",
    ...BASE,
    local: "Cascais",
    freguesia: "Alcabideche",
    titulo: "Limpeza de Alojamento Local no Guincho",
    descricao:
      "Limpeza entre hóspedes no Guincho, na Malveira da Serra e na Areia, em Cascais. Moradias com vento, areia e salitre, relatório fotográfico em cada rotação.",
    h1: "Limpeza de alojamento local no Guincho e na Malveira da Serra",
    resposta:
      "A Mary Cleans faz a limpeza entre hóspedes de alojamentos locais no Guincho, na Malveira da Serra e na Areia, no concelho de Cascais. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição de consumíveis e relatório fotográfico, numa zona de moradias onde o vento traz areia e salitre para dentro de casa.",
    intro:
      "Entre a serra e o mar, dentro do Parque Natural de Sintra-Cascais, as casas são sobretudo moradias com jardim, muitas com piscina, a que só se chega de carro. A Praia do Guincho atrai quem faz surf e kitesurf, e o vento forte do Verão é parte do clima. Os hóspedes ficam vários dias e voltam da praia com areia, fatos molhados e pranchas.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "O vento leva areia fina para dentro mesmo com as janelas fechadas. Pavimentos, parapeitos e calhas das portas de correr são aspirados antes de lavar.",
              "O salitre embacia vidros e deixa marcas em metais e torneiras. Os vidros interiores e as portas de varanda são limpos em cada rotação.",
              "Duche exterior, zona de lavagem de equipamento e toalhas de praia fazem parte do inventário de muitas casas. Contamos e registamos o que falta.",
              "Moradias isoladas pedem mais tempo de deslocação. Quando há custo de deslocação, vem indicado à parte no orçamento.",
              "Piscina e jardim não fazem parte da rotação descrita aqui. Se precisar, diga no pedido de proposta e respondemos por escrito.",
            ],
          },
        ],
      },
      {
        h2: "Casas grandes e estadias de vários dias",
        blocos: [
          {
            t: "p",
            x: "Uma moradia com quatro quartos e várias casas de banho é outra escala de rotação. A lista do imóvel separa cada piso e cada quarto, e o relatório fotográfico mostra todas as divisões. Fora da época, quando a casa fica fechada semanas junto ao mar, uma limpeza antes da primeira reserva evita que o hóspede encontre pó e cheiro a casa fechada.",
          },
          {
            t: "p",
            x: "Para o resto do concelho, veja [limpeza de alojamento local em Cascais](/limpeza-alojamento-local-cascais). Para a costa de Sintra, a seguir ao Cabo da Roca, veja [alojamento local nas praias de Sintra](/limpeza-alojamento-local-colares-praias-sintra).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Trabalham no Guincho e na Malveira da Serra?",
        r: "Sim. O Guincho, a Malveira da Serra, a Areia e o resto da freguesia de Alcabideche fazem parte da nossa área em Cascais.",
      },
      {
        p: "Limpam a piscina e o jardim?",
        r: "A rotação cobre o interior da moradia, as varandas e o terraço junto à casa. Piscina e jardim não estão incluídos; se precisar, diga no pedido de proposta.",
      },
      {
        p: "Há custo de deslocação?",
        r: "Quando existe, vem indicado à parte no orçamento, antes de começar.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-cascais",
      "empresa-de-limpeza-cascais",
      "limpeza-alojamento-local-colares-praias-sintra",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
];

export const paginaZonaPorSlug = (slug) => PAGINAS_ZONAS.find((p) => p.slug === slug);
