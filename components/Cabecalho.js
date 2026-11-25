import { useState } from "react";
import Link from "next/link";
import logo from "../assets/logo.svg";
import { EMPRESA, VERTICAIS } from "../lib/negocio";

// Todos os links levam a alguma parte. A navegação antiga apontava tudo para "#".
const LINKS = [
  ...VERTICAIS.map((v) => ({ nome: v.nome, href: `/servicos/${v.slug}` })),
  { nome: "Serviços", href: "/servicos" },
  { nome: "Áreas", href: "/limpezas/sintra" },
  { nome: "Blog", href: "/blog" },
  { nome: "Contacto", href: "/contacto" },
];

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-marca-950/90 text-white backdrop-blur-md">
      <div className="secao flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={EMPRESA.nome}>
          <img src={logo.src} alt="" className="h-11 w-11 rounded-xl bg-white p-0.5" />
          <span className="whitespace-nowrap text-base font-bold tracking-tight text-white">
            Mary Cleans
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-5 xl:flex" aria-label="Principal">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {l.nome}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 whitespace-nowrap xl:flex">
          <a
            href={`tel:${EMPRESA.telefoneDigitos}`}
            className="text-sm font-semibold text-white"
          >
            {EMPRESA.telefone}
          </a>
          <Link href="/contacto" className="inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-marca-950 hover:bg-marca-50">
            Pedir orçamento
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setAberto(!aberto)}
          className="rounded-lg border border-white/30 px-3 py-2 text-sm font-semibold text-white xl:hidden"
          aria-expanded={aberto}
        >
          {aberto ? "Fechar" : "Menu"}
        </button>
      </div>

      {aberto ? (
        <div className="border-t border-white/10 xl:hidden">
          <nav className="secao flex flex-col py-2" aria-label="Principal, telemóvel">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setAberto(false)}
                className="border-b border-white/10 py-3 text-sm font-medium text-white/85"
              >
                {l.nome}
              </Link>
            ))}
            <div className="flex flex-col gap-3 py-4">
              <a href={`tel:${EMPRESA.telefoneDigitos}`} className="botao-secundario">
                {EMPRESA.telefone}
              </a>
              <Link href="/contacto" className="botao" onClick={() => setAberto(false)}>
                Pedir orçamento
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
