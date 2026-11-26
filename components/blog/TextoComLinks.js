import Link from "next/link";
import ROTAS from "../../lib/rotas.json";

const EXISTE = new Set(ROTAS);
const existe = (href) => EXISTE.has(href.split(/[?#]/)[0].replace(/\/+$/, "") || "/");

// Converte [rótulo](/caminho) em <Link>. Caminho interno que ainda não existe (post por publicar)
// sai como texto, para não dar 404. [rótulo](https://...) vira link externo, só para citar a fonte.
export default function TextoComLinks({ texto }) {
  const partes = [];
  const re = /\[([^\]]+)\]\((\/[^)]*|https:\/\/[^)]+)\)/g;
  let ultimo = 0;
  let m;
  while ((m = re.exec(texto))) {
    if (m.index > ultimo) partes.push(texto.slice(ultimo, m.index));
    if (m[2].startsWith("https://")) {
      partes.push(
        <a
          key={m.index}
          href={m[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-marca-700 underline underline-offset-2 hover:text-marca-600"
        >
          {m[1]}
        </a>
      );
      ultimo = re.lastIndex;
      continue;
    }
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
