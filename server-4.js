const http = require('http');
const urlLib = require('url');
var server = http.createServer((req,res)=>{
    if(req.url.indexOf('?')!= -1){
        // 加true返回对象
        var obj = urlLib.parse(req.url,true);
        var url = obj.pathname;
        var GET = obj.query
    }else{
        var url =  req.url
    }
    console.log(url,GET)

    res.write('登陆成功')
    res.end()
})
server.listen(8888)