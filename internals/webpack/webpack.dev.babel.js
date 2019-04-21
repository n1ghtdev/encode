import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    template: 'src/index.html',
  }),
];

module.exports = require('./webpack.base.babel')({
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/index.jsx'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    minimize: false,
  },
  plugins,
  devtool: 'cheap-module-source-map', // eval-source-map
  performance: {
    hints: false,
  },
});
