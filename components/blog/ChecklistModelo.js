import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Bloco from "./Bloco";
import TextoComLinks from "./TextoComLinks";
import { EMPRESA, WHATSAPP } from "../../lib/negocio";

// Layout de modelo de checklist: cabeçalho com ficha (tarefas, áreas, formato, data) e
// ações, lista interativa por divisão com progresso guardado no aparelho, folha A4 na
// impressão (só a lista, sem menus), FAQ em acordeão e chamada para orçamento.

const chave = (slug) => `mc-checklist:${slug}:v1`;
const idItem = (area, i) => `${area.id}-${i}`;

export const totalTarefas = (modelo) =>
  modelo.areas.reduce((n, a) => n + a.itens.length, 0);

function Barra({ feitas, total, className = "" }) {
  const pct = total ? Math.round((feitas / total) * 100) : 0;
  return (
    <div className={`h-2 overflow-hidden rounded-full bg-tinta-200 ${className}`} aria-hidden="true">
      <div
        className="h-full rounded-full bg-marca-700 transition-[width] duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function imprimir() {
  if (typeof window !== "undefined") window.print();
}

function IconeImprimir() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M5 2h10v4h1.5A2.5 2.5 0 0 1 19 8.5V14h-4v4H5v-4H1V8.5A2.5 2.5 0 0 1 3.5 6H5V2Zm2 2v2h6V4H7Zm0 9v3h6v-3H7Zm8-4.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
    </svg>
  );
}

