const PERGUNTAS = [
  {
    p: "O que está incluído numa limpeza?",
    r: "O âmbito é fixado no orçamento, por escrito, antes de começar. Numa limpeza de manutenção: todas as divisões, cozinha, casas de banho, aspiração e lavagem de pavimentos. Nas rotações de alojamento local acresce a troca de roupa de cama, a reposição de consumíveis e a conferência final.",
  },
  {
    p: "Quem fornece os produtos e o equipamento?",
    r: "Nós. Levamos produto e equipamento em todas as visitas. Se o cliente preferir que se use um produto específico dele, por causa de alergia ou de um pavimento delicado, indica-se no orçamento.",
  },
  {
    p: "É preciso estar em casa durante o serviço?",
    r: "Não. A maioria dos clientes deixa a chave ou um código de acesso. O relatório fotográfico no fim do serviço mostra o estado em que o imóvel foi entregue.",
  },
  {
    p: "Quanto tempo demora?",
    r: "Depende da tipologia e do tipo de serviço, e a duração estimada consta do orçamento. O preço é fechado por imóvel, portanto se o serviço demorar mais do que o previsto o valor não muda.",
  },
  {
    p: "Como é cobrado?",
    r: "Preço fechado por imóvel e por serviço, não por hora trabalhada. Clientes com mais de um imóvel, ou com limpeza recorrente, são orçamentados como contrato, com preço por limpeza fixado para o período.",
  },
  {
    p: "Trabalham ao fim de semana?",
    r: "Sim, com marcação prévia. As rotações de alojamento local acontecem com frequência ao fim de semana, porque é quando há mais mudança de hóspede.",
  },
  {
    p: "E se alguém da equipa faltar?",
    r: "O compromisso é com a data acordada, não com uma pessoa. Garantir a substituição é responsabilidade nossa, não do cliente.",
  },
  {
    p: "Lavam e engomam a roupa de cama?",
    r: "Não. Trocamos a roupa de cama e as toalhas com o jogo limpo que está no imóvel, e deixamos a roupa usada separada onde o cliente indicar. A lavagem e a engomadoria ficam a cargo do proprietário ou de lavandaria por ele contratada.",
  },
  {
    p: "Trabalham com empresas e emitem fatura?",
    r: "Sim. Os contratos de limpeza recorrente são celebrados como prestação de serviço, com fatura, sem encargos de pessoal para o cliente.",
  },
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PERGUNTAS.map((item) => ({
      "@type": "Question",
      name: item.p,
      acceptedAnswer: { "@type": "Answer", text: item.r },
    })),
  };

  return (
    <section className="secao secao-espaco">
      <h2 className="etiqueta-secao">Perguntas frequentes</h2>
      <p className="mt-3 max-w-leitura text-titulo-2">
        O que os clientes perguntam antes de contratar.
      </p>

      <dl className="mt-10 grid gap-x-12 gap-y-8 lg:grid-cols-2">
        {PERGUNTAS.map((item) => (
          <div key={item.p}>
            <dt className="text-base font-semibold text-tinta-900">{item.p}</dt>
            <dd className="mt-2 text-sm leading-6 text-tinta-600">{item.r}</dd>
          </div>
        ))}
      </dl>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
