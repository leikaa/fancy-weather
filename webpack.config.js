const path = require('path');

module.exports = {
    entry: {
        polyfill: '@babel/polyfill',
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development',
    devtool: process.env.NODE_ENV === 'production'
        ? 'hidden-source-map' : 'inline-source-map',
    watchOptions: {
        aggregateTimeout: 600,
        poll: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            }
        ]
    }
};