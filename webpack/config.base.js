'use strict'
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
const resolve = require('path').resolve
const srcDir = resolve(__dirname, '../src')
const exampleDir = resolve(__dirname, '../example')


module.exports = {

  module: {
    preLoaders: [
      { test: /\.jsx?$/, include: [srcDir, exampleDir], loader: 'eslint' },
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.(png|gif|jpe?g)$/, exclude: /node_modules/, loader: 'url' },
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
