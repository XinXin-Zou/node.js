var express=require("express");
var app=express();
//express和html无法对接,要设置模板引擎
//send只能发送纯文本字符串,要用sendFile文件,render发送ejs

app.set("view engine","ejs");
app.use("/assets",express.static('assets'));

app.get("/",(req,res)=>{
	// res.sendFile(__dirname+"/views/index.ejs");
	res.render("index");
});

app.get("/contact",(req,res)=>{
	// res.sendFile(__dirname+"/contact.html");
	// res.sendFile(__dirname+"/views/contact.ejs");
	res.render("contact");
});

//路由参数
// http://127.0.0.1:3000/blogs/2
app.get("/blogs/:sbqid",(req,res)=>{
	// var sbqdata={title:"博客1",author:"Henry",body:"this is first blog"};
	var sbqdata=[
		{title:"博客1",author:"Henry",body:"this is first blog"},
		{title:"博客2",author:"Bucky",body:"this is second blog"},
		{title:"博客3",author:"Emily",body:"this is third blog"}

	];
	res.render("blog",{id:req.params.sbqid,data:sbqdata});
});

app.listen(3000);