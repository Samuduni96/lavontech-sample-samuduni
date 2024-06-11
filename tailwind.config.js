/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#191f45',
        darkYellow: '#FFE3A3',
        lightYellow: '#FFEDC2',
        lighterYellow: '#FFF6E0',
      }
    },
  },
  plugins: [],
};
