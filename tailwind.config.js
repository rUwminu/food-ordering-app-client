module.exports = {
  mode: "jit",
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dred: "#fa1b13",
        main: "#fcf5f5",
        "b-orange": "#FF5344",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
