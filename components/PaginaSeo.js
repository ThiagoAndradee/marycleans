import Link from "next/link";
import Pagina from "./Pagina";
import FormOrcamento from "./FormOrcamento";
import TextoComLinks, { semLinks } from "./blog/TextoComLinks";
import { SITE, negocioJsonLd } from "./Seo";
import { EMPRESA, SERVICOS, WHATSAPP } from "../lib/negocio";
import { SEO_DATA, GRUPOS_SEO } from "../lib/seo-indice";

// Página de entrada por serviço e por zona. O conteúdo vem de lib/seo-paginas.js.
// Ordem pensada para quem chega da pesquisa: resposta curta no topo, depois o que é próprio
// do local, depois perguntas, depois o formulário.

const HUB = { slug: "limpeza-alojamento-local-lisboa", rotulo: "Alojamento local em Lisboa" };

function migalhas(pagina) {
  const lista = [{ nome: "Início", href: "/" }];
  if (pagina.grupo === "bairro") lista.push({ nome: HUB.rotulo, href: `/${HUB.slug}` });
  else if (pagina.grupo === "lisboa") lista.push({ nome: "Lisboa", href: "/limpezas/lisboa" });
  else lista.push({ nome: pagina.local, href: `/limpezas/${pagina.local.toLowerCase()}` });
  lista.push({ nome: pagina.h1, href: `/${pagina.slug}` });
  return lista;
}

