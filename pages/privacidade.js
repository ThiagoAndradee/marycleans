import Pagina from "../components/Pagina";
import { EMPRESA } from "../lib/negocio";

const ATUALIZADO = "26 de novembro de 2026";

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
            <h2 className="text-titulo-3">Estatísticas de visitas</h2>
            <p className="mt-2 text-sm leading-6">
              Para perceber que páginas ajudam quem procura uma limpeza, o site conta as visitas
              com uma ferramenta própria, sem serviços de terceiros como o Google Analytics. Ela
              regista: a página aberta, o site ou a pesquisa de onde veio (só o domínio, por
              exemplo google.pt ou chatgpt.com) e os parâmetros de campanha utm, o tipo de
              aparelho, navegador e sistema, o país e a cidade aproximada (deduzidos pelo nosso
              alojamento e guardados sem o endereço IP), até onde desceu na página, quanto tempo
              ficou nela, onde clicou (posição na página e se foi no WhatsApp, telefone, email
              ou pedido de orçamento) e se enviou um formulário.
            </p>
            <p className="mt-3 text-sm leading-6">
              Não guardamos o endereço IP, não usamos cookies nem guardamos nada no seu
              aparelho, e não registamos o que escreve nos formulários. Para contar visitas sem
              o identificar, usamos um código que muda todos os dias e não permite chegar a si
              nem ligar visitas de dias diferentes. Os dados ficam numa base de dados da Upstash
              (subcontratante, servidores na União Europeia) e são apagados automaticamente
              após 13 meses. Fundamento: interesse legítimo em melhorar o site (artigo 6.º,
              n.º 1, alínea f, do RGPD). Se o seu navegador enviar o sinal Global Privacy
              Control, não contamos a sua visita.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Cookies</h2>
            <p className="mt-2 text-sm leading-6">
              Este site não usa cookies de publicidade, de perfilagem nem de medição. Se isso
              mudar, esta página é atualizada antes e o consentimento é pedido de forma
              separada.
            </p>
          </div>
        </div>
      </section>
    </Pagina>
  );
}
