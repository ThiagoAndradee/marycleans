import PaginaSeo from "../components/PaginaSeo";
import { PAGINAS_SEO } from "../lib/seo-paginas";
import { PAGINAS_ZONAS } from "../lib/seo-paginas-zonas";
import { POSTS } from "../lib/blog";

// Uma rota para todas as páginas de serviço por zona (lib/seo-paginas.js).
// As rotas fixas (/contacto, /servicos, /blog...) têm precedência sobre esta.
// Junta as duas levas de páginas de zona (lib/seo-paginas.js e lib/seo-paginas-zonas.js).
const TODAS = [...PAGINAS_SEO, ...PAGINAS_ZONAS];
const paginaSeoPorSlug = (slug) => TODAS.find((p) => p.slug === slug);

export default function Seo(props) {
  return <PaginaSeo {...props} />;
}

export function getStaticPaths() {
  return {
    paths: TODAS.map((p) => ({ params: { seo: p.slug } })),
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
