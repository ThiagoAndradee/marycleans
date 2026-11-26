import { useEffect, useState } from "react";
import { EMPRESA, WHATSAPP } from "../lib/negocio";

// Barra fixa só no telemóvel (até 480 px). Usa os mesmos botões do site: o primário leva ao
// formulário da própria página (#proposta ou #orcamento) ou a /contacto, e o WhatsApp abre a
// mesma mensagem do botão flutuante. Aparece depois do primeiro ecrã e some quando o
// formulário está à vista, para não tapar o que a pessoa está a preencher.
// No computador e no tablet continua o botão flutuante de WhatsApp de sempre.

const MENSAGEM = "Bom dia. Gostaria de pedir um orçamento de limpeza. O imóvel fica em ";

export default function CtaTelemovel() {
  const [visivel, setVisivel] = useState(false);
  const [destino, setDestino] = useState("/contacto");

  useEffect(() => {
    const form = document.getElementById("proposta") || document.getElementById("orcamento");
    if (form) setDestino(`#${form.id}`);
    let formVisivel = false;
    const atualizar = () => setVisivel(window.scrollY > window.innerHeight * 0.8 && !formVisivel);
    let obs;
    if (form && "IntersectionObserver" in window) {
      obs = new IntersectionObserver(([e]) => {
        formVisivel = e.isIntersecting;
        atualizar();
      });
      obs.observe(form);
    }
    window.addEventListener("scroll", atualizar, { passive: true });
    atualizar();
    return () => {
      window.removeEventListener("scroll", atualizar);
      if (obs) obs.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-tinta-200 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_-12px_rgba(13,42,56,0.25)] backdrop-blur transition-transform duration-200 min-[481px]:hidden ${
        visivel ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={visivel ? undefined : "true"}
    >
      <div className="flex gap-3">
        <a href={destino} className="botao min-h-[44px] flex-1" tabIndex={visivel ? undefined : -1}>
          Pedir proposta
        </a>
        <a
          href={WHATSAPP(MENSAGEM)}
          target="_blank"
          rel="noreferrer noopener"
          className="botao-secundario min-h-[44px] gap-2 px-4"
          aria-label={`Falar por WhatsApp para ${EMPRESA.telefone}`}
          tabIndex={visivel ? undefined : -1}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current text-[#25D366]">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0012.04 2zm5.8 14.06c-.24.68-1.42 1.3-1.95 1.35-.5.05-.97.23-3.27-.68-2.77-1.09-4.52-3.92-4.66-4.1-.13-.18-1.1-1.47-1.1-2.8 0-1.33.7-1.99.95-2.26.24-.27.53-.34.71-.34l.51.01c.16 0 .38-.06.6.46.23.53.77 1.86.84 2 .07.13.11.29.02.47-.09.18-.13.29-.27.45-.13.16-.28.35-.4.47-.13.13-.27.28-.12.55.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.43.11.58-.07.16-.18.67-.78.85-1.05.18-.27.36-.22.6-.13.25.09 1.57.74 1.84.88.27.13.45.2.51.31.07.11.07.65-.17 1.33z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
