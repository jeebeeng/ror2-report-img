const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        14: 'repeat(14, minmax(0, 1fr))'
      }
    },
    fontFamily: {
      rubik: ['Rubik'],
      roboto: ['Roboto Mono']
    },
    colors: {
      report: '#1a1423',
      topBanner: '#00a7e1',
      white: colors.white,
      black: colors.black,
      yellow: colors.yellow,
      red: colors.red,
      sky: colors.sky,
      teal: colors.teal,
      lime: colors.lime,
      pink: colors.pink,
      cyan: colors.cyan,
      slate: colors.slate,
      gray: colors.gray
    }
  },
  plugins: []
}
