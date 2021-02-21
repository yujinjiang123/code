const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    mode: "production",
    entry:{
        main:path.resolve(__dirname,'./src/index.js')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./src/index.html'),
            filename: `index.html`,
            chunks: ['main']
        })
    ]
}


module.exports = config;
