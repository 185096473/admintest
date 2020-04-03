// 引入http模块   require  加载
var http=require("http")
// 创建服务器    createServer  创建服务器  req=》requsest  请求  res=> response  响应
var server=http.createServer(function(req,res){
      console.log("hello node")
      //设置响应头    壮态码    文本类型    text/plain  image/jpeg   image/gif   编码  utf-8
      res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
      //   结束响应
      res.end("我已经结束了")

})
// 监听端口
server.listen(3000)

// 后台： 只要改动代码那么必须重新启动