var path = require('path');
var nodeExternals = require('webpack-node-externals');
var glob = require('glob');
const base = path.resolve(__dirname, '../');
const dist = path.resolve(base, 'api/dist');
const targets = glob.sync(`${base}/api/src/*.tsx`);

module.exports = {
  context: base,
  entry: targets,
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader'
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: dist,
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  },
  externals: [nodeExternals()]
};