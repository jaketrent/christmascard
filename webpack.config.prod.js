var autoprefixer = require('autoprefixer')
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin(null, 'bundle.css')
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&localIdentName=[local]---[hash:base64:5]!postcss!cssnext')
    }]
  },
  postcss: [ autoprefixer ],
  cssnext: {
    compress: false,
    url: false // cssnext ruins css url requires without this (e.g. url('./derp.jpg') => url('derp.jpg'))
  }
}
