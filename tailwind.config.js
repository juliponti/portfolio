/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       primary: {
        100: '#f3f6f4',
        200: '#a5b89f',
        300:'#656f62',
       } 
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'serif': ['Lora', 'serif']
      }
    },
  },
  plugins: [],
}

