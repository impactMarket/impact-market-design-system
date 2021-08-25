const path = require('path');

const frameworkModules = {
  '@impactmarket/ui': path.resolve(__dirname, '../react-native'),
};

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    ...frameworkModules,
  },
};

const presets = [
  'babel-preset-expo',
];

const plugins = [
  ['module-resolver', moduleResolverConfig],
  ["@babel/plugin-proposal-decorators", { 'legacy': true }],
];

module.exports = function (api) {
  api.cache(true);
  return { presets, plugins };
};
