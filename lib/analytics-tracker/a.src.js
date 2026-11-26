/* /a.js: analytics próprio, sem cookies e sem armazenamento no aparelho. Fonte; o site serve a versão minificada.
   Manda para /api/collect (sendBeacon): visualização, cliques (posição para o heatmap, tipo do link), envio de formulário
   (só o nome do formulário, nunca o que foi digitado), rolagem máxima e tempo com a aba visível. */
(function (w, d, n) {
  var l = location, E = "/api/collect", id, cur, sd, et, t1, de = d.documentElement;
  if (w.top !== w.self || /^\/(admin|api)(\/|$)/.test(l.pathname) || n.globalPrivacyControl) return;
  function vw() { return de.clientWidth || w.innerWidth; }
  function dh() { return Math.max(de.scrollHeight, d.body ? d.body.scrollHeight : 0); }
  function send(o) {
    o.p = cur; o.i = id;
    var s = JSON.stringify(o);
    try { if (n.sendBeacon && n.sendBeacon(E, s)) return; } catch (e) {}
    try { fetch(E, { method: "POST", body: s, keepalive: true, credentials: "omit" }); } catch (e) {}
  }
  function scr() { var v = Math.round((w.scrollY + w.innerHeight) / dh() * 100); if (v > sd) sd = v > 100 ? 100 : v; }
  function pv(r) {
    id = Math.random().toString(36).slice(2, 10); cur = l.pathname; sd = 0; et = 0;
    t1 = d.visibilityState == "hidden" ? 0 : Date.now(); scr();
    var q = new URLSearchParams(l.search), o = { k: "pv", w: vw(), h: dh() };
    try { r = r ? new URL(r).hostname : ""; } catch (e) { r = ""; }
    if (r) o.r = r;
    ["source", "medium", "campaign"].forEach(function (k) { var v = q.get("utm_" + k); if (v) o["u" + k[0]] = v.slice(0, 60); });
    send(o);
  }
  function leave() { if (t1) { et += Date.now() - t1; t1 = 0; } scr(); send({ k: "l", sd: sd, et: et }); }
  var tk;
  w.addEventListener("scroll", function () { if (!tk) tk = setTimeout(function () { tk = 0; scr(); }, 250); }, { passive: true });
  w.addEventListener("pagehide", leave);
  d.addEventListener("visibilitychange", function () { if (d.visibilityState == "hidden") leave(); else t1 = Date.now(); });
  d.addEventListener("click", function (e) {
    var t = e.target, a = t && t.closest ? t.closest("a,button,[data-a],[role=button],input[type=submit],summary,label") : null,
      o = { k: "c", w: vw(), h: dh() };
    if (e.detail) { o.x = Math.round(e.pageX / vw() * 1e3) / 1e3; o.y = Math.round(e.pageY); }
    if (a) {
      var h = a.getAttribute("href");
      if (h) {
        if (/^(tel|mailto|sms):/i.test(h)) h = h.split(":")[0] + ":";
        else try { var u = new URL(h, l.href); h = u.host == l.host ? u.pathname : u.host + u.pathname; } catch (x) {}
        o.hr = h.slice(0, 120);
      }
      o.tg = a.form && a.type == "submit" ? "submit" : a.tagName.toLowerCase();
      o.el = (a.getAttribute("data-a") || a.getAttribute("aria-label") || (a.tagName == "INPUT" ? a.value : a.innerText) || "").replace(/\s+/g, " ").trim().slice(0, 50);
      if (/@/.test(o.el)) o.el = "";
    }
    send(o);
  }, true);
  d.addEventListener("submit", function (e) {
    var f = e.target;
    send({ k: "f", f: (f.getAttribute("data-a") || f.getAttribute("id") || f.getAttribute("name") || "form").slice(0, 40) });
  }, true);
  /* navegação sem recarregar (Next.js) */
  var P = history.pushState;
  function chg() { if (l.pathname != cur) { leave(); var r = l.href; setTimeout(function () { pv(r); }, 300); } }
  history.pushState = function () { P.apply(this, arguments); chg(); };
  w.addEventListener("popstate", chg);
  pv(d.referrer);
})(window, document, navigator);
