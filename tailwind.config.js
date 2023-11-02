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
        primary: '#A36CE1'
      }
    },
  },
  plugins: [],
}