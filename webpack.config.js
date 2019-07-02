//webpack的配置
/* 这个配置文件通过 node 中的模块操作，向外暴露了一个配置对象 */
const path = require('path');
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    /* 入口  表示要打包哪个文件*/
    /* path是node提供的一个对象，使用join方法，dirname表示当前文件所在的根目录 */
    /* 后面表示要使用的文件所在的相对路径 */
    entry: path.join(__dirname,'./src/js/main.js'),
    output: {
        /* 
            WARING 这里，只指定打包生成文件存放路径，不包括文件名
        */
        path: path.join(__dirname,'./dist'),
        /* 
            打包生成文件的文件名
        */
       filename: 'bundle.js'
    },
    devServer: {
        //配置 dev-server 的配置。相对来说
        open: true,//自动打开浏览器 系统默认
        port: 3000, //监听端口
        contentBase: 'src',// 文件打开的根目录
        hot: true //开启热更新，需要使用下面的补丁

    },
    plugins: [
        
            /*  
                引入 补丁
            */
            new VueLoaderPlugin(),
       
        /* 启用模块热更新的补丁 */
            new webpack.HotModuleReplacementPlugin()
    ],
      /* 配置第三方模块加载器 */
    module: {
        /* 
            1、在导入文件时，如果出现非js文件，在module上查找相应的文件后缀，按照
            用户配置好的loader对应，进行解析
        */
        rules: [
            /* 
                正则匹配 css,使用style-loader 与css-loader 进行解析
                使用顺序是从 右到左 进行解决
            */
           /* 
                npm i vue-loader vue-template-compilter -d
           */
            {test:/\.vue$/,use: 'vue-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            /* 
                👆 配置 babel from webpack
                👇 新增。babelrc文件
                {
                    "presets": ["env","stage-0"],
                    "plugins": ["transform-runtime"]
                }
                目前我们安装的babel-pareset-env 是比较新的es语法
                之前我们安装的是babel-pareset-es2015
                env 包含了所有的 ES**** 语法
            */
            {test: /\.css$/,use:['style-loader','css-loader']},
            {test: /\.less$/,use:['style-loader','css-loader','less-loader']},
            {test: /\.scss$/,use:['style-loader','css-loader','sass-loader']},
            /* 处理路径的loader 会转换为base64  
                使用 ？ 传参 与http协议传参一样
                limit 限制 图片转换为base64的阈值
                会修改图片的名字，转化为hash值，解决重名的问题
                &name=[hash:8]-[name].[ext]
            */
            {test: /\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader?limit=666&name=[hash:8]-[name].[ext]']},
            {test: /\.(ttf|eot|svg|woff|woff2)$/,use:['url-loader?limit=666&name=[hash:16]-[name].[ext]']}
        ]
    },
    
    resolve: {
        alias: {
            //设置 import 导入时，学的
            "vue$":"vue/dist/vue"
        }
    }
}
/* 输入 webpack 命令时
    1、webpack 发现门没有通过命令的形式指定入口和出口
    2、webpack 会在项目根目录中查找webpack.config.js 
    3、webpack 会解析执行此文件
    4、当webpck 解析执行完就得到了配置文件，导出配置对象，按照配置文件中的配置进行打包

*/
/* 
    webpack-dev-server 这个工具，来实现自动打包编译的功能

    1、运行npm install webpack-dev-server -d 将这个工具安装在开发环境

    2、直接输入webpack-dev-server无法使用

    3、因为项目不是全局安装的，因此无法将他当作脚本命令进行直接运行

    
*/