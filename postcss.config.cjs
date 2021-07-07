module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {},
    'postcss-preset-env': {
      features: {
        'focus-within-pseudo-class': false,
      },
    },
  },
};
