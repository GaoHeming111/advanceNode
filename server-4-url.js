const urlLib = require('url');
// 加true是返回一个对象
var obj = urlLib.parse('http://www.nihao.com/index?a=12&b=5',true);

// /index { a: '12', b: '5' }
console.log(obj.pathname,obj.query)