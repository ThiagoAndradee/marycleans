import Link from "next/link";
import Pagina from "../components/Pagina";
import { CONCELHOS, EMPRESA } from "../lib/negocio";
import { INDICE_SEO } from "../lib/seo-indice";
import { INDICE_ZONAS } from "../lib/seo-indice-zonas";
import { SITE } from "../lib/site";

// Hub de todas as zonas: concelho a concelho, com as páginas de bairro e de área de cada um
// e as freguesias atendidas. É daqui que o cabeçalho leva em "Zonas".

const concelhoDe = (p) =>
  p.concelho ||
  (CONCELHOS.find((c) => c.slug !== "lisboa" && p.slug.includes(c.slug)) || { slug: "lisboa" }).slug;

export default function Zonas({ concelhos }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/zonas#pagina`,
    url: `${SITE}/zonas`,
    name: "Zonas onde a Mary Cleans trabalha",
    inLanguage: "pt-PT",
    about: { "@id": `${SITE}/#negocio` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: concelhos
        .flatMap((c) => [{ slug: `limpezas/${c.slug}`, rotulo: `Limpeza em ${c.nome}` }, ...c.paginas])
        .map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE}/${p.slug}`, name: p.rotulo })),
    },
  };

  return (
    <Pagina
      titulo="Zonas de Serviço em Lisboa, Sintra e Cascais"
      descricao="Onde a Mary Cleans faz limpeza de alojamento local e de imóveis: bairros de Lisboa, Sintra, Cascais, Oeiras e Amadora, com uma página para cada zona."
      caminho="/zonas"
      jsonLd={jsonLd}
    >
      <section className="border-b border-tinta-200">
        <div className="secao py-14 sm:py-16">
          <p className="etiqueta-secao">Zonas</p>
          <h1 className="mt-4 max-w-3xl text-titulo-1">Onde trabalhamos.</h1>
          <p className="prosa mt-6">
            <span className="text-entrada">
              Lisboa é a nossa base. Sintra, Cascais, Oeiras e a Amadora fazem parte da área de serviço. Cada zona tem uma página com o que muda na limpeza ali: o tipo de prédio, o acesso e quem lá fica.
            </span>
          </p>
          <p className="mt-6 text-sm text-tinta-600">
            Quando há custo de deslocação, vem indicado à parte no orçamento. Não encontra a sua zona? Fale connosco pelo {EMPRESA.telefone}.
          </p>
        </div>
      </section>

      {concelhos.map((c, i) => (
        <section key={c.slug} className={i % 2 ? "border-y border-tinta-200 bg-tinta-50" : ""}>
          <div className="secao secao-espaco">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="etiqueta-secao">{c.base ? "Base" : "Área de serviço"}</h2>
                <p className="mt-3 text-titulo-2 text-tinta-900">{c.nome}</p>
              </div>
              <Link href={`/limpezas/${c.slug}`} className="botao-secundario">
                Limpeza em {c.nome}
              </Link>
            </div>
            {c.paginas.length ? (
              <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {c.paginas.map((p) => (
                  <li key={p.slug} className="border-b border-tinta-200 pb-3">
                    <Link href={`/${p.slug}`} className="text-sm font-semibold text-tinta-900 hover:text-marca-700">
                      {p.rotulo}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            {c.freguesias.length ? (
              <p className="mt-8 max-w-leitura text-sm leading-6 text-tinta-600">
                <span className="font-semibold text-tinta-800">Freguesias: </span>
                {c.freguesias.join(", ")}.
              </p>
            ) : null}
          </div>
        </section>
      ))}

      <section className="border-t border-tinta-200">
        <div className="secao py-14">
          <p className="text-sm text-tinta-600">
            Para quem gere alojamento local, há também <Link href="/guias" className="font-medium text-marca-700 underline underline-offset-2">guias práticos</Link> e <Link href="/perguntas-frequentes" className="font-medium text-marca-700 underline underline-offset-2">perguntas frequentes</Link>.
          </p>
        </div>
      </section>
    </Pagina>
  );
}

export function getStaticProps() {
  const todas = [...INDICE_SEO, ...INDICE_ZONAS].filter((p) => p.grupo === "bairro" || p.grupo === "area");
  return {
    props: {
      concelhos: CONCELHOS.map((c) => ({
        slug: c.slug,
        nome: c.nome,
        base: Boolean(c.base),
        freguesias: c.freguesias,
        paginas: [
          ...(c.slug === "lisboa" ? [{ slug: "limpeza-alojamento-local-lisboa", rotulo: "Alojamento local em Lisboa" }] : []),
          ...todas.filter((p) => concelhoDe(p) === c.slug).map(({ slug, rotulo }) => ({ slug, rotulo })),
        ],
      })),
    },
  };
}
