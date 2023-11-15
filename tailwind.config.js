/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#fff',
        background: "#27283A",
        primary: '#A36CE1',
        blue: '#73C9EC',
        grey: '#A4A5B1'
      }
    },
  },
  plugins: [],
}