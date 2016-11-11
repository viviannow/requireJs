### requireJs 用法说明 
网上的很多资料都有一个问题，作者会把自己认为简单的细节略过，但初学者常常因为这些作者认为简单的细节而被困在一个地方。
我翻了几个资料做了如下总结，如果有不足请指出！
ps:到最后还是要回到官方API



### 说明
最新版本的RequireJS压缩后只有14K，堪称非常轻量  

#### 用法：
	引入库  
	<--baseUrl会被设置为scripts目录-->  
	<script data-main="scripts/main.js" src="scripts/require.js"></script>  

	##### 定义模块 
	define(['jquery','undersocre']function (){
　　　　var adds = function (x,y){
　　　　　　return x+y;
　　　　};
　　　　return {
　　　　　　adds: adds,
　　　　};
　　});
	##### 引入模块
	require(['jquery','math'], function ($,math){//注意$别名
	var add = math.adds(1,1);
	$('.btn').on('click',function(){$('p').html(add);})

});


#### 参数说明
	RequireJs是相对于 baseUrl 来加载所有的代码，baseUrl通常设置为data-main属性值中所引用的脚本的所在目录。
	data-main是RequireJs中的一个特殊属性，脚本最初的加载就是它来触发的。

### 注意细节
module ID要符合下面的规则：  
	▪ 以".js"结尾  
	▪ 以"/"开始  
	▪ 包括URL协议，如"http:"或"https:"  
define 返回的是对象，对象下属性的调用
一个文件一个模块: 每个Javascript文件应该只定义一个模块，这是模块名-至-文件名查找机制的自然要求。

### 参考链接
官网 http://www.requirejs.cn/  
英文网 http://requirejs.org/docs/api.html
阮老师文章 http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html  
AMD https://github.com/amdjs/amdjs-api/wiki/AMD  
Modules http://wiki.commonjs.org/wiki/Modules/1.1  
http://cyj.me/why-seajs/requirejs/  
https://docs.nodejitsu.com/articles/getting-started/what-is-require/  
backbone http://backbonejs.org/  
underscore http://www.css88.com/doc/underscore/  

### 构建工具r.js   
http://www.tuicool.com/articles/r6RjYjE
http://www.cnblogs.com/chen8840/p/5366984.html

插件：https://github.com/requirejs/requirejs/wiki/Plugins  
百度编辑器加入 http://www.mamicode.com/info-detail-950270.html


### 问题与延伸

CommonJS:模块系统【用于服务器端】
AMD:异步模块定义【用于浏览器端】





















