import { EMPRESA, WHATSAPP } from "../lib/negocio";

const MENSAGEM =
  "Bom dia. Gostaria de pedir um orçamento de limpeza. O imóvel fica em ";

export default function BotaoWhatsApp() {
  return (
    <a
      href={WHATSAPP(MENSAGEM)}
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-tinta-300 bg-white px-4 py-2.5 text-sm font-semibold text-tinta-800 shadow-sm transition-colors hover:border-tinta-400 hover:bg-tinta-50"
      aria-label={`Falar por WhatsApp para ${EMPRESA.telefone}`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current text-[#25D366]"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.51-1.761-1.684-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.116-.198.058-.371-.03-.52-.087-.148-.66-1.59-.9-2.178-.24-.588-.484-.49-.664-.49-.174 0-.372-.025-.57-.025-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
        <path d="M20.52 3.449A11.87 11.87 0 0012.05 0C5.495 0 .16 5.334.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.88 11.88 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 00-3.364-8.452zM12 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.437-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.82 9.82 0 012.892 6.994c-.003 5.45-4.437 9.885-9.885 9.885z" />
      </svg>
      WhatsApp
    </a>
  );
}
