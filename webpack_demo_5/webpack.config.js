const path = require('path')

// 生成新的html文件来替换旧的html文件，所有的bundle 会自动添加到 html 中
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 清理插件，每次打包前清理 /dist 文件夹，
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '模块热替换'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map', // 使用source map,可以定位报错的代码的位置
    // 热重载，一旦修改代码并保存。浏览器的页面会自动刷新
    devServer: {
        contentBase: './dist', // 查找文件的位置
        hot: true
    }

}
