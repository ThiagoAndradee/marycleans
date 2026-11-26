import Link from "next/link";
import Pagina from "../components/Pagina";
import TextoComLinks, { semLinks } from "../components/blog/TextoComLinks";
import { EMPRESA } from "../lib/negocio";
import { SITE } from "../lib/site";

// Perguntas frequentes num só sítio. As respostas repetem o que o resto do site já diz
// (lib/negocio.js, páginas de serviço): nada de preço, prazo ou capacidade por confirmar.

const GRUPOS = [
  {
    nome: "O serviço",
    perguntas: [
      {
        p: "O que faz a Mary Cleans?",
        r: "Limpeza para alojamento local, mediação imobiliária e habitação, em Lisboa, Sintra e Cascais. Os serviços e o que cada um inclui estão em [serviços](/servicos).",
      },
      {
        p: "Quem faz a limpeza?",
        r: "Profissionais dedicados e treinados, sempre a mesma equipa em cada imóvel. O cliente fala diretamente com quem limpa.",
      },
      {
        p: "Levam os produtos e o equipamento?",
        r: "Sim. Produtos e equipamento de limpeza são fornecidos por nós. Os consumíveis do imóvel, como papel e sabão, repõem-se conforme combinado.",
      },
      {
        p: "O que não fazem?",
        r: "Não lavamos nem engomamos roupa de cama e toalhas. Trocamos a roupa e deixamos a usada separada para a lavandaria do proprietário.",
      },
    ],
  },
  {
    nome: "Alojamento local",
    perguntas: [
      {
        p: "O que inclui a limpeza entre hóspedes?",
        r: "Limpeza completa de todas as divisões, troca de roupa de cama e toalhas com o jogo do imóvel, reposição de consumíveis, conferência final e relatório fotográfico. O processo está em [alojamento local](/servicos/alojamento-local).",
      },
      {
        p: "Preciso de estar no imóvel?",
        r: "Não. O acesso é combinado por escrito antes da primeira limpeza, e o estado da casa chega pelo relatório fotográfico. Veja o guia sobre [acesso ao imóvel](/guias/acesso-imovel-chaves-cofre-limpeza).",
      },
      {
        p: "Enviam fotografias depois de cada limpeza?",
        r: "Sim. Cada rotação termina com um relatório fotográfico do estado de entrega, com o que foi reposto e o que precisa de atenção.",
      },
      {
        p: "Fazem limpeza com o hóspede dentro, em estadias longas?",
        r: "Sim. A limpeza intermédia é marcada com o hóspede, em dia e hora certos, com a frequência definida no orçamento.",
      },
      {
        p: "Tenho vários alojamentos. Como funciona?",
        r: "Orçamentamos como contrato, com preço por limpeza fixado por imóvel durante o período. Os detalhes estão em [contrato para vários alojamentos](/contrato-limpeza-alojamento-local).",
      },
    ],
  },
  {
    nome: "Proposta e preço",
    perguntas: [
      {
        p: "Quanto custa?",
        r: "O preço é fechado por imóvel e depende da tipologia, do serviço e do que fica combinado para a casa. Consta da proposta antes de começar. Há referências de mercado em [quanto custa uma limpeza em Lisboa](/blog/quanto-custa-limpeza-lisboa).",
      },
      {
        p: "Como peço uma proposta?",
        r: "Pelo [formulário de contacto](/contacto) ou por WhatsApp. Respondemos por escrito, com o preço por imóvel, o que está incluído e o que fica de fora.",
      },
      {
        p: "Há custo de deslocação?",
        r: "Quando existe, vem indicado à parte no orçamento.",
      },
    ],
  },
  {
    nome: "Zonas",
    perguntas: [
      {
        p: "Onde trabalham?",
        r: "Em Lisboa, que é a nossa base, e em Sintra, Cascais, Oeiras e Amadora. A lista completa está em [zonas](/zonas).",
      },
      {
        p: "Trabalham fora destes concelhos?",
        r: "Pergunte no pedido de proposta. Se não for possível, dizemos isso na resposta.",
      },
    ],
  },
  {
    nome: "Regras do alojamento local",
    perguntas: [
      {
        p: "O que diz a lei sobre a limpeza no alojamento local?",
        r: "Que a casa tem de reunir sempre condições de higiene e limpeza. O resumo está em [obrigações de limpeza no alojamento local](/guias/obrigacoes-limpeza-alojamento-local).",
      },
      {
        p: "Que equipamento de segurança tem de ter um alojamento local?",
        r: "Até dez utentes: extintor e manta de incêndio, primeiros socorros e o 112 afixado. Veja o guia de [vistoria ao alojamento local](/guias/vistoria-alojamento-local).",
      },
    ],
  },
];

export default function PerguntasFrequentes() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE}/perguntas-frequentes#perguntas`,
    url: `${SITE}/perguntas-frequentes`,
    inLanguage: "pt-PT",
    about: { "@id": `${SITE}/#negocio` },
    mainEntity: GRUPOS.flatMap((g) => g.perguntas).map((f) => ({
      "@type": "Question",
      name: f.p,
      acceptedAnswer: { "@type": "Answer", text: semLinks(f.r) },
    })),
  };

  return (
    <Pagina
      titulo="Perguntas Frequentes sobre a Limpeza"
      descricao="Respostas sobre a limpeza de alojamento local e de imóveis da Mary Cleans: o que inclui, acesso, relatório fotográfico, roupa de cama, proposta, preço e zonas."
      caminho="/perguntas-frequentes"
      jsonLd={jsonLd}
    >
      <section className="border-b border-tinta-200">
        <div className="secao py-14 sm:py-16">
          <p className="etiqueta-secao">Perguntas frequentes</p>
          <h1 className="mt-4 max-w-3xl text-titulo-1">O que nos perguntam antes de começar.</h1>
          <p className="prosa mt-6">
            <span className="text-entrada">
              Se a sua pergunta não estiver aqui, envie-a por WhatsApp para o {EMPRESA.telefone} ou pelo <Link href="/contacto" className="underline underline-offset-2">formulário</Link>.
            </span>
          </p>
        </div>
      </section>

      {GRUPOS.map((g, i) => (
        <section key={g.nome} className={i % 2 ? "border-y border-tinta-200 bg-tinta-50" : ""}>
          <div className="secao secao-espaco">
            <h2 className="etiqueta-secao">{g.nome}</h2>
            <dl className="mt-8 grid gap-x-12 gap-y-8 lg:grid-cols-2">
              {g.perguntas.map((f) => (
                <div key={f.p}>
                  <dt className="text-base font-semibold text-tinta-900">{f.p}</dt>
                  <dd className="mt-2 text-sm leading-6 text-tinta-600">
                    <TextoComLinks texto={f.r} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}
    </Pagina>
  );
}
