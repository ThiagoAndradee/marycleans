/* Analytics próprio (sem cookies, anónimo). Ver lib/analytics.js. */
import a from "../../lib/analytics";
import cfg from "../../lib/analytics-site";

export const config = { api: { bodyParser: false } };

export default function handler(req, res) {
  return a.collect(req, res, cfg);
}
