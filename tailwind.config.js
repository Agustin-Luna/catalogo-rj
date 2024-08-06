/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosa1: '#FB9AD1',
        rosa2: '#DA2774',
        cereza: '#E75480',
        verdeclaro: '#90EE90',
        grispaloma: '#001F1D'
      }
    },
  },
  plugins: [],
}

