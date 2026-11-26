// API do CRM do /admin. Tudo atrás do login. Ver lib/admin/README.md.
import crm from "../../lib/admin/crm";
import site from "../../lib/admin/site";
export const config = { api: { bodyParser: { sizeLimit: "4mb" } } };
export default function handler(req, res) { return crm.handler(req, res, site); }
