import {cube} from './math.js';
import printMe from './print.js';


function component() {
    let element = document.createElement('pre')
    let btn = document.createElement('button')

    element.innerHTML = ['Hello webpack', `5 cube is equal to ${cube(5)}`].join('\n\n')

    return element
}

document.body.appendChild(component())

