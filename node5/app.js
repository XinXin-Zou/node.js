var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,res){
	if (req.url!="/favicon.ico") {
		// console.log(req.url);
		if (req.url=="/"||req.url=="/home") {
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream=fs.createReadStream(__dirname+"/home.html","utf8");
			 myReadStream.pipe(res);
			// res.end(__dirname+"/home.html");
		}else if(req.url=="/about"){
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream=fs.createReadStream(__dirname+"/about.html","utf8");
			 myReadStream.pipe(res);
			// res.end(__dirname+"/about.html");
		}else if(req.url=="/contact"){
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream=fs.createReadStream(__dirname+"/contact.html","utf8");
			 myReadStream.pipe(res);
			// res.end(__dirname+"/contact.html");
		}else{
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream=fs.createReadStream(__dirname+"/404.html","utf8");
			 myReadStream.pipe(res);
			// res.end(__dirname+"/404.html");
		}
}
	
	// res.writeHead(200,{"Content-type":"application/json"});
	// // var myReadStream=fs.createReadStream(__dirname+"/users.json","utf8");
	// myReadStream.pipe(res);

})
server.listen(3000,"localhost");
console.log('server is running...');