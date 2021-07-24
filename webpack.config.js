const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',

                }


            },
            {
                test: /\.(gif|png|jpe?g|svg|xml)$/i,
                use: 'file-loader',
            }

        ]
    },
    entry: "./src/app",
    output: {
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CopyPlugin({
            patterns:[
                {from: './src/assets', to:'assets'}
            ]
        })
    ]
}