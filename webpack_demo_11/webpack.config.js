const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: require.resolve('./src/index.js'),
                // import-loaders 覆盖全局变量，把this 指向 window
                use: 'imports-loader?this=>window'
            },
            {
                test: require.resolve('./src/globals.js'),
                // exports-loader 把 library 中的全局变量，变为一个普通的模块导出。
                use: 'exports-loader?file,parse=helpers.parse'
            }
        ]
    },
    plugins: [
        // ProvidePlugin 将第三方依赖, 变为一个全局变量，在 webpack 编译的每一个模块中都能通过这个变量获取这个依赖的 package,然后使用
        new webpack.ProvidePlugin({
            _: 'lodash'
        })
    ]
}
