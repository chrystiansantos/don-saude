/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        regular: 'Inter_400Regular,',
        bold: 'Inter_700Bold',
      },
      colors: {
        red: {
          800: '#D0005E',
          900: '#A70E53',
          950: '#841245',
        },
      },
    },
  },
  plugins: [],
}
