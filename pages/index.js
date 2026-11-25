import Link from "next/link";
import Image from "next/image";
import Pagina from "../components/Pagina";
import PorQueNos from "../components/PorQueNos";
import FormOrcamento from "../components/FormOrcamento";
import FAQ from "../components/FAQ";
import { VERTICAIS, SERVICOS, CONCELHOS } from "../lib/negocio";
import imagemHero from "../assets/cleaningImgFour.jpg";

export default function Home() {
  return (
    <Pagina
      descricao="Serviços de limpeza para alojamento local, mediação imobiliária e habitação, em Sintra, Lisboa, Cascais, Oeiras e Amadora. Preço fechado por imóvel e relatório fotográfico em cada limpeza."
      caminho="/"
    >
      {/* Abertura */}
      <section className="border-b border-tinta-200">
        <div className="secao grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="etiqueta-secao">Sintra e Lisboa</p>
            <h1 className="mt-4 text-titulo-1">
              Limpeza profissional, com preço fechado por imóvel.
            </h1>
            <p className="prosa mt-6">
              <span className="text-entrada">
                Trabalhamos com quem tem limpeza a acontecer todas as semanas: alojamento
                local, mediação imobiliária e habitação. Sempre a mesma equipa, com relatório
                fotográfico em cada visita.
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto" className="botao">
                Pedir orçamento
              </Link>
              <Link href="/servicos" className="botao-secundario">
                Ver serviços
              </Link>
            </div>
            <p className="mt-6 text-sm text-tinta-500">
              Orçamento por escrito em 24 horas. Sem visita obrigatória para orçamentar.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded border border-tinta-200">
            <Image
              src={imagemHero}
              alt="Interior de habitação após serviço de limpeza"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

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
            Base em Sintra, com deslocação a Lisboa e à linha.
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
