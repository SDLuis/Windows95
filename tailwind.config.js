/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('../public/bg.webp')"
      }
    }
  },
  plugins: []
}
