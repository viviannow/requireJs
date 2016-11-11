define(function (){
		// 定义函数
　　　　var adds = function (x,y){
　　　　　　return x+y;
　　　　};
		var reduse = function(x,y){
			return x-y
		}
		// 返回对象
　　　　return {
　　　　　　adds: adds,
		  reduse:reduse
　　　　};
　　});