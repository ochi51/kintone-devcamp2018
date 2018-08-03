module.exports = {
  entry: {
      index: __dirname + '/src/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    alias: {
      js: __dirname + '/src'
    }
  },
  devServer: {
    port: 8888,
    contentBase: __dirname + '/dist',
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  devtool: 'cheap-module-eval-source-map'
}
