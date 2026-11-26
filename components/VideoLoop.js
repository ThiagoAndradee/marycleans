import { useEffect, useRef } from "react";

// Vídeo em loop, sem som e sem texto. Mesmo padrão do site da Lacre:
// preload="none", só carrega depois da página (load + 1,5 s), e não carrega no celular
// (menos de 768 px), com economia de dados, rede 2G/3G ou movimento reduzido. Aí fica o poster.
//
// poster="sempre": o poster é uma <img> com loading="lazy" por baixo do vídeo. No telemóvel
//   desce a versão de 640 px e só quando o bloco se aproxima do ecrã.
// poster="nenhum": quem chama já mostra a imagem por baixo (o hero, com prioridade de carga).
export default function VideoLoop({ video, className = "", alt = "", poster = "sempre" }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || !video) return undefined;
    const c = navigator.connection || {};
    const lento = c.saveData || /(^|-)[23]g$/.test(c.effectiveType || "");
    const pequeno = window.matchMedia("(max-width: 767px)").matches;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (lento || pequeno || reduz) return undefined;
    let t;
    const comecar = () => {
      t = setTimeout(() => {
        const av1 = video.webm && v.canPlayType('video/webm; codecs="av01.0.05M.08"');
        v.src = av1 ? video.webm : video.mp4;
        v.muted = true;
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      }, 1500);
    };
    if (document.readyState === "complete") comecar();
    else window.addEventListener("load", comecar, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", comecar);
    };
  }, [video]);

  if (!video) return null;
  const pequeno = video.poster.replace(/\.webp$/, "-640.webp");
  return (
    <>
      {poster === "sempre" ? (
        <img
          src={video.poster}
          srcSet={`${pequeno} 640w, ${video.poster} 960w`}
          sizes="(min-width: 1024px) 896px, calc(100vw - 48px)"
          alt=""
          width={960}
          height={540}
          loading="lazy"
          decoding="async"
          className={className}
        />
      ) : null}
      <video
        ref={ref}
        className={className}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden={alt ? undefined : "true"}
        aria-label={alt || undefined}
      />
    </>
  );
}
