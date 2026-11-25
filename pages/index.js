import Link from "next/link";
import Pagina from "../components/Pagina";
import PorQueNos from "../components/PorQueNos";
import FormOrcamento from "../components/FormOrcamento";
import FAQ from "../components/FAQ";
import { VERTICAIS, SERVICOS, CONCELHOS } from "../lib/negocio";
import HeroV2 from "../components/HeroV2";
import AntesDepois from "../components/AntesDepois";

export default function Home() {
  return (
    <Pagina
      descricao="Serviços de limpeza para alojamento local, mediação imobiliária e habitação, em Lisboa, Sintra, Cascais, Oeiras e Amadora. Preço fechado por imóvel e relatório fotográfico em cada limpeza."
      caminho="/"
    >
      <HeroV2 />
      <AntesDepois />

      {/* As três verticais: a primeira decisão que a página pede */}
      <section className="secao secao-espaco">
        <h2 className="etiqueta-secao">Para quem trabalhamos</h2>
        <p className="mt-3 max-w-leitura text-titulo-2">
          Três contextos, com exigências diferentes.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {VERTICAIS.map((v) => (
            <Link
              key={v.slug}
              href={`/servicos/${v.slug}`}
              className="cartao group flex flex-col transition-colors hover:border-marca-400"
            >
              <h3 className="text-titulo-3 text-tinta-900">{v.nome}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-tinta-500">
                {v.paraQuem}
              </p>
              <p className="mt-4 flex-1 text-sm leading-6 text-tinta-600">{v.resumo}</p>
              <span className="mt-5 text-sm font-semibold text-marca-700 group-hover:text-marca-800">
                Ver o serviço
              </span>
            </Link>
          ))}
        </div>
      </section>

      <PorQueNos />

      {/* Catálogo de serviços nomeados */}
      <section className="secao secao-espaco">
        <h2 className="etiqueta-secao">Serviços</h2>
        <p className="mt-3 max-w-leitura text-titulo-2">
          Cada serviço tem um âmbito definido por escrito.
        </p>
        <p className="prosa mt-4">
          <span>
            O que está incluído em cada limpeza é fixado no orçamento, antes de começar. Não há
            serviço &quot;conforme necessário&quot;.
          </span>
        </p>

        <ul className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Áreas */}
      <section className="border-t border-tinta-200 bg-tinta-50">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Área de serviço</h2>
          <p className="mt-3 max-w-leitura text-titulo-2">
            Lisboa em primeiro lugar, e também Sintra, Cascais e a linha.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {CONCELHOS.map((c) => (
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
      </section>

      <FAQ />

      {/* Orçamento */}
      <section id="orcamento" className="border-t border-tinta-200">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Orçamento</h2>
          <p className="mt-3 max-w-leitura text-titulo-2">
            Diga o que precisa. Respondemos em 24 horas.
          </p>
          <p className="prosa mt-4">
            <span>
              Com a tipologia, o concelho e a frequência conseguimos orçamentar sem visita
              prévia. Se o imóvel exigir avaliação no local, dizemos isso na resposta.
            </span>
          </p>
          <FormOrcamento />
        </div>
      </section>
    </Pagina>
  );
}
