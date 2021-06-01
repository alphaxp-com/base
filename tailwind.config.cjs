module.exports = {
  purge: ["./client/**/*.{ts,tsx}"],
  darkMode: "media",
  // mode: "jit",
  theme: {
    extend: {
      colors: {
        theme: {},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
