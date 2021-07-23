const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}