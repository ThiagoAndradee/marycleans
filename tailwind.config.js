
// Paleta tirada do logo (assets/logo.svg): o azul #2b8eb4 e a marca. As outras cores do
// logo ficam so no logo. Uma familia de cor, uma escala neutra, nenhum gradiente.
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        marca: {
          50:  "#f1f8fb",
          100: "#dcedf4",
          200: "#bcdcea",
          300: "#8ec3da",
          400: "#59a4c4",
          500: "#2b8eb4",
          600: "#237ea0",
          700: "#1a5f7f",
          800: "#174f68",
          900: "#143f53",
          950: "#0d2a38",
        },
        tinta: {
          50:  "#f7f8f9",
          100: "#eef0f2",
          200: "#dde1e6",
          300: "#c2c9d1",
          400: "#95a0ad",
          500: "#6b7887",
          600: "#54606e",
          700: "#414b56",
          800: "#2f3740",
          900: "#1c2126",
          950: "#0f1216",
        },
      },
      fontFamily: {
        sans: ['var(--fonte-inter)', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'titulo-1': ['2.75rem', { lineHeight: '1.08', letterSpacing: '-0.022em', fontWeight: '700' }],
        'titulo-2': ['2rem',    { lineHeight: '1.15', letterSpacing: '-0.018em', fontWeight: '700' }],
        'titulo-3': ['1.375rem',{ lineHeight: '1.25', letterSpacing: '-0.012em', fontWeight: '600' }],
        'entrada':  ['1.1875rem',{ lineHeight: '1.6' }],
        'etiqueta': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      maxWidth: {
        leitura: '68ch',
      },
      borderRadius: {
        DEFAULT: '3px',
        md: '4px',
        lg: '5px',
      },
    },
  },
  plugins: [],
};
