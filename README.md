# weboack_demo

 webpack_demo_1 学习webpack 起步

webpack_demo_2 资源管理 主要是各种文件， css,json,xml，图片，字体等的处理。主要用到loader

webpack_demo_3 管理输出， 使用 html-webpack-plugin 插件，可以生成新的html页面 所有的 bundle 会自动添加到 新页面中，这样就可以动态输出
bundle 到页面中。可以使用 clean-webpack-plugin 插件，在每次打包前删除 /dist 下面的文件，这样可以清理用不到的文件。

webpack_demo_4 开发环境
  1.source-map 打包之后的 bound 里面含有多个js文件，一旦报错，堆栈无法找出错误的源头是哪个js文件，这时候就要用到 source-map 来映射错误的位置，用了source-map 就可以定位报错的位置。
  2.webpack --watch webpack观察者模式，一旦运行该命令，命令不会退出。一旦，修改源文件的代码并保存，webpack 会自动构建。这样子，就不需要在每次修改之后，在手动运行 npm run build 构建。
  3.webpack-dev-server 实时重载功能，运行这个命令之后，一旦修改源文件的代码并保存，页面会自动刷新，不需要手动刷新。
