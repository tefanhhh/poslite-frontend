const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  devServer: {
    clientLogLevel: 'silent',
    compress: true,
    contentBase: './',
    contentBasePublicPath: './',
    disableHostCheck: true,
    filename: '[name].bundle.js',
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    hotOnly: false,
    inline: true,
    lazy: false,
    liveReload: false,
    noInfo: false,
    open: false,
    overlay: {
      warning: true,
      error: true,
    },
    port: '4000',
    public: 'localhost:4000',
    publicPath: '/',
    stats: 'normal',
    writeToDisk: false,
  },
  devtool: 'inline-source-map',
  mode: 'development',
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
  performance: {
    hints: false,
  },
  stats: 'normal',
});
