'use strict'

const webpack = require('webpack')
const base = require('./config.base')
const config = module.exports = Object.assign({}, base)

// https://webpack.github.io/docs/configuration.html#devtool
config.devtool = '#cheap-module-eval-source-map',

config.entry = {
  'example/dist.js': './example/index.js',
}

config.output = {
  pathinfo: true,
  path: '',
  filename: '[name]',
}

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
])
