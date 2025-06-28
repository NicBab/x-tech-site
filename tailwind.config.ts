/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  './app/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './styles/**/*.{js,ts,jsx,tsx}', 
  
],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        black: "#00040f",
        primary: "#1a1a1a",
        secondary: "#f97316",
        orange: "#fb923c",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimPurple: "rgba(106, 23, 250, 0.122)",
        iconPurple: "#4b0082",
        blueText: "#33bbcf",
      },
      backgroundImage: {
        'black-gradient': 'linear-gradient(180deg, #000 0%, #222 100%)',
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
