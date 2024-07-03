/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,jsx}','./src/**/*.{js,jsx}',],
  theme: {
    extend: {
      fontFamily: {
        'euclid': ["Euclid Circular", 'sans-serif'],
        'lexend': ["Lexend", "sans-serif"]
      },
      transitionDuration: {
        '1500': '1500ms',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, black, gray, black)',
      }
    },
  },
  plugins: [],
}

