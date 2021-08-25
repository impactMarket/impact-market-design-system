const path = require('path');

const frameworkModules = [
  path.resolve(__dirname, '../react-native'),
];

const moduleDependencies = [
  path.resolve(__dirname, './node_modules/@impactmarket/ui'),
];

module.exports = {
  projectRoot: path.resolve(__dirname),
  watchFolders: [
    ...frameworkModules,
    ...moduleDependencies,
  ],
};
