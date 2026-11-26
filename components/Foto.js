// Foto com AVIF e WebP em duas larguras. O browser escolhe pelo ecrã: no telemóvel desce a
// versão de 640 px (cerca de 15 KB em AVIF) em vez do JPG de 1300 px.
// Os ficheiros saem de public/media/<nome>-<largura>.avif|webp (gerados com sharp, 26/11/2026).
export default function Foto({ nome, larguras, alt, sizes, className = "", largura, altura, prioridade = false }) {
  const conjunto = (ext) => larguras.map((w) => `/media/${nome}-${w}.${ext} ${w}w`).join(", ");
  const maior = larguras[larguras.length - 1];
  return (
    <picture>
      <source type="image/avif" srcSet={conjunto("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={conjunto("webp")} sizes={sizes} />
      <img
        src={`/media/${nome}-${maior}.webp`}
        alt={alt}
        width={largura}
        height={altura}
        className={className}
        loading={prioridade ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={prioridade ? "high" : undefined}
      />
    </picture>
  );
}
