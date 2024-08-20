/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        regular: 'Inter_400Regular,',
        medium: 'Inter_500Medium',
        bold: 'Inter_700Bold',
      },
      colors: {
        slate: {
          500: '#667085',
          800: '#475467',
          950: '#101828',
        },
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
