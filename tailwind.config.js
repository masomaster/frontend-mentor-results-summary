/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        /* primary colors */
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        /* gradients */
        "light-slate-blue-background": "hsl(252, 100%, 67%)",
        "light-royal-blue-background": "hsl(241, 81%, 54%)",
        "violet-blue-circle": "hsla(256, 72%, 46%, 1)",
        "persian-blue-circle": "hsla(241, 72%, 46%, 0)",
        /* Neutral */
        white: "hsl(0, 0%, 100%)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
      },
      flexBasis: {
        "9/20": "44%",
      },
      fontFamily: {
        sans: ["Hanken Grotesk"],
      },
    },
    screens: {
      desktop: "1440px",
    },
  },
  plugins: [],
};
