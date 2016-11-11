### 定义：
CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。  
AMD规范则是非同步加载模块，允许指定回调函数。  
CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。  
主要用于服务端

### demos:
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};

// main.js
var counter = require('./lib').counter;
var incCounter = require('./lib').incCounter;

console.log(counter);  // 3
incCounter();
console.log(counter); // 3








### 参考链接
http://www.commonjs.org/  
http://javascript.ruanyifeng.com/nodejs/module.html  
https://addyosmani.com/writing-modular-js/