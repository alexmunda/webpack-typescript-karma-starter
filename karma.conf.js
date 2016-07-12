var webpackConfig = require('./webpack.config.js');

var testGlob = 'src/**/*.spec.ts';
var srcGlob = 'src/**/*!(spec).ts';

module.exports = function setKarmaConfig(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [testGlob, srcGlob],
        reporters: ['progress'],
        preprocessors: {
            'src/**/*.spec.ts': ['webpack'],
            'src/**/*!(spec).ts': ['webpack'],
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,
        concurrency: Infinity
    });
};
