# weboack_demo

 webpack_demo_1 学习webpack 起步

webpack_demo_2 资源管理 主要是各种文件， css,json,xml，图片，字体等的处理。主要用到loader

webpack_demo_3 管理输出， 使用 html-webpack-plugin 插件，可以生成新的html页面 所有的 bundle 会自动添加到 新页面中，这样就可以动态输出
bundle 到页面中。可以使用 clean-webpack-plugin 插件，在每次打包前删除 /dist 下面的文件，这样可以清理用不到的文件。

webpack_demo_4 开发环境
  1.source-map 打包之后的 bound 里面含有多个js文件，一旦报错，堆栈无法找出错误的源头是哪个js文件，这时候就要用到 source-map 来映射错误的位置，用了source-map 就可以定位报错的位置。
  2.webpack --watch webpack观察者模式，一旦运行该命令，命令不会退出。修改源文件的代码并保存，webpack 会自动构建。这样，就不需要在每次修改之后，再手动运行 npm run build 构建。
  3.webpack-dev-server 实时重载功能，运行这个命令之后，一旦修改源文件的代码并保存，页面会自动刷新，不需要手动刷新。
  
webpack_demo_5 热模块替换  HotModuleReplacementPlugin, 模块热替换插件， 开启热模块替换之后, 修该某个模块的代码，页面中与该模块相关的地方会自动更新，不需要刷新页面。js文件之外的其他文件的修改，例如，html, css等，也可以实现模块热替换的功能，实现该功能的关键是各个文件的 loader 实现的。loader 调用模块热替换的 module.hot.accept 接口实现热加载功能。

webpack_demo_6 tree shaking  通常用语言描述JS上下文中未引用的代码（dead-code），它依赖于ES2015模块语法的静态解构特性，例如 import 和 export。当使用 ES6 的语法进行导出时，如果导出的模块没有被使用，并且当前的环境是 production ，那么运行 npm run build 构建时，没有被使用的模块会被删除。这样，就可以最大程度上优化项目，减小项目的体积。

注意：删除没有使用的 export 时，需要注意 export 所在的文件是否有‘副作用’(side effects)。
"side effects(副作用)"的定义是：在导入时会执行特殊行为的代码，而不是仅仅 export 一个或多个 export。例如，polyfill,它影响全局作用域，并且通常不提供 export。

如果确定你的代码没有副作用,那么可以在 page.json 中设置 “sideEffects”: false, 来告诉 webpack 它可以安全的删除未用到的 export,如果，某个文件确实有一些副作用，可以改为提供一个数组 “sideEffects”: ["./src/some-side-eccects.js"]。

注意：所有导入的文件都会受到 tree shaking 的影响，这意味着，如果在项目中使用类似 css-loader 并 import 一个 css 文件，则需要将它添加到 sideEffects 数组中，以避免在生产模式中将它删除
page.json
{
 'sideEffects': ["./src/some-side-eccects.js","*.css"]
}
最后，还可以在 module.rules 中设置 "sideEffects"
