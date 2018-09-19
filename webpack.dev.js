const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        index: "./src/app.jsx"
    },
    output: {
        path: path.resolve(__dirname, '/'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './',
        hot: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react', '@babel/preset-flow']
                    }
                }
            }
        ]
    },
    resolve:{
        extensions: ['.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ]
}