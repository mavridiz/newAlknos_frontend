/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'raleway':['Raleway','sans-serif'],
        'jura':['Jura','sans-serif']
     },
    },
  },
  plugins: [],
}