import { useState } from "react";
import { EMPRESA, FREQUENCIAS, WHATSAPP } from "../lib/negocio";

// Formulário curto de proposta para empresas (gestoras de alojamento local, imobiliárias).
//
// ⚠ ENVIO DESLIGADO. Falta o email da Mary Cleans (PENDENTE.email em lib/negocio.js).
// Enquanto ENVIO_LIGADO for false, o formulário valida, não envia nada para servidor nenhum
// e mostra o resumo com a opção de o mandar por WhatsApp. Quando houver email, ligar aqui
// o POST para /api/orcamento (ou para o serviço de email escolhido) e pôr ENVIO_LIGADO a true.
const ENVIO_LIGADO = false;

const VAZIO = { empresa: "", imoveis: "", zona: "", frequencia: "", contacto: "" };

export default function FormProposta({ zonaInicial = "", servico = "" }) {
  const [d, setD] = useState({ ...VAZIO, zona: zonaInicial });
  const [erros, setErros] = useState({});
  const [pronto, setPronto] = useState(false);

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
  ].join("\n");

  const enviar = (e) => {
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
    // ENVIO_LIGADO === false: nada sai daqui.
    setPronto(true);
  };

  if (pronto)
    return (
      <div className="cartao mt-8 max-w-2xl" role="status">
        <h3 className="text-titulo-3 text-tinta-900">Pedido preenchido</h3>
        {!ENVIO_LIGADO ? (
          <p className="mt-3 rounded border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            Pré-visualização: o envio por email ainda não está ligado [confirmar email da Mary
            Cleans]. Para já, o pedido segue por WhatsApp.
          </p>
        ) : null}
        <pre className="mt-4 whitespace-pre-wrap text-sm leading-6 text-tinta-700">{resumo}</pre>
        <a
          href={WHATSAPP(resumo)}
          target="_blank"
          rel="noreferrer noopener"
          className="botao mt-5"
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
      {!ENVIO_LIGADO ? (
        <p className="mb-5 rounded border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          Pré-visualização: formulário sem envio ligado [confirmar email da Mary Cleans].
        </p>
      ) : null}
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
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="botao">
          Pedir proposta
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
