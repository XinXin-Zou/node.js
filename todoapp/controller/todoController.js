var bodyParser=require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var data=[{item:"Dog"},{item:"East"},{item:"West"}];

module.exports=function(app){
	// console.log(app);
	app.get('/todo',(req,res)=>{
		res.render("todos",{todos:data});
	});
	
	app.post('/todo',urlencodedParser,(req,res)=>{
		// console.log(req.body);
		data.push(req.body);
		res.json(data);
	});
	
	app.delete('/todo/:name',(req,res)=>{
		// console.log(req.params.name);
		//遍历数组
		//ES6 ==es2015 array method(for...of  filter  map)
		//filter : 过滤(条件满足的留下,不满足的干掉)
		// data=data.filter(function(todo){
		// 	var value=todo.item!==req.params.name;
		// 	// console.log(value);
		// 	return value;
		// });
		
		for(var i=0;i<data.length;i++){
			if (data[i].item==req.params.name) {
				data.splice(i,1);
			}
		}
		res.json(data);
	});
}