const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.css$/, // 根据正则表示匹配css
                /*
                loader 用于处理那些使用 import 或 require 导入的文件
                loader 的使用从后往前，即先使用 'css-loader', 然后在使用'style-loader'
                css-loader 将 css 内容打包为 js 字符串，并且把 background, @font-face 等引用的图片
                字体文件交给指定的 loader 打包。
                style-loader 将css-loader 打包好的 css 代码以 <style> 标签的形式插入到 html 文件中。
                * */
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    'file-loader' // 处理二进制文件的路径，把原来的文件路径转换成打包后的文件的路径
                ]
            },
            {
                test: /\.(woff|woff2|eot|tff|otff|ttf)$/,
                use: [
                    'file-loader' // 处理字体路径
                ]
            },
            {
                test: /\.xml$/,
                use:[
                    'xml-loader' // 处理xml文件
                ]
            },
            {
                test: /\.csv$/,
                use: [
                    'csv-loader' // 处理csv文件
                ]
            }
        ]
    }
}
