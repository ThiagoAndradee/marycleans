import { conversao } from "../lib/medicao";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  CONCELHOS,
  TIPOLOGIAS,
  FREQUENCIAS,
  SERVICOS,
  EMPRESA,
  WHATSAPP,
} from "../lib/negocio";
import { PROMO, promoAtiva } from "../lib/promo";
import { PromoNota, usePromo } from "./PromoFaixa";

const CAMPOS_VAZIOS = {
  nome: "",
  telefone: "",
  email: "",
  concelho: "",
  localidade: "",
  tipologia: "",
  servico: "",
  frequencia: "",
  quantosImoveis: "1",
  mensagem: "",
  aceite: false,
};

function resumoTexto(d) {
  return [
    "Pedido de orçamento",
    `Nome: ${d.nome}`,
    `Telefone: ${d.telefone}`,
    d.email ? `Email: ${d.email}` : null,
    `Concelho: ${d.concelho}`,
    d.localidade ? `Localidade: ${d.localidade}` : null,
    `Tipologia: ${d.tipologia}`,
    `Serviço: ${d.servico}`,
    `Frequência: ${d.frequencia}`,
    Number(d.quantosImoveis) > 1 ? `Número de imóveis: ${d.quantosImoveis}` : null,
    d.mensagem ? `Observações: ${d.mensagem}` : null,
    d.promo ? `Promoção: ${PROMO.resumo}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function FormOrcamento({ servicoInicial, compacto = false }) {
  const router = useRouter();
  const promo = usePromo();
  const [dados, setDados] = useState({
    ...CAMPOS_VAZIOS,
    servico: servicoInicial || "",
  });
  const [erros, setErros] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [falha, setFalha] = useState(null);

  const mudar = (campo) => (evento) => {
    const valor =
      evento.target.type === "checkbox" ? evento.target.checked : evento.target.value;
    setDados((d) => ({ ...d, [campo]: valor }));
    setErros((e) => ({ ...e, [campo]: undefined }));
  };

  function validar() {
    const e = {};
    if (dados.nome.trim().length < 2) e.nome = "Indique o seu nome.";
    if (dados.telefone.replace(/\D/g, "").length < 9)
      e.telefone = "Indique um número de telefone com pelo menos 9 dígitos.";
    if (dados.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email))
      e.email = "Verifique o endereço de email.";
    if (!dados.concelho) e.concelho = "Escolha o concelho.";
    if (!dados.tipologia) e.tipologia = "Escolha a tipologia.";
    if (!dados.servico) e.servico = "Escolha o serviço.";
    if (!dados.frequencia) e.frequencia = "Escolha a frequência.";
    if (!dados.aceite) e.aceite = "É necessário aceitar a política de privacidade.";
    setErros(e);
    return Object.keys(e).length === 0;
  }

  async function submeter(evento) {
    evento.preventDefault();
    setFalha(null);
    if (!validar()) return;
    setEnviando(true);
    try {
      const resposta = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dados, promo: promoAtiva() ? PROMO.codigo : "" }),
      });
      const corpo = await resposta.json();
      if (!resposta.ok) throw new Error(corpo.erro || "Não foi possível enviar o pedido.");
      if (corpo.viaWhatsApp) {
        window.open(WHATSAPP(resumoTexto({ ...dados, promo: promoAtiva() ? PROMO.codigo : "" })), "_blank", "noopener");
      }
      conversao("lead_orcamento", { servico: dados.servico, concelho: dados.concelho });
      router.push("/obrigado");
    } catch (erro) {
      setFalha(erro.message);
      setEnviando(false);
    }
  }

  const grade = compacto ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <form onSubmit={submeter} noValidate className="mt-8">
      <div className={`grid grid-cols-1 gap-x-6 gap-y-5 ${grade}`}>
        <Campo id="nome" rotulo="Nome" erro={erros.nome}>
          <input
            id="nome"
            className="campo"
            autoComplete="name"
            value={dados.nome}
            onChange={mudar("nome")}
          />
        </Campo>

        <Campo id="telefone" rotulo="Telefone" erro={erros.telefone}>
          <input
            id="telefone"
            type="tel"
            className="campo"
            autoComplete="tel"
            placeholder="9XX XXX XXX"
            value={dados.telefone}
            onChange={mudar("telefone")}
          />
        </Campo>

        <Campo id="email" rotulo="Email" opcional erro={erros.email}>
          <input
            id="email"
            type="email"
            className="campo"
            autoComplete="email"
            value={dados.email}
            onChange={mudar("email")}
          />
        </Campo>

        <Campo id="concelho" rotulo="Concelho" erro={erros.concelho}>
          <select
            id="concelho"
            className="campo"
            value={dados.concelho}
            onChange={mudar("concelho")}
          >
            <option value="">Escolha o concelho</option>
            {CONCELHOS.map((c) => (
              <option key={c.slug} value={c.nome}>
                {c.nome}
              </option>
            ))}
            <option value="Outro">Outro</option>
          </select>
        </Campo>

        <Campo id="localidade" rotulo="Localidade ou freguesia" opcional>
          <input
            id="localidade"
            className="campo"
            value={dados.localidade}
            onChange={mudar("localidade")}
          />
        </Campo>

        <Campo id="tipologia" rotulo="Tipologia do imóvel" erro={erros.tipologia}>
          <select
            id="tipologia"
            className="campo"
            value={dados.tipologia}
            onChange={mudar("tipologia")}
          >
            <option value="">Escolha a tipologia</option>
            {TIPOLOGIAS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Campo>

        <Campo id="servico" rotulo="Serviço" erro={erros.servico}>
          <select
            id="servico"
            className="campo"
            value={dados.servico}
            onChange={mudar("servico")}
          >
            <option value="">Escolha o serviço</option>
            {SERVICOS.map((s) => (
              <option key={s.slug} value={s.nome}>
                {s.nome}
              </option>
            ))}
            <option value="Não sei, preciso de aconselhamento">
              Não sei, preciso de aconselhamento
            </option>
          </select>
        </Campo>

        <Campo id="frequencia" rotulo="Frequência" erro={erros.frequencia}>
          <select
            id="frequencia"
            className="campo"
            value={dados.frequencia}
            onChange={mudar("frequencia")}
          >
            <option value="">Escolha a frequência</option>
            {FREQUENCIAS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </Campo>

        <Campo
          id="quantosImoveis"
          rotulo="Número de imóveis"
          ajuda="Mais de um imóvel é orçamentado como contrato."
        >
          <input
            id="quantosImoveis"
            type="number"
            min="1"
            className="campo"
            value={dados.quantosImoveis}
            onChange={mudar("quantosImoveis")}
          />
        </Campo>
      </div>

      <div className="mt-5">
        <label htmlFor="mensagem" className="rotulo">
          Observações <span className="font-normal text-tinta-500">(opcional)</span>
        </label>
        <textarea
          id="mensagem"
          rows={4}
          className="campo"
          placeholder="Datas pretendidas, acesso ao imóvel, o que precisa de atenção especial."
          value={dados.mensagem}
          onChange={mudar("mensagem")}
        />
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm text-tinta-600">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-tinta-400 text-marca-700 focus:ring-marca-600"
            checked={dados.aceite}
            onChange={mudar("aceite")}
          />
          <span>
            Li e aceito a{" "}
            <a href="/privacidade" className="font-medium text-marca-700 underline">
              Política de Privacidade
            </a>
            . Os dados são usados apenas para responder a este pedido.
          </span>
        </label>
        {erros.aceite ? (
          <p className="mt-1.5 text-sm text-red-700">{erros.aceite}</p>
        ) : null}
      </div>

      {falha ? (
        <div className="mt-5 rounded border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          <p className="font-semibold">{falha}</p>
          <p className="mt-1">
            Pode enviar o pedido diretamente para{" "}
            <a href={`tel:${EMPRESA.telefoneDigitos}`} className="underline">
              {EMPRESA.telefone}
            </a>
            .
          </p>
        </div>
      ) : null}

      {promo ? <input type="hidden" name="promo" value={PROMO.codigo} className="promo-bf" /> : null}
      <PromoNota />

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button type="submit" className="botao" disabled={enviando}>
          {enviando ? "A enviar..." : "Pedir orçamento"}
        </button>
        <p className="text-sm text-tinta-500">Resposta em 24 horas, por escrito.</p>
      </div>
    </form>
  );
}

function Campo({ id, rotulo, opcional, ajuda, erro, children }) {
  return (
    <div>
      <label htmlFor={id} className="rotulo">
        {rotulo}
        {opcional ? <span className="font-normal text-tinta-500"> (opcional)</span> : null}
      </label>
      {children}
      {ajuda && !erro ? <p className="mt-1.5 text-xs text-tinta-500">{ajuda}</p> : null}
      {erro ? <p className="mt-1.5 text-sm text-red-700">{erro}</p> : null}
    </div>
  );
}
