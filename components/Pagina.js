import Cabecalho from "./Cabecalho";
import Footer from "./Footer";
import BotaoWhatsApp from "./BotaoWhatsApp";
import PromoFaixa from "./PromoFaixa";
import Seo, { negocioJsonLd } from "./Seo";

export default function Pagina({ titulo, descricao, caminho, jsonLd, noindex, children }) {
  return (
    <>
      <Seo
        titulo={titulo}
        descricao={descricao}
        caminho={caminho}
        noindex={noindex}
        jsonLd={jsonLd || negocioJsonLd}
      />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-marca-700 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Saltar para o conteúdo
      </a>
      <PromoFaixa />
      <Cabecalho />
      <main id="conteudo">{children}</main>
      <Footer />
      <BotaoWhatsApp />
    </>
  );
}
