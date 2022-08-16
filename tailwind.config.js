/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg.svg')",
        'zero-pattern': "url('/src/assets/bgs.svg')",
        'error-pattern': "url('/src/assets/bgs.svg')",
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
