const express = require('express')
const cookieParser = require('cookie-parser')
var server = express()
// 发送cookie 
// 1--读取 2--写入
// cookieParser()里面有字符串表示加密，但是下面必须声明signed:true
server.use(cookieParser('sadasdasdas'))
server.use('/',(req,res)=>{
    res.cookie('user','blue',{signed:true})
    console.log('签名的cookie:',req.signedCookies)
    console.log('未签名的cookie:',req.cookies)
    res.send('ok')
})

// 删除cookie
server.use('/',(req,res)=>{
    res.clearCookie('user')
    res.send('ok')
})
server.listen(8888)