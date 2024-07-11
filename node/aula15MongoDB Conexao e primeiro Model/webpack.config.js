const path = require('path'); // CommnJs

module.exports = {
    mode: 'development',
    entry: './frontend/main.js',
    output:{
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_module/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
           test: /\.css$/,
           use: ['style-loader', 'css-loader']   
        }]
    },
    devtool: 'source-map'
};