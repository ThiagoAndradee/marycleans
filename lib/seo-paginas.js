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
      "Limpeza entre hóspedes em Lisboa: troca de roupa de cama, reposição e relatório fotográfico em cada rotação. Preço fechado por imóvel. Peça proposta.",
    h1: "Limpeza de alojamento local em Lisboa",
    resposta:
      "A Mary Cleans faz a limpeza entre hóspedes de alojamentos locais em Lisboa. Cada rotação inclui limpeza completa, troca de roupa de cama e toalhas, reposição de consumíveis e um relatório fotográfico enviado ao proprietário. O preço é fechado por imóvel e fica escrito no orçamento.",
    intro:
      "Em Lisboa a maior parte das saídas acontece de manhã e as entradas a meio da tarde. A limpeza tem de caber nesse intervalo, num prédio que muitas vezes não tem elevador e numa rua onde não se estaciona. Trabalhamos com profissionais dedicados e treinados, a mesma equipa em todas as visitas, e cada casa tem a sua lista escrita.",
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
    posts: ["relatorio-fotografico-limpeza-alojamento-local", "checklist-check-out-alojamento-local", "limpeza-alojamento-local-sintra"],
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
    posts: ["limpeza-imoveis-vazios-imobiliaria", "limpeza-para-vender-casa", "limpeza-entrega-de-chaves-lisboa"],
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
    posts: ["relatorio-fotografico-limpeza-alojamento-local", "objetos-esquecidos-e-danos-alojamento-local", "mudar-de-empresa-de-limpeza-alojamento-local", "checklist-check-out-alojamento-local", "limpeza-alojamento-local-sintra"],
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
              "Chegamos a pé. O equipamento vai reduzido ao que se leva à mão pelas escadas, e o que é próprio da casa fica guardado na casa.",
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
            x: "Aqui as estadias são curtas e as rotações seguem umas atrás das outras, com muitas saídas ao domingo e à segunda-feira. A equipa divide as tarefas da mesma maneira em todas as casas, e a conferência final é feita contra a lista do imóvel. O funcionamento geral está em [limpeza de alojamento local em Lisboa](/limpeza-alojamento-local-lisboa).",
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
            x: "Boa parte dos alojamentos da Graça fica em casas pequenas de dois pisos ou em prédios de três e quatro andares sem elevador, com escadas de madeira estreitas. Transportamos pouco e deixamos o material próprio da casa guardado lá. Em casas com escada interior, a equipa divide-se por pisos.",
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
        r: "Sim. A equipa é a mesma em todas as visitas, com profissionais dedicados e treinados.",
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

  // ───────────────────────── Terceira leva (26/11/2026): mais bairros de Lisboa ─────────────────────────
  {
    slug: "limpeza-alojamento-local-belem-ajuda",
    grupo: "bairro",
    rotulo: "Belém e Ajuda",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Belém, Lisboa",
    freguesia: "Belém",
    titulo: "Alojamento Local em Belém e Ajuda: Limpeza",
    descricao:
      "Limpeza entre hóspedes em Belém, na Ajuda e no Restelo: famílias, estadias de vários dias e casas com terraço. Troca de roupa de cama e relatório fotográfico.",
    h1: "Limpeza de alojamento local em Belém e na Ajuda",
    resposta:
      "A Mary Cleans limpa alojamentos locais em Belém, na Ajuda e no Restelo, em Lisboa. Aqui há mais casas de família e estadias de vários dias do que no centro histórico. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição de consumíveis e relatório fotográfico.",
    intro:
      "Belém junta os monumentos mais visitados de Lisboa a ruas residenciais calmas, com moradias no Restelo e prédios baixos na Ajuda. Quem fica aqui costuma vir em família ou ficar uma semana, e a casa sofre outro tipo de uso.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Estadias mais longas significam mais roupa, mais loiça e frigorífico com restos. A rotação começa pela cozinha e pelo frigorífico.",
              "Famílias com crianças deixam marcas baixas em paredes, portas e vidros. Revemos essas superfícies em cada saída.",
              "Moradias e casas com terraço ou pátio têm exterior. Quando faz parte da lista da casa, varremos e limpamos o mobiliário de fora.",
              "Há estacionamento na maior parte das ruas, o que permite levar o equipamento completo, incluindo aspirador de água.",
            ],
          },
        ],
      },
      {
        h2: "Casas grandes, tempo planeado",
        blocos: [
          {
            t: "p",
            x: "Um T3 com terraço não se limpa no mesmo tempo que um T1 em Alfama. Por isso o preço é fechado por imóvel, depois de vermos a casa, e o tempo de cada rotação fica planeado antes da primeira saída. Para quem tem mais de uma casa, o [contrato para vários alojamentos](/contrato-limpeza-alojamento-local) fixa datas e preço por imóvel.",
          },
        ],
      },
      {
        h2: "Relatório fotográfico",
        blocos: [
          {
            t: "p",
            x: "No fim de cada limpeza enviamos fotografias de cada divisão. Em casas grandes é o que permite ao proprietário saber, sem ir lá, que o terraço ficou varrido e que nada ficou partido. Veja como funciona a [limpeza de alojamento local em Lisboa](/limpeza-alojamento-local-lisboa).",
          },
        ],
      },
    ],
    faq: [
      { p: "Limpam terraços e pátios?", r: "Sim, quando fazem parte da lista da casa. Varremos, lavamos o pavimento acessível e limpamos o mobiliário de exterior." },
      { p: "Atendem o Restelo e a Ajuda?", r: "Sim. Belém, Restelo e Ajuda fazem parte da mesma zona de trabalho." },
      { p: "Quanto tempo leva uma rotação numa casa de família?", r: "Depende da tipologia e do estado em que a casa fica. O tempo e o preço são fechados por imóvel, depois de vermos a casa." },
      { p: "Lavam a roupa de cama?", r: "Não. Trocamos a roupa e deixamos a usada separada. A lavagem fica com o proprietário ou com a lavandaria que ele contrata." },
    ],
    relacionadas: ["limpeza-alojamento-local-lisboa", "limpeza-alojamento-local-santos-lapa-madragoa", "contrato-limpeza-alojamento-local"],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-santos-lapa-madragoa",
    grupo: "bairro",
    rotulo: "Santos, Lapa e Madragoa",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Santos e Lapa, Lisboa",
    freguesia: "Estrela",
    titulo: "Alojamento Local em Santos, Lapa e Madragoa: Limpeza",
    descricao:
      "Limpeza entre hóspedes em Santos, na Lapa e na Madragoa: prédios pombalinos, escadas íngremes e pavimento de madeira antiga. Relatório fotográfico em cada saída.",
    h1: "Limpeza de alojamento local em Santos, Lapa e Madragoa",
    resposta:
      "A Mary Cleans limpa alojamentos locais em Santos, na Lapa e na Madragoa, entre o rio e a Estrela. São prédios antigos, muitos sem elevador, com soalho de madeira e janelas altas. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição de consumíveis e relatório fotográfico.",
    intro:
      "Santos tem vida à noite e muitos estúdios para estadias curtas. A Lapa é mais calma, com apartamentos grandes em prédios de embaixadas e palacetes. A Madragoa fica no meio, com ruas estreitas e casas pequenas de dois pisos.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Soalho antigo de madeira não leva água em excesso nem produto agressivo. Aspiramos primeiro e lavamos com pano bem torcido e produto neutro.",
              "Janelas de guilhotina e caixilharia de madeira acumulam pó nas calhas. Entram na limpeza a cada rotação.",
              "Em Santos as saídas de domingo e de segunda são muitas, depois do fim de semana. Planeamos essas manhãs com antecedência.",
              "Nas ruas da Madragoa não se estaciona à porta. Levamos o equipamento reduzido e guardamos o que é da casa na própria casa.",
            ],
          },
        ],
      },
      {
        h2: "Casas grandes na Lapa",
        blocos: [
          {
            t: "p",
            x: "Os apartamentos da Lapa têm pé direito alto, sancas e lustres. O pó das zonas altas não sai numa rotação normal e entra numa [limpeza profunda](/limpeza-profunda-lisboa), uma ou duas vezes por ano. Na rotação entre hóspedes tratamos do que o hóspede vê e toca.",
          },
        ],
      },
      {
        h2: "Mesma equipa, mesma casa",
        blocos: [
          {
            t: "p",
            x: "Em prédios antigos cada casa tem as suas manhas: a fechadura que prende, o esquentador que se liga à mão, o estore que só desce até meio. Mandamos sempre a mesma equipa, que já conhece a casa e não perde tempo a descobrir. Veja também [Estrela e Campo de Ourique](/limpeza-alojamento-local-estrela-campo-de-ourique).",
          },
        ],
      },
    ],
    faq: [
      { p: "Limpam soalho de madeira antigo?", r: "Sim, com aspiração primeiro e lavagem com pano bem torcido e produto neutro, para não estragar a madeira." },
      { p: "Conseguem fazer várias saídas na segunda de manhã?", r: "Sim, se as datas forem combinadas com antecedência. Quem tem várias casas na zona ganha em fixar o calendário." },
      { p: "Limpam lustres e sancas?", r: "Na rotação tratamos do que está ao alcance. Zonas altas, lustres e sancas entram na limpeza profunda." },
      { p: "Enviam fotografias depois da limpeza?", r: "Sim. Cada rotação termina com um relatório fotográfico de todas as divisões." },
    ],
    relacionadas: ["limpeza-alojamento-local-estrela-campo-de-ourique", "limpeza-alojamento-local-bairro-alto-cais-do-sodre", "limpeza-profunda-lisboa"],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-principe-real-avenida",
    grupo: "bairro",
    rotulo: "Príncipe Real e Avenida da Liberdade",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Santo António, Lisboa",
    freguesia: "Santo António",
    titulo: "Alojamento Local no Príncipe Real e na Avenida: Limpeza",
    descricao:
      "Limpeza entre hóspedes no Príncipe Real, na Avenida da Liberdade e no Rato: apartamentos de gama alta, acabamentos delicados e hóspedes exigentes. Relatório fotográfico.",
    h1: "Limpeza de alojamento local no Príncipe Real e na Avenida da Liberdade",
    resposta:
      "A Mary Cleans limpa alojamentos locais no Príncipe Real, na Avenida da Liberdade, no Rato e no Marquês, na freguesia de Santo António. São apartamentos de gama alta, com acabamentos que pedem cuidado e hóspedes que reparam em tudo. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição e relatório fotográfico.",
    intro:
      "Esta é a zona de Lisboa com mais apartamentos de luxo para estadias curtas. A avaliação do hóspede pesa mais do que no resto da cidade, e uma marca no espelho ou um cabelo na almofada custam uma estrela.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Mármore, latão, madeira oleada e vidro sem caixilho mancham com o produto errado. Usamos produto neutro e microfibra, e secamos à mão.",
              "Roupa de cama de hotel, almofadas a mais e mantas decorativas: a cama fica montada sempre da mesma maneira, com fotografia de referência.",
              "Amenities, café e garrafas de água são repostos e contados. O que falta vai no relatório.",
              "Prédios com portaria e elevador permitem levar o equipamento completo e fazer mais casas na mesma saída.",
            ],
          },
        ],
      },
      {
        h2: "Padrão de hotel, casa a casa",
        blocos: [
          {
            t: "p",
            x: "Cada casa tem uma lista própria, com fotografia de como deve ficar cada divisão. A equipa segue essa lista em todas as rotações e confere no fim. É o que garante que a décima limpeza fica igual à primeira. Quem gere várias casas pode ver o modelo em [limpeza para gestores de alojamento local](/limpeza-para-gestores-de-alojamento-local).",
          },
        ],
      },
      {
        h2: "Quando a avaliação desce",
        blocos: [
          {
            t: "p",
            x: "Se um hóspede reclamar da limpeza, o relatório fotográfico mostra como a casa foi entregue. Isso ajuda a responder na plataforma e a perceber se o problema foi na limpeza ou depois dela.",
          },
        ],
      },
    ],
    faq: [
      { p: "Limpam mármore e superfícies delicadas?", r: "Sim, com produto neutro e microfibra. Nada de lixívia ou produto ácido em mármore e pedra natural." },
      { p: "Repõem amenities e consumíveis?", r: "Sim, com os produtos que o proprietário deixa na casa. O que falta vai indicado no relatório." },
      { p: "A cama fica sempre montada da mesma maneira?", r: "Sim. Cada casa tem uma fotografia de referência da cama e das divisões, e a equipa segue-a em todas as rotações." },
      { p: "Atendem o Rato e o Marquês de Pombal?", r: "Sim, fazem parte da mesma zona, na freguesia de Santo António." },
    ],
    relacionadas: ["limpeza-alojamento-local-bairro-alto-cais-do-sodre", "limpeza-alojamento-local-avenidas-novas", "limpeza-para-gestores-de-alojamento-local"],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-avenidas-novas",
    grupo: "bairro",
    rotulo: "Avenidas Novas e Saldanha",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Avenidas Novas, Lisboa",
    freguesia: "Avenidas Novas",
    titulo: "Alojamento Local nas Avenidas Novas e Saldanha: Limpeza",
    descricao:
      "Limpeza entre hóspedes nas Avenidas Novas, no Saldanha e no Areeiro: estadias de trabalho, prédios com elevador e saídas a meio da semana. Relatório fotográfico.",
    h1: "Limpeza de alojamento local nas Avenidas Novas e no Saldanha",
    resposta:
      "A Mary Cleans limpa alojamentos locais nas Avenidas Novas, no Saldanha, no Campo Pequeno e no Areeiro. A zona recebe muita gente em viagem de trabalho, com saídas a meio da semana. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição e relatório fotográfico.",
    intro:
      "As Avenidas Novas são o centro de escritórios de Lisboa, com metro, hotéis e o Campo Pequeno. Os apartamentos ficam em prédios das décadas de 1940 a 1970, quase todos com elevador, e os hóspedes ficam de segunda a sexta.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "As saídas concentram-se à sexta e as entradas ao domingo e à segunda. O calendário é diferente do centro histórico, onde o fim de semana manda.",
              "Quem vem em trabalho usa a secretária, a máquina de café e o ferro. Limpamos e conferimos esses pontos em cada saída.",
              "Prédios com elevador e estacionamento pago na rua: levamos o equipamento completo e fazemos várias casas na mesma manhã.",
              "Estadias longas de trabalho pedem limpeza a meio da estadia. Combinamos com o proprietário uma visita semanal quando faz sentido.",
            ],
          },
        ],
      },
      {
        h2: "Limpeza a meio da estadia",
        blocos: [
          {
            t: "p",
            x: "Para estadias de duas semanas ou mais, uma visita semanal com troca de toalhas e limpeza das casas de banho e da cozinha mantém a casa em ordem e evita uma saída muito pesada. Fica combinada no orçamento, com preço próprio.",
          },
        ],
      },
      {
        h2: "Para quem tem várias casas",
        blocos: [
          {
            t: "p",
            x: "Nesta zona muitos proprietários têm dois ou três apartamentos no mesmo prédio. O [contrato para vários alojamentos](/contrato-limpeza-alojamento-local) fixa o preço por casa e a ordem das limpezas em cada dia.",
          },
        ],
      },
    ],
    faq: [
      { p: "Fazem limpeza a meio da estadia?", r: "Sim, para estadias longas. Uma visita semanal com troca de toalhas e limpeza de cozinha e casas de banho, com preço próprio." },
      { p: "Atendem o Areeiro e o Campo Pequeno?", r: "Sim, fazem parte da mesma zona de trabalho." },
      { p: "Conseguem limpar à sexta à tarde para entrada ao domingo?", r: "Sim, a janela é larga e permite planear com folga." },
      { p: "Enviam relatório fotográfico?", r: "Sim, no fim de cada rotação, com todas as divisões." },
    ],
    relacionadas: ["limpeza-alojamento-local-arroios-anjos", "limpeza-alojamento-local-principe-real-avenida", "contrato-limpeza-alojamento-local"],
    posts: ["checklist-check-out-alojamento-local"],
  },

  // ───────────────────────── Terceira leva: concelhos à volta de Lisboa ─────────────────────────
  {
    slug: "limpeza-alojamento-local-oeiras-carcavelos",
    grupo: "area",
    rotulo: "Alojamento local em Oeiras e Carcavelos",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Oeiras",
    titulo: "Alojamento Local em Oeiras e Carcavelos: Limpeza",
    descricao:
      "Limpeza entre hóspedes em Oeiras, Carcavelos, Paço de Arcos e Algés: casas de praia, areia, salitre e estadias de verão. Troca de roupa de cama e relatório fotográfico.",
    h1: "Limpeza de alojamento local em Oeiras e Carcavelos",
    resposta:
      "A Mary Cleans limpa alojamentos locais no concelho de Oeiras, em Carcavelos, Paço de Arcos, Santo Amaro e Algés. São casas perto da praia, com areia, salitre e muito movimento no verão. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição e relatório fotográfico.",
    intro:
      "A linha de Cascais passa por Oeiras com praias a poucos minutos de Lisboa. No verão as casas rodam todos os dias. No inverno recebem quem trabalha nos parques empresariais do concelho.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Areia no chão, no duche e nas toalhas. Aspiramos antes de lavar e limpamos ralos e bases de duche em cada saída.",
              "Salitre nas varandas e nos vidros virados ao mar. Os vidros interiores e as guardas acessíveis entram na rotação.",
              "Toalhas de praia e chapéus de sol, quando a casa os oferece, são conferidos e o que falta vai no relatório.",
              "Fora do verão há mais estadias de trabalho, com saídas a meio da semana.",
            ],
          },
        ],
      },
      {
        h2: "O verão em contrato",
        blocos: [
          {
            t: "p",
            x: "De junho a setembro não há folga entre hóspedes. Quem fixa as datas antes do verão tem a casa garantida em todas as saídas. Veja o [contrato para vários alojamentos](/contrato-limpeza-alojamento-local).",
          },
        ],
      },
      {
        h2: "Mais perto de Cascais ou de Lisboa",
        blocos: [
          {
            t: "p",
            x: "Para casas mais para oeste, veja [alojamento local em Cascais](/limpeza-alojamento-local-cascais). Para limpeza de casa habitada no concelho, veja [empresa de limpeza em Oeiras](/empresa-de-limpeza-oeiras).",
          },
        ],
      },
    ],
    faq: [
      { p: "Atendem Carcavelos e Paço de Arcos?", r: "Sim, todo o concelho de Oeiras ao longo da linha de Cascais, incluindo Algés e Santo Amaro." },
      { p: "Tiram a areia dos sofás e das camas?", r: "Sim. Aspiramos sofás, colchões à vista e tapetes antes de montar a cama." },
      { p: "Lavam as toalhas de praia?", r: "Não. Trocamos e deixamos a roupa usada separada. A lavagem fica com o proprietário ou a lavandaria dele." },
      { p: "Conseguem fazer saídas diárias no verão?", r: "Sim, com datas combinadas antes do verão." },
    ],
    relacionadas: ["limpeza-alojamento-local-cascais", "empresa-de-limpeza-oeiras", "contrato-limpeza-alojamento-local"],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "limpeza-alojamento-local-colares-praias-sintra",
    grupo: "area",
    rotulo: "Alojamento local nas praias de Sintra",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    local: "Sintra",
    freguesia: "Colares",
    titulo: "Alojamento Local na Praia das Maçãs e Azenhas: Limpeza",
    descricao:
      "Limpeza entre hóspedes na Praia das Maçãs, nas Azenhas do Mar, em Colares e na Praia Grande: casas de férias, humidade do mar e acessos difíceis. Relatório fotográfico.",
    h1: "Limpeza de alojamento local nas praias de Sintra",
    resposta:
      "A Mary Cleans limpa alojamentos locais na costa de Sintra: Praia das Maçãs, Azenhas do Mar, Praia Grande e Colares. São casas de férias com humidade do mar, areia e caminhos estreitos. Cada rotação inclui limpeza completa, troca de roupa de cama, reposição e relatório fotográfico.",
    intro:
      "A costa de Sintra tem moradias e casas antigas de pedra viradas ao Atlântico. O nevoeiro e a humidade são constantes, mesmo no verão, e isso muda o que se limpa e como.",
    secoes: [
      {
        h2: "O que muda nesta zona",
        blocos: [
          {
            t: "lista",
            x: [
              "Humidade e bolor em casas de banho, juntas e cantos de tecto. Limpamos e arejamos em cada saída, e indicamos no relatório onde o bolor volta.",
              "Roupa de cama e toalhas guardadas ganham cheiro a humidade. Verificamos o jogo de reserva antes de montar a cama.",
              "Areia e terra do caminho entram pela porta. Tapetes e entrada são aspirados primeiro.",
              "Algumas casas ficam em ruas estreitas e íngremes. Combinamos com o proprietário onde deixar o carro.",
            ],
          },
        ],
      },
      {
        h2: "Casas que ficam fechadas",
        blocos: [
          {
            t: "p",
            x: "Fora da época muitas casas ficam semanas sem hóspedes. Antes da primeira reserva vale uma [limpeza profunda](/limpeza-profunda-lisboa) para tirar pó, humidade e cheiro a fechado. Depois disso, as rotações mantêm a casa.",
          },
        ],
      },
      {
        h2: "Sintra vila e serra",
        blocos: [
          {
            t: "p",
            x: "Para casas na vila e na serra, veja [alojamento local em Sintra](/limpeza-alojamento-local-sintra). Para limpeza de casa habitada no concelho, veja [empresa de limpeza em Sintra](/empresa-de-limpeza-sintra).",
          },
        ],
      },
    ],
    faq: [
      { p: "Atendem a Praia das Maçãs e as Azenhas do Mar?", r: "Sim, e também a Praia Grande e Colares." },
      { p: "Tratam do bolor nas casas de banho?", r: "Limpamos o bolor à superfície em cada rotação e indicamos no relatório onde volta. Bolor que vem da parede é problema de humidade da casa e não sai com limpeza." },
      { p: "Fazem a primeira limpeza antes da época?", r: "Sim, como limpeza profunda, com preço próprio." },
      { p: "Lavam a roupa de cama?", r: "Não. Trocamos e deixamos a usada separada. A lavagem fica com o proprietário." },
    ],
    relacionadas: ["limpeza-alojamento-local-sintra", "empresa-de-limpeza-sintra", "limpeza-profunda-lisboa"],
    posts: ["checklist-check-out-alojamento-local"],
  },
  {
    slug: "empresa-de-limpeza-cascais",
    grupo: "area",
    rotulo: "Empresa de limpeza em Cascais",
    servicoTipo: "Limpeza de casas",
    servicoForm: "",
    local: "Cascais",
    titulo: "Empresa de Limpeza em Cascais: Casas e Imóveis",
    descricao:
      "Empresa de limpeza em Cascais, Estoril e Parede: casas habitadas, moradias, imóveis para venda e alojamento local, com preço fechado e a mesma equipa em todas as visitas.",
    h1: "Empresa de limpeza em Cascais",
    resposta:
      "A Mary Cleans faz limpeza de casas, moradias e imóveis no concelho de Cascais, incluindo Estoril, Parede e São João do Estoril. Trabalha com profissionais dedicados e treinados, a mesma equipa em todas as visitas e preço fechado por imóvel, com relatório fotográfico.",
    intro:
      "Cascais tem moradias grandes, apartamentos de férias e muitas casas à venda ou em arrendamento. Cada caso pede um serviço diferente, e é por aí que começa o orçamento.",
    secoes: [
      {
        h2: "O que fazemos em Cascais",
        blocos: [
          {
            t: "lista",
            x: [
              "Limpeza de manutenção em casa habitada, semanal, quinzenal ou mensal.",
              "Limpeza profunda, uma ou duas vezes por ano, com interior de armários e electrodomésticos.",
              "Limpeza para venda e entrega de chaves, com registo fotográfico, para proprietários e mediadores.",
              "Rotação de alojamento local entre hóspedes, descrita em [alojamento local em Cascais](/limpeza-alojamento-local-cascais).",
            ],
          },
        ],
      },
      {
        h2: "Moradias",
        blocos: [
          {
            t: "p",
            x: "Uma moradia com três pisos e jardim leva outro tempo e outro equipamento. Vemos a casa antes de dar preço, para o orçamento sair fechado e não mudar no dia. O exterior entra quando faz parte do combinado.",
          },
        ],
      },
      {
        h2: "Como escolher uma empresa de limpeza",
        blocos: [
          {
            t: "p",
            x: "Pergunte quem entra em sua casa, se é sempre a mesma equipa, o que fica de fora e como se resolve uma reclamação. As respostas da Mary Cleans estão em [empresa de limpeza em Lisboa](/empresa-de-limpeza-lisboa).",
          },
        ],
      },
    ],
    faq: [
      { p: "Atendem o Estoril e a Parede?", r: "Sim, todo o concelho de Cascais, incluindo Estoril, Parede e São João do Estoril." },
      { p: "Vão ver a casa antes do orçamento?", r: "Em moradias e casas grandes, sim. Para apartamentos, fotografias e a tipologia costumam bastar." },
      { p: "É sempre a mesma equipa?", r: "Sim. A mesma equipa em todas as visitas, para conhecer a casa e o que o cliente quer." },
      { p: "Levam os produtos?", r: "Sim, produtos e equipamento vão connosco. Se preferir os seus, usamos os seus." },
    ],
    relacionadas: ["limpeza-alojamento-local-cascais", "empresa-de-limpeza-oeiras", "limpeza-profunda-lisboa"],
    posts: ["quanto-custa-limpeza-lisboa"],
  },
  {
    slug: "empresa-de-limpeza-oeiras",
    grupo: "area",
    rotulo: "Empresa de limpeza em Oeiras",
    servicoTipo: "Limpeza de casas",
    servicoForm: "",
    local: "Oeiras",
    titulo: "Empresa de Limpeza em Oeiras: Casas e Escritórios em Casa",
    descricao:
      "Empresa de limpeza em Oeiras, Carcavelos, Linda-a-Velha e Algés: manutenção de casa habitada, limpeza profunda e pós-mudança, com preço fechado e a mesma equipa.",
    h1: "Empresa de limpeza em Oeiras",
    resposta:
      "A Mary Cleans faz limpeza de casas no concelho de Oeiras, incluindo Carcavelos, Paço de Arcos, Linda-a-Velha, Miraflores e Algés. Trabalha com profissionais dedicados e treinados, a mesma equipa em todas as visitas e preço fechado por imóvel.",
    intro:
      "Oeiras é um concelho de famílias e de quem trabalha nos parques empresariais de Taguspark e Lagoas Park. Muitas casas são apartamentos em condomínio, com garagem e elevador.",
    secoes: [
      {
        h2: "O que fazemos em Oeiras",
        blocos: [
          {
            t: "lista",
            x: [
              "Limpeza de manutenção semanal, quinzenal ou mensal, em casa habitada.",
              "Limpeza profunda antes de uma festa, depois do inverno ou antes de pôr a casa à venda.",
              "Limpeza pré e pós-mudança, com casa vazia e registo fotográfico para o senhorio.",
              "Alojamento local na linha de Cascais, descrito em [Oeiras e Carcavelos](/limpeza-alojamento-local-oeiras-carcavelos).",
            ],
          },
        ],
      },
      {
        h2: "Quem trabalha em casa",
        blocos: [
          {
            t: "p",
            x: "Muita gente em Oeiras trabalha em casa alguns dias por semana. Combinamos o dia e a hora da limpeza para não coincidir com reuniões, e começamos pelas divisões que precisam de ficar livres primeiro.",
          },
        ],
      },
      {
        h2: "Preço fechado",
        blocos: [
          {
            t: "p",
            x: "O orçamento é por imóvel e por serviço, não por hora. Assim sabe quanto paga antes de começarmos. Veja referências de mercado em [quanto custa uma limpeza](/blog/quanto-custa-limpeza-lisboa).",
          },
        ],
      },
    ],
    faq: [
      { p: "Atendem Linda-a-Velha e Miraflores?", r: "Sim, todo o concelho de Oeiras." },
      { p: "Limpam em condomínios com portaria?", r: "Sim. Diga-nos como nos devemos identificar na portaria." },
      { p: "É sempre a mesma equipa?", r: "Sim, a mesma equipa em todas as visitas." },
      { p: "Fazem limpeza de escritório?", r: "Fazemos a limpeza de escritório dentro de casa, como parte da casa. Escritórios de empresa não são o nosso serviço." },
    ],
    relacionadas: ["limpeza-alojamento-local-oeiras-carcavelos", "empresa-de-limpeza-cascais", "limpeza-de-manutencao-lisboa"],
    posts: ["quanto-custa-limpeza-lisboa"],
  },
  {
    slug: "empresa-de-limpeza-amadora",
    grupo: "area",
    rotulo: "Empresa de limpeza na Amadora",
    servicoTipo: "Limpeza de casas",
    servicoForm: "",
    local: "Amadora",
    titulo: "Empresa de Limpeza na Amadora: Casas e Mudanças",
    descricao:
      "Empresa de limpeza na Amadora, Alfragide, Venteira e Falagueira: casa habitada, limpeza profunda, pós-obra e pós-mudança, com preço fechado e a mesma equipa.",
    h1: "Empresa de limpeza na Amadora",
    resposta:
      "A Mary Cleans faz limpeza de casas na Amadora, incluindo Alfragide, Venteira, Falagueira e Reboleira. Trabalha com profissionais dedicados e treinados, a mesma equipa em todas as visitas e preço fechado por imóvel, com registo fotográfico quando a casa muda de mãos.",
    intro:
      "A Amadora tem muitos apartamentos em prédios de várias décadas, com obras de remodelação frequentes e muita mudança de inquilinos. É aí que a limpeza pós-obra e a pós-mudança mais aparecem.",
    secoes: [
      {
        h2: "O que fazemos na Amadora",
        blocos: [
          {
            t: "lista",
            x: [
              "Limpeza de manutenção semanal, quinzenal ou mensal.",
              "[Limpeza pós-obra](/limpeza-pos-obra-lisboa), em duas passagens, para tirar o pó fino.",
              "[Limpeza pré e pós-mudança](/limpeza-pos-mudanca-lisboa), com registo fotográfico para o senhorio.",
              "[Limpeza de fim de arrendamento](/limpeza-fim-de-arrendamento-lisboa), para devolver a casa e recuperar a caução.",
            ],
          },
        ],
      },
      {
        h2: "Prédios sem elevador",
        blocos: [
          {
            t: "p",
            x: "Muitos prédios da Amadora têm quatro andares sem elevador. Levamos o equipamento necessário em cada subida e deixamos o que é da casa guardado na casa. Isso não muda o preço, que é fechado antes.",
          },
        ],
      },
      {
        h2: "Perto de Lisboa e de Sintra",
        blocos: [
          {
            t: "p",
            x: "A Amadora fica entre Lisboa e Sintra, os dois concelhos onde mais trabalhamos. Veja [Lisboa](/limpezas/lisboa) e [Sintra](/limpezas/sintra).",
          },
        ],
      },
    ],
    faq: [
      { p: "Atendem Alfragide e a Reboleira?", r: "Sim, todo o concelho da Amadora." },
      { p: "Fazem limpeza pós-obra?", r: "Sim, em duas passagens. A retirada de entulho fica com o empreiteiro." },
      { p: "Fazem limpeza para entregar a casa ao senhorio?", r: "Sim, com registo fotográfico do estado em que a casa fica." },
      { p: "Levam produtos e equipamento?", r: "Sim, vai tudo connosco." },
    ],
    relacionadas: ["limpeza-fim-de-arrendamento-lisboa", "limpeza-pos-obra-lisboa", "empresa-de-limpeza-lisboa"],
    posts: ["limpeza-entrega-de-chaves-lisboa"],
  },

  // ───────────────────────── Terceira leva: serviços em Lisboa ─────────────────────────
  {
    slug: "limpeza-profunda-lisboa",
    grupo: "lisboa",
    rotulo: "Limpeza profunda em Lisboa",
    servicoTipo: "Limpeza profunda",
    servicoForm: "Limpeza Profunda",
    inclui: "limpeza-profunda",
    local: "Lisboa",
    titulo: "Limpeza Profunda em Lisboa: Casa a Fundo, Preço Fechado",
    descricao:
      "Limpeza profunda em Lisboa: interior de armários e electrodomésticos, juntas, azulejo, rodapés e vidros. Preço fechado por imóvel e relatório fotográfico.",
    h1: "Limpeza profunda em Lisboa",
    resposta:
      "A limpeza profunda chega onde a limpeza de manutenção não chega: interior de armários e electrodomésticos, juntas do azulejo, rodapés, portas, interruptores e vidros interiores. A Mary Cleans faz limpeza profunda em Lisboa, Sintra e Cascais, com preço fechado por imóvel e profissionais dedicados e treinados.",
    intro:
      "Faz sentido uma ou duas vezes por ano, antes de começar uma limpeza regular, depois do inverno, antes de pôr a casa à venda ou antes da época num alojamento local.",
    secoes: [
      {
        h2: "O que entra que a limpeza normal deixa de fora",
        blocos: [
          {
            t: "lista",
            x: [
              "Interior do forno, do frigorífico, do micro-ondas e da máquina de lavar loiça.",
              "Interior de armários de cozinha e de roupeiros, com a casa vazia ou com o conteúdo arrumado à parte.",
              "Juntas de azulejo na cozinha e nas casas de banho, calcário em torneiras e chuveiros.",
              "Rodapés, portas, puxadores, interruptores, calhas de janela e estores.",
            ],
          },
        ],
      },
      {
        h2: "Casas antigas de Lisboa",
        blocos: [
          {
            t: "p",
            x: "Azulejo antigo, soalho de madeira e tectos altos pedem produto e tempo certos. Nada de ácido em azulejo pintado nem água a mais na madeira. As zonas altas são feitas com escada e extensor, com a casa protegida por baixo.",
          },
        ],
      },
      {
        h2: "Antes de um contrato regular",
        blocos: [
          {
            t: "p",
            x: "Quando a casa passa a ter [limpeza de manutenção](/limpeza-de-manutencao-lisboa), começar com uma limpeza profunda põe tudo no mesmo ponto. A partir daí as visitas regulares só mantêm. Num alojamento local, a profunda antes da época evita rotações pesadas no verão.",
          },
        ],
      },
    ],
    faq: [
      { p: "Quanto tempo leva uma limpeza profunda?", r: "Depende da tipologia e do estado da casa. O tempo e o preço são fechados por imóvel antes de começarmos." },
      { p: "Com que frequência fazer limpeza profunda?", r: "Uma ou duas vezes por ano numa casa habitada, e antes da época num alojamento local." },
      { p: "Limpam o interior do forno e do frigorífico?", r: "Sim, entram na limpeza profunda." },
      { p: "A casa tem de estar vazia?", r: "Não. Numa casa habitada combinamos o que se tira dos armários e onde se arruma durante a limpeza." },
    ],
    relacionadas: ["limpeza-de-manutencao-lisboa", "empresa-de-limpeza-lisboa", "limpeza-para-venda-de-casa-lisboa"],
    posts: ["limpeza-alojamento-local-epoca-baixa", "quanto-custa-limpeza-lisboa"],
  },
  {
    slug: "limpeza-de-manutencao-lisboa",
    grupo: "lisboa",
    rotulo: "Limpeza regular de casa em Lisboa",
    servicoTipo: "Limpeza de manutenção",
    servicoForm: "Limpeza de Manutenção",
    inclui: "limpeza-de-manutencao",
    local: "Lisboa",
    titulo: "Limpeza Regular de Casa em Lisboa: Semanal ou Quinzenal",
    descricao:
      "Limpeza de casa semanal, quinzenal ou mensal em Lisboa, com a mesma equipa em todas as visitas, produtos incluídos e preço fechado por visita.",
    h1: "Limpeza regular de casa em Lisboa",
    resposta:
      "A Mary Cleans faz limpeza de manutenção em casas habitadas de Lisboa, semanal, quinzenal ou mensal. Entra sempre a mesma equipa de profissionais dedicados e treinados, com produtos e equipamento incluídos e preço fechado por visita.",
    intro:
      "Uma casa limpa todas as semanas não precisa de horas de esfrega. Precisa de regularidade e de quem já conheça a casa. É isso que a limpeza de manutenção resolve.",
    secoes: [
      {
        h2: "O que uma visita inclui",
        blocos: [
          {
            t: "lista",
            x: [
              "Pó em todas as superfícies ao alcance, aspiração e lavagem de pavimentos.",
              "Cozinha: bancadas, placa, lava-loiça e exterior dos electrodomésticos.",
              "Casas de banho higienizadas: sanita, lavatório, duche ou banheira, espelhos.",
              "Camas feitas e, se pedir, troca de roupa de cama com o jogo da casa.",
            ],
          },
        ],
      },
      {
        h2: "Sempre a mesma equipa",
        blocos: [
          {
            t: "p",
            x: "Quem vem à sua casa é sempre a mesma equipa. Aprende onde ficam as coisas, o que não se mexe e como gosta das camas. Se alguém faltar por doença, avisamos antes e combinamos a visita.",
          },
        ],
      },
      {
        h2: "Começar bem",
        blocos: [
          {
            t: "p",
            x: "Se a casa está há muito tempo sem limpeza a fundo, a primeira visita pode ser uma [limpeza profunda](/limpeza-profunda-lisboa). Depois disso as visitas regulares mantêm a casa no mesmo ponto. Veja também o serviço de [habitação](/servicos/habitacao).",
          },
        ],
      },
    ],
    faq: [
      { p: "Com que frequência posso marcar?", r: "Semanal, quinzenal ou mensal. Pode mudar a frequência com aviso prévio." },
      { p: "Tenho de estar em casa?", r: "Não. Muitos clientes deixam a chave. Combinamos como entramos e como fica fechada a casa." },
      { p: "Engomam roupa?", r: "Não. Lavagem e engomadoria de roupa não fazem parte do serviço." },
      { p: "Levam os produtos?", r: "Sim, produtos e equipamento vão connosco. Se tiver produtos que prefere, usamos os seus." },
    ],
    relacionadas: ["limpeza-profunda-lisboa", "empresa-de-limpeza-lisboa", "empresa-de-limpeza-oeiras"],
    posts: ["quanto-custa-limpeza-lisboa"],
  },
  {
    slug: "limpeza-fim-de-arrendamento-lisboa",
    grupo: "lisboa",
    rotulo: "Limpeza de fim de arrendamento",
    servicoTipo: "Limpeza de fim de arrendamento",
    servicoForm: "Entrega de Chaves",
    inclui: "entrega-de-chaves",
    local: "Lisboa",
    titulo: "Limpeza de Fim de Arrendamento em Lisboa: Caução e Chaves",
    descricao:
      "Limpeza de fim de arrendamento em Lisboa para inquilinos, senhorios e mediadores: casa vazia limpa a fundo, com registo fotográfico para a vistoria e a caução.",
    h1: "Limpeza de fim de arrendamento em Lisboa",
    resposta:
      "No fim de um arrendamento a casa tem de ser devolvida no estado em que foi recebida, e a limpeza pesa na vistoria e na devolução da caução. A Mary Cleans limpa a casa vazia a fundo em Lisboa, Sintra e Cascais e entrega um registo fotográfico de cada divisão.",
    intro:
      "Serve o inquilino que quer a caução de volta, o senhorio que quer arrendar outra vez depressa e o mediador que precisa da casa pronta para fotografias.",
    secoes: [
      {
        h2: "O que se limpa numa casa vazia",
        blocos: [
          {
            t: "lista",
            x: [
              "Interior de todos os armários, roupeiros e gavetas.",
              "Forno, frigorífico, exaustor e máquinas que ficam com a casa, por dentro e por fora.",
              "Calcário nas casas de banho, juntas, espelhos e torneiras.",
              "Marcas de móveis no chão e nas paredes, rodapés, portas e janelas por dentro.",
            ],
          },
        ],
      },
      {
        h2: "Registo para a vistoria",
        blocos: [
          {
            t: "p",
            x: "No fim tiramos fotografias de cada divisão, armários abertos incluídos. O registo fica com quem contratou e serve para a vistoria com o senhorio ou para o anúncio da casa. Danos que não saem com limpeza, como tinta estalada ou azulejo partido, ficam indicados à parte.",
          },
        ],
      },
      {
        h2: "Para mediadores e senhorios",
        blocos: [
          {
            t: "p",
            x: "Quem gere vários imóveis pode juntar o fim de arrendamento à [limpeza para venda de casa](/limpeza-para-venda-de-casa-lisboa) e à entrega de chaves no mesmo acordo. Veja o serviço para [mediação imobiliária](/servicos/imobiliarias).",
          },
        ],
      },
    ],
    faq: [
      { p: "A limpeza garante a devolução da caução?", r: "Não podemos garantir a decisão do senhorio, mas a casa fica limpa a fundo e com registo fotográfico do estado em que foi entregue." },
      { p: "A casa tem de estar vazia?", r: "Sim, para limpar o interior dos armários e o chão por inteiro. Se ainda houver móveis, combinamos o que se limpa." },
      { p: "Pintam paredes ou reparam danos?", r: "Não. Danos que não saem com limpeza ficam indicados no registo, para tratar com quem faz obras." },
      { p: "Podem entregar as chaves por mim?", r: "Podemos receber e entregar as chaves, se o senhorio ou o mediador aceitar. Fica combinado no orçamento." },
    ],
    relacionadas: ["limpeza-pos-mudanca-lisboa", "limpeza-para-venda-de-casa-lisboa", "empresa-de-limpeza-amadora"],
    posts: ["limpeza-entrega-de-chaves-lisboa"],
  },

  // ───────────────────────── Terceira leva: por perfil ─────────────────────────
  {
    slug: "limpeza-para-gestores-de-alojamento-local",
    grupo: "perfil",
    rotulo: "Para gestores de alojamento local",
    servicoTipo: "Limpeza de alojamento local",
    servicoForm: ROTACAO,
    inclui: "rotacao-alojamento-local",
    local: "Lisboa",
    titulo: "Limpeza para Gestores de Alojamento Local em Lisboa",
    descricao:
      "Parceiro de limpeza para gestoras de alojamento local em Lisboa, Sintra e Cascais: preço fechado por imóvel, lista por casa, relatório fotográfico e calendário fixo.",
    h1: "Limpeza para gestores de alojamento local",
    resposta:
      "Para quem gere vários alojamentos locais, a Mary Cleans funciona como equipa de limpeza fixa: preço fechado por imóvel, uma lista própria para cada casa, relatório fotográfico em cada rotação e calendário combinado com as reservas. Atende Lisboa, Sintra e Cascais com profissionais dedicados e treinados.",
    intro:
      "Uma gestora com dez casas não pode depender de quem estiver livre naquele dia. Precisa de saber quem vai, quanto custa e como a casa ficou, sem ir lá.",
    secoes: [
      {
        h2: "Como trabalhamos com gestoras",
        blocos: [
          {
            t: "lista",
            x: [
              "Preço fechado por imóvel, escrito no acordo, igual em todas as rotações.",
              "Uma lista por casa, com fotografia de como cada divisão deve ficar.",
              "Relatório fotográfico no fim de cada rotação, com o que falta ou está partido.",
              "Calendário de saídas e entradas enviado pela gestora, por mensagem ou partilhado.",
              "A mesma equipa nas mesmas casas, para não recomeçar do zero.",
            ],
          },
        ],
      },
      {
        h2: "O que fica com a gestora",
        blocos: [
          {
            t: "p",
            x: "Lavagem e engomadoria de roupa de cama e toalhas ficam com a gestora ou com a lavandaria dela. Nós trocamos, separamos a roupa usada e montamos o jogo limpo. Consumíveis e amenities são os da casa; nós repomos e indicamos o que acabou.",
          },
        ],
      },
      {
        h2: "Começar com poucas casas",
        blocos: [
          {
            t: "p",
            x: "Muitas gestoras começam com duas ou três casas para testar e juntam as outras depois. O modelo de acordo está em [contrato para vários alojamentos](/contrato-limpeza-alojamento-local), e o serviço completo em [alojamento local](/servicos/alojamento-local).",
          },
        ],
      },
    ],
    faq: [
      { p: "Trabalham com várias casas da mesma gestora?", r: "Sim. É o caso para que o acordo com preço por imóvel foi pensado." },
      { p: "Como recebem o calendário das reservas?", r: "Pela forma que a gestora já usa: mensagem, folha partilhada ou acesso de leitura ao calendário." },
      { p: "O que acontece se um hóspede reclamar da limpeza?", r: "O relatório fotográfico mostra como a casa foi entregue. Se a falha foi nossa, combinamos com a gestora como corrigir antes da entrada seguinte." },
      { p: "Tratam da lavandaria?", r: "Não. A lavagem fica com a gestora ou a lavandaria dela." },
    ],
    relacionadas: ["contrato-limpeza-alojamento-local", "limpeza-alojamento-local-lisboa", "limpeza-alojamento-local-sintra"],
    posts: ["mudar-de-empresa-de-limpeza-alojamento-local", "relatorio-fotografico-limpeza-alojamento-local", "limpeza-alojamento-local-epoca-baixa", "checklist-check-out-alojamento-local"],
  },
];

export const paginaSeoPorSlug = (slug) => PAGINAS_SEO.find((p) => p.slug === slug);

// Hub e spoke: a partir de um artigo do blog, as páginas de serviço que o citam.
export const paginasQueCitamPost = (slugPost) =>
  PAGINAS_SEO.filter((p) => p.posts.includes(slugPost));
