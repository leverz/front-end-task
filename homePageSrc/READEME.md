#项目:人人金服官网

## 人人金服官网于2016.05.27上线完毕.

## 说明:
 1. 项目基于ES6 + React + Webpack 搭建, 兼容IE8+.
 2. 项目所有依赖卸载package.json文件中, 需要先使用 npm install 安装项目的所有依赖.
 3. 运行 npm dev 进入开发环境. 会通过webpack-dev-server启动一个本地server, 支持代码热更替.
 4. 运行 npm build 会使用webpack对文件进行打包, 打包后的文件不会有版本号, 只是在开发过程中可能会用到.
 5. 运行 npm dist 会使用webpack对文件进行打包, 并生成一个对应的hash值来当做版本号, 这个是用来在开发完之后进行发布到测试环境或者线上环境时使用.
 6. Images文件夹下,放置官网的shortcut.
 7. dist目录存放最终的打包文件,以及额外引入的用来解决兼容性问题的库
 8. components目录用来放置React组件
 9. index.html是入口文件
 10. 暂不支持打包后自动将hash插入到html文件中,需要手动添加.
 11. 所有的图片目前都放到了MATRIX项目的图片文件夹中(gitrepos/external-matrix/dist/assets/images/)
 12. 目前线上打包文件的版本号为e43e82a2c70603e68637
 
## 常见问题:
 1.启动webpack-dev-server或者使用webpack打包, 生成的文件在IE8下报错, 并无法显示页面.<br/>
   **解决方案:**<br/>
   可能是package.json,在安装时漏装了包.我当时的解决方式是对着package.json,按着对应的版本号,一个一个又装了一遍.
   
 2.与后台联调时,为避免跨域问题需要修改nginx配置.保证前后端在相同域名下.或者在域名不同时 nginx 要给 http 加一个 CORS 的跨域头,这样就能实现跨域:<br/>
    ** add_header "Access-Control-Allow-Origin" "*"; **