const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    bundle: './src/client/js/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "./js/[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
}