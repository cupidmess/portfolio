/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize : {
        '10xl': '8rem',  // Customize this size as needed
        '11xl': '9rem',
        '12xl': '10rem',
      },
      fontFamily: {
        robot : ["VT323", 'monospace'],
        normal : ['Roboto','sans-serif'],
        cursive : ['Great Vibes','cursive']
      },
    
      font :{
        'heavy' : 950, 
      }
    },
  },
  plugins: [],
}

