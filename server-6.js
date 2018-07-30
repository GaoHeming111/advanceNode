const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url')
var users = {}

http.createServer((req,res)=>{
    // 解析数据
    var str = ''
    req.on('data',(data)=>{
        str += data
    })
    req.on('end',()=>{
        var obj = urlLib.parse(req.url,true);
        const url = obj.pathname
        const GET = obj.query
        const POST = querystring.parse(str)
        // 区分是接口还是文件
        if(url == '/user'){ //接口
            console.log(GET)
            switch(GET.act){
                case 'reg':
                    // 检查用户是否已经有了
                    if(users[GET.user]){
                        res.write('{"ok":false,"msg":"此用户已存在"}')
                    }else{
                        users[GET.user] = GET.pass 
                        res.write('{"ok":true,"msg":"注册成功"}') 
                    }
                    // 插入users
                    break;
                case 'login':
                    // 检查用户是否登陆
                    if(users[GET.user]==null){
                        res.write('{"ok":false,"msg":"此用户不存在"}')
                    // 检查用户密码
                    }else if(users[GET.user]==GET.pass){
                        res.write('{"ok":false,"msg":"用户名或密码错误"}')
                    }else{
                        res.write('{"ok":true,"msg":"登陆成功"}')
                    }
                    break;
                default:
                    res.write('{"ok":false,"msg":"未知的act"}') 
            }
            res.end()
        }else{  //文件
            // 读取文件
            var file_name = './www' + url
            fs.readFile(file_name,(err,data)=>{
                if(err){
                    res.write('404')
                }else{
                    res.write(data)
                }
                res.end()
            })
        }
    })
    

    
}).listen(8888)