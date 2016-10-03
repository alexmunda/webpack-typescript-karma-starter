var resolve = require('path').resolve;

module.exports = function() {
  return {
    context: resolve(__dirname, 'src'),
    entry:
      './app.ts'
    ,
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      pathinfo: true,
      publicPath: '/dist/'
    },
    module: {
      loaders: [{
        test: /\.ts$/,
        loaders: ['awesome-typescript']
      }]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    devtool: 'eval'
  }
}
