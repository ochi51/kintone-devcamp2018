module.exports = {
  entry: {
      index: __dirname + '/src/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    publicPath: '/'
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
  }
}
