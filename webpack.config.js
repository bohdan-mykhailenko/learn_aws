const path = require('path');

module.exports = {
  entry: './mylambdafunction.js',
  mode: 'development',
  target: 'node',
  devtool: false,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
};
