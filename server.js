const http = require('http');
const fs = require('fs');
// req:请求的信息；res:输出的信息
var server = http.createServer((req,res)=>{
    var file_name = './www' + req.url;
    fs.readFile(file_name,(err,data)=>{
        if(err){
            res.write('404')
        }else{
            res.write(data)
        }
        res.end()
    })
})
server.listen(8888)