const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url')

http.createServer((req,res)=>{
    // GET
    var obj = urlLib.parse(req.url,true)
    var url = obj.pathname;
    const GET = obj.query;

    // POST
    var str = ''
    req.on('data',(data)=>{
        str += data
    })
    req.on('end',()=>{
        const POST = querystring.parse(str)
    })

    // 请求
    var file_name = './www' + url
    fs.readFile(file_name,(err)=>{
        if(err){
            res.write('404')
        }else{
            res.write(data)
        }
        res.end()
    })
}).listen(8888)