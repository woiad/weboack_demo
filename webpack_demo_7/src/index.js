import {cube} from './math.js';


function component() {
    let element = document.createElement('pre')
    let btn = document.createElement('button')

    element.innerHTML = ['Hello webpack', `5 cube is equal to ${cube(6)}`].join('\n\n')

    return element
}

document.body.appendChild(component())

