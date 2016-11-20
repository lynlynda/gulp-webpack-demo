var webpack = require('webpack');
var path = require('path');
var entryPath = path.join(__dirname, './src/public');
var output = path.join(__dirname, './build')

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    index: entryPath + '/scripts/init',

  },
  output: {
    path: __dirname + '/build',
    filename: 'public/scripts/[name]-[chunkhash:5].js'

  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.es$/,
      loader: 'babel',
      exclude: /node_modules/

    }, {
      test: /\.swig$/,
      loader: "swig-loader"
    }]
  },
  babel: {
    presets: ['es2015', 'stage-3'],
    plugins: ['babel-plugin-transform-runtime']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ //提取公共文件单独编译
      name: 'vender',
      minify: {
        collapseWhitespace: true
      },
      filename: 'public/scripts/[name].[chunkhash:5].bundle.js'
    }),
    new ExtractTextPlugin('./public/styles/[name].[chunkhash:5].css'), //单独编译css文件并输出

    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({ //生成html文件，将编译完的js插入其中
      filename: './views/index.html',
      template: './views/index.swig',
      //chunks: ['qqq'],
      minify: {
        removeCommets: true,
        collapseWhitespace: true
      }
    })

  ],
  resolve: {
    extensions: ['', '.js', '.es', 'less'],
  }


}