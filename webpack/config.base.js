'use strict'
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')


module.exports = {

  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /\/dist\/|nodde_modules/, loader: 'eslint' },
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
