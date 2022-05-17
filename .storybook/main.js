module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  logLevel: 'debug',
  features: {
    babelModeV7: true,
  },
}
