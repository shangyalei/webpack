const webpack=require('webpack');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');

module.exports={
  //入口以文件 __dirname是当前目录下，src下的index.js文件
  entry:path.resolve(__dirname,'./src/index.js'),
  //出口文件
    output:{
        //把编译好的文件放到哪里;放到dist目录下
        path:path.resolve(__dirname,'dist'),
        //编译好的文件的命中
        filename:'bundle.js'

    },
    //JS怎样来编译，CSS怎样来编译
    module:{
        rules:[
            {//配置的是js文件
                test:/\.js(x)?$/,      //以.js或则.jsx结尾的文件
                use:'babel-loader',     //用什么来编译
                exclude:/node_module/   //忽略
            },
            {
                test:/\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            }
        ]
    },

    //自动插入到index.html中，把页面渲染出来
    //html-webpack-plugin插件
    plugins:[
        new ExtractTextWebpackPlugin("styles.css"),
        //new webpack.optimize.UglifyJsPlugin(),//具有右文件压缩的功能，开发过程中不建议使用，上线时使用
        new HtmlWebpackPlugin({
            //把谁作为模板文件
            template:'./src/index.html'
        })
    ]


};














