export default function ChecklistModelo({ post, dataPT, outros, servicos }) {
  const { modelo } = post;
  const total = totalTarefas(modelo);
  const ids = useMemo(
    () => new Set(modelo.areas.flatMap((a) => a.itens.map((_, i) => idItem(a, i)))),
    [modelo]
  );

  const [feitos, setFeitos] = useState({});
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    try {
      const guardado = JSON.parse(window.localStorage.getItem(chave(post.slug)) || "{}");
      if (guardado && typeof guardado === "object") setFeitos(guardado);
    } catch {
      // Sem armazenamento (janela privada, bloqueado): a lista funciona na mesma.
    }
    setPronto(true);
  }, [post.slug]);

  useEffect(() => {
    if (!pronto) return;
    try {
      window.localStorage.setItem(chave(post.slug), JSON.stringify(feitos));
    } catch {
      // idem
    }
  }, [feitos, pronto, post.slug]);

  const feitas = Object.keys(feitos).filter((k) => feitos[k] && ids.has(k)).length;
  const feitasArea = (a) => a.itens.filter((_, i) => feitos[idItem(a, i)]).length;
  const marcar = (id) => (e) => setFeitos((f) => ({ ...f, [id]: e.target.checked }));
  const limpar = () => setFeitos({});

  const estado =
    feitas === total
      ? "Lista completa. Falta enviar as fotografias de entrega ao proprietário."
      : `${feitas} de ${total} tarefas feitas`;

  const atualizado = post.atualizado || post.data;

  return (
    <article>
      {/* Cabeçalho de ecrã */}
      <header className="border-b border-tinta-200 bg-marca-50 print:hidden">
        <div className="secao py-10 sm:py-14 lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-12">
          <div>
            <nav aria-label="Caminho" className="text-sm text-tinta-600">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="underline-offset-2 hover:text-tinta-900 hover:underline">
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="underline-offset-2 hover:text-tinta-900 hover:underline">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-tinta-800">Checklist de check-out</li>
              </ol>
            </nav>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Categorias">
              {modelo.etiquetas.map((e) => (
                <li
                  key={e}
                  className="rounded border border-marca-200 bg-white px-2.5 py-1 text-xs font-semibold text-marca-800"
                >
                  {e}
                </li>
              ))}
            </ul>

            <h1 className="mt-4 max-w-3xl text-[2rem] font-bold leading-tight tracking-tight sm:text-titulo-1">
              {post.titulo}
            </h1>
            <p className="mt-5 max-w-leitura text-entrada text-tinta-700">{modelo.intro}</p>
            <p className="mt-5 text-sm text-tinta-600">
              {EMPRESA.nome} · Atualizada a{" "}
              <time dateTime={atualizado}>{dataPT(atualizado)}</time>
            </p>
          </div>

          {/* Ficha do modelo: números e ações, como numa página de modelo */}
          <aside
            aria-label="Sobre este modelo"
            className="mt-8 rounded-lg border border-tinta-200 bg-white p-5 shadow-sm sm:p-6 lg:mt-0 lg:self-start"
          >
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-xs font-medium text-tinta-600">Tarefas</dt>
                <dd className="mt-1 text-2xl font-bold text-tinta-900">{total}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-tinta-600">Áreas</dt>
                <dd className="mt-1 text-2xl font-bold text-tinta-900">{modelo.areas.length}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-tinta-600">Formato</dt>
                <dd className="mt-1 text-sm font-semibold text-tinta-900">Telemóvel ou A4</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-tinta-600">Custo</dt>
                <dd className="mt-1 text-sm font-semibold text-tinta-900">Gratuito</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-col gap-3">
              <button type="button" onClick={imprimir} className="botao gap-2">
                <IconeImprimir />
                Imprimir ou guardar em PDF
              </button>
              <a href="#lista" className="botao-secundario">
                Marcar no telemóvel
              </a>
              <Link
                href="/contacto"
                className="text-center text-sm font-semibold text-marca-700 underline underline-offset-2 hover:text-marca-800"
              >
                Pedir orçamento para o seu imóvel
              </Link>
            </div>
          </aside>
        </div>
      </header>

      {/* Cabeçalho da folha impressa */}
      <div className="hidden print:block">
        <div className="flex items-baseline justify-between border-b-2 border-marca-700 pb-2">
          <p className="text-[15pt] font-bold text-tinta-900">Checklist de check-out</p>
          <p className="text-[9pt] font-semibold text-marca-800">{EMPRESA.nome}</p>
        </div>
        <dl className="mt-3 grid grid-cols-4 gap-4 text-[8.5pt] text-tinta-700">
          {["Imóvel", "Data", "Saída do hóspede", "Quem limpou"].map((c) => (
            <div key={c}>
              <dt className="font-semibold">{c}</dt>
              <dd className="mt-4 border-b border-tinta-400" />
            </div>
          ))}
        </dl>
      </div>

      <div className="secao py-10 sm:py-14 print:max-w-none print:px-0 print:py-3">
        <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
          {/* Índice com progresso, só em ecrã largo */}
          <aside className="hidden lg:block print:hidden" aria-label="Índice da checklist">
            <div className="sticky top-28">
              <p className="text-etiqueta uppercase text-marca-700">Progresso</p>
              <p className="mt-2 text-sm font-semibold text-tinta-900">
                {feitas} de {total} tarefas
              </p>
              <Barra feitas={feitas} total={total} className="mt-2" />
              <ol className="mt-6 space-y-1 border-l border-tinta-200">
                {modelo.areas.map((a) => {
                  const k = feitasArea(a);
                  const completa = k === a.itens.length;
                  return (
                    <li key={a.id}>
                      <a
                        href={`#${a.id}`}
                        className="-ml-px flex items-center justify-between gap-3 border-l-2 border-transparent py-1.5 pl-4 text-sm text-tinta-700 hover:border-marca-700 hover:text-tinta-900"
                      >
                        <span>{a.titulo}</span>
                        <span
                          className={`shrink-0 text-xs tabular-nums ${
                            completa ? "font-semibold text-marca-700" : "text-tinta-600"
                          }`}
                        >
                          {k}/{a.itens.length}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ol>
              <div className="mt-6 flex flex-col gap-2">
                <button type="button" onClick={imprimir} className="botao-secundario gap-2 py-2.5">
                  <IconeImprimir />
                  Imprimir
                </button>
                <button
                  type="button"
                  onClick={limpar}
                  disabled={!feitas}
                  className="rounded px-3 py-2 text-sm font-medium text-tinta-700 underline underline-offset-2 hover:text-tinta-900 disabled:cursor-not-allowed disabled:no-underline disabled:opacity-60"
                >
                  Limpar marcações
                </button>
              </div>
            </div>
          </aside>

          <div className="min-w-0">
            {/* Em resumo */}
            <section
              aria-labelledby="resumo-titulo"
              className="rounded-lg border border-tinta-200 bg-tinta-50 p-5 sm:p-6 print:hidden"
            >
              <h2 id="resumo-titulo" className="text-etiqueta uppercase text-marca-700">
                Em resumo
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-tinta-700">
                {modelo.pontos.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marca-700" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-tinta-200 pt-4 text-xs leading-5 text-tinta-600">
                {modelo.aviso}
              </p>
            </section>

            {/* A lista */}
            <section id="lista" aria-labelledby="lista-titulo" className="mt-10 scroll-mt-24 print:mt-0">
              <div className="flex flex-wrap items-end justify-between gap-3 print:hidden">
                <h2 id="lista-titulo" className="text-titulo-2">
                  A lista, divisão a divisão
                </h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-tinta-600 print:hidden">
                As tarefas marcadas com{" "}
                <span className="rounded bg-marca-100 px-1.5 py-0.5 text-xs font-semibold text-marca-800">
                  Airbnb
                </span>{" "}
                deixaram de poder ser pedidas ao hóspede. Ver{" "}
                <a
                  href="#regra-airbnb"
                  className="font-medium text-marca-700 underline underline-offset-2 hover:text-marca-800"
                >
                  a regra nova do Airbnb
                </a>
                .
              </p>

              {/* Progresso fixo no telemóvel */}
              <div className="sticky top-20 z-20 -mx-6 mt-5 border-y border-tinta-200 bg-white/95 px-6 py-3 backdrop-blur lg:hidden print:hidden">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-tinta-900">
                    {feitas} de {total} tarefas
                  </p>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={limpar}
                      disabled={!feitas}
                      className="min-h-11 rounded px-2 text-sm font-medium text-tinta-700 underline underline-offset-2 disabled:no-underline disabled:opacity-60"
                    >
                      Limpar
                    </button>
                    <button
                      type="button"
                      onClick={imprimir}
                      className="inline-flex min-h-11 items-center gap-2 rounded px-2 text-sm font-semibold text-marca-700"
                    >
                      <IconeImprimir />
                      Imprimir
                    </button>
                  </div>
                </div>
                <Barra feitas={feitas} total={total} className="mt-2" />
              </div>

              <p className="sr-only" aria-live="polite">
                {pronto ? estado : ""}
              </p>

              <ol className="mt-6 space-y-5 print:mt-2 print:grid print:grid-cols-2 print:gap-x-5 print:gap-y-2.5 print:space-y-0">
                {modelo.areas.map((a, n) => {
                  const k = feitasArea(a);
                  const completa = k === a.itens.length;
                  return (
                    <li
                      key={a.id}
                      id={a.id}
                      className="checklist-area scroll-mt-40 rounded-lg border border-tinta-200 bg-white lg:scroll-mt-28 print:rounded-none print:border-0"
                    >
                      <section aria-labelledby={`${a.id}-titulo`}>
                        <div className="flex items-center justify-between gap-3 border-b border-tinta-200 px-4 py-3 sm:px-5 print:border-tinta-400 print:px-0 print:py-1">
                          <h3
                            id={`${a.id}-titulo`}
                            className="flex items-center gap-3 text-lg font-semibold text-tinta-900 print:text-[10.5pt]"
                          >
                            <span
                              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-marca-700 text-xs font-bold text-white print:h-auto print:w-auto print:bg-transparent print:text-[10pt] print:text-marca-800"
                              aria-hidden="true"
                            >
                              {n + 1}
                            </span>
                            {a.titulo}
                          </h3>
                          <span
                            className={`shrink-0 rounded px-2 py-0.5 text-xs font-semibold tabular-nums print:hidden ${
                              completa ? "bg-marca-700 text-white" : "bg-tinta-100 text-tinta-700"
                            }`}
                          >
                            {completa ? "Feito" : `${k}/${a.itens.length}`}
                          </span>
                        </div>
                        {a.nota ? (
                          <p className="px-4 pt-3 text-sm leading-6 text-tinta-600 sm:px-5 print:hidden">
                            {a.nota}
                          </p>
                        ) : null}
                        <ul className="px-2 py-2 sm:px-3 print:p-0">
                          {a.itens.map((it, i) => {
                            const id = idItem(a, i);
                            const feito = !!feitos[id];
                            return (
                              <li key={id}>
                                <label
                                  htmlFor={`t-${id}`}
                                  className="flex min-h-11 cursor-pointer items-start gap-3 rounded px-2 py-2.5 hover:bg-tinta-50 print:min-h-0 print:gap-2 print:px-0 print:py-[1.5pt]"
                                >
                                  <input
                                    id={`t-${id}`}
                                    type="checkbox"
                                    checked={feito}
                                    onChange={marcar(id)}
                                    className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-marca-700 print:mt-0 print:h-[9pt] print:w-[9pt]"
                                  />
                                  <span
                                    className={`text-[0.9375rem] leading-6 print:text-[8.5pt] print:leading-[11pt] ${
                                      feito ? "text-tinta-600 line-through decoration-tinta-400" : "text-tinta-800"
                                    }`}
                                  >
                                    {it.x}
                                    {it.airbnb ? (
                                      <span className="ml-2 inline-block rounded bg-marca-100 px-1.5 py-0.5 align-[1px] text-xs font-semibold text-marca-800 no-underline print:ml-1 print:bg-transparent print:p-0 print:text-[7pt]">
                                        Airbnb
                                      </span>
                                    ) : null}
                                  </span>
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      </section>
                    </li>
                  );
                })}
              </ol>

              {/* Observações, só na folha impressa */}
              <div className="hidden print:mt-4 print:block">
                <p className="text-[9pt] font-semibold text-tinta-900">Observações para o proprietário</p>
                {[0, 1, 2, 3].map((l) => (
                  <div key={l} className="mt-5 border-b border-tinta-400" />
                ))}
                <p className="mt-4 text-[7.5pt] text-tinta-600">
                  Airbnb: tarefa que a regra de 20/11/2026 deixou de permitir pedir ao hóspede.
                  Modelo de {EMPRESA.nome} · {EMPRESA.telefone}
                </p>
              </div>
            </section>

            {/* Texto de apoio */}
            <div className="prosa mt-6 max-w-leitura print:hidden">
              {post.corpo.map((b, i) => (
                <Bloco key={i} b={b} />
              ))}
            </div>

            {/* FAQ em acordeão */}
            <section
              aria-labelledby="faq-titulo"
              className="mt-16 max-w-leitura border-t border-tinta-200 pt-10 print:hidden"
            >
              <h2 id="faq-titulo" className="text-titulo-2">
                Perguntas frequentes
              </h2>
              <div className="mt-6 divide-y divide-tinta-200 border-y border-tinta-200">
                {post.faq.map((f) => (
                  <details key={f.p} className="group">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-tinta-900 [&::-webkit-details-marker]:hidden">
                      {f.p}
                      <svg
                        viewBox="0 0 20 20"
                        className="h-5 w-5 shrink-0 fill-current text-marca-700 transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      >
                        <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
                      </svg>
                    </summary>
                    <div className="pb-5 text-sm leading-6 text-tinta-700">
                      <TextoComLinks texto={f.r} />
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {servicos.length ? (
              <section className="mt-14 max-w-leitura border-t border-tinta-200 pt-10 print:hidden">
                <h2 className="etiqueta-secao">Serviços de que este artigo fala</h2>
                <ul className="mt-5 space-y-3">
                  {servicos.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/${p.slug}`}
                        className="font-medium text-marca-700 underline underline-offset-2 hover:text-marca-600"
                      >
                        {p.rotulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>
      </div>

      {/* Chamada final */}
      <section aria-labelledby="cta-titulo" className="bg-marca-950 text-white print:hidden">
        <div className="secao py-14 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <h2 id="cta-titulo" className="text-titulo-2 text-white">
              Quer esta lista cumprida em cada rotação?
            </h2>
            <p className="mt-4 leading-7 text-white/80">
              A {EMPRESA.nome} faz a limpeza entre hóspedes para proprietários e gestores de
              alojamento local em Lisboa, Sintra e Cascais. A equipa segue esta lista em cada saída
              e envia o relatório fotográfico do estado de entrega.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded bg-white px-5 py-3 text-sm font-semibold text-marca-950 transition-colors hover:bg-marca-100"
            >
              Pedir orçamento
            </Link>
            <a
              href={WHATSAPP(`Olá, vi a checklist de check-out e queria um orçamento para o meu alojamento local.`)}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              WhatsApp {EMPRESA.telefone}
            </a>
          </div>
        </div>
      </section>

      {/* Outros artigos */}
      <section className="border-t border-tinta-200 bg-tinta-50 print:hidden">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Outros artigos</h2>
          <ul className="mt-6 grid gap-6 lg:grid-cols-2">
            {outros.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="cartao flex h-full flex-col transition-colors hover:border-marca-400"
                >
                  <h3 className="text-titulo-3 text-tinta-900">{p.titulo}</h3>
                  <p className="mt-3 text-sm leading-6 text-tinta-600">{p.resumo}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
