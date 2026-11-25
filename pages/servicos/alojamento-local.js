import Link from "next/link";
import Pagina from "../../components/Pagina";
import FormOrcamento from "../../components/FormOrcamento";

// A limpeza noturna esta descrita como servico com marcacao previa, nao como
// disponibilidade permanente, enquanto MC-Q09 nao estiver respondida.

const ETAPAS = [
  {
    n: "01",
    t: "Saída do hóspede",
    d: "Entramos depois do check-out, na janela combinada para aquele imóvel.",
  },
  {
    n: "02",
    t: "Limpeza completa",
    d: "Todas as divisões, cozinha, casas de banho, pavimentos. Em dupla, com divisão de tarefa definida.",
  },
  {
    n: "03",
    t: "Troca de roupa de cama",
    d: "Recolha da roupa usada, deixada separada onde o proprietário indicar, e cama feita com o jogo limpo do imóvel.",
  },
  {
    n: "04",
    t: "Reposição de consumíveis",
    d: "Papel, sabão, gel de duche e o que estiver definido no contrato do imóvel.",
  },
  {
    n: "05",
    t: "Conferência",
    d: "Verificação divisão a divisão contra a lista do imóvel, antes de fechar a porta.",
  },
  {
    n: "06",
    t: "Relatório fotográfico",
    d: "Estado de entrega de cada divisão, o que foi reposto, e o que encontrámos que precisa de atenção.",
  },
];

