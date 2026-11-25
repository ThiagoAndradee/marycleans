import Pagina from "../components/Pagina";
import FormOrcamento from "../components/FormOrcamento";
import { EMPRESA, CONCELHOS } from "../lib/negocio";

export default function Contacto() {
  return (
    <Pagina
      titulo="Pedir Orçamento"
      descricao="Pedido de orçamento de limpeza para Sintra, Lisboa, Cascais, Oeiras e Amadora. Resposta por escrito em 24 horas, sem visita obrigatória."
      caminho="/contacto"
    >
      <section className="border-b border-tinta-200">
        <div className="secao py-14 sm:py-16">
          <p className="etiqueta-secao">Contacto</p>
          <h1 className="mt-4 max-w-3xl text-titulo-1">Pedir orçamento.</h1>
          <p className="prosa mt-6">
            <span className="text-entrada">
              Com a tipologia, o concelho e a frequência conseguimos orçamentar sem visita
              prévia. Se o imóvel exigir avaliação no local, dizemos isso na resposta.
            </span>
          </p>
        </div>
      </section>

      <section className="secao secao-espaco">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-titulo-3">Formulário</h2>
            <FormOrcamento compacto />
          </div>

          <aside className="lg:pt-1">
            <h2 className="text-titulo-3">Contacto direto</h2>
            <dl className="mt-4 space-y-5 text-sm">
              <div>
                <dt className="text-etiqueta uppercase text-tinta-500">Telefone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${EMPRESA.telefoneDigitos}`}
                    className="font-semibold text-tinta-900"
                  >
                    {EMPRESA.telefone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-etiqueta uppercase text-tinta-500">WhatsApp</dt>
                <dd className="mt-1 text-tinta-600">
                  O mesmo número. Para pedido de orçamento, o formulário é mais rápido, porque
                  chega com a tipologia e a frequência já indicadas.
                </dd>
              </div>
              <div>
                <dt className="text-etiqueta uppercase text-tinta-500">Área de serviço</dt>
                <dd className="mt-1 text-tinta-600">
                  {CONCELHOS.map((c) => c.nome).join(", ")}. Fora desta área, pergunte.
                </dd>
              </div>
              <div>
                <dt className="text-etiqueta uppercase text-tinta-500">Prazo de resposta</dt>
                <dd className="mt-1 text-tinta-600">
                  24 horas, por escrito, com o âmbito do serviço definido.
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </Pagina>
  );
}
