// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens:{
        "sm":"480"
      }
    },
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif','system-ui'],
    },

  },
  plugins: [],
};
