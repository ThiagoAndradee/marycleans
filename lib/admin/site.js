/* Admin/CRM da Mary Cleans: configuração do site. Os dois formulários (pedido de proposta e orçamento)
   passam a criar lead no CRM além do e-mail/WhatsApp. */
const limpo = (v, n = 200) => String(v === null || v === undefined ? "" : v).trim().slice(0, n);

/* Formulário de proposta (components/FormProposta.js) via /api/lead e orçamento (/api/orcamento). */
function formParaLead(b) {
  if (b.form === "orcamento") {
    return {
      campos: { contato: b.nome, telefone: b.telefone, email: b.email, cidade: b.concelho, regiao: b.localidade, segmento: "Pedido de orçamento" },
      origem: "site:orçamento",
      resumo: [`Serviço: ${limpo(b.servico)}`, `Tipologia: ${limpo(b.tipologia)}`, `Frequência: ${limpo(b.frequencia)}`, `Imóveis: ${limpo(b.quantosImoveis, 10)}`, b.mensagem ? `Mensagem: ${limpo(b.mensagem, 2000)}` : "", b.promo ? `Promoção: ${limpo(b.promo, 40)}` : ""].filter(Boolean).join("\n"),
    };
  }
  const contacto = limpo(b.contacto, 160);
  const email = /@/.test(contacto) ? contacto : "";
  return {
    campos: { empresa: b.empresa, email, telefone: email ? "" : contacto, regiao: b.zona, segmento: "Pedido de proposta" },
    origem: "site:proposta",
    resumo: [b.servico ? `Serviço: ${limpo(b.servico)}` : "", `Imóveis ou unidades: ${limpo(b.imoveis, 10)}`, `Zona: ${limpo(b.zona)}`, `Frequência: ${limpo(b.frequencia)}`, b.pagina ? `Página: ${limpo(b.pagina)}` : "", b.promo ? `Promoção: ${limpo(b.promo, 40)}` : ""].filter(Boolean).join("\n"),
  };
}

module.exports = {
  nome: "Mary Cleans", slug: "marycleans", moeda: "EUR", idioma: "pt-BR",
  motivosPerda: ["Preço", "Já tem equipa própria", "Ficou com o fornecedor atual", "Sem disponibilidade nos picos", "Não respondeu", "Fora da zona", "Volume pequeno", "Outro"],
  abas: [],
  formParaLead,
};
