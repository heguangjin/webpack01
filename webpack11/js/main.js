// 这是 JS 的入口文件

// 使用 Jquery 来进行 代码逻辑的编写
// 使用 ES6 中的 import 来导入第三方模块
// 由于浏览器 不识别 高级的 ES6 语法，所以 咱们这种方式 浏览器不能正常解析
import $ from "jquery"
import "../css/index.css"
import "../css/main.scss"
$(function(){
    $(".list>li:odd").css("backgroundColor","red");
    $(".list>li:even").css("backgroundColor",function(){
        return "yellow";
    });
})