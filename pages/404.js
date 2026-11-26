import Link from "next/link";
import Pagina from "../components/Pagina";
import { VERTICAIS, CONCELHOS } from "../lib/negocio";

// 404 com o mesmo cabeçalho e rodapé do site. Antes caía na página genérica do Next,
// em inglês e sem caminho de volta.

const CAMINHOS = [
  { nome: "Limpeza de alojamento local em Lisboa", href: "/limpeza-alojamento-local-lisboa" },
  ...VERTICAIS.map((v) => ({ nome: v.nome, href: `/servicos/${v.slug}` })),
  { nome: "Todos os serviços", href: "/servicos" },
  { nome: "Blog", href: "/blog" },
];

export default function NaoEncontrada() {
  return (
    <Pagina
      titulo="Página não encontrada"
      descricao="Esta página não existe. Veja os serviços de limpeza da Mary Cleans em Lisboa, Sintra e Cascais ou peça um orçamento."
      caminho="/404"
      noindex
    >
      <section className="secao py-20 sm:py-28">
        <p className="etiqueta-secao">Página não encontrada</p>
        <h1 className="mt-4 max-w-3xl text-titulo-1">Esta página não existe.</h1>
        <p className="prosa mt-6">
          <span className="text-entrada">
            O endereço pode ter mudado ou ter um erro. Estes são os caminhos mais procurados.
          </span>
        </p>

        <ul className="mt-8 max-w-leitura space-y-1">
          {CAMINHOS.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="inline-flex min-h-[44px] items-center font-medium text-tinta-900 underline decoration-tinta-300 underline-offset-4 hover:text-marca-700"
              >
                {c.nome}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-tinta-600">
          Limpeza em{" "}
          {CONCELHOS.map((c, i) => (
            <span key={c.slug}>
              {i ? ", " : ""}
              <Link href={`/limpezas/${c.slug}`} className="font-medium text-marca-700 underline underline-offset-2">
                {c.nome}
              </Link>
            </span>
          ))}
          .
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contacto" className="botao">
            Pedir orçamento
          </Link>
          <Link href="/" className="botao-secundario">
            Voltar ao início
          </Link>
        </div>
      </section>
    </Pagina>
  );
}
