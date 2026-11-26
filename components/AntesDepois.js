import { useState } from "react";

// Comparador antes e depois. As duas imagens são ilustrativas (geradas por IA) até haver
// fotografias reais de uma limpeza, tiradas com autorização do proprietário.

export default function AntesDepois() {
  const [pos, setPos] = useState(50);

  return (
    <section className="bg-marca-950 text-white">
      <div className="secao pb-20 pt-6 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-marca-300">
              Entre um hóspede e o seguinte
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              O que o hóspede deixa, e o que o próximo encontra.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              Arraste para comparar. No fim de cada limpeza recebe fotografias como estas, de cada
              divisão, para saber como a casa ficou sem lá ir.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/15 shadow-[0_40px_120px_-30px_rgba(43,142,180,0.55)]">
              <img
                src="/media/depois.jpg"
                alt="Sala de alojamento local arrumada e limpa, pronta para o próximo hóspede"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
                <img
                  src="/media/antes.jpg"
                  alt="A mesma sala logo após a saída dos hóspedes, por arrumar"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                style={{ left: `${pos}%` }}
                aria-hidden="true"
              >
                <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-bold text-marca-950 shadow-lg">
                  ⇆
                </span>
              </div>
              <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold backdrop-blur">
                Antes
              </span>
              <span className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-marca-950 backdrop-blur">
                Depois
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={pos}
                onChange={(e) => setPos(Number(e.target.value))}
                className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
                aria-label="Comparar antes e depois da limpeza"
              />
            </div>
            <p className="mt-3 text-right text-[11px] text-white/50">Imagens ilustrativas</p>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-white/15 shadow-[0_40px_120px_-30px_rgba(43,142,180,0.45)]">
              <img
                src="/media/equipa.jpg"
                alt="Profissionais de uniforme Mary Cleans a limpar a cozinha de um alojamento local em Lisboa"
                className="aspect-[16/9] w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-right text-[11px] text-white/50">Imagem ilustrativa</p>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-marca-300">
              Quem entra na sua casa
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Uma equipa treinada, de uniforme, sempre a mesma.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              Não mandamos pessoas diferentes a cada semana. Quem limpa a sua casa conhece a casa,
              sabe onde fica cada coisa e tem o número da Mary no telemóvel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
