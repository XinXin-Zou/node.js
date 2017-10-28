var http=require("http");
var fs=require("fs");

/*
	text/plain:返回的是纯文本
	text/html:返回的是html
	application/json:返回的是json
*/
var server=http.createServer(function(req,res){
	// res.writeHead(200,{"Content-type":"text/html"});
	res.writeHead(200,{"Content-type":"application/json"});

	// var myReadStream=fs.createReadStream(__dirname+"/index.html","utf8");
	// var myReadStream=fs.createReadStream(__dirname+"/users.json","utf8");
	// myReadStream.pipe(res);

	//对象()返回json数据
	var users={
		name:"Henry",
		age:30,
		gender:"male",
	}
	res.end(JSON.stringify(users));
})
server.listen(3000,"localhost");
console.log('server is running...');