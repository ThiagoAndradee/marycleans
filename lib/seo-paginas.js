// Páginas de entrada por serviço e por zona. Lisboa primeiro, Sintra e Cascais como área atendida.
//
// Mesma regra de lib/negocio.js: nada inventado sobre a Mary Cleans. Não há preço da casa,
// número de clientes, avaliações nem moradas. Os valores de mercado vêm do CONTEXTO da frente
// (números públicos de 2026) e da página pública de preços da Zaask, sempre citados como referência.
// Limpeza noturna não é anunciada (MC-Q09 pendente). Lavagem e engomadoria ficam com o proprietário.
//
// O que se diz de cada bairro é facto público do bairro (tipo de prédio, acessos, ruas). É isso
// que faz cada página diferente das outras.
//
// Texto: [rótulo](/caminho) vira link interno (components/blog/TextoComLinks).

const ROTACAO = "Rotação de Alojamento Local";

export const PAGINAS_SEO = [
  // ───────────────────────── Lisboa: páginas principais ─────────────────────────
  {
    slug: "limpeza-alojamento-local-lisboa",
    grupo: "lisboa",
    rotulo: "Limpeza de alojamento local em Lisboa",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    inclui: "rotacao-alojamento-local",
    local: "Lisboa",
    titulo: "Limpeza de Alojamento Local em Lisboa",
    descricao:
      "Limpeza entre hóspedes em Lisboa: troca de roupa de cama, reposição e relatório fotográfico em cada rotação. Preço fechado por imóvel. Peça orçamento.",
    h1: "Limpeza de alojamento local em Lisboa",
    resposta:
      "A Mary Cleans faz a limpeza entre hóspedes de alojamentos locais em Lisboa. Cada rotação inclui limpeza completa, troca de roupa de cama e toalhas, reposição de consumíveis e um relatório fotográfico enviado ao proprietário. O preço é fechado por imóvel e fica escrito no orçamento.",
    intro:
      "Em Lisboa a maior parte das saídas acontece de manhã e as entradas a meio da tarde. A limpeza tem de caber nesse intervalo, num prédio que muitas vezes não tem elevador e numa rua onde não se estaciona. Trabalhamos em dupla, com a mesma equipa em todas as visitas, e cada casa tem a sua lista escrita.",
    secoes: [
      {
        h2: "Como funciona a limpeza entre hóspedes em Lisboa?",
        blocos: [
          {
            t: "p",
            x: "Antes da primeira limpeza combinamos por escrito o que é próprio daquele imóvel: o acesso (chave, cofre ou código), onde fica a roupa de cama limpa, onde se deixa a usada, que consumíveis se repõem e a que horas o hóspede sai e entra. A partir daí cada rotação segue a mesma ordem.",
          },
          {
            t: "lista",
            x: [
              "Entramos depois do check-out, na janela combinada para o imóvel",
              "Uma pessoa começa pela cozinha e pelas casas de banho, a outra pelos quartos e pela roupa de cama",
              "Repomos os consumíveis definidos para a casa",
              "Conferimos divisão a divisão contra a lista do imóvel",
              "Enviamos o relatório fotográfico com o estado de entrega e com o que encontrámos avariado ou em falta",
            ],
          },
          {
            t: "p",
            x: "O processo completo, passo a passo, está na página de [alojamento local](/servicos/alojamento-local).",
          },
        ],
      },
      {
        h2: "O que muda de bairro para bairro",
        blocos: [
          {
            t: "p",
            x: "Limpar um T1 num quarto andar sem elevador em Alfama pede outra logística do que um T2 com garagem no Parque das Nações. Por isso descrevemos cada zona em separado:",
          },
          {
            t: "lista",
            x: [
              "[Alfama, Baixa e Chiado](/limpeza-alojamento-local-alfama-baixa-chiado): ruas pedonais, escadas e prédios antigos",
              "[Bairro Alto e Cais do Sodré](/limpeza-alojamento-local-bairro-alto-cais-do-sodre): estadias curtas e fins de semana cheios",
              "[Graça e São Vicente](/limpeza-alojamento-local-graca-sao-vicente): colinas, miradouros e a Feira da Ladra à porta",
              "[Arroios e Anjos](/limpeza-alojamento-local-arroios-anjos): prédios do início do século XX e estadias mais longas",
              "[Estrela e Campo de Ourique](/limpeza-alojamento-local-estrela-campo-de-ourique): apartamentos maiores e famílias",
              "[Parque das Nações](/limpeza-alojamento-local-parque-das-nacoes): prédios recentes, muito vidro e hóspedes em trabalho",
            ],
          },
        ],
      },
      {
        h2: "Para quem tem mais de um imóvel",
        blocos: [
          {
            t: "p",
            x: "Quem gere vários alojamentos precisa de saber que todos ficam prontos sem ter de ir ver. Nesses casos orçamentamos como contrato, com um preço por limpeza fixado para o período e o relatório fotográfico a substituir a visita. Os detalhes estão em [contrato de limpeza para vários alojamentos](/contrato-limpeza-alojamento-local).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "O que está incluído na limpeza de um alojamento local?",
        r: "Limpeza de todas as divisões, cozinha e casas de banho higienizadas, aspiração e lavagem de pavimentos, troca de roupa de cama e toalhas com o jogo limpo do imóvel, reposição de consumíveis, conferência final e relatório fotográfico.",
      },
      {
        p: "Quanto custa a limpeza de um alojamento local em Lisboa?",
        r: "Os valores públicos de mercado em Lisboa e Sintra em 2026 ficam entre 44 € e 70 € por rotação num T1 ou T2. O nosso preço é fechado por imóvel, depende da tipologia e do que fica combinado para a casa, e consta do orçamento antes de começar.",
      },
      {
        p: "A limpeza inclui lavandaria?",
        r: "Não. Trocamos a roupa de cama e as toalhas e deixamos a roupa usada separada onde o proprietário indicar. A lavagem e a engomadoria ficam com o proprietário ou com a lavandaria que ele contratar.",
      },
      {
        p: "Enviam fotografias depois de cada limpeza?",
        r: "Sim. Cada rotação termina com um relatório fotográfico do estado de entrega de cada divisão, com nota do que foi reposto e do que precisa de atenção, como uma torneira a pingar ou uma toalha no fim da vida.",
      },
      {
        p: "Preciso de estar no imóvel durante a limpeza?",
        r: "Não. A maioria dos proprietários deixa uma chave ou um código de acesso, e fica a saber como a casa ficou pelo relatório fotográfico.",
      },
    ],
    relacionadas: [
      "contrato-limpeza-alojamento-local",
      "limpeza-alojamento-local-alfama-baixa-chiado",
      "limpeza-alojamento-local-parque-das-nacoes",
      "empresa-de-limpeza-lisboa",
    ],
    posts: ["checklist-check-out-alojamento-local", "limpeza-alojamento-local-sintra"],
  },
  {
    slug: "empresa-de-limpeza-lisboa",
    grupo: "lisboa",
    rotulo: "Empresa de limpeza em Lisboa",
    servicoTipo: "Serviços de limpeza",
    servicoForm: "",
    local: "Lisboa",
    titulo: "Empresa de Limpeza em Lisboa",
    descricao:
      "Empresa de limpeza em Lisboa para alojamento local, imobiliárias e habitação. Sempre a mesma equipa, preço fechado por imóvel e relatório fotográfico.",
    h1: "Empresa de limpeza em Lisboa",
    resposta:
      "A Mary Cleans é uma empresa de limpeza pequena que trabalha em Lisboa, com Sintra e Cascais como áreas atendidas. Serve alojamento local, mediação imobiliária e habitação. Quem limpa é sempre a mesma equipa, o preço é fechado por imóvel e cada serviço termina com um relatório fotográfico.",
    intro:
      "Somos uma equipa pequena e é assim que trabalhamos melhor. A casa não recebe pessoas diferentes em cada visita, o cliente fala directamente com quem limpa e o que está incluído fica escrito antes de começar.",
    secoes: [
      {
        h2: "O que fazemos em Lisboa",
        blocos: [
          {
            t: "lista",
            x: [
              "[Limpeza de alojamento local](/limpeza-alojamento-local-lisboa), entre a saída de um hóspede e a entrada do seguinte",
              "[Limpeza pós-obra](/limpeza-pos-obra-lisboa), no fim de uma remodelação",
              "[Limpeza para venda de casa](/limpeza-para-venda-de-casa-lisboa), antes das fotografias e das visitas",
              "[Limpeza pós-mudança](/limpeza-pos-mudanca-lisboa), com a casa vazia",
              "[Limpeza de habitação](/servicos/habitacao), de manutenção ou profunda",
            ],
          },
          {
            t: "p",
            x: "O âmbito de cada serviço está descrito em [serviços](/servicos). O que não fazemos também: não lavamos nem engomamos roupa de cama.",
          },
        ],
      },
      {
        h2: "Como escolher uma empresa de limpeza em Lisboa?",
        blocos: [
          {
            t: "p",
            x: "Vale a pena fazer quatro perguntas a qualquer empresa, incluindo a nós, antes de entregar a chave de casa.",
          },
          {
            t: "lista",
            x: [
              "Quem vem? Se a equipa muda a cada visita, cada limpeza começa do zero.",
              "O que está incluído? Peça a lista por escrito. Vidros, interior do forno e interior de armários são os pontos onde os orçamentos mais diferem.",
              "Como se cobra? Preço à hora varia com o tempo gasto. Preço fechado por imóvel é igual todos os meses.",
              "Como sei que ficou feito? Um relatório fotográfico responde a isto sem ter de ir ver.",
            ],
          },
        ],
      },
      {
        h2: "Como pedir orçamento",
        blocos: [
          {
            t: "p",
            x: "Basta a tipologia, a freguesia e a frequência. Não é preciso visita para orçamentar a maior parte das casas. Respondemos pelo formulário ou pelo WhatsApp, por escrito, com o que está e o que não está incluído.",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Quanto custa uma empresa de limpeza em Lisboa?",
        r: "Depende do serviço e da tipologia. Como referência pública de mercado em 2026, um prestador de padrão elevado cobra cerca de 15 € por hora e uma rotação de alojamento local num T1 ou T2 fica entre 44 € e 70 €. Nós orçamentamos por imóvel, com preço fechado.",
      },
      {
        p: "Quem fornece os produtos de limpeza?",
        r: "Nós. Levamos produto e equipamento em todas as visitas. Se preferir um produto específico, por alergia ou por causa de um pavimento delicado, fica indicado no orçamento.",
      },
      {
        p: "Preciso de estar em casa durante a limpeza?",
        r: "Não. Pode deixar a chave ou um código de acesso. No fim recebe o relatório fotográfico com o estado em que a casa ficou.",
      },
      {
        p: "Trabalham com empresas e passam fatura?",
        r: "Sim. Os contratos de limpeza recorrente são de prestação de serviço, com fatura.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-lisboa",
      "limpeza-pos-obra-lisboa",
      "limpeza-para-venda-de-casa-lisboa",
      "empresa-de-limpeza-sintra",
    ],
    posts: ["quanto-custa-limpeza-sintra"],
  },
  {
    slug: "limpeza-pos-obra-lisboa",
    grupo: "lisboa",
    rotulo: "Limpeza pós-obra em Lisboa",
    servicoTipo: "Limpeza pós-obra",
    servicoForm: "Limpeza Pós-Obra",
    inclui: "limpeza-pos-obra",
    local: "Lisboa",
    titulo: "Limpeza Pós-Obra em Lisboa",
    descricao:
      "Limpeza pós-obra em Lisboa: pó fino, restos de tinta, cola e cimento, vidros e caixilharia, em duas passagens. Orçamento por escrito, por imóvel.",
    h1: "Limpeza pós-obra em Lisboa",
    resposta:
      "A limpeza pós-obra retira o pó fino e os resíduos que uma remodelação deixa: tinta, cola, cimento e silicone em pavimentos, vidros, caixilharia e rodapés. A Mary Cleans faz este serviço em Lisboa em duas passagens, porque o pó de obra volta a assentar depois da primeira.",
    intro:
      "Depois de uma obra a casa parece pronta e não está. O pó de estuque e de corte de cerâmica é tão fino que fica dentro dos armários, nas calhas das janelas e em cima das portas, e continua a cair durante dias.",
    secoes: [
      {
        h2: "Em que é diferente a limpeza pós-obra de uma limpeza normal?",
        blocos: [
          {
            t: "p",
            x: "Numa limpeza de manutenção remove-se sujidade do uso. Numa limpeza pós-obra remove-se material de construção, e isso muda a ordem do trabalho e o equipamento. Aspira-se antes de passar pano, para não transformar o pó em lama. Os restos de tinta e de cimento saem com espátula e produto próprio para cada superfície, porque o que limpa cerâmica pode manchar madeira envernizada ou pedra.",
          },
        ],
      },
      {
        h2: "Porque é que a limpeza pós-obra se faz em duas passagens?",
        blocos: [
          {
            t: "p",
            x: "Na primeira passagem aspiramos tudo, de cima para baixo, incluindo o interior dos armários, as calhas das janelas e os estores. Tiramos os resíduos agarrados e lavamos. Na segunda, feita depois de o pó em suspensão assentar, repassamos superfícies, vidros e pavimentos. Só depois disso a casa está em condições de receber móveis.",
          },
        ],
      },
      {
        h2: "O que convém saber antes de pedir orçamento",
        blocos: [
          {
            t: "lista",
            x: [
              "A obra tem de estar acabada, com o entulho já retirado pelo empreiteiro. Não fazemos remoção de entulho.",
              "Diga a área, a tipologia e o tipo de obra. Uma pintura deixa muito menos pó do que uma obra com demolição ou corte de azulejo.",
              "Indique se há pavimento de madeira, pedra natural ou microcimento, que pedem produto próprio.",
              "Se a casa vai ser vendida ou arrendada a seguir, veja também a [limpeza para venda de casa](/limpeza-para-venda-de-casa-lisboa).",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        p: "Quanto custa uma limpeza pós-obra em Lisboa?",
        r: "A Zaask publica um intervalo médio de 17 € a 30 € por hora para limpeza pós-obra em Portugal (consultado em Novembro de 2026). O valor final depende da área, do tipo de obra e do estado em que a casa ficou. Nós damos um preço fechado por imóvel, por escrito.",
      },
      {
        p: "Quanto tempo demora uma limpeza pós-obra?",
        r: "Depende da área e do tipo de obra. A duração estimada consta do orçamento. Contamos sempre com duas passagens, porque o pó fino volta a assentar depois da primeira.",
      },
      {
        p: "Conseguem remover o pó fino da obra?",
        r: "Sim. O pó fino sai com aspiração antes de qualquer pano húmido, de cima para baixo, e com uma segunda passagem depois de o pó em suspensão assentar.",
      },
      {
        p: "A limpeza pós-obra inclui retirar entulho?",
        r: "Não. O entulho e os restos de material devem ser retirados pelo empreiteiro. Tratamos do pó e dos resíduos agarrados às superfícies.",
      },
      {
        p: "Preciso de fornecer produtos ou equipamento?",
        r: "Não. Levamos o equipamento e os produtos adequados a cada superfície.",
      },
    ],
    fontes: [
      {
        rotulo: "Zaask: quanto custa um serviço de limpeza pós-obra",
        url: "https://www.zaask.pt/quanto-custa/limpeza-pos-obra",
      },
    ],
    relacionadas: [
      "limpeza-para-venda-de-casa-lisboa",
      "limpeza-pos-mudanca-lisboa",
      "empresa-de-limpeza-lisboa",
    ],
    posts: ["limpeza-para-vender-casa", "quanto-custa-limpeza-sintra"],
  },
  {
    slug: "limpeza-para-venda-de-casa-lisboa",
    grupo: "lisboa",
    rotulo: "Limpeza para venda de casa em Lisboa",
    servicoTipo: "Limpeza de imóvel para venda",
    servicoForm: "Limpeza de Apresentação",
    inclui: "limpeza-de-apresentacao",
    local: "Lisboa",
    titulo: "Limpeza para Venda de Casa em Lisboa",
    descricao:
      "Limpeza de casa para venda em Lisboa: imóvel pronto para as fotografias e as visitas, com registo fotográfico. Para proprietários e consultores.",
    h1: "Limpeza para venda de casa em Lisboa",
    resposta:
      "A limpeza para venda prepara um imóvel para as fotografias do anúncio e para as visitas. A Mary Cleans limpa casas vazias ou habitadas em Lisboa: pó de casa fechada, vidros interiores, cozinha, casas de banho e cheiro. No fim entrega um registo fotográfico que pode ficar no processo do imóvel.",
    intro:
      "Uma casa fechada há meses acumula pó, cheiro e marcas nas casas de banho, mesmo que ninguém lá tenha entrado. Quem a visita repara nisso antes de reparar na planta.",
    secoes: [
      {
        h2: "Quando limpar uma casa que está à venda?",
        blocos: [
          {
            t: "lista",
            x: [
              "Antes das fotografias. O anúncio fica meses no ar com as imagens desse dia.",
              "Antes das visitas. Uma passagem rápida de manutenção quando a casa está no mercado há semanas e volta a ganhar pó.",
              "Na entrega de chaves. A casa limpa no dia da escritura, com registo fotográfico do estado em que foi entregue.",
            ],
          },
          {
            t: "p",
            x: "Sobre a entrega de chaves há um artigo próprio: [limpeza de entrega de chaves em Lisboa](/blog/limpeza-entrega-de-chaves-lisboa).",
          },
        ],
      },
      {
        h2: "Casa vazia e casa habitada",
        blocos: [
          {
            t: "p",
            x: "Numa casa vazia limpa-se tudo, incluindo o interior dos armários embutidos e as marcas que os móveis deixaram. Numa casa onde ainda vive alguém o trabalho é combinado com quem lá mora e concentra-se no que a câmara e o visitante veem primeiro: entrada, cozinha, casas de banho e vidros.",
          },
          {
            t: "p",
            x: "Se a casa saiu de obras, o serviço certo é a [limpeza pós-obra](/limpeza-pos-obra-lisboa). Se acabou de ser esvaziada, é a [limpeza pós-mudança](/limpeza-pos-mudanca-lisboa).",
          },
        ],
      },
      {
        h2: "Para consultores imobiliários",
        blocos: [
          {
            t: "p",
            x: "Quem vende casas precisa deste serviço várias vezes por ano e não pode ficar à espera de fornecedor. Trabalhamos com consultores como fornecedor fixo, com prioridade de agenda. As condições estão na página de [mediação imobiliária](/servicos/imobiliarias).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Vale a pena limpar a casa antes de a pôr à venda?",
        r: "Sim. As fotografias do anúncio são tiradas uma vez e ficam visíveis durante todo o tempo de venda, e uma casa com pó e cheiro a fechado transmite falta de manutenção a quem a visita.",
      },
      {
        p: "Quem paga a limpeza, o proprietário ou a imobiliária?",
        r: "Depende do que ficar combinado entre os dois. Emitimos fatura a quem contratar o serviço, seja o proprietário ou o consultor.",
      },
      {
        p: "Fazem limpeza em casas com recheio para retirar?",
        r: "Limpamos depois de a casa estar esvaziada. Não fazemos remoção de móveis nem de entulho.",
      },
      {
        p: "O registo fotográfico serve para quê?",
        r: "Mostra o estado de cada divisão no dia da limpeza. O consultor pode guardá-lo no processo do imóvel e, na entrega de chaves, fica como prova do estado em que a casa foi entregue.",
      },
    ],
    relacionadas: [
      "limpeza-pos-obra-lisboa",
      "limpeza-pos-mudanca-lisboa",
      "empresa-de-limpeza-lisboa",
    ],
    posts: ["limpeza-para-vender-casa", "limpeza-entrega-de-chaves-lisboa"],
  },
  {
    slug: "limpeza-pos-mudanca-lisboa",
    grupo: "lisboa",
    rotulo: "Limpeza pós-mudança em Lisboa",
    servicoTipo: "Limpeza pré e pós-mudança",
    servicoForm: "Limpeza Pré e Pós-Mudança",
    inclui: "limpeza-pos-mudanca",
    local: "Lisboa",
    titulo: "Limpeza Pós-Mudança em Lisboa",
    descricao:
      "Limpeza antes de entrar ou depois de sair de uma casa em Lisboa. Casa vazia, interior de armários e marcas de móveis, com registo fotográfico para o senhorio.",
    h1: "Limpeza pré e pós-mudança em Lisboa",
    resposta:
      "A limpeza de mudança é feita com a casa vazia, antes de alguém entrar ou depois de alguém sair. A Mary Cleans limpa todas as divisões, o interior dos armários embutidos e as marcas deixadas pelos móveis, em Lisboa, e entrega um registo fotográfico útil para devolver a casa ao senhorio.",
    intro:
      "Com a casa vazia vê-se o que os móveis tapavam: o pó atrás do frigorífico, a gordura por cima dos armários da cozinha, as marcas na parede onde estava o sofá. É também a única altura em que se chega a tudo sem desviar nada.",
    secoes: [
      {
        h2: "Ao sair de uma casa arrendada",
        blocos: [
          {
            t: "p",
            x: "O contrato de arrendamento pede normalmente que a casa seja devolvida no estado em que foi recebida. Uma limpeza completa com fotografias de cada divisão dá ao inquilino uma prova do estado de entrega, com data, para a conversa sobre a caução.",
          },
        ],
      },
      {
        h2: "Antes de entrar",
        blocos: [
          {
            t: "p",
            x: "Limpar antes de os móveis chegarem é mais rápido e fica melhor. O interior dos armários, as gavetas, o frigorífico e o forno ficam prontos a usar, e as casas de banho são desinfectadas antes do primeiro banho.",
          },
        ],
      },
      {
        h2: "Como marcar em Lisboa",
        blocos: [
          {
            t: "lista",
            x: [
              "Marque a limpeza para depois de a casa estar completamente vazia.",
              "Diga a tipologia e o andar, e se o prédio tem elevador.",
              "Se a casa tem electricidade e água ligadas no dia. Sem elas não se consegue aspirar nem lavar.",
              "Se houve obras entre um inquilino e o seguinte, peça antes a [limpeza pós-obra](/limpeza-pos-obra-lisboa).",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        p: "A limpeza de fim de contrato é obrigatória?",
        r: "A obrigação é a que estiver no contrato de arrendamento, que em regra pede a devolução da casa no estado em que foi recebida. A limpeza com registo fotográfico ajuda a mostrar que isso foi cumprido.",
      },
      {
        p: "O que inclui uma limpeza pós-mudança?",
        r: "Todas as divisões da casa vazia, o interior dos armários embutidos, a cozinha e as casas de banho, os pavimentos e as marcas deixadas pelos móveis.",
      },
      {
        p: "Limpam o interior do forno e do frigorífico?",
        r: "Sim, quando ficam na casa. Indique no pedido quais os electrodomésticos que ficam.",
      },
      {
        p: "Quanto tempo antes devo marcar?",
        r: "Assim que souber a data em que a casa fica vazia. As datas de fim de mês são as mais pedidas.",
      },
    ],
    relacionadas: [
      "limpeza-para-venda-de-casa-lisboa",
      "limpeza-pos-obra-lisboa",
      "empresa-de-limpeza-lisboa",
    ],
    posts: ["limpeza-entrega-de-chaves-lisboa"],
  },
  {
    slug: "contrato-limpeza-alojamento-local",
    grupo: "lisboa",
    rotulo: "Contrato de limpeza para vários alojamentos",
    servicoTipo: "Contrato de limpeza para alojamento local",
    servicoForm: ROTACAO,
    local: "Lisboa",
    titulo: "Contrato de Limpeza para Alojamento Local",
    descricao:
      "Para quem gere vários alojamentos em Lisboa, Sintra ou Cascais: contrato de limpeza com preço fechado por imóvel, mesma equipa e relatório fotográfico.",
    h1: "Contrato de limpeza para vários alojamentos locais",
    resposta:
      "Para proprietários e gestores com mais de um alojamento local, a Mary Cleans trabalha por contrato de prestação de serviço: um preço por limpeza fixado para cada imóvel durante o período do contrato, a mesma equipa em todas as casas e um relatório fotográfico por rotação. Serve Lisboa, Sintra e Cascais.",
    intro:
      "Com uma casa, o proprietário ainda consegue passar lá depois de cada hóspede. Com três ou cinco deixa de conseguir, e passa a depender de quem limpa para saber como as casas estão.",
    secoes: [
      {
        h2: "Preço por limpeza ou preço à hora?",
        blocos: [
          {
            t: "p",
            x: "Quem paga à hora ou à diária não sabe quanto vai gastar no mês, porque o valor depende do tempo que a limpeza demorar. Com preço fechado por imóvel a conta é o número de rotações vezes o preço de cada casa. Se uma limpeza demorar mais do que o previsto, o valor não muda.",
          },
        ],
      },
      {
        h2: "O que fica escrito no contrato",
        blocos: [
          {
            t: "lista",
            x: [
              "O preço por rotação de cada imóvel, definido pela tipologia",
              "A lista do que se faz em cada casa e os consumíveis a repor",
              "O acesso a cada imóvel e as horas de saída e de entrada",
              "Como se comunicam as reservas e as alterações de última hora",
              "O que fica de fora: lavagem e engomadoria da roupa, que são do proprietário",
              "A limpeza profunda sazonal, cotada à parte",
            ],
          },
        ],
      },
      {
        h2: "O relatório fotográfico substitui a visita",
        blocos: [
          {
            t: "p",
            x: "Cada rotação termina com fotografias do estado de entrega e uma nota do que encontrámos: uma lâmpada fundida, um lençol manchado, uma fechadura que começa a prender. O hóspede raramente avisa destas coisas, e quem limpa passa por elas em todas as visitas.",
          },
          {
            t: "p",
            x: "A [checklist de check-out](/blog/checklist-check-out-alojamento-local) mostra o que conferimos em cada casa.",
          },
        ],
      },
    ],
    faq: [
      {
        p: "A partir de quantos imóveis faz sentido um contrato?",
        r: "A partir de dois. Com mais de um imóvel orçamentamos como contrato, com o preço por limpeza fixado para o período.",
      },
      {
        p: "Como é que sabem quando há uma saída?",
        r: "O proprietário ou o gestor envia as reservas pelo canal combinado no contrato, e avisa quando há alterações.",
      },
      {
        p: "E se alguém da equipa faltar?",
        r: "O compromisso é com a data combinada. Garantir a substituição é responsabilidade nossa.",
      },
      {
        p: "O contrato inclui lavandaria?",
        r: "Não. Trocamos a roupa de cama e deixamos a usada separada. A lavagem fica com o proprietário ou com a lavandaria que ele contratar.",
      },
      {
        p: "Se eu comprar mais um imóvel, o que acontece?",
        r: "O imóvel novo entra no contrato com o preço da sua tipologia.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-lisboa",
      "limpeza-alojamento-local-sintra",
      "limpeza-alojamento-local-cascais",
    ],
    posts: ["checklist-check-out-alojamento-local", "limpeza-alojamento-local-sintra"],
  },

  // ───────────────────────── Lisboa: alojamento local por bairro ─────────────────────────
  {
    slug: "limpeza-alojamento-local-alfama-baixa-chiado",
    grupo: "bairro",
    rotulo: "Alfama, Baixa e Chiado",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Alfama, Baixa e Chiado, Lisboa",
    freguesia: "Santa Maria Maior",
    titulo: "Limpeza de Alojamento Local em Alfama e Baixa",
    descricao:
      "Limpeza entre hóspedes em Alfama, Baixa, Chiado, Castelo e Mouraria. Equipa que conhece os prédios sem elevador e as ruas de acesso condicionado.",
    h1: "Limpeza de alojamento local em Alfama, Baixa e Chiado",
    resposta:
      "A Mary Cleans faz a limpeza entre hóspedes em Alfama, na Baixa, no Chiado, no Castelo e na Mouraria, na freguesia de Santa Maria Maior. O serviço inclui troca de roupa de cama, reposição e relatório fotográfico, e é planeado para prédios antigos sem elevador e ruas onde não se entra de carro.",
    intro:
      "Santa Maria Maior é a freguesia de Lisboa com mais alojamento local. É também a mais difícil de servir: Alfama e o Castelo têm acesso automóvel condicionado, muitas ruas são escadinhas, e os prédios pombalinos da Baixa raramente têm elevador.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Chegamos a pé. O equipamento vai reduzido ao que duas pessoas levam nas escadas, e o que é próprio da casa fica guardado na casa.",
              "A roupa de cama limpa tem de estar no imóvel antes da rotação. Combinamos onde fica, e onde deixamos a usada para a lavandaria recolher.",
              "Em muitas ruas o lixo sai em dias e horas certos e não há contentor à porta. Seguimos a regra da rua de cada imóvel.",
              "Soalho antigo e azulejo pedem pouca água e produto neutro.",
              "Nos rés-do-chão e nas casas viradas a becos é comum haver humidade. O relatório fotográfico assinala quando aparece bolor ou cheiro, para se tratar antes da próxima reserva.",
            ],
          },
        ],
      },
      {
        h2: "Estadias curtas e janelas apertadas",
        blocos: [
          {
            t: "p",
            x: "Aqui as estadias são curtas e as rotações seguem umas atrás das outras, com muitas saídas ao domingo e à segunda-feira. Trabalhamos em dupla com tarefas divididas da mesma maneira em todas as casas, e a conferência final é feita contra a lista do imóvel. O funcionamento geral está em [limpeza de alojamento local em Lisboa](/limpeza-alojamento-local-lisboa).",
          },
        ],
      },
      {
        h2: "Casas pequenas pedem mais atenção ao detalhe",
        blocos: [
          {
            t: "p",
            x: "Os estúdios e os T1 desta zona têm tudo à vista: a kitchenette ao lado da cama, o duche a dois passos da porta. Uma migalha na bancada ou um cabelo no ralo aparecem na primeira fotografia que o hóspede tira. A [checklist de check-out](/blog/checklist-check-out-alojamento-local) mostra os pontos que conferimos.",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Fazem limpezas em prédios sem elevador?",
        r: "Sim. A maior parte dos imóveis que há em Alfama, na Baixa e na Mouraria não tem elevador. Levamos o equipamento reduzido ao necessário e o resto fica guardado no imóvel.",
      },
      {
        p: "Como entram em ruas de acesso condicionado?",
        r: "A pé. Não dependemos de entrar de carro em Alfama ou no Castelo para fazer a rotação.",
      },
      {
        p: "Tratam do lixo deixado pelo hóspede?",
        r: "Sim. Retiramos o lixo da casa e seguimos a regra de recolha da rua do imóvel, que fica anotada na lista da casa.",
      },
      {
        p: "Quanto custa a limpeza de um estúdio ou T1 no centro histórico?",
        r: "O preço é fechado por imóvel e consta do orçamento. Como referência de mercado em 2026, uma rotação num T1 ou T2 em Lisboa fica entre 44 € e 70 €.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-lisboa",
      "limpeza-alojamento-local-bairro-alto-cais-do-sodre",
      "limpeza-alojamento-local-graca-sao-vicente",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-bairro-alto-cais-do-sodre",
    grupo: "bairro",
    rotulo: "Bairro Alto e Cais do Sodré",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Bairro Alto, Bica, Príncipe Real e Cais do Sodré, Lisboa",
    freguesia: "Misericórdia",
    titulo: "Limpeza de Alojamento Local no Bairro Alto",
    descricao:
      "Limpeza entre hóspedes no Bairro Alto, Bica, Príncipe Real e Cais do Sodré. Rotações de fim de semana, troca de roupa de cama e relatório fotográfico.",
    h1: "Limpeza de alojamento local no Bairro Alto e Cais do Sodré",
    resposta:
      "A Mary Cleans limpa alojamentos locais no Bairro Alto, na Bica, em Santa Catarina, no Príncipe Real e no Cais do Sodré, na freguesia da Misericórdia. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição de consumíveis e um relatório fotográfico com o estado em que a casa ficou.",
    intro:
      "A Misericórdia junta a zona de bares de Lisboa e algumas das ruas residenciais mais procuradas. Os hóspedes vêm sobretudo ao fim de semana, ficam duas ou três noites e usam a casa de outra maneira do que uma família numa semana de férias.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "As rotações concentram-se ao domingo e à segunda-feira. Convém reservar essas datas com antecedência.",
              "Depois de uma estadia de fim de semana há mais copos, mais garrafas e mais lixo. O vidro é separado e levado ao ecoponto.",
              "Conferimos o que costuma partir ou desaparecer: copos, abre-garrafas, comandos, chaves. O que faltar vai no relatório, com fotografia.",
              "Cheiro a tabaco numa casa onde não se pode fumar fica registado com data, para o proprietário poder reclamar junto da plataforma.",
              "O Bairro Alto, a Bica e Santa Catarina têm acesso automóvel condicionado. Chegamos a pé.",
            ],
          },
        ],
      },
      {
        h2: "O relatório como prova",
        blocos: [
          {
            t: "p",
            x: "Nas plataformas de reserva, um pedido de compensação por danos precisa de fotografias feitas logo depois da saída. O relatório de cada rotação tem a data e mostra divisão a divisão o que encontrámos. Quando há um dano, o proprietário recebe as imagens no próprio dia.",
          },
        ],
      },
      {
        h2: "Príncipe Real e Santa Catarina",
        blocos: [
          {
            t: "p",
            x: "Nestas ruas os apartamentos são maiores e os acabamentos mais delicados: soalho encerado, pedra na cozinha, casas de banho em mármore. Usamos produto neutro nestas superfícies e anotamos na lista da casa o que não pode levar lixívia nem anticalcário. Para carteiras com imóveis em vários bairros, veja o [contrato para vários alojamentos](/contrato-limpeza-alojamento-local).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Fazem limpezas ao domingo?",
        r: "Sim, com marcação prévia. No Bairro Alto e no Cais do Sodré é quando há mais saídas de hóspedes.",
      },
      {
        p: "O que acontece se o hóspede deixar a casa em mau estado?",
        r: "Fotografamos antes de limpar e avisamos o proprietário. O preço da rotação é fechado. Uma limpeza fora do normal, como depois de uma festa, é combinada com o proprietário antes de avançarmos.",
      },
      {
        p: "Avisam quando falta alguma coisa na casa?",
        r: "Sim. O relatório fotográfico inclui o que falta ou está partido, para ser reposto antes da entrada seguinte.",
      },
      {
        p: "Limpam casas com terraço ou varanda?",
        r: "Sim. Varandas e terraços entram na lista do imóvel quando ficam combinados no orçamento.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-lisboa",
      "limpeza-alojamento-local-alfama-baixa-chiado",
      "limpeza-alojamento-local-estrela-campo-de-ourique",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-graca-sao-vicente",
    grupo: "bairro",
    rotulo: "Graça e São Vicente",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Graça e São Vicente, Lisboa",
    freguesia: "São Vicente",
    titulo: "Limpeza de Alojamento Local na Graça",
    descricao:
      "Limpeza entre hóspedes na Graça, em São Vicente e em Santa Engrácia. Planeamos as rotações a contar com as colinas, o eléctrico 28 e a Feira da Ladra.",
    h1: "Limpeza de alojamento local na Graça e em São Vicente",
    resposta:
      "A Mary Cleans faz a limpeza de alojamentos locais na Graça, em São Vicente de Fora e em Santa Engrácia, na freguesia de São Vicente, em Lisboa. Inclui limpeza completa, troca de roupa de cama, reposição e relatório fotográfico. As rotações são marcadas a contar com os dias de Feira da Ladra.",
    intro:
      "A Graça fica no cimo de uma das colinas mais altas de Lisboa. Os hóspedes escolhem-na pelos miradouros e pelo eléctrico 28, e quem lá trabalha tem de contar com as subidas e com um estacionamento que quase não existe.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "A Feira da Ladra ocupa o Campo de Santa Clara às terças e aos sábados. Nesses dias as ruas à volta ficam cortadas ou cheias, e marcamos as rotações a contar com isso.",
              "Muitos apartamentos têm varanda ou terraço com vista. São a fotografia principal do anúncio e levam com pó e folhas, por isso entram na lista da casa.",
              "Há vilas operárias e pátios com entrada partilhada. Deixamos a zona comum como a encontrámos e combinamos onde fica o lixo.",
              "Janelas grandes viradas ao rio sujam depressa com o vento. Os vidros interiores são limpos em cada rotação, os exteriores quando ficam combinados.",
            ],
          },
        ],
      },
      {
        h2: "Casas em vilas e prédios de rendimento",
        blocos: [
          {
            t: "p",
            x: "Boa parte dos alojamentos da Graça fica em casas pequenas de dois pisos ou em prédios de três e quatro andares sem elevador, com escadas de madeira estreitas. Transportamos pouco e deixamos o material próprio da casa guardado lá. Em casas com escada interior, as duas pessoas dividem-se por pisos.",
          },
        ],
      },
      {
        h2: "Vizinhança",
        blocos: [
          {
            t: "p",
            x: "A Graça é um bairro onde ainda vive muita gente o ano inteiro. Fazemos as limpezas de dia, sem bater portas, e não deixamos sacos na escada. A relação com os vizinhos conta para a continuidade do alojamento, e parte dela passa por quem lá entra e sai todas as semanas. Os bairros ao lado têm página própria: [Alfama, Baixa e Chiado](/limpeza-alojamento-local-alfama-baixa-chiado) e [Arroios e Anjos](/limpeza-alojamento-local-arroios-anjos).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Conseguem fazer rotações em dias de Feira da Ladra?",
        r: "Sim. Às terças e aos sábados chegamos a pé e contamos com mais tempo de deslocação nas ruas à volta do Campo de Santa Clara.",
      },
      {
        p: "Limpam terraços e varandas?",
        r: "Sim, quando ficam na lista do imóvel. Varremos, limpamos a mesa e as cadeiras e retiramos o que o hóspede deixou.",
      },
      {
        p: "Limpam os vidros por fora?",
        r: "Os vidros interiores entram em todas as rotações. Os exteriores fazem-se quando há acesso seguro pelo interior e quando ficam combinados no orçamento.",
      },
      {
        p: "O que inclui a limpeza entre hóspedes?",
        r: "Limpeza de todas as divisões, troca de roupa de cama e toalhas, reposição de consumíveis, conferência final e relatório fotográfico.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-lisboa",
      "limpeza-alojamento-local-alfama-baixa-chiado",
      "limpeza-alojamento-local-arroios-anjos",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-arroios-anjos",
    grupo: "bairro",
    rotulo: "Arroios e Anjos",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Arroios, Anjos e Intendente, Lisboa",
    freguesia: "Arroios",
    titulo: "Limpeza de Alojamento Local em Arroios",
    descricao:
      "Limpeza de alojamento local em Arroios, Anjos e Intendente. Rotações entre hóspedes e limpezas intermédias em estadias de várias semanas.",
    h1: "Limpeza de alojamento local em Arroios e Anjos",
    resposta:
      "A Mary Cleans limpa alojamentos locais em Arroios, nos Anjos e no Intendente, em Lisboa. Além da rotação entre hóspedes, com troca de roupa de cama e relatório fotográfico, faz limpezas intermédias em estadias de várias semanas, que nesta zona são frequentes.",
    intro:
      "Arroios fica entre a Almirante Reis e o Campo Mártires da Pátria, com metro à porta e prédios do início do século XX. Muitos hóspedes vêm para ficar semanas, a trabalhar à distância ou a estudar, e isso muda o tipo de limpeza de que a casa precisa.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Estadias longas pedem limpezas intermédias, semanais ou quinzenais, com o hóspede lá dentro. Combinam-se o dia e a hora com ele.",
              "Depois de um mês de uso, a rotação de saída é mais funda do que depois de duas noites: forno, frigorífico, exaustor e calcário no duche.",
              "Os apartamentos são grandes, com pé-direito alto, portadas e sancas. O pó acumula-se em altura e é preciso chegar lá.",
              "Há muitos andares divididos em quartos com casa de banho e cozinha partilhadas. A lista do imóvel separa o que é de cada quarto e o que é comum.",
            ],
          },
        ],
      },
      {
        h2: "Limpeza intermédia",
        blocos: [
          {
            t: "p",
            x: "Numa estadia de um mês, a casa que ninguém limpa chega ao check-out num estado que não se resolve na janela normal entre hóspedes. Uma limpeza intermédia mantém o imóvel e permite ver como está a ser usado. O âmbito é o da [limpeza de manutenção](/servicos/habitacao), com troca de roupa de cama quando ficar combinado.",
          },
        ],
      },
      {
        h2: "Quartos com zonas comuns",
        blocos: [
          {
            t: "p",
            x: "Quando um andar tem vários quartos arrendados em separado, as saídas não coincidem. Limpamos o quarto que roda e passamos sempre pela cozinha e pelas casas de banho partilhadas, que são o que o hóspede novo vê primeiro e o que os outros já usaram nesse dia. Para vários imóveis ou vários quartos, o modelo é o do [contrato](/contrato-limpeza-alojamento-local).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Fazem limpeza com o hóspede dentro de casa?",
        r: "Sim. Nas estadias longas a limpeza intermédia é marcada com o hóspede, em dia e hora certos.",
      },
      {
        p: "Com que frequência se deve limpar numa estadia de um mês?",
        r: "Uma vez por semana ou de quinze em quinze dias. A frequência fica definida pelo proprietário no orçamento.",
      },
      {
        p: "Limpam quartos arrendados em separado no mesmo andar?",
        r: "Sim. A lista do imóvel separa cada quarto das zonas comuns, e as zonas comuns são limpas em todas as visitas.",
      },
      {
        p: "A limpeza de saída depois de uma estadia longa custa o mesmo?",
        r: "O preço da rotação é fechado por imóvel. Quando o proprietário recebe sobretudo estadias longas, o orçamento já prevê uma limpeza de saída mais funda.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-lisboa",
      "limpeza-alojamento-local-graca-sao-vicente",
      "contrato-limpeza-alojamento-local",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-estrela-campo-de-ourique",
    grupo: "bairro",
    rotulo: "Estrela e Campo de Ourique",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Estrela, Lapa, Madragoa e Campo de Ourique, Lisboa",
    freguesia: "Estrela e Campo de Ourique",
    titulo: "Limpeza de Alojamento Local na Estrela",
    descricao:
      "Limpeza entre hóspedes na Estrela, Lapa, Madragoa, Santos e Campo de Ourique. Apartamentos familiares, mais camas por casa e cozinhas muito usadas.",
    h1: "Limpeza de alojamento local na Estrela e em Campo de Ourique",
    resposta:
      "A Mary Cleans faz a limpeza de alojamentos locais na Estrela, na Lapa, na Madragoa, em Santos e em Campo de Ourique, em Lisboa. Nestes bairros os apartamentos são maiores e recebem famílias, por isso cada rotação conta com mais camas para fazer e com uma cozinha que foi realmente usada.",
    intro:
      "A Estrela e Campo de Ourique são bairros residenciais, com jardim, mercado e ruas planas. Quem aluga aqui vem muitas vezes em família e fica uma semana. Cozinha em casa, usa a máquina da loiça e a da roupa, e ocupa os quartos todos.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Mais quartos e mais camas por rotação. A roupa limpa tem de estar contada e pronta: confirmamos os jogos disponíveis antes de começar.",
              "A cozinha leva mais tempo. Forno, placa, frigorífico e máquina da loiça são conferidos por dentro em todas as saídas.",
              "Casas preparadas para crianças têm berço, cadeira de refeição e brinquedos. Tudo isso é limpo e arrumado no sítio que a lista da casa indica.",
              "Na Lapa e na Madragoa há moradias e apartamentos com acabamentos antigos, como soalho encerado e azulejo de padrão. Ficam anotados os produtos que cada superfície aceita.",
              "Em Campo de Ourique muitos prédios têm porteira ou administração atenta. Cumprimos os horários do prédio para obras e ruído, que se aplicam também ao aspirador.",
            ],
          },
        ],
      },
      {
        h2: "Estadias de uma semana",
        blocos: [
          {
            t: "p",
            x: "Com menos rotações por mês, cada uma pesa mais na avaliação. Uma família que encontra um cabelo na banheira ou uma cadeira de bebé pegajosa escreve isso. A conferência final é feita divisão a divisão e o relatório fotográfico mostra cada quarto com a cama feita.",
          },
        ],
      },
      {
        h2: "Limpeza profunda entre épocas",
        blocos: [
          {
            t: "p",
            x: "Casas maiores e mais usadas beneficiam de uma limpeza profunda uma ou duas vezes por ano: interior de armários, rodapés, juntas e calcário. É cotada à parte e marca-se num período sem reservas. O âmbito está em [serviços](/servicos). Para o funcionamento das rotações, veja [limpeza de alojamento local em Lisboa](/limpeza-alojamento-local-lisboa).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Quanto custa a limpeza de um T3 ou T4 de alojamento local?",
        r: "O preço é fechado por imóvel e depende da tipologia e do número de camas. Fica escrito no orçamento antes da primeira limpeza.",
      },
      {
        p: "Montam o berço e a cadeira de bebé?",
        r: "Limpamos e deixamos o berço e a cadeira no sítio indicado na lista da casa. Se o proprietário quiser o berço montado para uma reserva, avisa-nos e fica feito.",
      },
      {
        p: "Limpam o interior do forno e do frigorífico em cada saída?",
        r: "Sim, conferimos e limpamos por dentro em todas as rotações, e retiramos os restos de comida.",
      },
      {
        p: "Com que frequência se deve fazer uma limpeza profunda?",
        r: "Uma a duas vezes por ano, num período sem reservas. É cotada à parte da rotação.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-lisboa",
      "limpeza-alojamento-local-bairro-alto-cais-do-sodre",
      "empresa-de-limpeza-lisboa",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-parque-das-nacoes",
    grupo: "bairro",
    rotulo: "Parque das Nações",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Parque das Nações, Lisboa",
    freguesia: "Parque das Nações",
    titulo: "Alojamento Local no Parque das Nações: Limpeza",
    descricao:
      "Limpeza entre hóspedes no Parque das Nações: prédios com elevador, muito vidro e hóspedes em trabalho. Troca de roupa de cama e relatório fotográfico.",
    h1: "Limpeza de alojamento local no Parque das Nações",
    resposta:
      "A Mary Cleans limpa alojamentos locais no Parque das Nações, em Lisboa. Os prédios são recentes, com elevador e garagem, e os apartamentos têm grandes superfícies de vidro e varandas viradas ao Tejo. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição e relatório fotográfico.",
    intro:
      "O Parque das Nações foi construído para a Expo 98 e é o bairro mais recente de Lisboa. Fica junto à Gare do Oriente, perto do aeroporto, da FIL e da arena, e por isso recebe muita gente que vem trabalhar ou assistir a um evento e fica uma ou duas noites.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Aqui há elevador e lugar para parar o carro. Trazemos o equipamento completo, o que permite fazer mais casas na mesma saída.",
              "Vidro do chão ao tecto e guardas de varanda em vidro mostram todas as marcas. Os vidros interiores entram em cada rotação.",
              "A proximidade do rio traz humidade e salitre às varandas. O mobiliário de exterior é limpo quando faz parte da lista da casa.",
              "Hóspedes em trabalho chegam tarde e saem cedo. A hora de saída é mais previsível, e a de entrada às vezes é pedida mais cedo.",
              "Os condomínios têm regulamento, portaria e horários. Combinamos com o proprietário como nos identificamos e por onde entramos.",
            ],
          },
        ],
      },
      {
        h2: "Datas de eventos",
        blocos: [
          {
            t: "p",
            x: "Em semanas de feira ou de concerto as casas rodam todos os dias e não há folga se uma limpeza falhar. Quem tem vários apartamentos na zona ganha em fixar as datas com antecedência, no modelo de [contrato para vários alojamentos](/contrato-limpeza-alojamento-local).",
          },
        ],
      },
      {
        h2: "Acabamentos modernos",
        blocos: [
          {
            t: "p",
            x: "Pavimento flutuante, bancadas de pedra composta, inox e placas de indução riscam ou mancham com o produto errado. Usamos panos de microfibra e produto neutro nestas superfícies, e o inox é seco à mão para não ficar com marcas de água. Para os bairros antigos a logística é outra, descrita em [Alfama, Baixa e Chiado](/limpeza-alojamento-local-alfama-baixa-chiado).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Limpam os vidros das varandas?",
        r: "Os vidros interiores e as guardas de varanda acessíveis pelo lado de dentro entram na rotação. Vidro exterior de fachada é trabalho de empresa com meios de acesso em altura.",
      },
      {
        p: "Conseguem fazer várias casas no mesmo prédio no mesmo dia?",
        r: "Sim. Com elevador e estacionamento, casas no mesmo prédio ou na mesma rua fazem-se na mesma saída.",
      },
      {
        p: "É possível ter a casa pronta para uma entrada antecipada?",
        r: "Depende da hora de saída do hóspede anterior. Se o pedido chegar com antecedência, ajustamos a ordem das casas desse dia.",
      },
      {
        p: "Precisam de autorização do condomínio?",
        r: "Seguimos o que o regulamento do prédio pedir. O proprietário diz-nos como nos devemos identificar na portaria.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-lisboa",
      "contrato-limpeza-alojamento-local",
      "limpeza-alojamento-local-arroios-anjos",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },

  // ───────────────────────── Áreas atendidas fora de Lisboa ─────────────────────────
  {
    slug: "limpeza-alojamento-local-sintra",
    grupo: "area",
    rotulo: "Limpeza de alojamento local em Sintra",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Sintra",
    titulo: "Limpeza de Alojamento Local em Sintra",
    descricao:
      "Limpeza entre hóspedes em Sintra, Colares e na costa. Moradias e apartamentos, com atenção à humidade da serra. Preço fechado e relatório fotográfico.",
    h1: "Limpeza de alojamento local em Sintra",
    resposta:
      "A Mary Cleans faz a limpeza entre hóspedes em alojamentos locais do concelho de Sintra, da vila histórica a Colares e à costa. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição e relatório fotográfico, com atenção especial à humidade, que em Sintra afecta as casas o ano inteiro.",
    intro:
      "Em Sintra aluga-se outro tipo de casa do que em Lisboa: moradias, casas de quinta, apartamentos na vila e casas de praia entre a Praia das Maçãs e o Magoito. As estadias são mais longas, os grupos são maiores e a serra traz uma humidade que quem lá vive conhece bem.",
    secoes: [
      {
        h2: "O que muda em Sintra",
        blocos: [
          {
            t: "lista",
            x: [
              "A humidade da serra fica nas paredes, nos roupeiros e na roupa de cama guardada. Arejamos em todas as visitas e assinalamos no relatório o primeiro sinal de bolor.",
              "Casas fechadas vários dias entre reservas ganham cheiro. Vale a pena uma passagem antes da entrada quando o intervalo é longo.",
              "Moradias têm mais área, escadas e muitas vezes lareira ou salamandra. A cinza é retirada e a zona limpa quando consta da lista da casa.",
              "Nas casas de praia entra areia. Aspiramos antes de lavar e conferimos o duche exterior e a zona de entrada.",
              "No centro histórico o trânsito e o estacionamento complicam-se ao fim de semana e no Verão. Marcamos as rotações a contar com isso.",
            ],
          },
        ],
      },
      {
        h2: "Vários imóveis no concelho",
        blocos: [
          {
            t: "p",
            x: "Sintra é um concelho grande e as casas ficam longe umas das outras. Quando um proprietário tem várias, organizamos as rotações do mesmo dia por zona. O modelo de preço por imóvel está em [contrato para vários alojamentos](/contrato-limpeza-alojamento-local).",
          },
        ],
      },
      {
        h2: "Ler mais",
        blocos: [
          {
            t: "p",
            x: "O artigo [limpeza de alojamento local em Sintra: como funciona a rotação entre hóspedes](/blog/limpeza-alojamento-local-sintra) explica a janela entre check-out e check-in e o que combinar por escrito. Para os serviços em Lisboa, veja [limpeza de alojamento local em Lisboa](/limpeza-alojamento-local-lisboa).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Em que zonas de Sintra trabalham?",
        r: "Em todo o concelho: vila de Sintra, São Pedro, Colares, Praia das Maçãs, Azenhas do Mar, Magoito, e também Algueirão-Mem Martins, Rio de Mouro, Cacém e Queluz.",
      },
      {
        p: "Como lidam com a humidade e o bolor?",
        r: "Arejamos a casa em todas as visitas, limpamos as superfícies afectadas e registamos no relatório fotográfico onde o bolor aparece, para o proprietário tratar a causa.",
      },
      {
        p: "Limpam moradias grandes?",
        r: "Sim. O preço é fechado por imóvel e tem em conta a área e o número de quartos.",
      },
      {
        p: "Quanto custa a limpeza de um alojamento local em Sintra?",
        r: "Como referência de mercado em 2026, uma rotação num T1 ou T2 fica entre 44 € e 70 €. Moradias são orçamentadas caso a caso, sempre com preço fechado por imóvel.",
      },
    ],
    relacionadas: [
      "empresa-de-limpeza-sintra",
      "limpeza-alojamento-local-cascais",
      "limpeza-alojamento-local-lisboa",
    ],
    posts: ["limpeza-alojamento-local-sintra", "quanto-custa-limpeza-sintra"],
  },
  {
    slug: "limpeza-alojamento-local-cascais",
    grupo: "area",
    rotulo: "Limpeza de alojamento local em Cascais",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Cascais",
    titulo: "Limpeza de Alojamento Local em Cascais",
    descricao:
      "Limpeza entre hóspedes em Cascais e no Estoril: casas de praia, areia, sal nos vidros e Verão com rotações seguidas. Preço fechado por imóvel.",
    h1: "Limpeza de alojamento local em Cascais",
    resposta:
      "A Mary Cleans faz a limpeza entre hóspedes em alojamentos locais de Cascais e do Estoril. O serviço inclui limpeza completa, troca de roupa de cama, reposição e relatório fotográfico, e está pensado para casas de praia: areia nos pavimentos, sal nos vidros e toalhas de praia para contar.",
    intro:
      "Em Cascais a época manda. De Junho a Setembro as casas rodam sem intervalo e quase todos os hóspedes vêm da praia. No resto do ano as estadias são mais espaçadas e a casa passa dias fechada junto ao mar.",
    secoes: [
      {
        h2: "O que muda em Cascais",
        blocos: [
          {
            t: "lista",
            x: [
              "A areia entra em tudo: pavimento, sofá, duche e ralos. Aspira-se primeiro e lava-se depois, e os ralos são conferidos em cada saída.",
              "O ar do mar deixa sal nos vidros e nas guardas das varandas. Os vidros interiores e as portas de varanda são limpos em todas as rotações.",
              "Toalhas de praia, chapéu de sol e cadeiras fazem parte do inventário de muitas casas. Contamos e registamos o que falta.",
              "Protector solar mancha lençóis e sofás. Quando acontece, a peça é separada e fotografada para o proprietário decidir.",
              "No Verão as datas esgotam cedo. Vale a pena fechar o calendário de rotações antes de a época começar.",
            ],
          },
        ],
      },
      {
        h2: "Fora da época",
        blocos: [
          {
            t: "p",
            x: "Uma casa fechada junto ao mar ganha humidade e cheiro em poucas semanas. Entre reservas espaçadas, uma passagem de arejamento e limpeza ligeira antes da entrada evita que o hóspede de Inverno encontre a casa pior do que o de Agosto.",
          },
        ],
      },
      {
        h2: "Moradias com exterior",
        blocos: [
          {
            t: "p",
            x: "Limpamos o interior, os terraços e o mobiliário de exterior que constar da lista da casa. Piscina e jardim são trabalho de quem faz manutenção de exteriores. Para proprietários com casas em Cascais e em Lisboa, o [contrato para vários alojamentos](/contrato-limpeza-alojamento-local) junta tudo num só preço por imóvel. Veja também [limpeza de alojamento local em Sintra](/limpeza-alojamento-local-sintra).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Trabalham em Cascais durante todo o Verão?",
        r: "Sim, com as datas reservadas com antecedência. Em Julho e Agosto as rotações são seguidas e convém fechar o calendário antes da época.",
      },
      {
        p: "Limpam a piscina e o jardim?",
        r: "Não. Limpamos o interior, os terraços e o mobiliário de exterior. Piscina e jardim ficam com a manutenção de exteriores.",
      },
      {
        p: "O que fazem com toalhas de praia e roupa de cama?",
        r: "Trocamos pelos jogos limpos do imóvel e deixamos a roupa usada separada. A lavagem fica com o proprietário ou com a lavandaria que ele contratar.",
      },
      {
        p: "Em que zonas de Cascais trabalham?",
        r: "Cascais, Estoril, Monte Estoril, São João do Estoril, Parede, Carcavelos e Alcabideche.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-sintra",
      "limpeza-alojamento-local-lisboa",
      "contrato-limpeza-alojamento-local",
    ],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "empresa-de-limpeza-sintra",
    grupo: "area",
    rotulo: "Empresa de limpeza em Sintra",
    servicoTipo: "Serviços de limpeza",
    servicoForm: "",
    local: "Sintra",
    titulo: "Empresa de Limpeza em Sintra",
    descricao:
      "Empresa de limpeza em Sintra para alojamento local, imobiliárias e habitação. Mesma equipa em todas as visitas, preço fechado por imóvel, orçamento por escrito.",
    h1: "Empresa de limpeza em Sintra",
    resposta:
      "A Mary Cleans é uma empresa de limpeza que serve o concelho de Sintra, além de Lisboa e Cascais. Trabalha para alojamento local, consultores imobiliários e famílias. A equipa é sempre a mesma, o preço é fechado por imóvel e o orçamento é dado por escrito.",
    intro:
      "Sintra tem a vila e a serra de um lado e, do outro, algumas das freguesias mais povoadas do país, como Algueirão-Mem Martins, Cacém e Queluz. As casas e as necessidades são muito diferentes de uma ponta à outra do concelho.",
    secoes: [
      {
        h2: "Serviços em Sintra",
        blocos: [
          {
            t: "lista",
            x: [
              "[Limpeza de alojamento local](/limpeza-alojamento-local-sintra) na vila, em Colares e na costa",
              "[Limpeza para mediação imobiliária](/servicos/imobiliarias): casa pronta para visita e entrega de chaves",
              "[Limpeza de habitação](/servicos/habitacao), de manutenção semanal ou quinzenal, e limpeza profunda",
              "Limpeza pós-obra e pós-mudança, descritas em [serviços](/servicos)",
            ],
          },
        ],
      },
      {
        h2: "Onde trabalhamos no concelho",
        blocos: [
          {
            t: "p",
            x: "Sintra (Santa Maria e São Miguel, São Martinho e São Pedro de Penaferrim), Colares, Algueirão-Mem Martins, Rio de Mouro, Cacém e São Marcos, Agualva e Mira-Sintra, Queluz e Belas, Massamá e Monte Abraão, Almargem do Bispo, Pêro Pinheiro e Montelavar, São João das Lampas e Terrugem.",
          },
        ],
      },
      {
        h2: "Apartamentos na linha e casas na serra",
        blocos: [
          {
            t: "p",
            x: "Nos apartamentos da linha de Sintra o pedido mais comum é a limpeza de manutenção, sempre no mesmo dia da semana, com a mesma equipa. Nas moradias da serra e de Colares pesa a humidade: roupeiros, casas de banho sem janela e paredes viradas a norte pedem arejamento e atenção ao bolor em todas as visitas.",
          },
          {
            t: "p",
            x: "O artigo [quanto custa uma limpeza em Sintra](/blog/quanto-custa-limpeza-sintra) explica o que faz variar o preço. A nossa página principal de empresa é a de [Lisboa](/empresa-de-limpeza-lisboa).",
          },
        ],
      },
    ],
    faq: [
      {
        p: "Quanto custa uma empresa de limpeza em Sintra?",
        r: "Depende do serviço e da tipologia. Como referência pública de mercado em 2026, um prestador de padrão elevado cobra cerca de 15 € por hora. Nós damos preço fechado por imóvel, por escrito.",
      },
      {
        p: "Vem sempre a mesma equipa?",
        r: "Sim. Trabalhamos em dupla e a equipa é a mesma em todas as visitas.",
      },
      {
        p: "O que está incluído numa limpeza de manutenção?",
        r: "Todas as divisões, cozinha, casas de banho, aspiração e lavagem de pavimentos, com produtos e equipamento levados por nós.",
      },
      {
        p: "Fazem limpezas ao fim de semana em Sintra?",
        r: "Sim, com marcação prévia.",
      },
    ],
    relacionadas: [
      "limpeza-alojamento-local-sintra",
      "empresa-de-limpeza-lisboa",
      "limpeza-alojamento-local-cascais",
    ],
    posts: ["quanto-custa-limpeza-sintra", "limpeza-alojamento-local-sintra"],
  },
];

export const paginaSeoPorSlug = (slug) => PAGINAS_SEO.find((p) => p.slug === slug);

// Hub e spoke: a partir de um artigo do blog, as páginas de serviço que o citam.
export const paginasQueCitamPost = (slugPost) =>
  PAGINAS_SEO.filter((p) => p.posts.includes(slugPost));
