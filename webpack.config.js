'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true', path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({template: 'src/index.tpl.html', inject: 'body', filename: 'index.html'}),
    // This helps ensure the builds are consistent if source hasn't changed:
    new webpack
      .optimize
      .OccurenceOrderPlugin(),
    // Try to dedupe duplicated modules, if any:
    new webpack
      .optimize
      .DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // Makes some environment variables available to the JS code, for example: if
    // (process.env.NODE_ENV === 'production') { ... }. See `./.env`.
    new DotenvPlugin({sample: './.env.example', path: './.env'})
  ],
  module: {
    // First, run the linter. It's important to do this before Babel processes the
    // JS.
    loaders: [
      // Process JS with Babel.
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          "presets": ["react", "es2015", "stage-0"]
        }
      },
      // "postcss" loader applies autoprefixer to our CSS. "css" loader resolves paths
      // in CSS and adds assets as dependencies. "style" loader turns CSS into JS
      // modules that inject <style> tags. In production, we use a plugin to extract
      // that CSS to a file, but in development "style" loader enables hot editing of
      // CSS.
      {
        test: /\.css/,
        loader: "style-loader!css-loader"
      }, {
        test: /\.png/,
        loader: "url-loader?limit=100000&minetype=image/png"
      }, {
        test: /\.jpg/,
        loader: "file-loader"
      }, {
        test: /\.(less)$/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.(scss)$/,
        loader: 'style!css!sass'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.(ttf|otf|eot|svg|woff(2)?)/,
        loader: 'url-loader?name=fonts/[name].[ext]'
      }, {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"
      }
    ]
  },
  postcss: [require('autoprefixer')]
};
