const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('../dist/css/[name].css');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    noInfo: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.sass$/,
        loader: extractCSS.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=/img/[name].[ext]'
      },
      {
         test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
         loader: 'file-loader?name=/fonts/[name].[ext]'
       }
    ]
  },
  plugins: [
    extractCSS
  ],
  devtool: 'source-map'
}
