/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [{ source: "/contato", destination: "/contacto", permanent: true }];
  },
  // /admin (CRM): a página é estática em public/admin/ e não tem dado nenhum; tudo vem de /api/admin-* com login.
  async rewrites() {
    return [{ source: "/admin", destination: "/admin/index.html" }];
  },
  async headers() {
    const admin = [
      { key: "Content-Security-Policy", value: "default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
      { key: "Cache-Control", value: "no-store" },
      { key: "Referrer-Policy", value: "no-referrer" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    ];
    return [
      {
        source: "/:caminho*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
        ],
      },
      { source: "/admin", headers: admin },
      { source: "/admin/:arquivo(index.html|admin.js|admin.css)", headers: admin },
    ];
  },
};

export default nextConfig;
