/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        typing: 'typing 2s steps(12, end) forwards',
      },
    },

    fontFamily: {
      name: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
}
