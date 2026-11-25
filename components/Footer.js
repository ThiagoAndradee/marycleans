import Link from "next/link";
import logo from "../assets/logo.svg";
import { EMPRESA, VERTICAIS, SERVICOS, CONCELHOS } from "../lib/negocio";
import { INDICE_SEO } from "../lib/seo-indice";

// O rodapé anterior era o do template em inglês: Marketing, Analytics, Commerce, API Status,
// Jobs, Press, e "© 2020 Mary Cleans, Inc.". Nada disso existia.

const ANO = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-tinta-200 bg-tinta-50">
      <div className="secao py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo.src} alt="" className="h-10 w-10" />
              <span className="font-bold tracking-tight text-tinta-900">Mary Cleans</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-tinta-600">
              Serviços de limpeza para alojamento local, mediação imobiliária e habitação,
              em Lisboa, Sintra e Cascais.
            </p>
            <a
              href={`tel:${EMPRESA.telefoneDigitos}`}
              className="mt-4 inline-block text-sm font-semibold text-tinta-900"
            >
              {EMPRESA.telefone}
            </a>
          </div>

          <div>
            <h2 className="etiqueta-secao">Para quem</h2>
            <ul className="mt-4 space-y-2.5">
              {VERTICAIS.map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/servicos/${v.slug}`}
                    className="text-sm text-tinta-600 hover:text-tinta-900"
                  >
                    {v.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="etiqueta-secao">Serviços</h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICOS.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicos#${s.slug}`}
                    className="text-sm text-tinta-600 hover:text-tinta-900"
                  >
                    {s.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="etiqueta-secao">Áreas de serviço</h2>
            <ul className="mt-4 space-y-2.5">
              {CONCELHOS.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/limpezas/${c.slug}`}
                    className="text-sm text-tinta-600 hover:text-tinta-900"
                  >
                    Limpeza em {c.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav aria-label="Serviços por zona" className="mt-12 border-t border-tinta-200 pt-7">
          <h2 className="etiqueta-secao">Serviços por zona</h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
            {INDICE_SEO.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-sm text-tinta-600 hover:text-tinta-900">
                  {p.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 flex flex-col gap-4 border-t border-tinta-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-tinta-500">
            &copy; {ANO} Mary Cleans. Todos os direitos reservados.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/blog" className="text-xs text-tinta-500 hover:text-tinta-800">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/privacidade" className="text-xs text-tinta-500 hover:text-tinta-800">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/rgpd" className="text-xs text-tinta-500 hover:text-tinta-800">
                RGPD
              </Link>
            </li>
            <li>
              <a
                href="https://www.livroreclamacoes.pt/Inicio/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs text-tinta-500 hover:text-tinta-800"
              >
                Livro de Reclamações Online
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
