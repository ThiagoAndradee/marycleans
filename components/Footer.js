import Link from "next/link";
import logo from "../assets/logo.svg";
import { EMPRESA, VERTICAIS, SERVICOS, CONCELHOS } from "../lib/negocio";
import { INDICE_SEO } from "../lib/seo-indice";
import { TEM_MEDICAO } from "../lib/medicao";

// O rodapé anterior era o do template em inglês: Marketing, Analytics, Commerce, API Status,
// Jobs, Press, e "© 2020 Mary Cleans, Inc.". Nada disso existia.

const ANO = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-tinta-200 bg-tinta-50 max-[480px]:pb-20">
      <div className="secao py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo.src} alt="" width={40} height={40} loading="lazy" className="h-10 w-10" />
              <span className="font-bold tracking-tight text-tinta-900">Mary Cleans</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-tinta-600">
              Serviços de limpeza para alojamento local, mediação imobiliária e habitação,
              em Lisboa, Sintra e Cascais.
            </p>
            <a
              href={`tel:${EMPRESA.telefoneDigitos}`}
              className="mt-4 inline-block text-sm font-semibold text-tinta-900 max-[480px]:py-3"
            >
              {EMPRESA.telefone}
            </a>
            <a
              href={`mailto:${EMPRESA.email}`}
              className="mt-2 block text-sm text-tinta-600 hover:text-tinta-900 max-[480px]:mt-0 max-[480px]:py-3"
            >
              {EMPRESA.email}
            </a>
          </div>

          <div>
            <h2 className="etiqueta-secao">Para quem</h2>
            <ul className="mt-4 space-y-2.5 max-[480px]:mt-2 max-[480px]:space-y-0">
              {VERTICAIS.map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/servicos/${v.slug}`}
                    className="text-sm text-tinta-600 hover:text-tinta-900 max-[480px]:flex max-[480px]:min-h-[44px] max-[480px]:items-center"
                  >
                    {v.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="etiqueta-secao">Serviços</h2>
            <ul className="mt-4 space-y-2.5 max-[480px]:mt-2 max-[480px]:space-y-0">
              {SERVICOS.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicos#${s.slug}`}
                    className="text-sm text-tinta-600 hover:text-tinta-900 max-[480px]:flex max-[480px]:min-h-[44px] max-[480px]:items-center"
                  >
                    {s.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="etiqueta-secao">Áreas de serviço</h2>
            <ul className="mt-4 space-y-2.5 max-[480px]:mt-2 max-[480px]:space-y-0">
              {CONCELHOS.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/limpezas/${c.slug}`}
                    className="text-sm text-tinta-600 hover:text-tinta-900 max-[480px]:flex max-[480px]:min-h-[44px] max-[480px]:items-center"
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
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5 max-[480px]:mt-2 max-[480px]:gap-y-0">
            {INDICE_SEO.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-sm text-tinta-600 hover:text-tinta-900 max-[480px]:flex max-[480px]:min-h-[44px] max-[480px]:items-center">
                  {p.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 flex flex-col gap-4 border-t border-tinta-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-tinta-600">
            &copy; {ANO} Mary Cleans. Todos os direitos reservados.{" "}
            <a href="https://www.beabstracto.com" className="underline underline-offset-2 hover:text-tinta-800">
              A company by Beabstracto
            </a>
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 max-[480px]:gap-y-0">
            <li>
              <Link href="/blog" className="text-xs text-tinta-600 hover:text-tinta-800 max-[480px]:flex max-[480px]:min-h-[44px] max-[480px]:items-center">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/privacidade" className="text-xs text-tinta-600 hover:text-tinta-800 max-[480px]:flex max-[480px]:min-h-[44px] max-[480px]:items-center">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/rgpd" className="text-xs text-tinta-600 hover:text-tinta-800 max-[480px]:flex max-[480px]:min-h-[44px] max-[480px]:items-center">
                RGPD
              </Link>
            </li>
            {TEM_MEDICAO ? (
              <li>
                <a href="#cookies" className="text-xs text-tinta-600 hover:text-tinta-800 max-[480px]:flex max-[480px]:min-h-[44px] max-[480px]:items-center">
                  Preferências de cookies
                </a>
              </li>
            ) : null}
            <li>
              <a
                href="https://www.livroreclamacoes.pt/Inicio/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs text-tinta-600 hover:text-tinta-800 max-[480px]:flex max-[480px]:min-h-[44px] max-[480px]:items-center"
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
