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
        'fg-green': '#54E6AF',
        'fg-gray-dark': '#2c344b',
        'fg-dark': '#121725',
        'fg-gray-light': '5a668a',
        'fg-gray-very-light': '#c2cbe5'

      },
      fontFamily: {
        chivo: 'Chivo, sans-serif',
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}