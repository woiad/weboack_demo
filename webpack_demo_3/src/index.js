import _ from 'lodash';
import printMe from './print.js';


function component() {
    let element = document.createElement('div')
    let btn = document.createElement('button')

    element.innerHTML = _.join(['hello', 'webpack'], '')

    btn.innerHtml = '点击这里， 然后查看 console!'
    btn.onclick = printMe
    element.appendChild(btn)

    return element
}

document.body.appendChild(component())
