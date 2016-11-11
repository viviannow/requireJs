### 定义：
AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。    
它采用异步方式加载模块，模块的加载不影响它后面语句的运行  
主要有两个Javascript库实现了AMD规范：require.js和curl.js。  
主要用于浏览器端

### demos :  

define(['package/lib'], function(lib){
  function foo(){
    lib.log('hello world!');
  }

  return {
    foo: foo
  };
});


### 参考链接 
http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html  
https://github.com/amdjs/amdjs-api/wiki/AMD
