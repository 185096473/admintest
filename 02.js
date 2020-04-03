var http=require("http")
var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    console.log(req.url)
    // req.url   获取地址栏路径
    // switch(req.url){
    //     case "/red":
    //         // 写入
    //         res.write("red")
    //         break;
    //     default :
    //         res.write("我是默认的")
    // }
    if(req.url=="/red"){
        res.write("red")
    }else{
        res.write("我是默认的")
    }
    res.end()
})
server.listen(3000)