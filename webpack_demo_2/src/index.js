import _ from 'lodash';
import './style.css';
import bg from './bg.jpg'
import data from './data.xml'


function component() {
    let element = document.createElement('div')

    element.innerHTML = _.join(['hello', 'webpack'], '')

    element.classList.add('hello')

    let myBg = new Image()
    myBg.src = bg
    element.appendChild(myBg)

    console.log(data)

    return element
}

document.body.appendChild(component())
