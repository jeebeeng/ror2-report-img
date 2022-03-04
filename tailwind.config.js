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
    }
  },
  plugins: []
}
