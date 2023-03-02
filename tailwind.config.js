/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        grotesk: 'Hanken Grotesk',
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}