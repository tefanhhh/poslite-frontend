const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: '4000',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        SERVER_API_URL: JSON.stringify('http://localhost:8080'),
      },
    }),
    new FriendlyErrorsWebpackPlugin(),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: '4200',
        proxy: { target: 'http://localhost:4000' },
      },
      { reload: false },
    ),
    new WebpackNotifierPlugin({
      title: 'Poslite',
    }),
  ],
});
