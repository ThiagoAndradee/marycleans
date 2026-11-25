import Link from "next/link";
import Pagina from "../../components/Pagina";
import { POSTS } from "../../lib/blog";

const SITE = "https://www.marycleans.pt";

const dataPT = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function Blog({ posts }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Mary Cleans",
    url: `${SITE}/blog`,
    inLanguage: "pt-PT",
    publisher: { "@type": "Organization", name: "Mary Cleans", url: SITE },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.titulo,
      url: `${SITE}/blog/${p.slug}`,
      datePublished: p.data,
    })),
  };

  return (
    <Pagina
      titulo="Blog: limpeza de alojamento local e imóveis em Sintra e Lisboa"
      descricao="Artigos práticos sobre limpeza de alojamento local, entrega de chaves, preparação de casa para venda e preços de limpeza em Sintra e Lisboa."
      caminho="/blog"
      jsonLd={jsonLd}
    >
      <section className="border-b border-tinta-200">
        <div className="secao py-14 sm:py-16">
          <p className="etiqueta-secao">Blog</p>
          <h1 className="mt-4 max-w-3xl text-titulo-1">Limpeza, explicada por quem limpa.</h1>
          <p className="prosa mt-6">
            <span className="text-entrada">
              Listas e respostas para proprietários de alojamento local, consultores
              imobiliários e particulares em Sintra e Lisboa.
            </span>
          </p>
        </div>
      </section>

      <section className="secao secao-espaco">
        <ul className="grid gap-6 lg:grid-cols-2">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="cartao flex h-full flex-col transition-colors hover:border-marca-400"
              >
                <time dateTime={p.data} className="text-etiqueta uppercase text-tinta-500">
                  {dataPT(p.data)}
                </time>
                <h2 className="mt-3 text-titulo-3 text-tinta-900">{p.titulo}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-tinta-600">{p.resumo}</p>
                <span className="mt-5 text-sm font-semibold text-marca-700">Ler artigo</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Pagina>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: POSTS.map(({ slug, titulo, resumo, data }) => ({ slug, titulo, resumo, data })),
    },
  };
}
