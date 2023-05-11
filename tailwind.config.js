/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        hehe: '#18D039',
        maroon: '#681919',
        grayblack: '#111111',
        'great-blue': {
          DEFAULT: '#2A669F',
          50: '#E4F7F8',
          100: '#CCEEF2',
          200: '#9CD7E5',
          300: '#6CB9D8',
          400: '#3B94CB',
          500: '#2A669F',
          600: '#234B83',
          700: '#1B3366',
          800: '#14204A',
          900: '#0C102E',
          950: '#080A20',
        },
      },
      padding: {
        63: '15.5rem',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'Arial', 'Helvetica', 'sans-serif'],
      },
      variants: {
        display:['group-hover']
       }
    },
  },
  plugins: [],
}