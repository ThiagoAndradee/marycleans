import Link from "next/link";
import Pagina from "../../components/Pagina";
import FormOrcamento from "../../components/FormOrcamento";
import { SERVICOS } from "../../lib/negocio";

const RELEVANTES = ["limpeza-de-manutencao", "limpeza-profunda", "limpeza-pos-mudanca"];

export default function Habitacao() {
  const servicos = SERVICOS.filter((s) => RELEVANTES.includes(s.slug));

  return (
    <Pagina
      titulo="Limpeza Doméstica em Sintra e Lisboa"
      descricao="Limpeza de manutenção regular e limpeza profunda em habitação, com a mesma equipa em todas as visitas, produtos incluídos e preço fechado por visita."
      caminho="/servicos/habitacao"
    >
      <section className="border-b border-tinta-200">
        <div className="secao py-16 sm:py-20">
          <p className="etiqueta-secao">Habitação</p>
          <h1 className="mt-4 max-w-3xl text-titulo-1">
            A mesma equipa, em todas as visitas.
          </h1>
          <p className="prosa mt-6">
            <span className="text-entrada">
              Numa casa habitada, a limpeza é um serviço de confiança antes de ser um serviço
              de limpeza. Quem entra é sempre a mesma dupla, e o responsável pelo trabalho é
              quem o faz.
            </span>
          </p>
          <div className="mt-8">
            <Link href="/contacto" className="botao">
              Pedir orçamento
            </Link>
          </div>
        </div>
      </section>

      <section className="secao secao-espaco">
        <h2 className="etiqueta-secao">Serviços</h2>
        <p className="mt-3 max-w-leitura text-titulo-2">
          O que está incluído em cada um.
        </p>

        <div className="mt-10 space-y-12">
          {servicos.map((s) => (
            <div key={s.slug} id={s.slug} className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h3 className="text-titulo-3 text-tinta-900">{s.nome}</h3>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-tinta-500">
                  {s.frequencia}
                </p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-sm leading-6 text-tinta-600">{s.descricao}</p>
                <ul className="mt-4 space-y-2">
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
      </section>

      <section className="border-t border-tinta-200 bg-tinta-50">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Orçamento</h2>
          <p className="mt-3 max-w-leitura text-titulo-2">
            Tipologia, concelho e frequência.
          </p>
          <FormOrcamento servicoInicial="Limpeza de Manutenção" compacto />
        </div>
      </section>
    </Pagina>
  );
}
