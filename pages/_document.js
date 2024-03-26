import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <title>Mary Cleans - Limpeza Profissional para Sua Casa ou Escritório</title>
        <meta name="description" content="Mary Cleans oferece serviços de limpeza de alta qualidade com profissionais treinados e produtos ecológicos. Disponível para casas e escritórios 24/7. Reserve hoje!" />
        <meta name="keywords" content="limpeza profissional, serviços de limpeza, limpeza de casa, limpeza de escritório, limpeza ecológica, limpeza em Lisboa" />
        <meta property="og:title" content="Mary Cleans - Limpeza Profissional para Sua Casa ou Escritório" />
        <meta property="og:description" content="Serviços profissionais de limpeza com equipe treinada e produtos ecológicos. Confiabilidade e flexibilidade para o seu conforto e conveniência." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.marycleans.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
          {/* Outros elementos do head podem ser adicionados aqui */}
          {/* Google Tag Manager - Global site tag (gtag.js) */}
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-54MKRFTG');
              `,
            }}
          />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-54MKRFTG"
              height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* Aqui é onde o Next.js renderiza o app */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
