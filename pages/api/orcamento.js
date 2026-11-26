import crm from "../../lib/admin/crm";
import site from "../../lib/admin/site";

// Sem ORCAMENTO_EMAIL_DESTINO definido, este endpoint devolve viaWhatsApp: true e o
// formulario abre o WhatsApp com o pedido montado, em vez de perder o pedido.
const OBRIGATORIOS = ["nome", "telefone", "concelho", "tipologia", "servico", "frequencia"];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ erro: "Método não permitido." });
  }

  const dados = req.body || {};

  const faltando = OBRIGATORIOS.filter(
    (campo) => !dados[campo] || String(dados[campo]).trim() === ""
  );
  if (faltando.length) {
    return res.status(400).json({ erro: `Campos em falta: ${faltando.join(", ")}.` });
  }
  if (!dados.aceite) {
    return res.status(400).json({ erro: "É necessário aceitar a política de privacidade." });
  }

  const pedido = {
    recebidoEm: new Date().toISOString(),
    nome: String(dados.nome).slice(0, 120),
    telefone: String(dados.telefone).slice(0, 40),
    email: dados.email ? String(dados.email).slice(0, 160) : null,
    concelho: String(dados.concelho).slice(0, 60),
    localidade: dados.localidade ? String(dados.localidade).slice(0, 120) : null,
    tipologia: String(dados.tipologia).slice(0, 40),
    servico: String(dados.servico).slice(0, 80),
    frequencia: String(dados.frequencia).slice(0, 60),
    quantosImoveis: Number(dados.quantosImoveis) || 1,
    mensagem: dados.mensagem ? String(dados.mensagem).slice(0, 2000) : null,
    promo: dados.promo === "BLACKFRIDAY" && Date.now() < Date.parse("2026-12-01T00:00:00Z") ? "BLACKFRIDAY" : null,
  };

  // CRM do /admin: o pedido vira lead (nunca impede a resposta ao cliente).
  try {
    const x = site.formParaLead({ ...pedido, form: "orcamento" });
    await crm.doSite(site, x.campos, x);
  } catch (e) {
    console.error("[orcamento] CRM:", e && e.message);
  }

  const destino = process.env.ORCAMENTO_EMAIL_DESTINO;

  if (!destino) {
    console.log("[orcamento] pedido recebido, sem destino de email configurado:", pedido);
    return res.status(200).json({ ok: true, viaWhatsApp: true });
  }

  try {
    // Bloco de envio de email. Preencher quando o serviço estiver escolhido.
    // await enviar({ para: destino, assunto: `Orçamento: ${pedido.servico} em ${pedido.concelho}`, corpo: pedido });
    console.log("[orcamento] pedido recebido:", pedido);
    return res.status(200).json({ ok: true, viaWhatsApp: false });
  } catch (erro) {
    console.error("[orcamento] falha ao enviar:", erro);
    return res.status(200).json({ ok: true, viaWhatsApp: true });
  }
}
