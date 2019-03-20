const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, { // merge 合并两个的对象为一个对象
    mode: 'production',
    devtool: 'source-map'
})
