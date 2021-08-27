module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        linkedin: {
          blue: "#0A66C2",
          DEFAULT: "#F3F2EF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
