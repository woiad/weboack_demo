# webpack_demo

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


webpack_demo_7  生产环境。使用webpack，开发项目时，有两个环境，一个是开发环境，一个是生产环境，两个环境的配置各不相同，但，一些基础的配置是一样的，因此webpack的配置可以分为三个部分， webpack.common.js、webpack.prod.js、webpack.dev.js,达到逻辑分离的效果。最后，可以使用 webpack-merge 插件将 webpack.common.js 和 其他两个环境的配置合成一个完整的开发环境配置或生产环境配置。

开发环境：注重于开发过程中的调试，bugger的查找，页面的实时重载或模块热替换。

生产环境：项目的优化，例如，代码的压缩，资源优化等。


webpack_demo_8  代码分离  

1、入口点分离：使用 entry 配置手动的分离代码

2、防止重复：使用 SplitChunksPlugin 去重和分离 chunk, 去除重复引用的模块。

3、动态引入：通过模块中的内联函数调用来分离代码。

SplitChunksPlugin 插件可以将公共的依赖模块提取到已有的 entry chunk 中，或者提取到一个新生成的 chunk 中。


webpack_demo_9 懒加载或者按需加载


webpack_demo_10 缓存
当项目在本地使用 webpack 构建完毕时，可以直接将 /dist 目录下的文件部署到服务器上，部署完毕，就能在线访问你的网站。想要提高网页的打开速度，可以使用缓存技术，使用缓存，会将文件直接存储在本地，下一次，再访问网站时，会检查本地存储的文件名跟服务器的文件名是否一致，如果一致，直接使用本地缓存好的文件，就不再下载服务器中的文件，到你

当项目在本地使用 webpack 构建完毕时，可以直接将 /dist 目录下的文件部署到服务器上，部署完毕，就能在线访问你的网站。想要提高网页的打开速度，可以使用缓存技术，使用缓存，会将文件直接存储在本地，下一次，再访问网站时，会检查本地存储的文件名跟服务器的文件名是否一致，如果一致，直接使用本地缓存好的文件，就不再下载服务器中的文件。如果源文件的名字不发生改变，客户端会一直使用缓存文件，导致
