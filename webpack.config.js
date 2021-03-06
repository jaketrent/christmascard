
var DefinePlugin = require('webpack').DefinePlugin
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/index.js',
  output: {
    path: './dist',
    filename: 'main.[hash].js',
    chunkFilename: 'chunk.[hash].[id].js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader?harmony'},
      {test: /\.scss/, loader:'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  plugins: [
    new DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new HtmlWebpackPlugin({
      title: 'Merry Christmas 2014 from the Trents',
      template: 'node_modules/html-webpack-template/index.html',
      mobile: true,
      googleAnalytics: {
        trackingId: 'UA-57941191-1',
        pageViewOnLoad: true
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  }
}
