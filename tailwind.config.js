/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
    fontFamily: {
    montserrat: ['Montserrat', 'sans-serif'],
    alternates: ['Montserrat Alternates', 'sans-serif'],
    ibm: ['IBM Plex Sans', 'sans-serif'],
  }
    },
  },
  plugins: [],
}

