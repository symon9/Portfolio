/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#090a0f',
          50: '#1a1f2e',
          100: '#151926',
          200: '#111420',
          300: '#0d101a',
          400: '#090a0f',
        },
        surface: {
          base: 'var(--bg-surface-base)',
          card: 'var(--bg-surface-card)',
          cardSubtle: 'var(--bg-surface-card-subtle)',
          muted: 'var(--bg-surface-muted)',
          elevated: 'var(--bg-surface-elevated)',
          border: 'var(--border-subtle)',
          'border-hover': 'var(--border-subtle-hover)',
        },
        brand: {
          primary: '#6366f1',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, var(--grid-dot) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid-sm': '24px 24px',
        'grid-md': '32px 32px',
      },
    },
  },
  plugins: [],
};
