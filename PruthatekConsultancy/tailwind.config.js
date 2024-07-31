/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      transitionDuration: {
        1500: "1500ms",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, black, gray, black)",
      },
    },
  },
  plugins: [],
};
