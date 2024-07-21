// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif','system-ui'],
    },

  },
  plugins: [],
};
