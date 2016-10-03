var resolve = require('path').resolve;

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: './app.ts',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        pathInfo: true,
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['ts-loader']
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'eval'
}
