import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        first: 'var(--color-first)',
        second: 'var(--color-second)',
        third: 'var(--color-third)',
        accent: 'var(--color-accent)'
      }
    }
  },
  plugins: []
} satisfies Config
