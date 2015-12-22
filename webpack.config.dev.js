var autoprefixer = require('autoprefixer')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    }, {
      test: /\.css$/,
      loaders: ['style', 'css?modules&importLoaders=2&localIdentName=[local]---[hash:base64:5]', 'postcss', 'cssnext']
    }]
  },
  postcss: [ autoprefixer ],
  cssnext: {
    compress: false,
    url: false // cssnext ruins css url requires without this (e.g. url('./derp.jpg') => url('derp.jpg'))
  }
}
