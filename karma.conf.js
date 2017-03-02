var webpack = require("webpack");
module.exports = function(config) {
    config.set({
        files: ['test/test.js'],
        frameworks: ['mocha'],
        preprocessors: {
            'test/test.js': ['webpack']
        },
        reporters: [
            'spec', 'coverage', 'junit'
        ],
        /*coverageReporter: {
            type: 'html',
            dir: 'build/coverage/'
        },*/

        coverageReporter: {
            dir: 'build/coverage/',
            includeAllSources: true,
            reporters: [
                {type: 'html'},
                {type: 'text'},
                {type: 'text-summary'}
            ]
        },

        junitReporter: {
            outputDir: '.',
            outputFile: undefined,
            suite: '',
            useBrowserName: true,
            nameFormatter: undefined,
            classNameFormatter: undefined,
            properties: {}
        },
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.css$/,
                        loader: "style!css"
                    }, {
                        test: /\.less$/,
                        loader: "style!css!less"
                    }
                ],
                postLoaders: [
                    {
                        test: /\.js/,
                        exclude: /(test|node_modules|bower_components)/,
                        loader: 'istanbul-instrumenter'
                    }
                ]
            },
            resolve: {
                modulesDirectories: ["", "src", "node_modules"]
            }
        },
        webpackMiddleware: {
            noInfo: true
        },
        plugins: [
            require("karma-webpack"),
            require("istanbul-instrumenter-loader"),
            require("karma-mocha"),
            require("karma-coverage"),
            require("karma-spec-reporter"),
            require("karma-junit-reporter"),
            require("karma-chrome-launcher")
        ],
        
        browsers: ['ChromeNoSandbox'],
        customLaunchers: {
            ChromeNoSandbox: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        }
    });
};
