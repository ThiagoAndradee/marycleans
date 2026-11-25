import PaginaSeo from "../components/PaginaSeo";
import { PAGINAS_SEO, paginaSeoPorSlug } from "../lib/seo-paginas";
import { POSTS } from "../lib/blog";

// Uma rota para todas as páginas de serviço por zona (lib/seo-paginas.js).
// As rotas fixas (/contacto, /servicos, /blog...) têm precedência sobre esta.

export default function Seo(props) {
  return <PaginaSeo {...props} />;
}

export function getStaticPaths() {
  return {
    paths: PAGINAS_SEO.map((p) => ({ params: { seo: p.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const pagina = paginaSeoPorSlug(params.seo);
  if (!pagina) return { notFound: true };
  return {
    props: {
      pagina,
      relacionadas: pagina.relacionadas
        .map(paginaSeoPorSlug)
        .filter(Boolean)
        .map(({ slug, rotulo }) => ({ slug, rotulo })),
      posts: pagina.posts
        .map((s) => POSTS.find((p) => p.slug === s))
        .filter(Boolean)
        .map(({ slug, titulo }) => ({ slug, titulo })),
    },
  };
}
