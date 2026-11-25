import { useState } from "react";
import Link from "next/link";
import logo from "../assets/logo.svg";
import { EMPRESA, VERTICAIS } from "../lib/negocio";

// Todos os links levam a alguma parte. A navegação antiga apontava tudo para "#".
const LINKS = [
  ...VERTICAIS.map((v) => ({ nome: v.nome, href: `/servicos/${v.slug}` })),
  { nome: "Serviços", href: "/servicos" },
  { nome: "Áreas", href: "/limpezas/sintra" },
  { nome: "Contacto", href: "/contacto" },
];

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="border-b border-tinta-200 bg-white">
      <div className="secao flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label={EMPRESA.nome}>
          <img src={logo.src} alt="" className="h-11 w-11" />
          <span className="text-base font-bold tracking-tight text-tinta-900">
            Mary Cleans
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-tinta-600 transition-colors hover:text-tinta-900"
            >
              {l.nome}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${EMPRESA.telefoneDigitos}`}
            className="text-sm font-semibold text-tinta-900"
          >
            {EMPRESA.telefone}
          </a>
          <Link href="/contacto" className="botao">
            Pedir orçamento
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setAberto(!aberto)}
          className="rounded border border-tinta-300 px-3 py-2 text-sm font-semibold text-tinta-800 lg:hidden"
          aria-expanded={aberto}
        >
          {aberto ? "Fechar" : "Menu"}
        </button>
      </div>

      {aberto ? (
        <div className="border-t border-tinta-200 lg:hidden">
          <nav className="secao flex flex-col py-2" aria-label="Principal, telemóvel">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setAberto(false)}
                className="border-b border-tinta-100 py-3 text-sm font-medium text-tinta-700"
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
