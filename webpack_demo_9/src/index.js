import _ from 'lodash'


function getComponent() {

    let element = document.createElement('div')
    let btn = document.createElement('button')
    let br = document.createElement('br')

    element.innerHTML = _.join(['Hello', 'webpack'], '')
    btn.innerHTML = 'Click me and look at the console'
    element.appendChild(br)
    element.appendChild(btn)

    // print.js 懒加载，只有点击了按钮才加载print.js,优化页面打开时间
    btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default()
        print()
    })
    return element
}

document.body.appendChild(getComponent())
