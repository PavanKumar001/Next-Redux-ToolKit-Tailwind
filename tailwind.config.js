/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '400px',
      md: '668px',
      lg: '900px',
      xl: '1440px',
    },
    colors: {
      'transparent': 'transparent',
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#849221',
      'gray-light': '#d3dce6',
      greenMaster: {
        100: '#8AFF8A',
        200: '#5CFF5C',
        300: '#2EFF2E',
        400: '#00FF00',
        500: '#00D100',
        600: '#00A300',
        900: '#007500',
      },
      white:'#000000'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      screens: {
        '2xl': '1600px',
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        '4xl': '2rem',
      },
   },
   containerFill :({ theme }) =>({
     gray: theme('colors.gray')
   }),
   fill: {
    gray: ({ theme }) => theme('colors.gray')
  }
  },

  plugins: [
    plugin(function({addComponents}){
      addComponents({
        '.btn-blue':{
          width:'100px',
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: 'green'
          }
        },
        '.submit-btn':{
          width:'100px',
          backgroundColor: 'orange',
          color: '#000',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          '&:hover': {
            //backgroundColor: 'green'
          }
        },
        '.cancel-btn':{
          width:'100px',
          backgroundColor: 'gray',
          color: '#000',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          '&:hover': {
            //backgroundColor: 'green'
          }
        },
        '.success-btn':{
          width:'200px',
          backgroundColor: 'white',
          color: 'green',
          font: '20px',
          borderWidth: '3px',
          borderColor: 'green',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          '&:hover': {
          }
        },
        '.btn-disabled':{
          opacity: 0.5,
        },
        '.danger-btn':{
          width:'200px',
          backgroundColor: 'white',
          color: 'red',
          font: '20px',
          borderWidth: '3px',
          borderColor: 'red',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          '&:hover': {
            //backgroundColor: 'blue'
          }
        },
        '.details-btn':{
          width:'200px',
          backgroundColor: 'white',
          color: 'gray',
          font: '20px',
          borderWidth: '3px',
          borderColor: 'gray',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          '&:hover': {
          }
        },
      })
    })
  ],
}
