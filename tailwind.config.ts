import type { Config } from 'tailwindcss';

/**
 * Canaan Tourism design tokens.
 * Palette: navy base + royal interactive + muted champagne gold on an ivory canvas.
 * Fonts are wired via next/font CSS variables (see src/app/layout.tsx).
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0A1E3C',
          950: '#06152C',
          900: '#0A1E3C',
          800: '#122A4F',
          700: '#1B3862',
        },
        royal: {
          DEFAULT: '#1E52B0',
          600: '#1E52B0',
          500: '#2C63C6',
          400: '#4E82DC',
        },
        champagne: {
          DEFAULT: '#C6A15B',
          600: '#B08C46',
          500: '#C6A15B',
          400: '#D6B87C',
          200: '#EBDCBD',
        },
        ivory: {
          DEFAULT: '#FAF7F0',
          100: '#FFFFFF',
          200: '#F3EEE3',
        },
        mist: {
          DEFAULT: '#E3E9F1',
          200: '#EEF2F7',
          400: '#CBD6E4',
        },
        ink: {
          DEFAULT: '#16233B',
          muted: '#4B5A72',
          soft: '#7A879C',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      maxWidth: {
        shell: '82rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(10, 30, 60, 0.04), 0 12px 32px -12px rgba(10, 30, 60, 0.18)',
        'card-hover': '0 2px 4px rgba(10, 30, 60, 0.06), 0 24px 48px -16px rgba(10, 30, 60, 0.28)',
        console: '0 24px 70px -24px rgba(6, 21, 44, 0.55)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      transitionTimingFunction: {
        canaan: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'draw-line': {
          from: { strokeDashoffset: '1' },
          to: { strokeDashoffset: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
