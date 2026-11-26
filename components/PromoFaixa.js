import Link from "next/link";
import { useEffect, useState } from "react";
import { PROMO, promoAtiva } from "../lib/promo";

export const LINK_PROMO = "/limpeza-alojamento-local-lisboa?promo=BLACKFRIDAY#proposta";

// A página é estática: o HTML sai sempre com a promoção e o browser confirma a data depois de hidratar.
// Depois do fim, o script no _document já a escondeu antes de pintar (html[data-promo="off"]).
export function usePromo() {
  const [ativa, setAtiva] = useState(true);
  useEffect(() => setAtiva(promoAtiva()), []);
  return ativa;
}

export default function PromoFaixa() {
  const ativa = usePromo();
  if (!ativa) return null;
  return (
    <div className="promo-bf relative z-40 print:hidden border-b border-white/10 bg-marca-950 text-white">
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#5fd0a0] via-marca-400 to-marca-700" aria-hidden="true" />
      <div className="secao flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 py-2.5 text-center text-sm">
        <span className="rounded-md bg-[#5fd0a0] px-2 py-1 text-[11px] font-bold uppercase leading-none tracking-[0.12em] text-marca-950">
          {PROMO.titulo}
        </span>
        <span className="font-medium text-white">
          <span className="hidden sm:inline">25% de desconto na primeira limpeza de check-out para novos parceiros.</span>
          <span className="sm:hidden">25% na primeira limpeza de check-out</span>
        </span>
        <span className="hidden text-white/65 md:inline">Pedidos até 30/11</span>
        <Link href={LINK_PROMO} className="font-semibold text-marca-200 underline underline-offset-4 hover:text-white">
          Pedir proposta
        </Link>
      </div>
    </div>
  );
}

// Cartão grande para o hero (fundo escuro)
export function PromoCartao({ claro = false }) {
  const ativa = usePromo();
  if (!ativa) return null;
  return (
    <div
      className={`promo-bf relative mt-8 grid max-w-xl grid-cols-[auto_1fr] items-center gap-x-5 gap-y-1 overflow-hidden rounded-2xl border p-5 ${
        claro
          ? "border-marca-900 bg-marca-950 text-white shadow-[0_20px_50px_-25px_rgba(13,42,56,0.8)]"
          : "border-[#5fd0a0]/40 bg-white/[0.08] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md"
      }`}
    >
      <div className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 rounded-full bg-[#5fd0a0]/25 blur-3xl" aria-hidden="true" />
      <p className="row-span-2 text-5xl font-bold leading-none tracking-[-0.04em] text-[#5fd0a0] sm:text-6xl">25%</p>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-marca-200">{PROMO.titulo} · novos parceiros</p>
      <p className="text-sm leading-6 text-white/85">de desconto na primeira limpeza de check-out.</p>
      <div className="col-span-2 mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <Link
          href={LINK_PROMO}
          className="inline-flex items-center justify-center rounded-lg bg-[#5fd0a0] px-4 py-2.5 text-sm font-semibold text-marca-950 transition hover:bg-[#7ddcb4]"
        >
          Pedir proposta com desconto
        </Link>
        <span className="text-xs text-white/65">{PROMO.condicoes}</span>
      </div>
    </div>
  );
}

// Nota dentro dos formulários
export function PromoNota() {
  const ativa = usePromo();
  if (!ativa) return null;
  return (
    <p className="promo-bf mt-6 rounded-lg border border-[#5fd0a0]/50 bg-[#5fd0a0]/10 px-4 py-3 text-sm leading-6 text-tinta-800">
      <b className="text-marca-900">Black Friday:</b> este pedido segue com o desconto de 25% na primeira limpeza de check-out,
      se for um novo parceiro. {PROMO.condicoes}
    </p>
  );
}
