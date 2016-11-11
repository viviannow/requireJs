define(['module/squire'],function (squire){
	console.log(squire.a)
		// 定义函数
　　　　var adds = function (x,y){
　　　　　　return x+y+squire.a;
　　　　};
		var reduse = function(x,y){
			return x-y
		}
		// // 返回对象
　　　　return {
　　　　　　adds: adds,
		  reduse:reduse
　　　　};
　　});