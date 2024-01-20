/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        "1" : "1px"
      },
      width:{
        "2/7": "27%",
        "90" : "90%"
      }
    },
  },
  plugins: [],
}

