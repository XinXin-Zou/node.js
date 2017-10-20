//引入模块,返回一个对象
var http=require("http");
//调用方法
var server=http.createServer(function(req,res){
	console.log('客户端和服务器已经建立通讯'+req.url);
	//数据类型如果是字符串不用写,html或json要写响应头
	res.writeHead(200,{"Content-type":"text/plain"});
	res.end("Hey NodeJS");
});
//监听本机服务器和端口号
server.listen(8000,"127.0.0.1");
console.log('server is running...');