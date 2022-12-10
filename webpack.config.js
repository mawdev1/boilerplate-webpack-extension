const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        popup: './src/popup.jsx',
        contentScript: './public/scripts/content/content.js',
        background: './public/scripts/background/background.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },

            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/popup.html',
            filename: 'popup.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public' }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ]
}
