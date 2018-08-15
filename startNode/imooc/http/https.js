// https是在http基础上增加了ssl和tls握手以及数据加密传输

var https = require('https')
var fs = require('fs')

var options = {
    // .pem  cert 指证书文件
    key: fs.readFileSync('ssl_key.pem'),
    cert: fs.readFileSync('ssl_cert.pem')
} 

https
    .createServer(options,function(req,res){
    res.writeHead(200)
    res.end('hello imooc')
    })
    .listen(8090)
