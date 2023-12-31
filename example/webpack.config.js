var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry : './index.js',
  output : {
    path : path.resolve(__dirname , 'dist'),
    filename: 'index_bundle.js'
  },
  module : {
    rules : [
      {test : /\.(js)$/, use:'babel-loader'},
      {test : /\.css$/, use:['style-loader', 'css-loader']}
    ]
  },
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/")
    },
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  mode:'development',
  plugins : [
    new HtmlWebpackPlugin ({
        template : './index.html'
    })
  ]

}