// Vídeos curtos por grupo de páginas (HyperFrames + imagens do Higgsfield, 26/11/2026).
// Cada vídeo tem versão leve em MP4 (H.264) e WebM (AV1), até 1,5 MB, e um poster em WebP.
// Só entra no site o grupo que tem entrada aqui. Sem entrada, a página mostra só o poster ou nada.
// Regra do Thiago: imagem de empresa (equipa de uniforme, kit profissional, lista, fotos de prova),
// nunca cena caseira nem rosto com cara de IA.

const V = (nome) => ({
  mp4: `/media/video/${nome}-web.mp4`,
  webm: `/media/video/${nome}-web.webm`,
  poster: `/media/video/${nome}-poster.webp`,
});

export const VIDEOS = {
  home: V("home"),
  alojamento: V("alojamento"),
  bairros: V("bairros"),
  concelhos: V("concelhos"),
  servicos: V("servicos"),
  perfis: V("perfis"),
};

export function videoDoGrupo(grupo) {
  return VIDEOS[grupo] || null;
}
