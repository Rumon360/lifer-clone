/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        foreground: "#1F2022",
        background: "#FFFFFF",
        accent: "#FEF0DF",
        accentForeground: "#FFF9F2",
        star: "#FDB83D",
      },
      fontSize: {
        "9xl": "6.5rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
