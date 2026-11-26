import Link from "next/link";
import Pagina from "../components/Pagina";
import { EMPRESA } from "../lib/negocio";

// O texto que estava no hero de /contato pertence aqui.

export default function Obrigado() {
  return (
    <Pagina
      titulo="Pedido recebido"
      descricao="O pedido de orcamento foi recebido. Respondemos em 24 horas."
      caminho="/obrigado"
      noindex
    >
      <section className="secao py-20 sm:py-28">
        <p className="etiqueta-secao">Pedido recebido</p>
        <h1 className="mt-4 max-w-3xl text-titulo-1">
          Obrigada pelo seu pedido.
        </h1>
        <p className="prosa mt-6">
          <span className="text-entrada">
            Respondemos em 24 horas, por escrito, com o ambito do servico definido e o preco
            fechado. Se for necessario ver o imovel antes de orcamentar, dizemos isso na
            resposta.
          </span>
        </p>

        <div className="mt-10 border-t border-tinta-200 pt-8">
          <h2 className="text-titulo-3">Se for urgente</h2>
          <p className="mt-2 max-w-leitura text-sm leading-6 text-tinta-600">
            Ligue diretamente. Um imovel com visita ou com check-in marcado para as proximas
            horas resolve-se melhor por telefone.
          </p>
          <a href={`tel:${EMPRESA.telefoneDigitos}`} className="botao mt-5">
            {EMPRESA.telefone}
          </a>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-sm font-semibold text-marca-700">
            Voltar ao inicio
          </Link>
        </div>
      </section>
    </Pagina>
  );
}
