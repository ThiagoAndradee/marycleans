import Head from "next/head";
import Link from "next/link";
import VideoLoop from "./VideoLoop";
import { videoDoGrupo } from "../lib/videos";
import { EMPRESA, WHATSAPP } from "../lib/negocio";
import { PromoCartao } from "./PromoFaixa";

// Hero com vídeo. O vídeo e as imagens foram gerados por IA e dizem-no na própria página
// ("imagens ilustrativas"). Quando houver vídeo real de uma limpeza, troca-se o ficheiro
// em public/media/ e o aviso sai.

const FACTOS = [
  { titulo: "Equipa treinada, de uniforme", texto: "Profissionais dedicados, com uma lista própria para cada casa." },
  { titulo: "Sempre a mesma equipa", texto: "A casa não roda por pessoas diferentes a cada semana." },
  { titulo: "Fotografias no fim", texto: "Cada divisão fotografada, enviadas a si quando a casa fica pronta." },
];

// Imagem do hero: o poster do vídeo da home (o que sempre apareceu no ecrã), em duas larguras.
const HERO = {
  webp: "/media/video/home-poster.webp",
  webp640: "/media/video/home-poster-640.webp",
  avif640: "/media/video/home-poster-640.avif",
};

const MENSAGEM = "Bom dia. Gostaria de pedir um orçamento de limpeza. O imóvel fica em ";

export default function HeroV2() {
  const video = videoDoGrupo("home");

  return (
    <section className="relative isolate overflow-hidden bg-marca-950 text-white">
      <Head>
        <link rel="preload" as="image" href={HERO.avif640} type="image/avif" media="(max-width: 767px)" fetchpriority="high" />
        <link rel="preload" as="image" href={HERO.webp} type="image/webp" media="(min-width: 768px)" fetchpriority="high" />
      </Head>
      {/* Fundo: vídeo com poster, escurecido para o texto passar 4,5:1 */}
      <div className="absolute inset-0 -z-10">
        {/* Poster sempre; o vídeo de empresa só entra no computador e depois da página carregar. */}
        {/* A imagem visível é o poster do vídeo (era o atributo poster do <video>). Agora é uma
            <img> com prioridade: no telemóvel desce a versão de 640 px e o vídeo nem é pedido.
            A antiga hero-empresa.webp ficava escondida por baixo e era descarregada à toa. */}
        <picture>
          <source media="(max-width: 767px)" type="image/avif" srcSet={HERO.avif640} />
          <source media="(max-width: 767px)" type="image/webp" srcSet={HERO.webp640} />
          <img
            src={HERO.webp}
            alt=""
            width={960}
            height={540}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
        </picture>
        {video ? <VideoLoop video={video} poster="nenhum" className="absolute inset-0 h-full w-full object-cover" /> : null}
        <div className="absolute inset-0 bg-gradient-to-r from-marca-950 via-marca-950/85 to-marca-950/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-marca-950 to-transparent" />
      </div>

      <div className="secao grid min-h-[88vh] items-end gap-12 pb-14 pt-24 sm:pb-20 lg:grid-cols-12 lg:items-center lg:pt-28 max-[480px]:min-h-0 max-[480px]:gap-8 max-[480px]:pb-10 max-[480px]:pt-10">
        <div className="min-w-0 lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-marca-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5fd0a0]" aria-hidden="true" />
            Lisboa, Sintra e Cascais
          </p>

          <h1 className="mt-6 text-[2.1rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl xl:text-[3.5rem]">
            Limpeza de alojamento local em Lisboa,{" "}
            <span className="text-marca-200">com a casa pronta antes do check-in.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80 max-[480px]:mt-4 max-[480px]:text-base max-[480px]:leading-7">
            Para gestoras de alojamento local e imobiliárias. A mesma equipa em todas as casas,
            preço fechado por imóvel e relatório com fotografias depois de cada limpeza.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row max-[480px]:mt-7">
            <Link
              href="/limpeza-alojamento-local-lisboa#proposta"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-marca-950 shadow-[0_10px_40px_-10px_rgba(142,195,218,0.7)] transition hover:bg-marca-50"
            >
              Pedir proposta
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={WHATSAPP(MENSAGEM)}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              WhatsApp {EMPRESA.telefone}
            </a>
          </div>
          <PromoCartao />
        </div>

        {/* Cartões grandes com o que a empresa pequena consegue prometer */}
        <ul className="grid min-w-0 gap-3 lg:col-span-5">
          {FACTOS.map((f, i) => (
            <li
              key={f.titulo}
              className="group rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md transition hover:border-marca-300/60 hover:bg-white/[0.1]"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-marca-500/25 text-sm font-bold text-marca-100 ring-1 ring-inset ring-marca-300/30">
                  {i + 1}
                </span>
                <div>
                  <p className="text-base font-semibold text-white">{f.titulo}</p>
                  <p className="mt-1 text-sm leading-6 text-white/70">{f.texto}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="secao pb-4 text-right text-[11px] text-white/50">Imagens ilustrativas</p>
    </section>
  );
}
