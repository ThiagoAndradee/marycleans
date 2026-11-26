import Link from "next/link";
import Pagina from "../../components/Pagina";
import TextoComLinks, { semLinks } from "../../components/blog/TextoComLinks";
import { POSTS, postPorSlug } from "../../lib/blog";
import { EMPRESA, WHATSAPP } from "../../lib/negocio";
import { paginasQueCitamPost } from "../../lib/seo-paginas";

import { SITE } from "../../lib/site";

const dataPT = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

function Bloco({ b }) {
  if (b.t === "h2")
    return <h2 className="mt-12 text-titulo-2 text-tinta-900">{b.x}</h2>;
  if (b.t === "h3")
    return <h3 className="mt-8 text-titulo-3 text-tinta-900">{b.x}</h3>;
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
    <p className="mt-4 leading-7">
      <TextoComLinks texto={b.x} />
    </p>
  );
}

export default function Post({ post, outros, servicos = [] }) {
  const url = `${SITE}/blog/${post.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.titulo,
      description: post.descricao,
      datePublished: post.data,
      dateModified: post.data,
      inLanguage: "pt-PT",
      mainEntityOfPage: url,
      url,
      author: { "@type": "Organization", name: EMPRESA.nome, url: SITE },
      publisher: { "@type": "Organization", name: EMPRESA.nome, url: SITE },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.p,
        acceptedAnswer: { "@type": "Answer", text: semLinks(f.r) },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: post.titulo, item: url },
      ],
    },
  ];

  return (
    <Pagina
      titulo={post.titulo}
      descricao={post.descricao}
      caminho={`/blog/${post.slug}`}
      jsonLd={jsonLd}
    >
      <article>
        <header className="border-b border-tinta-200">
          <div className="secao py-14 sm:py-16">
            <nav aria-label="Caminho" className="text-sm text-tinta-500">
              <Link href="/" className="hover:text-tinta-800 max-[480px]:py-3">Início</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-tinta-800 max-[480px]:py-3">Blog</Link>
            </nav>
            <h1 className="mt-5 max-w-3xl text-titulo-1">{post.titulo}</h1>
            <p className="mt-5 text-sm text-tinta-500">
              {EMPRESA.nome} · <time dateTime={post.data}>{dataPT(post.data)}</time>
            </p>
          </div>
        </header>

        <div className="secao secao-espaco">
          <div className="prosa max-w-leitura">
            {post.corpo.map((b, i) => (
              <Bloco key={i} b={b} />
            ))}
          </div>

          <section className="mt-16 max-w-leitura border-t border-tinta-200 pt-10">
            <h2 className="etiqueta-secao">Perguntas frequentes</h2>
            <dl className="mt-6 space-y-7">
              {post.faq.map((f) => (
                <div key={f.p}>
                  <dt className="text-base font-semibold text-tinta-900">{f.p}</dt>
                  <dd className="mt-2 text-sm leading-6 text-tinta-600">
                    <TextoComLinks texto={f.r} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {servicos.length ? (
            <section className="mt-14 max-w-leitura border-t border-tinta-200 pt-10">
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

          <aside className="cartao mt-14 max-w-leitura bg-tinta-50">
            <h2 className="text-titulo-3 text-tinta-900">Pedir orçamento</h2>
            <p className="mt-3 text-sm leading-6 text-tinta-600">
              Diga-nos a tipologia, o concelho e a frequência. Respondemos pelo WhatsApp ou pelo
              formulário de contacto.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contacto" className="botao">
                Pedir orçamento
              </Link>
              <a
                href={WHATSAPP(`Olá, li o artigo "${post.titulo}" e queria pedir um orçamento.`)}
                target="_blank"
                rel="noreferrer noopener"
                className="botao-secundario"
              >
                WhatsApp {EMPRESA.telefone}
              </a>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-t border-tinta-200 bg-tinta-50">
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
    </Pagina>
  );
}

export function getStaticPaths() {
  return { paths: POSTS.map((p) => ({ params: { slug: p.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  const post = postPorSlug(params.slug);
  if (!post) return { notFound: true };
  return {
    props: {
      post,
      servicos: paginasQueCitamPost(post.slug)
        .slice(0, 5)
        .map(({ slug, rotulo }) => ({ slug, rotulo })),
      outros: POSTS.filter((p) => p.slug !== post.slug)
        .slice(0, 4)
        .map(({ slug, titulo, resumo }) => ({ slug, titulo, resumo })),
    },
  };
}
