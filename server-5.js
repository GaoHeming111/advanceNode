const http = require('http')
var querystring = require('querystring')
http.createServer((req,res)=>{
    var str = '' //接受数据用
    // data------有一段数据到达时就发生一次（很多次）
    // end--------数据全部到达时发生（只一次）
    req.on('data',(data)=>{
        str += data;
    })
    req.on('end',()=>{
        var POST = querystring.parse(str)
        console.log(POST)
    })
}).listen(8888)