var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: [
            './vendor.imports.js',
            './app.js'
        ]
    },
    output: {
        path: __dirname + '/bundle/js',
        filename: '[name].bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ] //loaders
    } //module
};