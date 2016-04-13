'use strict'

const webpack = require('webpack')
const base = require('./config.base')
const config = module.exports = Object.assign({}, base)

config.entry = {
  'dist/index.js': './src/index.js',
}

config.output = {
  pathinfo: true,
  path: '',
  filename: '[name]',
  libraryTarget: 'commonjs2',
}

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.ExternalsPlugin('commonjs2', [
    'three', 'react', 'react-dom',
    'react-addons-pure-render-mixin',
  ]),
])
