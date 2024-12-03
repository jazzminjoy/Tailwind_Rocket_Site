/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        rebeccapurple: {
          DEFAULT: '#663399',
          pale: '#ded5ec',
          verylight: '#cec1e2',
          light: '#beadd8',
          lightmedium: '#af99ce',
          medium: '#a085c4',
          darkmedium: '#9171ba',
          darkermedium: '#825daf',
          darkestmedium: '#7449a4'
        }
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

