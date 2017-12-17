var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var path_src = path.resolve(__dirname, './src');
var path_dist = path.resolve(__dirname, './dist');

module.exports = {
    context: path_src,
    entry: {
        main: './main/main.js',
        contact: './contacts/contact.js'
    },
    output: {
        path: path_dist,
        filename: './[name]/[name].bundle.js'
    },
    resolve: {
        modules: ['node_modules']
    },
    module: {
        rules: 
            [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract
                    ({
                            fallback: "style-loader",
                            use: ["css-loader", 'sass-loader']
                        })
                },   
                {
                    test: /\.html$/,
                    use: ['file-loader?name=[name]/[name].[ext]']
                }   
            ]
        },
    plugins: [
        new ExtractTextPlugin('./[name]/[name].css', {
            allChunks: true
        })
    ]
};
