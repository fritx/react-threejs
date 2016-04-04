'use strict'
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')


module.exports = {

  entry: {
    'dist/index.js': './src/index.js',
    'dist/example.js': './example/index.js',
  },

  output: {
    pathinfo: true,
    path: '',
    filename: '[name]',
  },

  // https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'cheap-module-eval-source-map',

  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /nodde_modules/, loader: 'eslint' },
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /nodde_modules/, loader: 'babel' },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },

  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new webpack.NoErrorsPlugin(),
  ],
}
