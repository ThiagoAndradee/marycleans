import Link from "next/link";
import Pagina from "../../components/Pagina";
import { GUIAS, CATEGORIAS_GUIAS } from "../../lib/guias";
import { SITE } from "../../lib/site";

// Hub dos guias para anfitriões, agrupados por tema, com o melhor do blog ao lado.
const DO_BLOG = [
  { href: "/blog/checklist-check-out-alojamento-local", rotulo: "Checklist de check-out para alojamento local" },
  { href: "/blog/limpeza-alojamento-local-lisboa", rotulo: "Como funciona a rotação entre hóspedes" },
  { href: "/blog/quanto-custa-limpeza-lisboa", rotulo: "Quanto custa uma limpeza em Lisboa" },
];

export default function Guias({ grupos }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/guias#pagina`,
    url: `${SITE}/guias`,
    name: "Guias para anfitriões de alojamento local",
    inLanguage: "pt-PT",
    publisher: { "@id": `${SITE}/#negocio` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: grupos
        .flatMap((g) => g.guias)
        .map((g, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE}/guias/${g.slug}`, name: g.rotulo })),
    },
  };

  return (
    <Pagina
      titulo="Guias para Anfitriões de Alojamento Local"
      descricao="Guias práticos para quem gere alojamento local em Lisboa, Sintra e Cascais: regras do AL, vistoria, limpeza, roupa de cama, acesso, lixo, humidade e pragas."
      caminho="/guias"
      jsonLd={jsonLd}
    >
      <section className="border-b border-tinta-200">
        <div className="secao py-14 sm:py-16">
          <p className="etiqueta-secao">Guias</p>
          <h1 className="mt-4 max-w-3xl text-titulo-1">Guias para quem gere alojamento local.</h1>
          <p className="prosa mt-6">
            <span className="text-entrada">
              Regras, vistorias e a operação da limpeza entre hóspedes, explicadas por quem limpa. Cada guia tem uma resposta curta no topo e as fontes oficiais no fim.
            </span>
          </p>
        </div>
      </section>

      {grupos.map((g) => (
        <section key={g.id} className="secao secao-espaco border-b border-tinta-100">
          <h2 className="etiqueta-secao">{g.nome}</h2>
          <ul className="mt-8 grid gap-6 lg:grid-cols-2">
            {g.guias.map((guia) => (
              <li key={guia.slug}>
                <Link href={`/guias/${guia.slug}`} className="cartao flex h-full flex-col transition-colors hover:border-marca-400">
                  <h3 className="text-titulo-3 text-tinta-900">{guia.rotulo}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-tinta-600">{guia.descricao}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="border-t border-tinta-200 bg-tinta-50">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Do blog</h2>
          <ul className="mt-5 space-y-3">
            {DO_BLOG.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-medium text-tinta-900 underline decoration-tinta-300 underline-offset-4 hover:text-marca-700">
                  {l.rotulo}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-tinta-600">
            Dúvidas sobre o serviço? Veja as <Link href="/perguntas-frequentes" className="font-medium text-marca-700 underline underline-offset-2">perguntas frequentes</Link> ou as <Link href="/zonas" className="font-medium text-marca-700 underline underline-offset-2">zonas onde trabalhamos</Link>.
          </p>
        </div>
      </section>
    </Pagina>
  );
}

export function getStaticProps() {
  return {
    props: {
      grupos: Object.entries(CATEGORIAS_GUIAS).map(([id, nome]) => ({
        id,
        nome,
        guias: GUIAS.filter((g) => g.categoria === id).map(({ slug, rotulo, descricao }) => ({ slug, rotulo, descricao })),
      })),
    },
  };
}
