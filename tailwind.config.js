/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        granoGreen: 'rgb(12, 193, 137)',
        granoGreenmetade: 'rgb(12, 193, 137,50%)',
        granopurple: 'rgb(123, 0, 246,25%)',
        granopurpletotal: 'rgb(123, 0, 246)',
        granoyellow: 'rgb(255, 199, 0, 25%)',
        granoyellowtotal: 'rgb(255, 199, 0)',
        granogrey:'rgb(91,91,91)',
        granolowgrey:'rgb(217, 217, 217)'
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}