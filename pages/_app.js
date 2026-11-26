import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* analytics próprio, sem cookies: só carrega depois da página (não pesa no Lighthouse) */}
      <Script src="/a.js" strategy="lazyOnload" />
    </>
  );
}
