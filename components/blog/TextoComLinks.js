import Link from "next/link";
import ROTAS from "../../lib/rotas.json";

const EXISTE = new Set(ROTAS);
const existe = (href) => EXISTE.has(href.split(/[?#]/)[0].replace(/\/+$/, "") || "/");

// Converte [rótulo](/caminho) em <Link>. Só links internos, os posts não citam sites de fora.
// Caminho que ainda não existe (post por publicar) sai como texto, para não dar 404.
export default function TextoComLinks({ texto }) {
  const partes = [];
  const re = /\[([^\]]+)\]\((\/[^)]*)\)/g;
  let ultimo = 0;
  let m;
  while ((m = re.exec(texto))) {
    if (m.index > ultimo) partes.push(texto.slice(ultimo, m.index));
    if (!existe(m[2])) {
      partes.push(m[1]);
      ultimo = re.lastIndex;
      continue;
    }
    partes.push(
      <Link
        key={m.index}
        href={m[2]}
        className="font-medium text-marca-700 underline underline-offset-2 hover:text-marca-600"
      >
        {m[1]}
      </Link>
    );
    ultimo = re.lastIndex;
  }
  if (ultimo < texto.length) partes.push(texto.slice(ultimo));
  return <>{partes}</>;
}

export const semLinks = (texto) => texto.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
