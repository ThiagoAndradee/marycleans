// Black Friday da Mary Cleans (confirmada pelo Thiago a 26/11/2026).
// 25% de desconto na primeira limpeza de check-out para novos parceiros.
// Pedidos até 30/11/2026 23:59 (hora de Lisboa, UTC+0 em novembro); serviço até 31/12/2026.
// Depois do fim a faixa, o destaque e o campo oculto desaparecem sozinhos, sem novo deploy:
// o _document marca <html data-promo="off"> antes de pintar e os componentes voltam a ver a data no browser.
export const PROMO = {
  codigo: "BLACKFRIDAY",
  fim: Date.parse("2026-12-01T00:00:00Z"),
  titulo: "Black Friday",
  oferta: "25% de desconto na primeira limpeza de check-out para novos parceiros.",
  condicoes: "Pedidos até 30/11/2026, serviço até 31/12/2026.",
  resumo: "BLACKFRIDAY: 25% na primeira limpeza de check-out (novo parceiro)",
};

export function promoAtiva(agora = new Date()) {
  return agora.getTime() < PROMO.fim;
}

// Script que corre no <head> antes de pintar: esconde tudo o que tem .promo-bf depois do fim
export const SCRIPT_PROMO = `try{if(Date.now()>=${PROMO.fim})document.documentElement.setAttribute("data-promo","off")}catch(e){}`;
