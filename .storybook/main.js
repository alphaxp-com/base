module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  stories: [
    "../client/**/*.stories.mdx",
    "../client/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  webpackFinal: async (config) => {
    await fixSvg(config);
    return config;
  },
};

async function fixSvg(config) {
  config.module.rules = config.module.rules.filter(
    ({ test }) => !test || !test.test(".svg")
  );
  config.module.rules.unshift({
    test: /\.svg$/,
    use: [{ loader: "@svgr/webpack" }],
  });
}
