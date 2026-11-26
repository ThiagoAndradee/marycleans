import Pagina from "../components/Pagina";
import { EMPRESA } from "../lib/negocio";
import { TEM_MEDICAO } from "../lib/medicao";

const ATUALIZADO = "26 de setembro de 2026";

export default function Privacidade() {
  return (
    <Pagina
      titulo="Política de Privacidade"
      descricao="Como a Mary Cleans trata os dados pessoais recolhidos no pedido de orçamento e na prestação do serviço."
      caminho="/privacidade"
    >
      <section className="secao py-14 sm:py-16">
        <p className="etiqueta-secao">Legal</p>
        <h1 className="mt-4 text-titulo-1">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-tinta-500">Atualizada a {ATUALIZADO}</p>

        <div className="prosa mt-10 max-w-leitura space-y-8">
          <div>
            <h2 className="text-titulo-3">Quem trata os seus dados</h2>
            <p className="mt-2 text-sm leading-6">
              A responsável pelo tratamento é a Mary Cleans, contactável pelo número{" "}
              {EMPRESA.telefone}.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Que dados recolhemos</h2>
            <p className="mt-2 text-sm leading-6">
              No pedido de orçamento: nome, telefone, email quando indicado, concelho e
              localidade do imóvel, tipologia, serviço pretendido, frequência, número de
              imóveis e as observações que escrever. Na prestação do serviço: o endereço do
              imóvel, instruções de acesso e o registo fotográfico do estado do imóvel.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Para que os usamos</h2>
            <ul className="mt-2 space-y-2 text-sm leading-6">
              <li className="border-b border-tinta-100 pb-2">
                Responder ao pedido de orçamento e preparar a proposta.
              </li>
              <li className="border-b border-tinta-100 pb-2">
                Executar e agendar o serviço contratado.
              </li>
              <li className="border-b border-tinta-100 pb-2">
                Emitir fatura e cumprir obrigações legais e fiscais.
              </li>
              <li className="border-b border-tinta-100 pb-2">
                Comprovar o estado de entrega do imóvel, no caso do registo fotográfico.
              </li>
            </ul>
            <p className="mt-3 text-sm leading-6">
              Não usamos os seus dados para publicidade, e não os vendemos nem cedemos a
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
              O pedido de orçamento é tratado com base no seu consentimento, que dá no
              formulário. A execução do serviço é tratada com base no contrato. A faturação e
              a conservação dos documentos contabilísticos com base em obrigação legal.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Quanto tempo os guardamos</h2>
            <p className="mt-2 text-sm leading-6">
              Pedidos de orçamento que não resultam em contrato: doze meses. Dados de cliente
              com contrato: durante a relação e pelo prazo legal de conservação dos documentos
              de faturação após o seu termo. Registo fotográfico: durante a relação contratual,
              salvo pedido de eliminação anterior.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Os seus direitos</h2>
            <p className="mt-2 text-sm leading-6">
              Pode pedir acesso, retificação, eliminação, limitação do tratamento,
              portabilidade e oposição, e retirar o consentimento a qualquer momento, pelo
              contacto acima. Pode ainda apresentar reclamação à Comissão Nacional de Proteção
              de Dados.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Cookies</h2>
            {/* Quando houver IDs de medição na Vercel, sai o texto de baixo e entra este.
                Rever com o Thiago antes: a secção "Para que os usamos" também muda. */}
            {TEM_MEDICAO ? (
              <p className="mt-2 text-sm leading-6">
                Os cookies de medição (Google Analytics, Google Ads e Meta) só são ativados se
                aceitar no aviso de cookies. Até lá ficam desligados e o site funciona igual.
                Pode mudar a sua escolha a qualquer momento em{" "}
                <a href="#cookies" className="font-medium text-marca-700 underline">
                  Preferências de cookies
                </a>
                , no rodapé.
              </p>
            ) : (
            <p className="mt-2 text-sm leading-6">
              Este site não usa cookies de publicidade nem de perfilagem. Se forem introduzidas
              ferramentas de medição de tráfego, esta página é atualizada antes disso e o
              consentimento é pedido de forma separada.
            </p>
            )}
          </div>
        </div>
      </section>
    </Pagina>
  );
}
