var express=require("express");
var app=express();//app调用方法成为对象

app.get('/',(req,res) => {//es6相当于function
	// console.log(req);
	res.send("This is Home Page!");

})
app.get('/contact',(req,res) => {
	res.send("This is Contact Page!");
})
app.get('/blogs/:sbqid',(req,res) => {
	// console.log(req);
	res.send("具体的路由参数为:"+req.params.sbqid);
})

app.listen(3000);//默认