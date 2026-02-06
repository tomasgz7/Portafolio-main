/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#051F20', // fondo base
        backgroundAlt: '#0B2B26', // fondo secundario
        backgroundDeep: '#163832', // intermedio profundo
        border: '#235347', // detalles y bordes
        accent: '#0585e6', // Fuente principal
        foreground: '#DAF1DE', // texto claro
        divider: 'rgba(35,83,71,0.25)', // líneas y bordes suaves
        shadow: 'rgba(35,83,71,0.4)', // sombra
      },
      boxShadow: {
      glow: '0 0 10px rgba(48, 208, 236, 0.66), 0 0 50px rgba(190, 229, 182, 0.57)'
},
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      maxWidth: {
        content: '900px'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp .7s ease both'
      }
    },
  },
  plugins: [],
};