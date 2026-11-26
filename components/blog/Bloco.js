import TextoComLinks from "./TextoComLinks";

// Um bloco do corpo de um post (ver o formato em lib/blog.js).
export default function Bloco({ b }) {
  if (b.t === "h2")
    return (
      <h2 id={b.id} className="mt-12 scroll-mt-28 text-titulo-2 text-tinta-900">
        {b.x}
      </h2>
    );
  if (b.t === "h3")
    return <h3 className="mt-8 text-titulo-3 text-tinta-900">{b.x}</h3>;
  if (b.t === "lista")
    return (
      <ul className="mt-4 max-w-leitura list-disc space-y-2 pl-5 text-tinta-600 marker:text-marca-600">
        {b.x.map((item) => (
          <li key={item} className="leading-7">
            <TextoComLinks texto={item} />
          </li>
        ))}
      </ul>
    );
  if (b.t === "caixa")
    return (
      <section
        id={b.id}
        aria-labelledby={b.id ? `${b.id}-titulo` : undefined}
        className="mt-12 scroll-mt-28 rounded-lg border border-marca-200 bg-marca-50 p-5 sm:p-7"
      >
        {b.etiqueta ? (
          <div className="inline-flex rounded bg-marca-700 px-2 py-1 text-etiqueta uppercase text-white">
            {b.etiqueta}
          </div>
        ) : null}
        {b.x.map((filho, i) =>
          filho.t === "h2" && i === 0 ? (
            <h2 key={i} id={b.id ? `${b.id}-titulo` : undefined} className="mt-3 text-titulo-2 text-tinta-900">
              {filho.x}
            </h2>
          ) : (
            <Bloco key={i} b={filho} />
          )
        )}
      </section>
    );
  return (
    <p className="mt-4 leading-7">
      <TextoComLinks texto={b.x} />
    </p>
  );
}
