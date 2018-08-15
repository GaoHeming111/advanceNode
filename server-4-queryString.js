// 查询字符串，对http请求所带的数据进行解析
const querystring = require('querystring');
var json = querystring.parse('user=a&pass=f&age=18')
// json=>  { user: 'a', pass: 'f', age: '18' } .parse可以自动输出对象格式 数据
console.log(json);