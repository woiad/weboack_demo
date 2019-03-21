import _ from 'lodash'
import Print from './print.js'


function component() {

    let element = document.createElement('div')
    let btn = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'webpack'], '')
    btn.innerHTML = '点击在这里，查看 console'
     btn.onclick = Print.bind(null, 'hello webpack!')
    element.appendChild(btn)
    return element
}

document.body.appendChild(component())
