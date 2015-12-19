/*
 * WEBPACK configuration
 * Creates 1 endpoint:
 *   - index.bundle.js - for overview page JS
 * Both endpoints copy over their respective static html files from ./src using
 * a require for the html and a file loader on .html files.
 *
 * SASS loader is used to load SCSS files.
 * import.
 * All styling is extracted using the ExtractText Plugin into "app.css"
 *
 * PNG files (logo) are inlined usng URL loader, as are .ttf, .woff, and .svg files.
 * EOT files are copied.
 *
 * Options:
 * webpack --minimize
 *   Create minified files using UglifyJS Plugin
 */
var webpack = require('webpack');
var minimize = process.argv.indexOf('--minimize') === -1 ? false : true;
// var debug = !minimize;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var plugins = [];
var path = require("path");

plugins.push(new ExtractTextPlugin("app.css"));
// plugins.push(new webpack.HotModuleReplacementPlugin());

if(minimize) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  context: __dirname + "/src",
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    // 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './index.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'app.bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  // for modules
  resolve: {
    fallback: [path.join(__dirname, 'node_modules')]
  },
  // same issue, for loaders like babel
  resolveLoader: {
    fallback: [path.join(__dirname, 'node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        include: /src/,
        loaders: ['babel?presets[]=react,presets[]=es2015&plugins[]=transform-runtime']
      },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=assets/[name].[ext]'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=assets/[name].[ext]'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=assets/[name].[ext]'},
      {test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=assets/[name].[ext]'},
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.scss$/, //loader: "style!css!sass"
        loader: ExtractTextPlugin.extract("style","css!sass")
      },
      {
        test: /\.css$/, //loader: "style!css!sass"
        loader: ExtractTextPlugin.extract("style","css")
      }
    ]
  },
  plugins: plugins
};
