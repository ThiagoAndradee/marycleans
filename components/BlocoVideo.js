import VideoLoop from "./VideoLoop";
import { videoDoGrupo } from "../lib/videos";

// Faixa de vídeo curto no topo das páginas principais. Sem vídeo para o grupo, não mostra nada.
export default function BlocoVideo({ grupo }) {
  const video = videoDoGrupo(grupo);
  if (!video) return null;
  return (
    <div className="secao pb-12">
      <div className="relative aspect-video max-w-4xl overflow-hidden rounded-2xl bg-tinta-100 shadow-sm">
        <VideoLoop video={video} className="absolute inset-0 h-full w-full object-cover" />
        <p className="absolute bottom-2 right-3 text-[11px] text-white/80">Imagem ilustrativa</p>
      </div>
    </div>
  );
}
