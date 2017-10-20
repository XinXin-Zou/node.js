//在Nodejs中经常使用函数表达式

//正常函数
function sayHi1(){
	console.log('Hello XiaoChen!');
}

//函数表达式 右左法则
//直接存入内存中
var sayHi2=function(){
	console.log('Hello MiaoJie!');
}

//sayHi();//打印函数表达式中的值

function callFunction(foo){
	foo();
}
callFunction(sayHi2);
//sayHi2更快速一点
