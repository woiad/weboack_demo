import _ from 'lodash';
import printMe from './print.js';
import './style.css'


function component() {
    let element = document.createElement('div')
    let btn = document.createElement('button')

    element.innerHTML = _.join(['hello', 'webpack'], '')

    btn.innerHTML = '修改， 然后查看 console!'
    btn.onclick = printMe
    element.appendChild(btn)

    return element
}

let element = component() // 存储 element, 以在 print.js 修改时重新渲染

document.body.appendChild(element)

if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     document.body.removeChild(element)
       element = component() // 重新渲染 'component',以便及时更新 click 处理函数
       document.body.appendChild(element)
   })
}
