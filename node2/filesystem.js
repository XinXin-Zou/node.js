var fs=require("fs");

//同步 读取 & 写入
// var readMe=fs.readFileSync('readMe.txt',"utf8");
// console.log(readMe);

// fs.writeFileSync("writeMe.txt",readMe);


//异步 读取 & 写入
// fs.readFile("readMe.txt","utf8",function(err,data){
	// if (err) {throw err};
	// console.log(data);
// });
// console.log(123);

// fs.writeFile("writeMe.txt","Hello Everyone",function(err,data){
	// if (err) {throw err;}
	// console.log(data);//返回undefined
// })

//异步读取文件readMe.txt,并将读取的文件内容写入到writeMe.txt中
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	if (err) throw err;
// 	fs.writeFile("writeMe.txt",data);
// })

//删除文件
// fs.unlink("readMe.txt",function(err,result){
// 	if (err) {throw err;}
// 	console.log(result);
// });

fs.mkdir("stuff");
fs.rmdir("stuff");