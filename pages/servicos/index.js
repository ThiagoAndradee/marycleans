import Link from "next/link";
import Pagina from "../../components/Pagina";
import { SERVICOS, VERTICAIS, NAO_FAZEMOS } from "../../lib/negocio";

export default function Servicos() {
  return (
    <Pagina
      titulo="Serviços de Limpeza"
      descricao="Limpeza de manutenção, limpeza profunda, rotação de alojamento local, limpeza de apresentação, entrega de chaves, pós-obra e pós-mudança. Com âmbito definido por escrito."
      caminho="/servicos"
    >
      <section className="border-b border-tinta-200">
        <div className="secao py-14 sm:py-16">
          <p className="etiqueta-secao">Serviços</p>
          <h1 className="mt-4 max-w-3xl text-titulo-1">
            Cada serviço tem um âmbito definido por escrito.
          </h1>
          <p className="prosa mt-6">
            <span className="text-entrada">
              O que está incluído consta do orçamento, antes de o serviço começar. O que não
              está incluído também.
            </span>
          </p>
        </div>
      </section>

      <section className="secao secao-espaco">
        <div className="flex flex-wrap gap-3">
          {VERTICAIS.map((v) => (
            <Link
              key={v.slug}
              href={`/servicos/${v.slug}`}
              className="inline-block rounded border border-tinta-300 bg-white px-4 py-2 text-sm font-medium text-tinta-800 hover:border-marca-400"
            >
              {v.nome}
            </Link>
          ))}
        </div>

        <div className="mt-14 space-y-14">
          {SERVICOS.map((s) => (
            <div
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-24 gap-6 border-t border-tinta-200 pt-8 lg:grid-cols-3"
            >
              <div>
                <h2 className="text-titulo-3 text-tinta-900">{s.nome}</h2>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-tinta-500">
                  {s.frequencia}
                </p>
              </div>
              <div className="lg:col-span-2">
                <p className="max-w-leitura text-sm leading-6 text-tinta-600">
                  {s.descricao}
                </p>
                <h3 className="mt-5 text-etiqueta uppercase text-tinta-500">Inclui</h3>
                <ul className="mt-2 space-y-2">
                  {s.inclui.map((item) => (
                    <li
                      key={item}
                      className="border-b border-tinta-100 pb-2 text-sm text-tinta-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-tinta-200 pt-8">
          <h2 className="etiqueta-secao">O que não fazemos</h2>
          <p className="mt-3 max-w-leitura text-titulo-3 text-tinta-900">
            Dizer o que fica de fora poupa tempo aos dois lados.
          </p>
          <dl className="mt-6 space-y-4">
            {NAO_FAZEMOS.map((n) => (
              <div key={n.o_que}>
                <dt className="text-sm font-semibold text-tinta-900">{n.o_que}</dt>
                <dd className="mt-1 max-w-leitura text-sm leading-6 text-tinta-600">
                  {n.porque}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-14 border-t border-tinta-200 pt-8">
          <p className="max-w-leitura text-sm leading-6 text-tinta-600">
            Não encontra o serviço que precisa? Descreva a situação no pedido de orçamento. Se
            não for trabalho nosso, dizemos isso na resposta.
          </p>
          <Link href="/contacto" className="botao mt-6">
            Pedir orçamento
          </Link>
        </div>
      </section>
    </Pagina>
  );
}
