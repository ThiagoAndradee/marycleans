// Login do /admin (e-mail + senha + 2FA). Ver lib/admin/README.md.
import auth from "../../lib/admin/auth";
export const config = { api: { bodyParser: { sizeLimit: "8kb" } } };
export default function handler(req, res) { return auth.handler(req, res); }
