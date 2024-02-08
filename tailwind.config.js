module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#195efe"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
