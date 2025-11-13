import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#b8d8ff',
          300: '#8bbdff',
          400: '#589bff',
          500: '#2f76ff',
          600: '#1d58db',
          700: '#1b47ae',
          800: '#1b3d8a',
          900: '#1a356f',
        }
      }
    },
  },
  plugins: [],
} satisfies Config
