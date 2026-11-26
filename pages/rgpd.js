import Link from "next/link";
import Pagina from "../components/Pagina";
import { EMPRESA } from "../lib/negocio";

// A página de RGPD não repete a política de privacidade: é a página prática de como exercer
// os direitos, e é o que um cliente empresarial procura antes de assinar contrato.

export default function Rgpd() {
  return (
    <Pagina
      titulo="RGPD: como exercer os seus direitos"
      descricao="Como exercer junto da Mary Cleans os direitos do Regulamento Geral de Proteção de Dados, e como tratamos dados em contratos de prestação de serviço."
      caminho="/rgpd"
    >
      <section className="secao py-14 sm:py-16">
        <p className="etiqueta-secao">Legal</p>
        <h1 className="mt-4 text-titulo-1">RGPD</h1>

        <div className="prosa mt-10 max-w-leitura space-y-8">
          <div>
            <h2 className="text-titulo-3">Como exercer os seus direitos</h2>
            <p className="mt-2 text-sm leading-6">
              Basta pedir pelo número {EMPRESA.telefone}, identificando o que pretende.
              Respondemos no prazo máximo de trinta dias. Não cobramos nada por isso.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Clientes empresariais e contratos</h2>
            <p className="mt-2 text-sm leading-6">
              Num contrato de limpeza de imóveis arrendados, o cliente é o responsável pelo
              tratamento dos dados dos seus hóspedes ou inquilinos, e a Mary Cleans atua como
              subcontratante quando trata desses dados por conta dele. Nesse caso, é celebrado
              um acordo de subcontratação com as obrigações do artigo 28 do RGPD, incluindo
              confidencialidade, segurança, e eliminação ou devolução dos dados no fim do
              contrato.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Registo fotográfico</h2>
            <p className="mt-2 text-sm leading-6">
              O relatório fotográfico documenta o estado do imóvel, não pessoas. Não
              fotografamos pessoas, nem documentos, nem objetos pessoais deixados no imóvel. Se
              um objeto pessoal aparecer de forma inevitavel numa fotografia, o cliente pode
              pedir a substituição dessa imagem.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Subcontratação</h2>
            <p className="mt-2 text-sm leading-6">
              Quando recorremos a prestadores para parte do serviço, apenas os
              dados necessários são partilhados, e o prestador fica sujeito ao dever de
              confidencialidade.
            </p>
          </div>

          <div>
            <h2 className="text-titulo-3">Documentos relacionados</h2>
            <ul className="mt-2 space-y-2 text-sm leading-6">
              <li>
                <Link href="/privacidade" className="font-medium text-marca-700 underline">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <a
                  href="https://www.livroreclamacoes.pt/Inicio/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-marca-700 underline"
                >
                  Livro de Reclamações Online
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Pagina>
  );
}
