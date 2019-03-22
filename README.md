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

当项目在本地使用 webpack 构建完毕时，可以直接将 /dist 目录下的文件部署到服务器上，部署完毕，就能在线访问你的网站。想要提高网页的打开速度，可以使用缓存技术，使用缓存，会将文件直接存储在本地，下一次，再访问网站时，会检查本地存储的文件名跟服务器的文件名是否一致，如果一致，直接使用本地缓存好的文件，就不再下载服务器中的文件。如果源文件的名字不发生改变，客户端会一直使用缓存文件，导致两处的文件不能同步，网站就会出问题。

在 webopack 中可以通过替换 output.filename 中的 substitutions[可替换模板字符串] 设置，来定义输出文件的名字。其中 [contenthash] substitutions 将根据资源的内容创建出唯一的 hash ，资源的内容发生变化， [contenthash] 也会发生变化

runtime: 在浏览器运行过程中，webpack 用来连接模块化应用程序所需的所有代码。它包含：在模块交互时，连接模块所需的加载和解析的逻辑。包括：已经加载到浏览器中的连接模块逻辑，以及尚未加载模块的延迟加载逻辑

manifest: 当 complier 开始执行、解析和映射应用程序时，它会保留模块的详细要点。这个数据集就是manifest。相当于一份清单，里面记载着所有的 chunk ，与 chunkName 的映射。当 runtime 处理模块时，可以根据 chunkName，在 manifest 中映射 chunk 。

使用 webpack 构建应用时，有三种代码类型：
1、个人或团队编写的源码
2、你的源码依赖的第三方的 ‘library’（库） 或 ‘vendor'
3、webpack 的 runtime 和 manifest 管理所有的模块交互

可以使用 webpack 提供的 SplitChunksPlugin 可以将模块分离到单独的 bundle 中。
可以使用 webpack 的 optimization.runtimeChunk 将 runtime代码拆分为一个单独的 chunk 。将其设置为 single , 来为所有 chunk 创建一个 runtime bundle。
optimization.splitChunks 添加 cacheGroups 参数进行相关设置，可以把第三方的 library 提取到单独的 venodr chunk 文件中。

[contenthash]发生变化的情况：
.main bundle 会随着自身的新增内容的修改，发生变化
.vendor bundle 会随着自身的 module.id 的变化，而发生变化
.manifest bundle 会因为引入一个新模块，而发生变化

由于 vendor 是第三方的库(library)，所以它稳定的，不会发生变化，我们希望它的 [contenthash] 不变，可以使用两个插件来解决这个问题，第一个是，NameModulesPlugin, 将使用模块的路径，而不是一个数字indetifier。这个插件有助于开发环境下产生更可读的输出结果，然而，执行时间会稍长。第二个插件是 HasModulesIdsPlugin , 推荐用于生产环境构建。


webpack_demo_11 shim 预置依赖

shim 预置全局变量：使用  ProvidePlugin 插件后,能够在 webpack 编译的每个模块中，通过访问一个变量获取一个 package 。如果 webpack 在模块中看到这个变量，它将在最终的 bundle 中引入给定的 package 并将它提供给要用到它的模块。

shim 细粒度：一些遗留的 package 的 this 指向 window 对象，当模块运行在 CommonJS 上下文中，this 指向 module.export ,这样就会出现问题，解决这个问题的方法就是使用 imports-loader 覆盖 this 指向

全局 export : exports-loader 将全局变量作为一个普通模块导出。webpack_demo_11 中的示例代码：将 globals.js 中的 file 导出为 file ，以及将 helpers.parse 导出为 parse。

shim 是一个库(library),它将一个新的 API 引入到一个旧的环境中，而且仅仅依靠旧的环境已有的手段实现
polyfill: 就是一个用在浏览器 API 上的 shim，通常的做法就是先检查当前浏览器对某个 API 是否支持，如果不支持，就按需加载对应的 polyfill。然后，新旧浏览器就都可以使用这个 API。



