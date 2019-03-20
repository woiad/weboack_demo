const path = require('path')

// 生成新的html文件来替换旧的html文件，所有的bundle 会自动添加到 html 中
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 清理插件，每次打包前清理 /dist 文件夹，
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'tree shaking'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }

}
