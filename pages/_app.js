import { Inter } from "next/font/google";
import "@/styles/globals.css";

// Inter servida pelo próprio site (next/font): sem CSS externo do Google a bloquear a
// primeira pintura, e com fonte de recurso ajustada para não mexer o layout (CLS).
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --fonte-inter: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
