const colors = require('tailwindcss/colors')

const purge =
  process.env.NODE_ENV === 'production'
    ? ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
    : []

module.exports = {
  purge,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  colors: {
    amber: colors.amber
  },
  plugins: [require('@tailwindcss/typography')]
}
