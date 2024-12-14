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
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
      },
      animation: {
        typing: 'typing 2s steps(12, end) forwards',
        blink: 'blink 0.75s step-end infinite',
      },

      colors: {
        primary: '#1E90FF',
        secondary: '#38B2AC',
        accent: '#68D391',
      },

      spacing: {
        88: '22rem',
      },
    },

    fontFamily: {
      name: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
}
