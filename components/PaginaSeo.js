import Link from "next/link";
import Pagina from "./Pagina";
import FormProposta from "./FormProposta";
import { PromoCartao } from "./PromoFaixa";
import TextoComLinks, { semLinks } from "./blog/TextoComLinks";
import { SITE, negocioJsonLd } from "./Seo";
import { EMPRESA, SERVICOS, WHATSAPP } from "../lib/negocio";
import { SEO_DATA, GRUPOS_SEO } from "../lib/seo-indice";
import VideoLoop from "./VideoLoop";
import { videoDoGrupo } from "../lib/videos";

// Página de entrada por serviço e por zona. O conteúdo vem de lib/seo-paginas.js.
// Ordem pensada para quem chega da pesquisa: resposta curta no topo, depois o que é próprio
// do local, depois perguntas, depois o formulário.

// Bloco para empresas. Só entra o que está no CONTEXTO da frente ou que é processo.
// "confirmar" aparece como marca visível na pré-visualização e sai antes de publicar.
const B2B = [
  {
    t: "Contrato de prestação de serviço",
    d: "Preço por limpeza fixado para cada imóvel durante o período do contrato. Um imóvel novo entra com o preço da sua tipologia.",
    confirmar: "duração do contrato e se a faturação é mensal",
  },
  {
    t: "Relatório com fotografias",
    d: "Depois de cada limpeza segue o estado de entrega de cada divisão e o que encontrámos avariado ou em falta.",
  },
  {
    t: "Reposição de consumíveis",
    d: "Papel, sabão, gel de duche e o que ficar definido para cada imóvel. O produto é cobrado a custo.",
  },
  {
    t: "Horário de check-out",
    d: "A hora de saída e de entrada de cada imóvel fica escrita, e as rotações são marcadas a contar com ela.",
  },
  {
    t: "Fatura",
    d: "O serviço é faturado à empresa, como prestação de serviço, sem encargos de pessoal para o cliente.",
    confirmar: "regime de IVA e dados fiscais",
  },
  {
    t: "O que fica de fora",
    d: "Lavagem e engomadoria de roupa de cama e toalhas. Trocamos a roupa e deixamos a usada separada para a lavandaria do cliente.",
  },
];

const HUB = { slug: "limpeza-alojamento-local-lisboa", rotulo: "Alojamento local em Lisboa" };

// Grupo do vídeo de cada página: bairros, concelhos, alojamento local, serviços e perfis.
function grupoVideo(pagina) {
  if (pagina.video) return pagina.video;
  if (pagina.grupo === "bairro") return "bairros";
  if (pagina.grupo === "area") return "concelhos";
  if (pagina.grupo === "perfil") return "perfis";
  return pagina.slug.startsWith("limpeza-alojamento-local") || pagina.slug.startsWith("contrato-") ? "alojamento" : "servicos";
}

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
        areaServed: pagina.areas
          ? pagina.areas.map((name) => ({ "@type": "City", name }))
          : pagina.grupo === "bairro"
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
            <a href="#proposta" className="botao">
              Pedir proposta
            </a>
            <a href={wa} target="_blank" rel="noreferrer noopener" className="botao-secundario">
              WhatsApp {EMPRESA.telefone}
            </a>
          </div>
          <PromoCartao claro />
          {videoDoGrupo(grupoVideo(pagina)) ? (
            <div className="relative mt-10 aspect-video max-w-3xl overflow-hidden rounded-2xl bg-tinta-100 shadow-sm">
              <VideoLoop video={videoDoGrupo(grupoVideo(pagina))} className="absolute inset-0 h-full w-full object-cover" />
              <p className="absolute bottom-2 right-3 text-[11px] text-white/80">Imagem ilustrativa</p>
            </div>
          ) : null}
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

      <section className="border-b border-tinta-200">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Para empresas</h2>
          <p className="mt-3 max-w-leitura text-titulo-3 text-tinta-900 sm:text-titulo-2">
            Gestoras de alojamento local e imobiliárias.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {B2B.map((b) => (
              <li key={b.t} className="cartao">
                <h3 className="text-base font-semibold text-tinta-900">{b.t}</h3>
                <p className="mt-2 text-sm leading-6 text-tinta-600">{b.d}</p>
                {b.confirmar ? (
                  <p className="mt-3 inline-block rounded bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-900">
                    [confirmar] {b.confirmar}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="proposta" className="scroll-mt-6">
        <div className="secao secao-espaco">
          <h2 className="etiqueta-secao">Proposta</h2>
          <p className="mt-3 max-w-leitura text-titulo-3 text-tinta-900 sm:text-titulo-2">
            Cinco campos e respondemos por escrito.
          </p>
          <p className="mt-4 max-w-leitura text-tinta-600">
            A proposta diz o preço por imóvel, o que está incluído e o que fica de fora.
          </p>
          <FormProposta
            zonaInicial={pagina.grupo === "bairro" ? pagina.rotulo : pagina.local}
            servico={pagina.servicoTipo}
          />
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
