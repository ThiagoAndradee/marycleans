import Link from "next/link";
import Pagina from "../../components/Pagina";
import FormOrcamento from "../../components/FormOrcamento";
import { CONCELHOS, VERTICAIS, SERVICOS, EMPRESA } from "../../lib/negocio";
import { PAGINAS_SEO } from "../../lib/seo-paginas";

export default function Concelho({ concelho, outros, guias }) {
  const ehBase = concelho.base;

  return (
    <Pagina
      titulo={`Limpeza em ${concelho.nome}`}
      descricao={`Serviços de limpeza em ${concelho.nome}: alojamento local, mediação imobiliária e habitação. Preço fechado por imóvel, relatório fotográfico e orçamento por escrito.`}
      caminho={`/limpezas/${concelho.slug}`}
    >
      <section className="border-b border-tinta-200">
        <div className="secao py-14 sm:py-16">
          <p className="etiqueta-secao">Área de serviço</p>
          <h1 className="mt-4 max-w-3xl text-titulo-1">
            Limpeza em {concelho.nome}.
          </h1>
          <p className="prosa mt-6">
            <span className="text-entrada">
              {ehBase
                ? `${concelho.nome} é a cidade onde mais trabalhamos. Servimos todas as freguesias, do centro histórico ao Parque das Nações.`
                : `${concelho.nome} faz parte da nossa área de serviço. Quando há custo de deslocação, vem indicado à parte no orçamento.`}
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto" className="botao">
              Pedir orçamento
            </Link>
            <a href={`tel:${EMPRESA.telefoneDigitos}`} className="botao-secundario">
              {EMPRESA.telefone}
            </a>
          </div>
        </div>
      </section>

      <section className="secao secao-espaco">
        <h2 className="etiqueta-secao">Para quem</h2>
        <p className="mt-3 max-w-leitura text-titulo-2">
          Três contextos, em {concelho.nome}.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {VERTICAIS.map((v) => (
            <Link
              key={v.slug}
              href={`/servicos/${v.slug}`}
              className="cartao flex flex-col transition-colors hover:border-marca-400"
            >
              <h3 className="text-titulo-3 text-tinta-900">{v.nome}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-tinta-600">{v.resumo}</p>
            </Link>
          ))}
        </div>
      </section>

      {concelho.freguesias.length ? (
        <section className="border-y border-tinta-200 bg-tinta-50">
          <div className="secao secao-espaco">
            <h2 className="etiqueta-secao">Freguesias</h2>
            <p className="mt-3 max-w-leitura text-titulo-2">
              Onde trabalhamos no concelho de {concelho.nome}.
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {concelho.freguesias.map((f) => (
                <li
                  key={f}
                  className="border-b border-tinta-200 pb-2 text-sm text-tinta-700"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="secao secao-espaco">
        <h2 className="etiqueta-secao">Serviços</h2>
        <p className="mt-3 max-w-leitura text-titulo-2">
          O que fazemos em {concelho.nome}.
        </p>
        <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICOS.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/servicos#${s.slug}`}
                className="text-sm font-semibold text-tinta-900 hover:text-marca-700"
              >
                {s.nome}
              </Link>
              <p className="mt-1.5 text-sm leading-6 text-tinta-600">{s.descricao}</p>
            </li>
          ))}
        </ul>
      </section>

      {guias.length ? (
        <section className="border-t border-tinta-200">
          <div className="secao secao-espaco">
            <h2 className="etiqueta-secao">Páginas de {concelho.nome}</h2>
            <p className="mt-3 max-w-leitura text-titulo-2">
              Por serviço e por zona.
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {guias.map((g) => (
                <li key={g.slug} className="border-b border-tinta-200 pb-3">
                  <Link
                    href={`/${g.slug}`}
                    className="text-sm font-semibold text-tinta-900 hover:text-marca-700"
                  >
                    {g.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-t border-tinta-200 bg-tinta-50">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Orçamento</h2>
          <p className="mt-3 max-w-leitura text-titulo-2">
            Para um imóvel em {concelho.nome}.
          </p>
          <FormOrcamento compacto />

          <div className="mt-12 border-t border-tinta-200 pt-8">
            <h2 className="text-etiqueta uppercase text-tinta-500">Outras áreas</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {outros.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/limpezas/${c.slug}`}
                    className="inline-block rounded border border-tinta-300 bg-white px-4 py-2 text-sm font-medium text-tinta-800 hover:border-marca-400"
                  >
                    {c.nome}
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
  return {
    paths: CONCELHOS.map((c) => ({ params: { concelho: c.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const concelho = CONCELHOS.find((c) => c.slug === params.concelho);
  if (!concelho) return { notFound: true };
  return {
    props: {
      concelho,
      guias: PAGINAS_SEO.filter((p) =>
        concelho.slug === "lisboa"
          ? p.grupo !== "area"
          : p.slug.endsWith(`-${concelho.slug}`)
      ).map(({ slug, rotulo }) => ({ slug, rotulo })),
      outros: CONCELHOS.filter((c) => c.slug !== concelho.slug).map(({ slug, nome }) => ({
        slug,
        nome,
      })),
    },
  };
}
