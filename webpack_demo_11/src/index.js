 require('babel-polyfill')
var { file, parse } = require('./globals.js')

function component () {
    var element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], '')

    // 假设我们处于 window 上下文
    // 当模块运行在 CommomJS 上下文中，这将会变成一个问题，此时的 this 指向 module.exports
    // 在这种情况下，可以通过使用 imports-loader 覆盖this指向
    this.alert('Hmmm, this is probable isn\'t a great idea...')
    parse()

    return element
}

document.body.appendChild(component())
