const express = require('express')
// 用来读取静态文件
const expressStatic = require('express-static')
var server = express()
server.listen(8888)

var users = {
    'zhangsan': '123',
    'lisi': '321',
    'wangwu': '111'
}
server.get('/login',(req,res)=>{
    var user = req.query['user']
    var pass = req.query['pass']
    if(users[user]==null){
        res.send({ok:false, msg:"此用户不存在"})
    }else{
        if(users[user]!=pass){
            res.send({ok:false, msg:"密码不正确"})
        }else{
            res.send({ok:true, msg:"成功"})
        }
    }
})
server.use(expressStatic('./www'))