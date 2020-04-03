// url
var url = require("url")
// { Url: [Function: Url],
//     parse: [Function: urlParse],
//     resolve: [Function: urlResolve],
//     resolveObject: [Function: urlResolveObject],
//     format: [Function: urlFormat],
//     URL: [Function: URL],
//     URLSearchParams: [Function: URLSearchParams],
//     domainToASCII: [Function: domainToASCII],
//     domainToUnicode: [Function: domainToUnicode],
//     pathToFileURL: [Function: pathToFileURL],
//     fileURLToPath: [Function: fileURLToPath] }
/**
 * url模块的作用：
 * url字符串是一个结构化的字符串
 * 
 * 注意：
 * url模块提供了两套api处理url
 * node.js遗留特有的api
 * 
 */
// parse 解析url  返回一份url属性对象
// http://localhost:3000/red?username=tom&password=123
// var data=url.parse("http://localhost:3000/red?username=tom&password=123",true).query

// url.parse
/***
 * 
 * 
 * 
 *  
 */
// console.log(data)
// resolve 解析浏览器超链接，转换成基本的url
// 参数：  from 解析时对应的url   to  要解析的超链接
// var data=url.resolve("/aa/bb/cc","dd")    //    /aa/bb/dd
// var datatwo=url.resolve("http://localhost:3000/","ffff")
// var datathree=url.resolve("http://localhost:3000/aa","vv")
// console.log(datathree)
// format  返回一个格式化的url字符串

var objurl = {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'localhost:3000',
    port: '3000',
    hostname: 'localhost',
    hash: null,
    search: '?username=tom&password=123',
    query: 'username=tom&password=123',
    pathname: '/red',
    path: '/red?username=tom&password=123',
    href: 'http://localhost:3000/red?username=tom&password=123'
} 
var mat=url.format(objurl)
console.log(mat)
