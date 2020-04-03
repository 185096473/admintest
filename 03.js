var fs=require("fs")
// 读文件   readFile(url,options,callback)
fs.readFile("./static/1.txt",function(err,data){
    // err 报错的信息  data 文件内容

    // console.log(err)   //null
    // console.log(data.toString())
})
fs.writeFile("./static/3.txt","韩松衫",function(err){
    //  若文件不存在则创建文件  
    console.log(err)
})
