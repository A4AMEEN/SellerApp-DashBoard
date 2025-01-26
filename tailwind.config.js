/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}", ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFD02B",
          orange: "#FF9533",
        },
        navy: {
          light: "#4318FF",
          DEFAULT: "#2B3674",
          dark: "#1B2559",
        },
        secondary: {
          DEFAULT: "#707EAE",
          dark: "#4A5568",
        },
        success: "#01B574",
        warning: "#FFB547",
        error: "#FF5252",
        background: {
          light: "#F4F7FE",
          dark: "#0B1437",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

