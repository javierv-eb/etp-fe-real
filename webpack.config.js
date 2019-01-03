const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const jsonImporter = require('node-sass-json-importer');
require("babel-polyfill");
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',                  
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".css", ".ts", ".scss"]
    },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: '[name].css',
                chunkFilename: '[id].css'
            }
        ),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'REACT_APP_TARGET': JSON.stringify('browser'),
            },
        }),
        new DotenvPlugin({
            sample: './.env.fake',
            path: './.env',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
};