function jsonLd(pagina, caminho) {
  const url = `${SITE}/${pagina.slug}`;
  const { "@context": _c, ...negocio } = negocioJsonLd;
  return {
    "@context": "https://schema.org",
    "@graph": [
      negocio,
      {
        "@type": "WebPage",
        "@id": `${url}#pagina`,
        url,
        name: pagina.titulo,
        description: pagina.descricao,
        inLanguage: "pt-PT",
        dateModified: SEO_DATA,
        about: { "@id": `${url}#servico` },
        breadcrumb: { "@id": `${url}#caminho` },
      },
      {
        "@type": "Service",
        "@id": `${url}#servico`,
        name: pagina.h1,
        serviceType: pagina.servicoTipo,
        description: pagina.resposta,
        provider: { "@id": negocio["@id"] },
        areaServed:
          pagina.grupo === "bairro"
            ? {
                "@type": "Place",
                name: pagina.local,
                containedInPlace: { "@type": "City", name: "Lisboa" },
              }
            : { "@type": "City", name: pagina.local },
        url,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#caminho`,
        itemListElement: caminho.map((m, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: m.nome,
          item: SITE + m.href,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#perguntas`,
        mainEntity: pagina.faq.map((f) => ({
          "@type": "Question",
          name: f.p,
          acceptedAnswer: { "@type": "Answer", text: semLinks(f.r) },
        })),
      },
    ],
  };
}

function Bloco({ b }) {
  if (b.t === "lista")
    return (
      <ul className="mt-4 max-w-leitura list-disc space-y-2 pl-5 text-tinta-600 marker:text-marca-600">
        {b.x.map((item) => (
          <li key={item} className="leading-7">
            <TextoComLinks texto={item} />
          </li>
        ))}
      </ul>
    );
  return (
    <p className="mt-4 max-w-leitura leading-7 text-tinta-600">
      <TextoComLinks texto={b.x} />
    </p>
  );
}

export default function PaginaSeo({ pagina, relacionadas, posts }) {
  const caminho = migalhas(pagina);
  const servico = pagina.inclui ? SERVICOS.find((s) => s.slug === pagina.inclui) : null;
  const wa = WHATSAPP(
    `Bom dia. Queria pedir um orçamento de ${pagina.servicoTipo.toLowerCase()} em ${pagina.local}. O imóvel é um `
  );

  return (
    <Pagina
      titulo={pagina.titulo}
      descricao={pagina.descricao}
      caminho={`/${pagina.slug}`}
      jsonLd={jsonLd(pagina, caminho)}
    >
      <section className="border-b border-tinta-200">
        <div className="secao py-12 sm:py-16">
          <nav aria-label="Caminho" className="text-sm text-tinta-500">
            {caminho.slice(0, -1).map((m) => (
              <span key={m.href}>
                <Link href={m.href} className="hover:text-tinta-800">
                  {m.nome}
                </Link>
                <span className="mx-2">/</span>
              </span>
            ))}
          </nav>
          <p className="etiqueta-secao mt-5">
            {pagina.freguesia ? `Freguesia de ${pagina.freguesia}` : GRUPOS_SEO[pagina.grupo]}
          </p>
          <h1 className="mt-4 max-w-3xl text-[2rem] font-bold leading-[1.12] tracking-tight text-tinta-900 sm:text-titulo-1">
            {pagina.h1}
          </h1>
          <p
            id="resposta"
            className="mt-6 max-w-leitura border-l-2 border-marca-500 pl-4 text-entrada text-tinta-800"
          >
            {pagina.resposta}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#orcamento" className="botao">
              Pedir orçamento
            </a>
            <a href={wa} target="_blank" rel="noreferrer noopener" className="botao-secundario">
              WhatsApp {EMPRESA.telefone}
            </a>
          </div>
        </div>
      </section>

      <article className="secao secao-espaco">
        <p className="max-w-leitura text-entrada text-tinta-700">{pagina.intro}</p>

        {pagina.secoes.map((s) => (
          <section key={s.h2} className="mt-12">
            <h2 className="max-w-leitura text-titulo-3 text-tinta-900 sm:text-titulo-2">{s.h2}</h2>
            {s.blocos.map((b, i) => (
              <Bloco key={i} b={b} />
            ))}
          </section>
        ))}

        {servico ? (
          <section className="mt-12">
            <h2 className="max-w-leitura text-titulo-3 text-tinta-900 sm:text-titulo-2">
              O que está incluído
            </h2>
            <ul className="mt-5 max-w-leitura space-y-2">
              {servico.inclui.map((item) => (
                <li key={item} className="border-b border-tinta-100 pb-2 text-tinta-700">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-leitura text-sm leading-6 text-tinta-600">
              {pagina.servicoTipo.includes("alojamento")
                ? "Não lavamos nem engomamos roupa de cama. "
                : ""}
              O âmbito de todos os serviços está em{" "}
              <Link
                href={`/servicos#${servico.slug}`}
                className="font-medium text-marca-700 underline underline-offset-2"
              >
                serviços
              </Link>
              .
            </p>
          </section>
        ) : null}
      </article>

      <section className="border-y border-tinta-200 bg-tinta-50">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Perguntas frequentes</h2>
          <dl className="mt-8 grid gap-x-12 gap-y-8 lg:grid-cols-2">
            {pagina.faq.map((f) => (
              <div key={f.p}>
                <dt className="text-base font-semibold text-tinta-900">{f.p}</dt>
                <dd className="mt-2 text-sm leading-6 text-tinta-600">
                  <TextoComLinks texto={f.r} />
                </dd>
              </div>
            ))}
          </dl>
          {pagina.fontes ? (
            <p className="mt-8 text-xs text-tinta-500">
              Fonte dos valores de mercado:{" "}
              {pagina.fontes.map((f) => (
                <a
                  key={f.url}
                  href={f.url}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="underline underline-offset-2"
                >
                  {f.rotulo}
                </a>
              ))}
              , consultado em Novembro de 2026.
            </p>
          ) : null}
        </div>
      </section>

      <section id="orcamento" className="scroll-mt-6">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Orçamento</h2>
          <p className="mt-3 max-w-leitura text-titulo-3 text-tinta-900 sm:text-titulo-2">
            Diga-nos a tipologia e a zona.
          </p>
          <p className="mt-4 max-w-leitura text-tinta-600">
            Respondemos por escrito, com o que está e o que não está incluído. Também pode
            escrever para o WhatsApp{" "}
            <a href={wa} className="font-medium text-marca-700 underline underline-offset-2">
              {EMPRESA.telefone}
            </a>
            .
          </p>
          <FormOrcamento servicoInicial={pagina.servicoForm || undefined} compacto />
        </div>
      </section>

      <section className="border-t border-tinta-200 bg-tinta-50">
        <div className="secao py-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="etiqueta-secao">Páginas relacionadas</h2>
              <ul className="mt-5 space-y-3">
                {relacionadas.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/${r.slug}`}
                      className="font-medium text-tinta-900 underline decoration-tinta-300 underline-offset-4 hover:text-marca-700"
                    >
                      {r.rotulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {posts.length ? (
              <div>
                <h2 className="etiqueta-secao">Do blog</h2>
                <ul className="mt-5 space-y-3">
                  {posts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="font-medium text-tinta-900 underline decoration-tinta-300 underline-offset-4 hover:text-marca-700"
                      >
                        {p.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <p className="mt-10 text-xs text-tinta-500">
            Página revista em{" "}
            <time dateTime={SEO_DATA}>
              {new Date(`${SEO_DATA}T12:00:00Z`).toLocaleDateString("pt-PT", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>{" "}
            por {EMPRESA.nome}.
          </p>
        </div>
      </section>
    </Pagina>
  );
}
