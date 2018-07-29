
const urlLib = require('url');

var obj = urlLib.parse('http://www.nihao.com/index?a=12&b=5',true);

// /index { a: '12', b: '5' }
console.log(obj.pathname,obj.query)