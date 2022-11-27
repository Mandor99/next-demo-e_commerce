/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto' : ["'Roboto', sans-serif"],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        'lg': '1124px',
        'xl': '1124px',
        '2xl': '1124px',
      }
    },
    gridTemplateColumns: {
      'product': 'repeat(auto-fit, minmax(300px, 1fr))',
    },
  },
  plugins: [],
}
