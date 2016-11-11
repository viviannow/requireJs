require.config({
		// baseUrl为所有模块查找的根路径。当加载纯.js文件（‘/开头、.js结尾、含有协议’）时不会使用baseUrl。
		// baseUrl不设置时默认为main.js所在路径
		// baseUrl设置时，相对于RJ所在的HTML页面的路径
		baseUrl: "./js",

		// 用于映射那些不直接放置在baseUrl下的模块名
		// 起始位置是相对于baseUrl的，除非以‘/’开头或含有URL协议（如：http）
		paths: {
			"jquery": "../libs/jquery-3.1.1.min",
			"underscore": "../libs/underscore.min",
			"backbone": "../libs/backbone.min",
		},


		//shim：为那些没有使用define()来声明依赖关系、设置模块的“浏览器全局变量注入”型脚本做依赖和导出配置。
		shim: {
			'underscore':{
				exports: '_'
			},
			'backbone': {
				deps: ['underscore', 'jquery'],
				exports: 'Backbone'
			}
		}
});

 // 这个函数在所有依赖模块被加载完成后才调用执行
require(['jquery','math'], function (jquery,math){
	var add = math.adds(1,1);
		// var add = math.adds(1,1);
		// console.log(math.reduse(1,1));
		// console.log(squire.squire(2,1));
		// console.log(math.add(1,1)-squire.squire(2,1))
		$('.btn').on('click',function(){
			$('p').html(add);
		})

});




