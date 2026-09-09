/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#070a0f',
          surface: '#0b1019',
          card: '#101726',
          border: '#1a2438',
          accent: '#10b981',
          teal: '#06b6d4',
          muted: '#64748b',
          glow: '#10b98120'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace']
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px)",
        'mesh-glow': "radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.15), transparent 70%)"
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
