const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'development',
    devtool: process.env.NODE_ENV === 'production'
        ? 'hidden-source-map' : 'inline-source-map',
};