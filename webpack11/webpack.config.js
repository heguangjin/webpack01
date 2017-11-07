var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:path.join(__dirname,"./js/main.js"),//打包的入口文件
    output:{//配置和输出相关的一些参数
        path:path.join(__dirname,"./dist"),// 指定输出文件的路径
        filename:"bundle.js"// 通过 filename 来指定输出文件的名称
    },
    plugins:[
      new htmlWebpackPlugin({// 在内存中，根据指定的模板页面，生成一个内存中的页面，同时，能够把打包好的 bundle.js 自动注入到 生成的页面中
          template:path.join(__dirname,"./index.html"),// 指定模板文件的路径
          filename:"index.html"// 这是在内存中生成的页面文件的名称
      })  
    ],
    module:{//所有的第三方loader，都需要配置到module这个节点下
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
            {test:/\.(jpg|gif|png|bmp)$/,use:"url-loader"}
        ]

    }
}