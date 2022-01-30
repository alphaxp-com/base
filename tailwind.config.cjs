module.exports = {
  content: ["./client/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {},
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
