var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:path.join(__dirname,"./src/js/index.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,"./src/index.html"),
            filename:"index.html"
        })
    ],
    module:{
        rules:[
             {test:/\.js$/,use:"babel-loader",exclude: /node_modules/},
             {test:/\.css$/,use:["style-loader","css-loader"]}            
        ]
    }
}