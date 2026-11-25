import Link from "next/link";
import Pagina from "../components/Pagina";
import { EMPRESA } from "../lib/negocio";

// A pagina de RGPD nao repete a politica de privacidade: e a pagina pratica de como exercer
// os direitos, e e o que um cliente empresarial procura antes de assinar contrato.

export default function Rgpd() {
  return (
    <Pagina
      titulo="RGPD"
      descricao="Como exercer os direitos previstos no Regulamento Geral de Protecao de Dados junto da Mary Cleans, e como tratamos dados no ambito de contratos de prestacao de servico."
      caminho="/rgpd"
    >
      <section className="secao py-14 sm:py-16">
        <p className="etiqueta-secao">Legal</p>
        <h1 className="mt-4 text-titulo-1">RGPD</h1>

        <div className="prosa mt-10 max-w-leitura space-y-8">
          <div>
            <h2 className="text-titulo-3">Como exercer os seus direitos</h2>
            <p className="mt-2 text-sm leading-6">
              Basta pedir pelo numero {EMPRESA.telefone}, identificando o que pretende.
              Respondemos no prazo maximo de trinta dias. Nao cobramos nada por isso.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Clientes empresariais e contratos</h2>
            <p className="mt-2 text-sm leading-6">
              Num contrato de limpeza de imoveis arrendados, o cliente e o responsavel pelo
              tratamento dos dados dos seus hospedes ou inquilinos, e a Mary Cleans atua como
              subcontratante quando trata desses dados por conta dele. Nesse caso, e celebrado
              um acordo de subcontratacao com as obrigacoes do artigo 28 do RGPD, incluindo
              confidencialidade, seguranca, e eliminacao ou devolucao dos dados no fim do
              contrato.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Registo fotografico</h2>
            <p className="mt-2 text-sm leading-6">
              O relatorio fotografico documenta o estado do imovel, nao pessoas. Nao
              fotografamos pessoas, nem documentos, nem objetos pessoais deixados no imovel. Se
              um objeto pessoal aparecer de forma inevitavel numa fotografia, o cliente pode
              pedir a substituicao dessa imagem.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Subcontratacao</h2>
            <p className="mt-2 text-sm leading-6">
              Quando recorremos a prestadores para parte do servico, apenas os
              dados necessarios sao partilhados, e o prestador fica sujeito a dever de
              confidencialidade.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Documentos relacionados</h2>
            <ul className="mt-2 space-y-2 text-sm leading-6">
              <li>
                <Link href="/privacidade" className="font-medium text-marca-700 underline">
                  Politica de Privacidade
                </Link>
              </li>
              <li>
                <a
                  href="https://www.livroreclamacoes.pt/Inicio/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-marca-700 underline"
                >
                  Livro de Reclamacoes Online
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Pagina>
  );
}
