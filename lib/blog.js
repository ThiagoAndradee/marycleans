// Artigos do blog. Mesma regra de lib/negocio.js: nada inventado.
// O único preço da casa que aparece é o valor à hora praticado hoje (10 €/h).
// Valores de mercado só os que constam do CONTEXTO da frente, sempre citados como referência.
// Limpeza noturna não é anunciada enquanto MC-Q09 não estiver confirmada.
//
// Formato do corpo: lista de blocos { t: "h2" | "h3" | "p" | "lista", x }.
// Dentro do texto, [rótulo](/caminho) vira link interno.

export const BLOG_DATA = "2026-11-25";

export const POSTS = [
  {
    slug: "limpeza-alojamento-local-lisboa",
    titulo: "Limpeza de alojamento local em Lisboa: como funciona a rotação entre hóspedes",
    descricao:
      "O que entra numa limpeza entre hóspedes em Lisboa, Sintra ou Cascais, quanto tempo pede a janela entre check-out e check-in, e o que perguntar antes de contratar.",
    resumo:
      "O que entra numa rotação entre hóspedes, como se organiza a janela entre check-out e check-in, e o que perguntar antes de contratar.",
    data: BLOG_DATA,
    corpo: [
      {
        t: "p",
        x: "Quem tem um alojamento local em Lisboa conhece a rotina. O hóspede sai de manhã, o próximo chega a meio da tarde, e entre uma coisa e outra a casa tem de ficar como se ninguém lá tivesse dormido. A limpeza de rotação é isso. Este artigo explica o que deve entrar nela, como se organiza o tempo e o que vale a pena combinar por escrito com quem limpa.",
      },
      { t: "h2", x: "O que é uma limpeza de rotação" },
      {
        t: "p",
        x: "É a limpeza feita a cada saída de hóspede. Difere de uma limpeza de manutenção numa casa habitada porque o padrão é outro: o próximo hóspede vai abrir gavetas, olhar para o duche e passar a mão na bancada. Qualquer cabelo, migalha ou toalha mal dobrada pode acabar numa avaliação.",
      },
      { t: "p", x: "Numa rotação completa entram, no mínimo:" },
      {
        t: "lista",
        x: [
          "Limpeza de todas as divisões, incluindo pó, aspiração e lavagem de pavimentos",
          "Cozinha: bancadas, lava-loiça, placa, exterior dos electrodomésticos, interior do micro-ondas e do frigorífico quando houver restos",
          "Casas de banho higienizadas, com espelhos, duche, sanita e torneiras",
          "Troca de roupa de cama e toalhas com o jogo limpo do imóvel",
          "Reposição de consumíveis: papel higiénico, sabão, gel de duche, o que estiver combinado",
          "Conferência final, divisão a divisão, antes de fechar a porta",
        ],
      },
      {
        t: "p",
        x: "Na Mary Cleans juntamos a isto um relatório fotográfico do estado de entrega. O processo completo está na página de [alojamento local](/servicos/alojamento-local).",
      },
      { t: "h2", x: "A janela entre check-out e check-in" },
      {
        t: "p",
        x: "Em quase todas as casas, o tempo não chega para tudo. Se o check-out é às 11h e o check-in às 15h, sobram quatro horas para entrar, limpar, trocar a roupa de cama, repor e sair. Basta um hóspede atrasar-se ou deixar a cozinha num estado pior que o habitual para a margem desaparecer.",
      },
      { t: "h3", x: "Tarefas divididas, sempre iguais" },
      {
        t: "p",
        x: "Cada rotação segue a mesma ordem: primeiro a cozinha e as casas de banho, depois os quartos e a roupa de cama, e no fim a conferência. Como a ordem não muda de casa para casa, o tempo de cada rotação é previsível.",
      },
      { t: "h3", x: "Combinar a janela por imóvel" },
      {
        t: "p",
        x: "Cada casa tem a sua hora de check-out, o seu acesso e as suas particularidades. Vale a pena deixar isto escrito uma vez: onde está a chave ou qual é o código, onde fica a roupa de cama limpa, onde se deixa a usada e que consumíveis se repõem. Assim ninguém tem de telefonar a meio da limpeza.",
      },
      { t: "h2", x: "Particularidades de Lisboa, Sintra e Cascais" },
      {
        t: "p",
        x: "Em Lisboa, boa parte do alojamento local está em prédios antigos, muitas vezes sem elevador, com escadas estreitas e divisões pequenas. Em Sintra e Cascais há mais moradias e casas com pátio, e na serra de Sintra a humidade é alta durante grande parte do ano. Isto pesa na limpeza de três maneiras.",
      },
      {
        t: "lista",
        x: [
          "Casas de banho e janelas pedem atenção extra a manchas de humidade e a bolor nas juntas, sobretudo em casas antigas",
          "Roupa de cama e toalhas guardadas em armário fechado podem ganhar cheiro, por isso convém arejar o imóvel em cada rotação",
          "O acesso nem sempre é simples, com ruas estreitas e estacionamento difícil nos bairros históricos de Lisboa e no centro de Sintra, e isso conta no tempo de cada visita",
        ],
      },
      {
        t: "p",
        x: "Lisboa é a nossa zona principal, e trabalhamos também em Sintra e Cascais. Ver [limpeza em Lisboa](/limpezas/lisboa) e [limpeza em Sintra](/limpezas/sintra).",
      },
      { t: "h2", x: "Roupa de cama: troca sim, lavagem não" },
      {
        t: "p",
        x: "Convém deixar isto claro desde o início. Trocamos a roupa de cama e as toalhas com o jogo limpo que está no imóvel e deixamos a roupa usada separada onde o proprietário indicar. A lavagem e a engomadoria ficam com o proprietário ou com a lavandaria que ele contratar. Para isso funcionar, o imóvel precisa de ter pelo menos dois jogos completos por cama.",
      },
      { t: "h2", x: "O relatório fotográfico" },
      {
        t: "p",
        x: "Quem tem mais de uma casa não consegue visitar todas depois de cada hóspede. O relatório mostra o estado em que cada divisão ficou, o que foi reposto e o que encontrámos que precisa de atenção: uma torneira a pingar, uma lâmpada fundida, uma mancha que não sai. É também um registo útil se um hóspede reclamar de alguma coisa depois.",
      },
      { t: "h2", x: "O que perguntar antes de contratar" },
      {
        t: "lista",
        x: [
          "É sempre a mesma equipa, ou muda de visita para visita?",
          "O que está incluído, por escrito?",
          "Quem fornece produtos e equipamento?",
          "Como é cobrado: à hora ou por limpeza?",
          "O que acontece se alguém da equipa faltar no dia?",
          "Há registo do estado em que a casa ficou?",
        ],
      },
      {
        t: "p",
        x: "Se tem um ou vários imóveis em Lisboa, Sintra ou Cascais, peça um orçamento com a tipologia e a frequência. Para carteiras com mais de uma casa orçamentamos como contrato. Também pode ler a nossa [checklist de check-out](/blog/checklist-check-out-alojamento-local).",
      },
    ],
    faq: [
      {
        p: "Quanto tempo demora uma limpeza de rotação?",
        r: "Depende da tipologia e do estado em que o hóspede deixou a casa. A duração estimada fica no orçamento, feito para cada imóvel.",
      },
      {
        p: "Lavam a roupa de cama?",
        r: "Não. Trocamos a roupa de cama e as toalhas e deixamos a usada separada onde o proprietário indicar. A lavagem fica com o proprietário ou com a lavandaria dele.",
      },
      {
        p: "Trabalham ao fim de semana?",
        r: "Sim, com marcação prévia. É ao fim de semana que há mais saídas de hóspedes.",
      },
      {
        p: "Preciso de estar presente?",
        r: "Não. Basta combinar o acesso, com chave ou código. O relatório fotográfico mostra como a casa ficou.",
      },
    ],
  },

  {
    slug: "checklist-check-out-alojamento-local",
    titulo: "Checklist de check-out para alojamento local: a lista divisão a divisão",
    descricao:
      "Lista prática para a limpeza depois da saída do hóspede num alojamento local: entrada, cozinha, quartos, casas de banho, consumíveis e conferência final.",
    resumo:
      "A lista que usamos depois de cada saída de hóspede, divisão a divisão, para imprimir ou adaptar à sua casa.",
    data: BLOG_DATA,
    corpo: [
      {
        t: "p",
        x: "Uma checklist serve para a casa ficar igual em todas as rotações, seja quem for a limpar. Esta é a base que usamos nos imóveis de alojamento local que limpamos em Lisboa, Sintra e Cascais. Adapte-a à sua casa: um T1 no centro de Lisboa e uma moradia com jardim em Colares não pedem exatamente o mesmo.",
      },
      { t: "h2", x: "Antes de começar" },
      {
        t: "lista",
        x: [
          "Confirmar que o hóspede saiu e que não deixou objetos pessoais",
          "Abrir as janelas para arejar enquanto se limpa",
          "Fotografar qualquer dano ou situação anormal antes de mexer",
          "Recolher a roupa de cama e as toalhas usadas",
          "Esvaziar todos os caixotes do lixo e separar a reciclagem",
        ],
      },
      {
        t: "p",
        x: "A fotografia antes de mexer conta. Se houver uma mancha no sofá ou um copo partido, o proprietário precisa de saber, e pode precisar da prova para a plataforma de reservas.",
      },
      { t: "h2", x: "Cozinha" },
      {
        t: "lista",
        x: [
          "Lavar e arrumar a loiça que ficou, conferir se falta alguma peça",
          "Limpar bancadas, placa, exaustor por fora e azulejo junto ao fogão",
          "Limpar o interior do micro-ondas",
          "Esvaziar o frigorífico do que o hóspede deixou e limpar prateleiras com restos",
          "Limpar o exterior dos electrodomésticos, puxadores incluídos",
          "Lavar o lava-loiça e a torneira, tirar o calcário",
          "Repor detergente da loiça, esponja, sacos do lixo e o que estiver combinado (café, chá, açúcar, azeite)",
        ],
      },
      { t: "h2", x: "Casas de banho" },
      {
        t: "lista",
        x: [
          "Higienizar sanita, por dentro, por fora e na base",
          "Limpar duche ou banheira, resguardo e juntas",
          "Limpar lavatório, torneiras e espelho sem deixar marcas",
          "Tirar cabelos do ralo",
          "Repor papel higiénico, sabonete, gel de duche e champô",
          "Pôr toalhas limpas, dobradas da mesma maneira em todas as rotações",
          "Verificar se há bolor nas juntas ou no teto",
        ],
      },
      { t: "h2", x: "Quartos" },
      {
        t: "lista",
        x: [
          "Fazer a cama com o jogo limpo do imóvel",
          "Verificar o colchão e as almofadas, procurar manchas",
          "Limpar o pó de mesas de cabeceira, candeeiros e roupeiro",
          "Abrir gavetas e roupeiro para confirmar que estão vazios",
          "Aspirar debaixo da cama",
          "Conferir cabides, manta extra e almofadas de reserva",
        ],
      },
      { t: "h2", x: "Sala e entrada" },
      {
        t: "lista",
        x: [
          "Limpar o pó de superfícies, televisão e comandos",
          "Aspirar sofá e almofadas",
          "Limpar puxadores, interruptores e a porta de entrada",
          "Aspirar e lavar todo o pavimento",
          "Confirmar que o manual da casa e a informação de wi-fi estão no sítio",
        ],
      },
      { t: "h2", x: "Exterior, quando existe" },
      {
        t: "p",
        x: "Varanda, pátio ou jardim: varrer, limpar a mesa e as cadeiras, esvaziar cinzeiros e confirmar que não ficou lixo. Em Sintra muitas casas têm espaço exterior, e é das primeiras coisas que o hóspede vê ao chegar.",
      },
      { t: "h2", x: "Conferência final" },
      {
        t: "p",
        x: "É o passo que mais se salta quando o tempo aperta. A conferência faz-se com a checklist na mão, divisão a divisão, e acaba com as fotografias de entrega.",
      },
      {
        t: "lista",
        x: [
          "Luzes, ar condicionado e aquecimento desligados ou no modo combinado",
          "Janelas fechadas",
          "Roupa de cama usada separada no sítio indicado pelo proprietário",
          "Lixo fora da casa",
          "Fotografia de cada divisão no estado de entrega",
          "Nota ao proprietário do que precisa de atenção: avarias, faltas, reposições",
        ],
      },
      { t: "h3", x: "Sobre a roupa de cama" },
      {
        t: "p",
        x: "Na nossa lista a roupa usada fica separada no sítio que o proprietário indicar. A lavagem e a engomadoria ficam com o proprietário ou com uma lavandaria. Se a sua casa só tem um jogo por cama, vale a pena comprar um segundo antes de a época começar.",
      },
      { t: "h3", x: "Itens que se esquecem com facilidade" },
      {
        t: "lista",
        x: [
          "Interior do forno e da máquina de lavar loiça",
          "Filtro do exaustor",
          "Topo dos armários e das portas",
          "Ralo do lava-loiça",
          "Comandos da televisão e do ar condicionado",
        ],
      },
      { t: "h2", x: "A nova regra do Airbnb para o check-out" },
      {
        t: "p",
        x: "Nas reservas feitas a partir de 20 de novembro de 2026, o Airbnb aplica uma política de regras da casa razoáveis. É uma regra da plataforma, não uma lei portuguesa, e só vale para reservas feitas no Airbnb. Com ela, o anfitrião deixa de poder exigir ao hóspede, em geral, tarefas que dão trabalho ou tempo e que normalmente seriam feitas por quem limpa.",
      },
      {
        t: "lista",
        x: [
          "Tirar a roupa da cama antes de sair",
          "Levar o lixo para fora do imóvel",
          "Lavar e arrumar a loiça",
        ],
      },
      {
        t: "p",
        x: "As regras da casa têm de estar na secção própria do anúncio antes da reserva. Não se podem acrescentar regras novas depois, por mensagem ou num papel na porta, e o anfitrião não pode aplicar multas ao hóspede. Na prática, a equipa de limpeza vai encontrar mais trabalho por fazer na saída, e essas tarefas já estão nesta lista. Se as suas regras da casa ainda pedem alguma destas coisas, convém revê-las. O texto completo está no [centro de ajuda do Airbnb](https://www.airbnb.com/help/article/4168).",
      },
      { t: "h2", x: "Como usar esta lista" },
      {
        t: "p",
        x: "Imprima-a ou guarde-a no telemóvel de quem limpa e acrescente o que é específico do imóvel. Uma lista igual para todas as rotações é o que permite comparar uma limpeza com a outra. Se preferir que sejamos nós a seguir esta lista na sua casa, veja como trabalhamos em [alojamento local](/servicos/alojamento-local) ou leia sobre a [limpeza entre hóspedes em Lisboa](/blog/limpeza-alojamento-local-lisboa).",
      },
    ],
    faq: [
      {
        p: "Esta checklist serve para qualquer tipologia?",
        r: "Serve como base. Um T0 tem menos itens, uma moradia com exterior tem mais. O que convém é ter uma lista fixa para cada imóvel.",
      },
      {
        p: "Quem repõe os consumíveis?",
        r: "Nas rotações que fazemos, a reposição está incluída no serviço e o produto é cobrado a custo, conforme o combinado para o imóvel.",
      },
      {
        p: "Com a regra nova do Airbnb, posso pedir ao hóspede que tire a roupa da cama?",
        r: "Nas reservas feitas no Airbnb a partir de 20 de novembro de 2026, em geral não. A política de regras da casa razoáveis do Airbnb impede exigir ao hóspede tarefas como tirar a roupa da cama, levar o lixo para fora do imóvel ou lavar a loiça. É uma regra da plataforma, não da lei portuguesa.",
      },
      {
        p: "Para que servem as fotografias no fim?",
        r: "Mostram ao proprietário o estado em que a casa ficou sem ele ter de lá ir, e ficam como registo se houver alguma reclamação.",
      },
    ],
  },

  {
    slug: "limpeza-para-vender-casa",
    titulo: "Limpeza para vender casa: preparar o imóvel antes de uma visita",
    descricao:
      "Como preparar uma casa para visitas e fotografias de venda: o que limpar, como tratar casa fechada há meses e o que um consultor imobiliário pode pedir.",
    resumo:
      "O que limpar antes de fotografar e mostrar um imóvel, e como tratar uma casa que esteve fechada.",
    data: BLOG_DATA,
    corpo: [
      {
        t: "p",
        x: "Quem visita uma casa para comprar forma uma opinião logo à entrada. Cheiro a fechado, pó nos rodapés ou um duche com calcário fazem a casa parecer mais velha e mais descuidada do que é. Uma limpeza antes das fotografias e das visitas é das coisas mais baratas que um proprietário ou um consultor imobiliário pode fazer para apresentar bem o imóvel.",
      },
      { t: "h2", x: "Casa habitada ou casa devoluta" },
      { t: "h3", x: "Casa habitada" },
      {
        t: "p",
        x: "Se o proprietário ainda vive na casa, o trabalho está sobretudo em tirar marcas de uso: gordura na cozinha, calcário nas casas de banho, pó em cima de armários e vidros com dedadas. Convém fazer uma limpeza profunda antes das fotografias e depois uma de manutenção antes de cada visita, ou antes de um dia com várias visitas seguidas.",
      },
      { t: "h3", x: "Casa devoluta" },
      {
        t: "p",
        x: "Uma casa fechada há meses junta pó fino em todas as superfícies, cheiro a humidade e, por vezes, bolor. Aqui é preciso arejar bem, limpar todas as superfícies, tratar casas de banho e cozinha e limpar os vidros interiores para entrar luz. É o que chamamos limpeza de apresentação.",
      },
      { t: "h2", x: "O que limpar antes das fotografias" },
      {
        t: "p",
        x: "As fotografias de anúncio mostram mais do que parece. Em grande angular, um espelho com marcas ou uma junta escura no duche notam-se no ecrã. Antes da sessão de fotografias:",
      },
      {
        t: "lista",
        x: [
          "Vidros e espelhos sem marcas",
          "Cozinha com bancadas vazias e limpas, placa e exaustor sem gordura",
          "Casas de banho sem calcário nas torneiras e com juntas limpas",
          "Pavimentos lavados, rodapés sem pó",
          "Interruptores e portas sem dedadas",
          "Varandas e pátios varridos",
        ],
      },
      { t: "h2", x: "O que limpar antes de cada visita" },
      {
        t: "p",
        x: "Entre visitas, a casa vai perdendo o aspeto, sobretudo se continuar habitada. Uma passagem rápida antes de cada visita, ou antes de um dia com várias, resolve: pavimentos, casas de banho, cozinha, lixo fora e janelas abertas meia hora antes para arejar.",
      },
      { t: "h3", x: "O cheiro" },
      {
        t: "p",
        x: "É o primeiro sinal de casa fechada e o mais difícil de disfarçar. Ambientador forte costuma dar a ideia de que se está a esconder alguma coisa. O que funciona é arejar, limpar a origem (ralos, frigorífico desligado com a porta fechada, armários húmidos) e deixar a casa sem cheiro nenhum.",
      },
      { t: "h2", x: "Para consultores imobiliários" },
      {
        t: "p",
        x: "Um consultor com várias casas em carteira precisa de um serviço previsível: a mesma equipa, preço combinado e alguém que atenda o telefone quando aparece uma visita para amanhã. Trabalhamos com mediação imobiliária em quatro momentos:",
      },
      {
        t: "lista",
        x: [
          "Antes de o imóvel entrar no mercado, para as fotografias",
          "Antes de visitas, sobretudo em casa devoluta",
          "Depois de obra, quando o proprietário fez melhorias para vender",
          "Na entrega de chaves ao comprador ou ao arrendatário",
        ],
      },
      {
        t: "p",
        x: "Em cada limpeza fazemos um registo fotográfico do estado do imóvel, que pode juntar ao processo. Ver como trabalhamos com [mediação imobiliária](/servicos/imobiliarias), e o artigo sobre a [limpeza de entrega de chaves](/blog/limpeza-entrega-de-chaves-lisboa).",
      },
      { t: "h2", x: "Depois de uma obra para vender" },
      {
        t: "p",
        x: "Muitos proprietários pintam a casa ou mudam a cozinha antes de a pôr à venda. A obra deixa poeira fina que volta a assentar dias depois, restos de tinta nos vidros e cimento nos pavimentos. Uma limpeza normal não chega: é preciso aspirar a poeira, tirar os resíduos e fazer uma segunda passagem antes das fotografias. Se a obra acabar perto da data do anúncio, deixe pelo menos um ou dois dias entre a limpeza pós-obra e a sessão de fotografias.",
      },
      { t: "h2", x: "Quanto tempo antes marcar" },
      {
        t: "p",
        x: "O ideal é marcar a limpeza profunda alguns dias antes da sessão de fotografias, para haver tempo de resolver o que aparecer, como uma lâmpada fundida, um puxador solto ou uma mancha na parede. As passagens antes de visitas podem ser marcadas com menos antecedência, conforme a agenda.",
      },
      { t: "h2", x: "Onde trabalhamos" },
      {
        t: "p",
        x: "Trabalhamos sobretudo em Lisboa, e também em Sintra, Cascais, Oeiras e Amadora. Quando há deslocação, aparece à parte no orçamento. Ver [limpeza em Lisboa](/limpezas/lisboa) e [limpeza em Sintra](/limpezas/sintra).",
      },
    ],
    faq: [
      {
        p: "Uma limpeza normal chega antes de pôr a casa à venda?",
        r: "Numa casa habitada e bem mantida, por vezes chega. Numa casa fechada há meses, ou com calcário e gordura acumulados, é preciso uma limpeza profunda ou de apresentação.",
      },
      {
        p: "Trabalham com agências e consultores?",
        r: "Sim. Para quem tem vários imóveis, combinamos o serviço como contrato, com o mesmo modelo de preço para todas as casas.",
      },
      {
        p: "Preciso de estar no imóvel?",
        r: "Não. Combinamos a entrega da chave, e o registo fotográfico mostra como o imóvel ficou.",
      },
    ],
  },

  {
    slug: "quanto-custa-limpeza-lisboa",
    titulo: "Quanto custa uma limpeza em Lisboa: à hora ou por imóvel",
    descricao:
      "Quanto se paga por uma limpeza em Lisboa, o que faz o preço variar e por que razão o preço fechado por imóvel faz sentido no alojamento local.",
    resumo:
      "O que cobramos hoje à hora, o que faz variar o valor final e quando faz mais sentido um preço fechado por imóvel.",
    data: BLOG_DATA,
    corpo: [
      {
        t: "p",
        x: "É a primeira pergunta de quase toda a gente, e a resposta honesta tem duas partes: quanto cobramos hoje e o que faz variar o valor de uma limpeza para a outra. Este artigo não traz tabela por tipologia, porque cada casa é orçamentada à parte. Traz o que precisa de saber para comparar propostas.",
      },
      { t: "h2", x: "O que cobramos hoje" },
      {
        t: "p",
        x: "O preço é fechado por imóvel e por serviço. Os nossos profissionais são dedicados e treinados, e levam produtos e equipamento. Quando há deslocação, fica indicada à parte no orçamento, para saber exatamente o que está a pagar.",
      },
      { t: "h2", x: "O que faz variar o valor" },
      {
        t: "p",
        x: "Numa limpeza cobrada à hora, o valor final depende do tempo, e o tempo depende de várias coisas:",
      },
      {
        t: "lista",
        x: [
          "Tipologia e área: um T1 e uma moradia T4 com dois pisos são trabalhos diferentes",
          "Tipo de serviço: manutenção regular, limpeza profunda, pós-obra ou pós-mudança",
          "Estado em que a casa está: gordura acumulada, calcário ou casa fechada há meses",
          "Frequência: uma casa limpa todas as semanas demora menos em cada visita",
          "Acesso: escadas, estacionamento e distância entre imóveis",
        ],
      },
      { t: "h2", x: "Referências de mercado" },
      {
        t: "p",
        x: "No alojamento local em Lisboa e Sintra, os valores públicos de 2026 para uma limpeza de rotação num T1 ou T2 andam entre 44 € e 70 €. Há prestadores à hora no segmento mais caro que cobram perto de 15 € por hora. A lavandaria, quando incluída, costuma ser cobrada à parte, entre 8 € e 18 € por jogo completo. São referências de mercado, não os nossos preços, mas ajudam a ler um orçamento.",
      },
      {
        t: "p",
        x: "Nós não lavamos nem engomamos roupa. Trocamos a roupa de cama e deixamos a usada separada, e a lavagem fica com o proprietário. Ao comparar propostas, confirme se a lavandaria está ou não incluída.",
      },
      { t: "h2", x: "À hora ou por imóvel" },
      {
        t: "p",
        x: "Para uma limpeza pontual numa casa habitada, pagar à hora é simples e justo. No alojamento local a conta é outra.",
      },
      { t: "h3", x: "O problema da hora no alojamento local" },
      {
        t: "p",
        x: "Quem paga à hora paga o tempo, e o tempo é o que o proprietário não controla. Se uma rotação demorou mais porque o hóspede deixou a cozinha pior, a fatura sobe. Se a equipa é lenta, a fatura também sobe. No fim do mês o valor muda sem que o proprietário consiga prever ou explicar a diferença.",
      },
      { t: "h3", x: "O que muda com preço fechado" },
      {
        t: "p",
        x: "Com preço fechado por imóvel, cada rotação custa o mesmo. O valor define-se por tipologia e âmbito no orçamento, e se uma limpeza demorar mais do que o previsto, quem executa assume a diferença. O proprietário sabe quanto vai pagar por cada hóspede e pode pôr isso na conta do preço da noite.",
      },
      {
        t: "p",
        x: "Para quem tem mais de um imóvel, o passo seguinte é um contrato: um preço por limpeza fixado para doze meses e o mesmo preço para um imóvel novo que entre na carteira. Mais detalhe na página de [alojamento local](/servicos/alojamento-local).",
      },
      { t: "h2", x: "O que deve estar num orçamento" },
      {
        t: "lista",
        x: [
          "O que está incluído e o que não está, por escrito",
          "Se os produtos e o equipamento estão incluídos",
          "Se a deslocação é cobrada e quanto",
          "Como é cobrado: à hora, por limpeza ou por contrato",
          "O que acontece se a limpeza for cancelada em cima da hora",
          "Se há registo do estado em que a casa ficou",
        ],
      },
      {
        t: "p",
        x: "Desconfie de um valor muito abaixo do mercado sem explicação. Pode querer dizer que os produtos não estão incluídos, que a equipa muda a cada visita ou que o âmbito é mais curto do que parece. Um orçamento claro evita surpresas de parte a parte. Quanto mais nos disser sobre o imóvel (tipologia, concelho, frequência, estado), mais certo fica o valor.",
      },
      { t: "h2", x: "Onde trabalhamos" },
      {
        t: "p",
        x: "Lisboa é a nossa zona principal, e trabalhamos também em Sintra, Cascais, Oeiras e Amadora. Ver [limpeza em Lisboa](/limpezas/lisboa), as freguesias em [limpeza em Sintra](/limpezas/sintra) e os [serviços](/servicos).",
      },
    ],
    faq: [
      {
        p: "Quanto cobram por hora?",
        r: "Hoje cobramos 10 € por hora. Para alojamento local e para clientes com vários imóveis propomos preço fechado por imóvel, definido no orçamento.",
      },
      {
        p: "Têm tabela de preços por tipologia?",
        r: "Não publicamos tabela. Cada imóvel é orçamentado com a tipologia, o serviço e a frequência.",
      },
      {
        p: "Os produtos estão incluídos?",
        r: "Sim. Levamos produto e equipamento em todas as visitas. Nas rotações de alojamento local, os consumíveis do hóspede repostos são cobrados a custo.",
      },
      {
        p: "A deslocação é cobrada?",
        r: "Quando há deslocação, entra no orçamento e aparece indicada à parte.",
      },
    ],
  },

  {
    slug: "limpeza-entrega-de-chaves-lisboa",
    titulo: "Limpeza de entrega de chaves e pós-mudança em Lisboa",
    descricao:
      "Como funciona a limpeza antes de entregar as chaves de uma casa em Lisboa, ou depois de uma mudança: o que entra, o registo fotográfico e como marcar.",
    resumo:
      "O que entra numa limpeza de casa vazia antes de entregar as chaves, ou depois de sair, e por que razão o registo fotográfico ajuda.",
    data: BLOG_DATA,
    corpo: [
      {
        t: "p",
        x: "Entregar uma casa a um comprador ou a um novo inquilino, ou sair de uma casa arrendada, acaba quase sempre numa limpeza à pressa no último dia. Com a casa vazia, aparece tudo o que os móveis escondiam. Este artigo explica o que deve entrar numa limpeza de entrega de chaves ou pós-mudança, e como evitar discussões sobre o estado em que a casa ficou.",
      },
      { t: "h2", x: "Três situações diferentes" },
      { t: "h3", x: "Entrega ao comprador" },
      {
        t: "p",
        x: "Depois da escritura, o comprador espera encontrar a casa limpa e vazia. É comum o consultor imobiliário tratar desta limpeza em nome do vendedor, para fechar o processo sem pendentes.",
      },
      { t: "h3", x: "Fim de arrendamento" },
      {
        t: "p",
        x: "Quando um inquilino sai, a limpeza serve para pôr a casa pronta para o próximo. Para o inquilino que sai, pode ser também a forma de entregar a casa no estado em que a recebeu.",
      },
      { t: "h3", x: "Antes de entrar" },
      {
        t: "p",
        x: "Quem compra ou arrenda uma casa costuma querer limpá-la antes de os móveis chegarem. Com a casa vazia, é o melhor momento para chegar a todo o lado.",
      },
      { t: "h2", x: "O que entra numa limpeza de casa vazia" },
      {
        t: "lista",
        x: [
          "Todas as divisões, de cima a baixo: tetos com teias, paredes com marcas, rodapés",
          "Interior de armários embutidos, roupeiros e gavetas",
          "Cozinha completa, incluindo o interior do forno, do frigorífico e dos armários",
          "Casas de banho com descalcificação de torneiras, sanitários e base de duche",
          "Vidros interiores e caixilharia",
          "Marcas no chão deixadas pelos móveis que saíram",
          "Interruptores, tomadas, puxadores e portas",
          "Varandas e arrecadação, quando fazem parte do imóvel",
        ],
      },
      {
        t: "p",
        x: "Se a casa saiu de uma obra, o trabalho é outro. A poeira fina de obra pede aspiração própria e uma segunda passagem depois de assentar. Ver os serviços de [pós-obra e pós-mudança](/servicos).",
      },
      { t: "h2", x: "O registo fotográfico" },
      {
        t: "p",
        x: "Na entrega de chaves, o registo fotográfico pode valer mais do que a própria limpeza. Fotografamos o estado de cada divisão no momento da entrega e deixamos uma nota com o que encontrámos e que precisa de atenção, como uma persiana partida, uma infiltração ou uma torneira a pingar.",
      },
      {
        t: "p",
        x: "Para o vendedor ou o senhorio, fica a prova de como a casa foi entregue. Para quem entra, é uma lista clara do que pedir para resolver. Para o consultor, é um documento a juntar ao processo do imóvel.",
      },
      { t: "h2", x: "Como marcar" },
      {
        t: "p",
        x: "O ideal é marcar a limpeza para depois de a casa estar totalmente vazia e antes da entrega, com alguma margem. Uma limpeza com caixotes ainda no chão fica sempre incompleta. Se a data da escritura ou do contrato estiver marcada, diga-nos logo, para encaixarmos a limpeza no calendário.",
      },
      {
        t: "lista",
        x: [
          "Tipologia e se é apartamento ou moradia",
          "Morada ou, pelo menos, a freguesia",
          "Se a casa já está vazia ou quando fica",
          "Data da entrega",
          "Se houve obra recente",
          "Quem entrega a chave e como",
        ],
      },
      { t: "h2", x: "Quem paga a limpeza" },
      {
        t: "p",
        x: "Depende do que ficou combinado. Na venda, é comum ser o vendedor, às vezes através do consultor. No fim de um arrendamento, o contrato costuma dizer em que estado a casa deve ser devolvida, e convém lê-lo antes de marcar. Seja quem for, o orçamento sai em nome de quem contrata, e as fotografias seguem para essa pessoa.",
      },
      { t: "h2", x: "Quanto tempo demora" },
      {
        t: "p",
        x: "Depende da tipologia, do estado da casa e de haver ou não obra recente. Uma casa vazia bem mantida faz-se mais depressa do que uma que esteve anos habitada sem limpeza profunda. Fazemos a estimativa no orçamento, depois de sabermos a tipologia e o estado da casa. Se houver dúvida, umas fotografias por WhatsApp ajudam a acertar o tempo.",
      },
      { t: "h2", x: "Lisboa e arredores" },
      {
        t: "p",
        x: "Lisboa é a nossa zona principal, e trabalhamos também em Sintra, Cascais, Oeiras e Amadora. Quando há deslocação, aparece à parte no orçamento. Ver [limpeza em Lisboa](/limpezas/lisboa).",
      },
      { t: "h2", x: "Para consultores imobiliários" },
      {
        t: "p",
        x: "Se trata de várias entregas por ano, faz sentido combinar o serviço uma vez e depois marcar por mensagem cada imóvel. A equipa é sempre a mesma, e o registo fotográfico segue o mesmo formato em todas as casas. Ver [mediação imobiliária](/servicos/imobiliarias) e o artigo sobre [preparar a casa para vender](/blog/limpeza-para-vender-casa).",
      },
    ],
    faq: [
      {
        p: "A casa tem de estar vazia?",
        r: "Para uma limpeza de entrega de chaves, sim. Com móveis ou caixotes não se chega a todo o lado, e a limpeza fica incompleta.",
      },
      {
        p: "Fazem limpeza depois de obras?",
        r: "Sim. A limpeza pós-obra é um serviço à parte, com aspiração da poeira fina e uma segunda passagem.",
      },
      {
        p: "Recebo as fotografias?",
        r: "Sim. O registo fotográfico de cada divisão e a nota do que precisa de atenção seguem para quem nos contratou.",
      },
    ],
  },
];

export const postPorSlug = (slug) => POSTS.find((p) => p.slug === slug);
