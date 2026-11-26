// Formulário de proposta do site -> lead novo no CRM (o e-mail continua a sair pelo FormSubmit).
import crm from "../../lib/admin/crm";
import site from "../../lib/admin/site";
export const config = { api: { bodyParser: { sizeLimit: "16kb" } } };
export default function handler(req, res) { return crm.handlerFormulario(req, res, site); }
