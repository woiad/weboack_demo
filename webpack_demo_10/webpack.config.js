const path = require('path')
const webpack = require('webpack')
// 生成新的html文件来替换旧的html文件，所有的bundle 会自动添加到 html 中
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 清理插件，每次打包前清理 /dist 文件夹，
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    output: {
        // contenthash 根据资源内容创建唯一的hash，当资源内容发生改变，contenthash 也会改变
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '缓存'
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }

}
