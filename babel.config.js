module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: 'defaults',
        node: 'current',
      },
      forceAllTransforms: true,
    }],
  ],
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
  ],
  ignore: [
    'node_modules',
    'dist',
  ],
};
