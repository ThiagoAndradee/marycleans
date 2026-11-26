import { useEffect, useState } from "react";
import Link from "next/link";
import { TEM_MEDICAO, escolhaGuardada, definirConsentimento, carregarEtiquetas } from "../lib/medicao";

// Banner leve de consentimento. Só aparece quando há alguma etiqueta configurada (TEM_MEDICAO)
// e a pessoa ainda não escolheu. Para rever o banner sem IDs: ?consentimento=teste.
// "Recusar" e "Aceitar" têm o mesmo peso visual, como pedem as autoridades de proteção de dados.
// Para mudar de ideias: qualquer link com href="#cookies" volta a abrir o banner.
export default function Consentimento() {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const teste = /[?&]consentimento=teste\b/.test(window.location.search);
    if (!TEM_MEDICAO && !teste) return undefined;
    const escolha = escolhaGuardada();
    if (escolha === "aceite") carregarEtiquetas();
    if (!escolha || teste) setAberto(true);
    const reabrir = (e) => {
      const a = e.target.closest && e.target.closest('a[href="#cookies"]');
      if (!a) return;
      e.preventDefault();
      setAberto(true);
    };
    document.addEventListener("click", reabrir);
    return () => document.removeEventListener("click", reabrir);
  }, []);

  if (!aberto) return null;

  const escolher = (aceite) => {
    definirConsentimento(aceite);
    setAberto(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookies de medição"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-lg border border-tinta-200 bg-white p-4 text-sm text-tinta-700 shadow-[0_20px_50px_-20px_rgba(13,42,56,0.45)] sm:bottom-5 sm:p-5"
    >
      <p className="leading-6">
        Usamos cookies de medição só se aceitar. Servem para saber que anúncios e páginas trazem
        pedidos de orçamento. Se recusar, o site funciona igual.{" "}
        <Link href="/privacidade" className="font-medium text-marca-700 underline underline-offset-2">
          Política de privacidade
        </Link>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button type="button" onClick={() => escolher(false)} className="botao-secundario min-h-[44px]">
          Recusar
        </button>
        <button type="button" onClick={() => escolher(true)} className="botao-secundario min-h-[44px]">
          Aceitar
        </button>
      </div>
    </div>
  );
}
