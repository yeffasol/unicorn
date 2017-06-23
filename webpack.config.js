let NODE_ENV = process.env.NODE_ENV || 'development';
let env = process.env.NODE_ENV || "development";
const webpack = require('webpack');
const path = require('path');
module.exports = {

  entry: {
    index: path.resolve('./src/js/index.js')
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dest/js/'),
    library:['name']
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
    }]
  }
  // watch: NODE_ENV == 'development',
  // watchOptions: {
  //   aggregateTimeout: 100
  // },
  // devtool: NODE_ENV == 'development' ? "inline-module-source-map" : null,
  // plugins: [
  //   new webpack.DefinePlugin({
  //     NODE_ENV: JSON.stringify(NODE_ENV)
  //   })
  // ]
};

// if (NODE_ENV == 'production') {
//   module.exports.plugins.push(
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false,
//         drop_console: true,
//         unsafe: true
//       }
//     })
//   );
// }