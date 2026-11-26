import Link from "next/link";
import Pagina from "../../components/Pagina";
import FormOrcamento from "../../components/FormOrcamento";
import BlocoVideo from "../../components/BlocoVideo";

const MOMENTOS = [
  {
    n: "01",
    t: "Antes de mostrar",
    d: "Imóvel devoluto há meses tem pó acumulado, cheiro de casa fechada e casas de banho manchadas. O comprador decide nos primeiros minutos, antes de olhar a planta.",
    servico: "Limpeza de Apresentação",
  },
  {
    n: "02",
    t: "Depois da escritura",
    d: "A entrega de chaves limpa é a última coisa que o cliente sente do serviço, e é a de que se lembra quando o recomendar a alguém.",
    servico: "Entrega de Chaves",
  },
  {
    n: "03",
    t: "Pós-obra e desocupação",
    d: "Imóvel herdado, imóvel devoluto, imóvel depois de empreitada. É o que trava a colocação no mercado, e é o que ninguém quer tratar.",
    servico: "Limpeza Pós-Obra",
  },
];

export default function Imobiliarias() {
  return (
    <Pagina
      titulo="Limpeza para Mediação Imobiliária em Sintra e Lisboa"
      descricao="Imóvel pronto para visita, entrega de chaves com registo fotográfico do estado, e limpeza de imóvel devoluto ou pós-obra. Prioridade de agenda para consultores parceiros."
      caminho="/servicos/imobiliarias"
    >
      <section className="border-b border-tinta-200">
        <div className="secao py-16 sm:py-20">
          <p className="etiqueta-secao">Mediação Imobiliária</p>
          <h1 className="mt-4 max-w-3xl text-titulo-1">
            O imóvel que não se mostra é o imóvel que não se vende.
          </h1>
          <p className="prosa mt-6">
            <span className="text-entrada">
              Limpeza não é o trabalho do consultor. Mas é a ele que o cliente pergunta, e é o
              nome dele que fica se o fornecedor não aparecer. Trabalhamos como o fornecedor
              fixo de quem não quer ter esse problema outra vez.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto" className="botao">
              Falar sobre parceria
            </Link>
            <a href="#momentos" className="botao-secundario">
              Ver os serviços
            </a>
          </div>
        </div>
        <BlocoVideo grupo="perfis" />
      </section>

      {/* Os três momentos */}
      <section id="momentos" className="secao secao-espaco">
        <h2 className="etiqueta-secao">Os três momentos</h2>
        <p className="mt-3 max-w-leitura text-titulo-2">
          Onde a limpeza entra num processo de venda.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {MOMENTOS.map((m) => (
            <div key={m.n} className="cartao flex flex-col">
              <span className="text-etiqueta text-marca-600">{m.n}</span>
              <h3 className="mt-2 text-titulo-3 text-tinta-900">{m.t}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-tinta-600">{m.d}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-tinta-500">
                {m.servico}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Registo fotográfico como documento */}
      <section className="border-y border-tinta-200 bg-tinta-50">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Entrega de chaves</h2>
          <p className="mt-3 max-w-leitura text-titulo-2">
            O registo fotográfico é documento, não cortesia.
          </p>
          <p className="prosa mt-4">
            <span>
              Numa entrega de chaves, o registo do estado de cada divisão no momento da entrega
              protege o cliente do consultor numa discussão futura sobre danos. É a diferença
              entre uma reclamação com prova e uma reclamação sem prova.
            </span>
          </p>

          <div className="mt-8 max-w-3xl overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Serviço</th>
                  <th>Prazo de resposta</th>
                  <th>Relatório</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium text-tinta-900">Limpeza de Apresentação</td>
                  <td>24 horas, incluindo fim de semana</td>
                  <td>Fotográfico</td>
                </tr>
                <tr>
                  <td className="font-medium text-tinta-900">Entrega de Chaves</td>
                  <td>Agendada com a escritura ou o contrato</td>
                  <td>Fotográfico, por divisão</td>
                </tr>
                <tr>
                  <td className="font-medium text-tinta-900">Limpeza Pós-Obra</td>
                  <td>Orçamento em 24 horas, após ver o imóvel</td>
                  <td>Fotográfico</td>
                </tr>
                <tr>
                  <td className="font-medium text-tinta-900">Pré e Pós-Mudança</td>
                  <td>48 horas</td>
                  <td>Fotográfico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Parceria */}
      <section className="secao secao-espaco">
        <h2 className="etiqueta-secao">Parceria com consultores</h2>
        <p className="mt-3 max-w-leitura text-titulo-2">
          Um número, sempre o mesmo.
        </p>

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          <div>
            <h3 className="text-titulo-3">Prioridade de agenda</h3>
            <p className="mt-2 text-sm leading-6 text-tinta-600">
              Pedido de consultor parceiro entra à frente. Imóvel com visita marcada para
              amanhã é limpo hoje, incluindo ao fim de semana e, quando necessário, de noite.
            </p>
          </div>
          <div>
            <h3 className="text-titulo-3">Preço de parceria para os clientes dele</h3>
            <p className="mt-2 text-sm leading-6 text-tinta-600">
              Quem chega por indicação de um consultor parceiro paga condição de parceria. O
              desconto é do cliente, não sai do bolso de quem indicou.
            </p>
          </div>
          <div>
            <h3 className="text-titulo-3">Orçamento por escrito em 24 horas</h3>
            <p className="mt-2 text-sm leading-6 text-tinta-600">
              Com âmbito definido, para o consultor poder encaminhar ao cliente sem ter de
              explicar nada.
            </p>
          </div>
          <div>
            <h3 className="text-titulo-3">Programa de indicação</h3>
            <p className="mt-2 text-sm leading-6 text-tinta-600">
              Cada indicação fica registada com o nome de quem indicou. A contrapartida é paga
              depois de o cliente pagar, nunca antes, em conta aberta que o parceiro pode
              conferir.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-tinta-200 bg-tinta-50">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Contacto</h2>
          <p className="mt-3 max-w-leitura text-titulo-2">
            Comece por um imóvel.
          </p>
          <p className="prosa mt-4">
            <span>
              O primeiro serviço serve de teste: o consultor vê o resultado e o relatório antes
              de encaminhar qualquer cliente.
            </span>
          </p>
          <FormOrcamento servicoInicial="Limpeza de Apresentação" compacto />
        </div>
      </section>
    </Pagina>
  );
}