export default function AlojamentoLocal() {
  return (
    <Pagina
      titulo="Limpeza de Alojamento Local em Sintra e Lisboa"
      descricao="Rotação de limpeza entre hóspedes, com troca de roupa de cama, reposição de consumíveis e relatório fotográfico. Preço fechado por imóvel, incluindo limpeza noturna com marcação prévia."
      caminho="/servicos/alojamento-local"
    >
      <section className="border-b border-tinta-200">
        <div className="secao py-16 sm:py-20">
          <p className="etiqueta-secao">Alojamento Local</p>
          <h1 className="mt-4 max-w-3xl text-titulo-1">
            A casa pronta antes do próximo check-in.
          </h1>
          <p className="prosa mt-6">
            <span className="text-entrada">
              No arrendamento de curta duração, o problema não é a limpeza, é a janela. O
              hóspede sai às dez, o próximo entra às três, e nesse intervalo tem de haver
              limpeza, troca de roupa de cama, reposição e conferência. Trabalhamos para essa janela.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto" className="botao">
              Pedir orçamento
            </Link>
            <a href="#processo" className="botao-secundario">
              Ver o processo
            </a>
          </div>
        </div>
      </section>

      {/* O diferencial */}
      <section className="border-b border-tinta-200 bg-tinta-50">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">O que nos distingue</h2>
          <p className="mt-3 max-w-leitura text-titulo-2">Limpamos de noite.</p>
          <p className="prosa mt-4">
            <span>
              O hóspede sai de tarde, nós entramos de noite, e o imóvel fica pronto antes de o
              dia começar. Com marcação prévia, e para os imóveis definidos em contrato.
            </span>
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="cartao">
              <h3 className="text-titulo-3">A janela deixa de existir</h3>
              <p className="mt-3 text-sm leading-6 text-tinta-600">
                Não há corrida entre o check-out e o check-in. O imóvel está pronto desde a
                noite anterior, e uma entrada antecipada deixa de ser um problema.
              </p>
            </div>
            <div className="cartao">
              <h3 className="text-titulo-3">Reserva de última hora deixa de ser risco</h3>
              <p className="mt-3 text-sm leading-6 text-tinta-600">
                Imóvel pronto é imóvel que pode ser arrendado hoje. A disponibilidade passa a
                ser uma decisão de preço, não uma aposta na logística.
              </p>
            </div>
            <div className="cartao">
              <h3 className="text-titulo-3">Dias de mudança cheios</h3>
              <p className="mt-3 text-sm leading-6 text-tinta-600">
                Quando vários imóveis rodam no mesmo dia, parte do trabalho passa para a noite
                anterior. A carga distribui-se em vez de se concentrar em cinco horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="secao secao-espaco">
        <h2 className="etiqueta-secao">O processo</h2>
        <p className="mt-3 max-w-leitura text-titulo-2">Seis passos, em cada rotação.</p>

        <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {ETAPAS.map((e) => (
            <li key={e.n}>
              <span className="text-etiqueta text-marca-600">{e.n}</span>
              <h3 className="mt-2 text-titulo-3 text-tinta-900">{e.t}</h3>
              <p className="mt-2 text-sm leading-6 text-tinta-600">{e.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Relatório */}
      <section className="border-y border-tinta-200 bg-tinta-50">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Relatório fotográfico</h2>
          <p className="mt-3 max-w-leitura text-titulo-2">
            Ver o imóvel sem ir ao imóvel.
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-titulo-3">Para quem tem vários imóveis</h3>
              <p className="mt-3 text-sm leading-6 text-tinta-600">
                Não é possível visitar cinco imóveis depois de cada hóspede. O relatório
                mostra o estado de entrega de cada divisão, e substitui a visita.
              </p>
            </div>
            <div>
              <h3 className="text-titulo-3">O que apanhamos antes de virar problema</h3>
              <p className="mt-3 text-sm leading-6 text-tinta-600">
                Torneira a pingar, fechadura dura, mancha em lençol, toalha no fim da vida,
                electrodoméstico avariado. O hóspede não avisa. Quem limpa é a única pessoa que
                vê o desgaste a acontecer, em todas as visitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo de preço */}
      <section className="secao secao-espaco">
        <h2 className="etiqueta-secao">Como é cobrado</h2>
        <p className="mt-3 max-w-leitura text-titulo-2">
          Preço fechado por imóvel, não por hora.
        </p>

        <div className="mt-8 max-w-3xl overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Modelo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-tinta-900">Rotação de limpeza</td>
                <td>Preço fixo por imóvel, definido por tipologia no orçamento</td>
              </tr>
              <tr>
                <td className="font-medium text-tinta-900">Troca de roupa de cama</td>
                <td>Incluída. A lavagem e a engomadoria ficam com o proprietário</td>
              </tr>
              <tr>
                <td className="font-medium text-tinta-900">Consumíveis</td>
                <td>Reposição incluída no serviço, o produto é cobrado a custo</td>
              </tr>
              <tr>
                <td className="font-medium text-tinta-900">Limpeza noturna</td>
                <td>Com marcação prévia, condições definidas no contrato do imóvel</td>
              </tr>
              <tr>
                <td className="font-medium text-tinta-900">Limpeza profunda sazonal</td>
                <td>Cotada à parte, uma a duas vezes por ano</td>
              </tr>
              <tr>
                <td className="font-medium text-tinta-900">Contrato</td>
                <td>
                  Doze meses, preço por limpeza fixado para o período, imóvel novo entra ao
                  mesmo preço
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-leitura text-sm leading-6 text-tinta-600">
          Quem cobra por hora é pago pelo tempo e avaliado pelo resultado, e o cliente fica com
          uma fatura que varia sem que ele controle a variável. Preço fechado transfere esse
          risco para quem executa.
        </p>
      </section>

      {/* Orçamento */}
      <section className="border-t border-tinta-200 bg-tinta-50">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Orçamento</h2>
          <p className="mt-3 max-w-leitura text-titulo-2">
            Quantos imóveis, e onde.
          </p>
          <p className="prosa mt-4">
            <span>
              Para carteiras de mais de um imóvel orçamentamos como contrato. Indique o número
              de imóveis no formulário.
            </span>
          </p>
          <FormOrcamento servicoInicial="Rotação de Alojamento Local" compacto />
        </div>
      </section>
    </Pagina>
  );
}
