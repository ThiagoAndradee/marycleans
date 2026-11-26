import { conversao } from "../lib/medicao";
import { useState } from "react";
import { EMPRESA, FREQUENCIAS, WHATSAPP } from "../lib/negocio";
import { PROMO, promoAtiva } from "../lib/promo";
import { PromoNota, usePromo } from "./PromoFaixa";

// Formulário curto de proposta para empresas (gestoras de alojamento local, imobiliárias).
//
// O pedido segue por email através do FormSubmit (formsubmit.co) para EMPRESA.email.
// No primeiro envio o FormSubmit manda um email de activação para essa caixa: enquanto
// ninguém clicar nele, os pedidos não são entregues. Se o envio falhar por qualquer motivo,
// o formulário mostra o resumo e oferece o WhatsApp, para o pedido não se perder.
const ENVIO_LIGADO = true;
const DESTINO = `https://formsubmit.co/ajax/${EMPRESA.email}`;

const VAZIO = { empresa: "", imoveis: "", zona: "", frequencia: "", contacto: "" };

export default function FormProposta({ zonaInicial = "", servico = "" }) {
  const [d, setD] = useState({ ...VAZIO, zona: zonaInicial });
  const [erros, setErros] = useState({});
  const [pronto, setPronto] = useState(false); // false | "enviado" | "falhou"
  const [enviando, setEnviando] = useState(false);
  const [mel, setMel] = useState("");
  const promo = usePromo();

  const mudar = (campo) => (e) => {
    setD((v) => ({ ...v, [campo]: e.target.value }));
    setErros((v) => ({ ...v, [campo]: undefined }));
  };

  const resumo = [
    `Pedido de proposta${servico ? `: ${servico}` : ""}`,
    `Empresa ou nome: ${d.empresa}`,
    `Imóveis ou unidades: ${d.imoveis}`,
    `Freguesia ou zona: ${d.zona}`,
    `Frequência: ${d.frequencia}`,
    `Contacto: ${d.contacto}`,
    promoAtiva() ? `Promoção: ${PROMO.resumo}` : null,
  ].filter(Boolean).join("\n");

  const enviar = async (e) => {
    e.preventDefault();
    const f = {};
    if (!d.empresa.trim()) f.empresa = "Indique a empresa ou o seu nome.";
    if (!d.imoveis || Number(d.imoveis) < 1) f.imoveis = "Indique quantos imóveis ou unidades.";
    if (!d.zona.trim()) f.zona = "Indique a freguesia ou a zona.";
    if (!d.frequencia) f.frequencia = "Escolha a frequência.";
    if (!/@|\d{9}/.test(d.contacto.replace(/\s/g, "")))
      f.contacto = "Indique um email ou um telefone.";
    setErros(f);
    if (Object.keys(f).length) return;
    if (!ENVIO_LIGADO) return setPronto("falhou");
    if (mel) return setPronto("enviado"); // campo-armadilha preenchido: é um robô
    setEnviando(true);
    try {
      const r = await fetch(DESTINO, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `${promoAtiva() ? "[Black Friday] " : ""}Pedido de proposta: ${d.empresa} (${d.zona})`,
          _template: "table",
          _captcha: "false",
          Empresa: d.empresa,
          "Imóveis ou unidades": d.imoveis,
          "Freguesia ou zona": d.zona,
          Frequência: d.frequencia,
          Contacto: d.contacto,
          Serviço: servico,
          Página: window.location.pathname,
          ...(promoAtiva() ? { promo: PROMO.codigo, Promoção: PROMO.resumo } : {}),
        }),
      });
      const j = await r.json().catch(() => ({}));
      const ok = r.ok && String(j.success) === "true";
      if (ok) conversao("lead_proposta", { servico, zona: d.zona });
      setPronto(ok ? "enviado" : "falhou");
    } catch {
      setPronto("falhou");
    } finally {
      setEnviando(false);
    }
  };

  if (pronto)
    return (
      <div className="cartao mt-8 max-w-2xl" role="status">
        <h3 className="text-titulo-3 text-tinta-900">
          {pronto === "enviado" ? "Pedido enviado" : "Não conseguimos enviar o pedido"}
        </h3>
        <p className="mt-3 text-sm leading-6 text-tinta-600">
          {pronto === "enviado"
            ? "Respondemos por escrito para o contacto que indicou. Se preferir, pode mandar o mesmo pedido por WhatsApp."
            : "O envio por email falhou. Mande o pedido por WhatsApp, já vai preenchido."}
        </p>
        <pre className="mt-4 whitespace-pre-wrap text-sm leading-6 text-tinta-700">{resumo}</pre>
        <a
          href={WHATSAPP(resumo)}
          target="_blank"
          rel="noreferrer noopener"
          className={pronto === "enviado" ? "botao-secundario mt-5" : "botao mt-5"}
        >
          Enviar por WhatsApp
        </a>
      </div>
    );

  const Campo = ({ id, rotulo, children }) => (
    <div>
      <label htmlFor={id} className="rotulo">
        {rotulo}
      </label>
      {children}
      {erros[id] ? (
        <p className="mt-1 text-sm text-red-700" role="alert">
          {erros[id]}
        </p>
      ) : null}
    </div>
  );

  return (
    <form onSubmit={enviar} noValidate className="mt-8 max-w-2xl" data-envio={ENVIO_LIGADO ? "ligado" : "desligado"}>
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        value={mel}
        onChange={(e) => setMel(e.target.value)}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {Campo({
          id: "empresa",
          rotulo: "Empresa ou nome",
          children: (
            <input id="empresa" className="campo" autoComplete="organization" value={d.empresa} onChange={mudar("empresa")} />
          ),
        })}
        {Campo({
          id: "imoveis",
          rotulo: "Número de imóveis ou unidades",
          children: (
            <input id="imoveis" className="campo" type="number" min="1" inputMode="numeric" value={d.imoveis} onChange={mudar("imoveis")} />
          ),
        })}
        {Campo({
          id: "zona",
          rotulo: "Freguesia ou zona",
          children: <input id="zona" className="campo" value={d.zona} onChange={mudar("zona")} />,
        })}
        {Campo({
          id: "frequencia",
          rotulo: "Frequência",
          children: (
            <select id="frequencia" className="campo" value={d.frequencia} onChange={mudar("frequencia")}>
              <option value="">Escolher</option>
              {FREQUENCIAS.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          ),
        })}
        <div className="sm:col-span-2">
          {Campo({
            id: "contacto",
            rotulo: "Email ou telefone",
            children: (
              <input id="contacto" className="campo" autoComplete="email" value={d.contacto} onChange={mudar("contacto")} />
            ),
          })}
        </div>
      </div>
      {promo ? <input type="hidden" name="promo" value={PROMO.codigo} className="promo-bf" /> : null}
      <PromoNota />
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="botao" disabled={enviando}>
          {enviando ? "A enviar..." : "Pedir proposta"}
        </button>
        <span className="text-sm text-tinta-500">
          Os dados servem só para responder a este pedido. Ver a{" "}
          <a href="/privacidade" className="underline underline-offset-2">
            política de privacidade
          </a>
          .
        </span>
      </div>
      <p className="mt-4 text-sm text-tinta-600">
        Prefere falar já? WhatsApp{" "}
        <a href={WHATSAPP("Bom dia. Queria pedir uma proposta de limpeza para ")} className="font-medium text-marca-700 underline underline-offset-2">
          {EMPRESA.telefone}
        </a>
        .
      </p>
    </form>
  );
}
