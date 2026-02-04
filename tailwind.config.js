/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        night: '#0b0f1a',
        glass: 'rgba(255, 255, 255, 0.08)',
        neon: {
          cyan: '#22d3ee',
          purple: '#a855f7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(34, 211, 238, 0.35)',
        glowStrong: '0 0 35px rgba(168, 85, 247, 0.45)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top, rgba(34,211,238,0.25), transparent 55%)',
        'hero-linear':
          'linear-gradient(120deg, rgba(15,23,42,1) 0%, rgba(7,12,24,1) 45%, rgba(17,24,39,1) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        gradient: 'gradient 14s ease infinite',
        glow: 'glowPulse 3.5s ease-in-out infinite',
        blink: 'blink 1.2s steps(2, start) infinite',
        scanline: 'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
}

