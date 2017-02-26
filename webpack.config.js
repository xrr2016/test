const path = require('path')
// const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  }
  // plugins: [
    // new webpack.optmize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: false
    //   }
    // }),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin()
  // ]
  // devServer: {
  //   contentBase: path.resolve(__dirname, '/dist'),
  //   compress: true,
  //   port: 9000,
  //   hot: true
  // }
}
