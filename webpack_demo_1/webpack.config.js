const path = require('path') // 导入node的path模块，处理文件路径

module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'main.js', // 打包输出的文件名
        path: path.resolve(__dirname, 'dist')  // 打包输出的文件的路径 path.resolve node的路径合成，__dirname表示当前文件路径，
    }
}
