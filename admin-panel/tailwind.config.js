/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins'],
        'roboto' :['Roboto']
      },
      colors:{
        'primary':{
          100:'#919191',
          200:'#828282',
          300:'#5E5E5E',
          400:'#4B4848',
          500:'#3B3535',
          600:'#1C1212',
          700:'#1B1818',
          800:'#121212',
          900:'#000000',

        },
        'second':{
          100:'#FCF6D9',
          200:'#FDF8E2',
          300:'#FCF8E8',
          400:'#F9EEC7',
          500:'#F7E5A6',
          600:'#F6DF8D',
          700:'#F1D36A',
          800:'#EFCC52',
          900:'#FFC600',
          
        }

      }
    },
  },
  plugins: [],
}

