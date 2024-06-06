/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/assests/bg.png')"
      }
    },
  },
  plugins: [],
}

