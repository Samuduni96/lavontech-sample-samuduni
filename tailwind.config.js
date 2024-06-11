/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlue: "#191f45",
        darkYellow: "#cca752",
        lightYellow: "#FFEDC2",
        lighterYellow: "#FFF6E0",
      },
    },
  },
  plugins: [],
};
