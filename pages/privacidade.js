import Pagina from "../components/Pagina";
import { EMPRESA } from "../lib/negocio";

const ATUALIZADO = "26 de setembro de 2026";

export default function Privacidade() {
  return (
    <Pagina
      titulo="Politica de Privacidade"
      descricao="Como a Mary Cleans trata os dados pessoais recolhidos no pedido de orcamento e na prestacao do servico."
      caminho="/privacidade"
    >
      <section className="secao py-14 sm:py-16">
        <p className="etiqueta-secao">Legal</p>
        <h1 className="mt-4 text-titulo-1">Politica de Privacidade</h1>
        <p className="mt-4 text-sm text-tinta-500">Atualizada a {ATUALIZADO}</p>

        <div className="prosa mt-10 max-w-leitura space-y-8">
          <div>
            <h2 className="text-titulo-3">Quem trata os seus dados</h2>
            <p className="mt-2 text-sm leading-6">
              A responsavel pelo tratamento e a Mary Cleans, contactavel pelo numero{" "}
              {EMPRESA.telefone}.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Que dados recolhemos</h2>
            <p className="mt-2 text-sm leading-6">
              No pedido de orcamento: nome, telefone, email quando indicado, concelho e
              localidade do imovel, tipologia, servico pretendido, frequencia, numero de
              imoveis e as observacoes que escrever. Na prestacao do servico: o endereco do
              imovel, instrucoes de acesso e o registo fotografico do estado do imovel.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Para que os usamos</h2>
            <ul className="mt-2 space-y-2 text-sm leading-6">
              <li className="border-b border-tinta-100 pb-2">
                Responder ao pedido de orcamento e preparar a proposta.
              </li>
              <li className="border-b border-tinta-100 pb-2">
                Executar e agendar o servico contratado.
              </li>
              <li className="border-b border-tinta-100 pb-2">
                Emitir fatura e cumprir obrigacoes legais e fiscais.
              </li>
              <li className="border-b border-tinta-100 pb-2">
                Comprovar o estado de entrega do imovel, no caso do registo fotografico.
              </li>
            </ul>
            <p className="mt-3 text-sm leading-6">
              Nao usamos os seus dados para publicidade, e nao os vendemos nem cedemos a
              terceiros para fins comerciais.
            </p>
            <p className="mt-3 text-sm leading-6">
              O pedido de proposta feito no site chega-nos por email através do serviço
              FormSubmit, que o encaminha para a nossa caixa de correio.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Fundamento do tratamento</h2>
            <p className="mt-2 text-sm leading-6">
              O pedido de orcamento e tratado com base no seu consentimento, que da no
              formulario. A execucao do servico e tratada com base no contrato. A faturacao e
              a conservacao dos documentos contabilisticos com base em obrigacao legal.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Quanto tempo os guardamos</h2>
            <p className="mt-2 text-sm leading-6">
              Pedidos de orcamento que nao resultam em contrato: doze meses. Dados de cliente
              com contrato: durante a relacao e pelo prazo legal de conservacao dos documentos
              de faturacao apos o seu termo. Registo fotografico: durante a relacao contratual,
              salvo pedido de eliminacao anterior.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Os seus direitos</h2>
            <p className="mt-2 text-sm leading-6">
              Pode pedir acesso, retificacao, eliminacao, limitacao do tratamento,
              portabilidade e oposicao, e retirar o consentimento a qualquer momento, pelo
              contacto acima. Pode ainda apresentar reclamacao a Comissao Nacional de Protecao
              de Dados.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Cookies</h2>
            <p className="mt-2 text-sm leading-6">
              Este site nao usa cookies de publicidade nem de perfilagem. Se forem introduzidas
              ferramentas de medicao de trafego, esta pagina e atualizada antes disso e o
              consentimento e pedido de forma separada.
            </p>
          </div>
        </div>
      </section>
    </Pagina>
  );
}
