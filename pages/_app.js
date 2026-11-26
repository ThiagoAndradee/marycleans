import { Inter } from "next/font/google";
import { useEffect } from "react";
import "@/styles/globals.css";
import dynamic from "next/dynamic";
import { ouvirCliquesDeContacto } from "../lib/medicao";

// O banner vem num pedaço de JS à parte, só no browser: não pesa na primeira carga.
const Consentimento = dynamic(() => import("../components/Consentimento"), { ssr: false });

// Inter servida pelo próprio site (next/font): sem CSS externo do Google a bloquear a
// primeira pintura, e com fonte de recurso ajustada para não mexer o layout (CLS).
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  // Pontos de conversão por clique (WhatsApp, telefone, email): um só ouvinte no site todo.
  useEffect(() => ouvirCliquesDeContacto(), []);

  return (
    <>
      <style jsx global>{`
        :root {
          --fonte-inter: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Consentimento />
    </>
  );
}
