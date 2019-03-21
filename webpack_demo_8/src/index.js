


function getComponent() {


    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
        let element = document.createElement('div')

        element.innerHtml = _.join(['Hello', 'webpack'], '')

        return element
    }).catch( error => 'An error occurred while loading the compoment')
}

getComponent().then(compoment => {
    document.body.appendChild(compoment)
})
