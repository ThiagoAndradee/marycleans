import Document, { Html, Head, Main, NextScript } from "next/document";
import { SCRIPT_PROMO } from "../lib/promo";

// O Google Tag Manager (GTM-54MKRFTG) foi retirado: carregava sem consentimento e sem
// banner de cookies. Volta quando houver decisao sobre medicao e um pedido de consentimento.

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-PT">
        <Head>
          <meta charSet="utf-8" />
          <script dangerouslySetInnerHTML={{ __html: SCRIPT_PROMO }} />
          <style>{`html[data-promo="off"] .promo-bf{display:none!important}`}</style>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
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
