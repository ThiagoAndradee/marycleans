import Link from "next/link";
import Pagina from "../../components/Pagina";
import TextoComLinks, { semLinks } from "../../components/blog/TextoComLinks";
import { GUIAS, GUIAS_DATA, CATEGORIAS_GUIAS, guiaPorSlug } from "../../lib/guias";
import { EMPRESA, WHATSAPP } from "../../lib/negocio";
import { negocioJsonLd } from "../../components/Seo";
import { SITE } from "../../lib/site";

// Guia para anfitriões. Conteúdo em lib/guias.js. Resposta curta no topo (para quem chega da
// pesquisa e para as respostas com IA), corpo, perguntas, fontes oficiais e links internos.

const dataPT = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

function Bloco({ b }) {
  if (b.t === "h2") return <h2 className="mt-12 text-titulo-3 text-tinta-900 sm:text-titulo-2">{b.x}</h2>;
  if (b.t === "h3") return <h3 className="mt-8 text-lg font-semibold text-tinta-900">{b.x}</h3>;
  if (b.t === "lista")
    return (
      <ul className="mt-4 max-w-leitura list-disc space-y-2 pl-5 text-tinta-600 marker:text-marca-600">
        {b.x.map((item) => (
          <li key={item} className="leading-7">
            <TextoComLinks texto={item} />
          </li>
        ))}
      </ul>
    );
  return (
    <p className="mt-4 max-w-leitura leading-7 text-tinta-600">
      <TextoComLinks texto={b.x} />
    </p>
  );
}

function jsonLd(guia) {
  const url = `${SITE}/guias/${guia.slug}`;
  const { "@context": _c, ...negocio } = negocioJsonLd;
  return {
    "@context": "https://schema.org",
    "@graph": [
      negocio,
      {
        "@type": "Article",
        "@id": `${url}#guia`,
        headline: guia.h1,
        description: guia.descricao,
        abstract: guia.resposta,
        inLanguage: "pt-PT",
        datePublished: GUIAS_DATA,
        dateModified: GUIAS_DATA,
        url,
        mainEntityOfPage: url,
        articleSection: CATEGORIAS_GUIAS[guia.categoria],
        author: { "@id": negocio["@id"] },
        publisher: { "@id": negocio["@id"] },
        ...(guia.fontes.length ? { citation: guia.fontes.map((f) => f.url) } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#caminho`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE}/guias` },
          { "@type": "ListItem", position: 3, name: guia.rotulo, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#perguntas`,
        mainEntity: guia.faq.map((f) => ({
          "@type": "Question",
          name: f.p,
          acceptedAnswer: { "@type": "Answer", text: semLinks(f.r) },
        })),
      },
    ],
  };
}

export default function Guia({ guia, outros }) {
  const wa = WHATSAPP("Bom dia. Li o guia da Mary Cleans e queria uma proposta de limpeza para um alojamento local em ");
  return (
    <Pagina titulo={guia.titulo} descricao={guia.descricao} caminho={`/guias/${guia.slug}`} jsonLd={jsonLd(guia)}>
      <article>
        <header className="border-b border-tinta-200">
          <div className="secao py-12 sm:py-16">
            <nav aria-label="Caminho" className="text-sm text-tinta-500">
              <Link href="/" className="hover:text-tinta-800">Início</Link>
              <span className="mx-2">/</span>
              <Link href="/guias" className="hover:text-tinta-800">Guias</Link>
            </nav>
            <p className="etiqueta-secao mt-5">{CATEGORIAS_GUIAS[guia.categoria]}</p>
            <h1 className="mt-4 max-w-3xl text-[2rem] font-bold leading-[1.12] tracking-tight text-tinta-900 sm:text-titulo-1">
              {guia.h1}
            </h1>
            <p id="resposta" className="mt-6 max-w-leitura border-l-2 border-marca-500 pl-4 text-entrada text-tinta-800">
              {guia.resposta}
            </p>
            <p className="mt-5 text-sm text-tinta-500">
              {EMPRESA.nome} · revisto em <time dateTime={GUIAS_DATA}>{dataPT(GUIAS_DATA)}</time>
            </p>
          </div>
        </header>

        <div className="secao secao-espaco">
          {guia.corpo.map((b, i) => (
            <Bloco key={i} b={b} />
          ))}

          {guia.fontes.length ? (
            <section className="mt-14 max-w-leitura border-t border-tinta-200 pt-8">
              <h2 className="etiqueta-secao">Fontes</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {guia.fontes.map((f) => (
                  <li key={f.url}>
                    <a href={f.url} target="_blank" rel="noreferrer noopener" className="text-marca-700 underline underline-offset-2">
                      {f.rotulo}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-5 text-tinta-500">
                Resumo informativo, consultado em {dataPT(GUIAS_DATA)}. Não substitui a lei nem aconselhamento jurídico. As regras mudam, e cada câmara pode ter regras próprias.
              </p>
            </section>
          ) : null}
        </div>
      </article>

      <section className="border-y border-tinta-200 bg-tinta-50">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Perguntas frequentes</h2>
          <dl className="mt-8 grid gap-x-12 gap-y-8 lg:grid-cols-2">
            {guia.faq.map((f) => (
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

      <section>
        <div className="secao secao-espaco">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="etiqueta-secao">Para empresas e anfitriões</h2>
              <p className="mt-3 max-w-leitura text-titulo-3 text-tinta-900 sm:text-titulo-2">
                Quer a limpeza do seu alojamento local feita assim?
              </p>
              <p className="mt-4 max-w-leitura text-tinta-600">
                Trabalhamos em Lisboa, Sintra e Cascais, com lista escrita por imóvel, preço fechado por imóvel e relatório fotográfico em cada rotação.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contacto" className="botao">Pedir proposta</Link>
                <a href={wa} target="_blank" rel="noreferrer noopener" className="botao-secundario">
                  WhatsApp {EMPRESA.telefone}
                </a>
              </div>
            </div>
            <div>
              <h2 className="etiqueta-secao">Leia também</h2>
              <ul className="mt-5 space-y-3">
                {guia.ligacoes.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="font-medium text-tinta-900 underline decoration-tinta-300 underline-offset-4 hover:text-marca-700">
                      {l.rotulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 border-t border-tinta-200 pt-8">
            <h2 className="text-etiqueta uppercase text-tinta-500">Outros guias</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {outros.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guias/${g.slug}`}
                    className="inline-block rounded border border-tinta-300 bg-white px-4 py-2 text-sm font-medium text-tinta-800 hover:border-marca-400"
                  >
                    {g.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Pagina>
  );
}

export function getStaticPaths() {
  return { paths: GUIAS.map((g) => ({ params: { slug: g.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  const guia = guiaPorSlug(params.slug);
  if (!guia) return { notFound: true };
  return {
    props: {
      guia,
      outros: GUIAS.filter((g) => g.slug !== guia.slug).map(({ slug, rotulo }) => ({ slug, rotulo })),
    },
  };
}
