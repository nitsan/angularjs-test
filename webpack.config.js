const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    mode: 'development',
    entry: './src/app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    devtool: 'cheap-module-inline-source-map',
    devServer: {
        proxy: {
            "*": "http://localhost:3000"
        }
    }
};

module.exports = config;
