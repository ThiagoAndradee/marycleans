import Document, { Html, Head, Main, NextScript } from "next/document";
import { SCRIPT_PROMO } from "../lib/promo";
import { SCRIPT_CONSENTIMENTO } from "../lib/medicao";

// O Google Tag Manager (GTM-54MKRFTG) foi retirado: carregava sem consentimento e sem
// banner de cookies. A medição agora está em lib/medicao.js: consentimento NEGADO por omissão,
// banner em components/Consentimento.js e scripts de terceiros só depois de "Aceitar".

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-PT">
        <Head>
          <meta charSet="utf-8" />
          <script dangerouslySetInnerHTML={{ __html: SCRIPT_CONSENTIMENTO }} />
          <script dangerouslySetInnerHTML={{ __html: SCRIPT_PROMO }} />
          <style>{`html[data-promo="off"] .promo-bf{display:none!important}`}</style>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
