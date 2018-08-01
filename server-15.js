const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const jade = require('jade')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const static = require('express-static')
var server = express()
server.listen(8888)

// 1.解析cookie
server.use(cookieParser('sadsadsazcxzczx'))
// 2.使用session
var arr = []
for(var i=0;i<100000;i++){
    arr.push('keys_'+Math.random())
}
server.use(cookieSession({name:"zns_id_a",keys:arr,maxAge:20*3600*1000}))
// 3.post数据
server.use(bodyParser.urlencoded({extended:false}))
// 用户请求
server.use('/',(req,res,next)=>{
    console.log(req.query,req.body,req.cookies,req.session)
})
// 4.static数据
server.use(static('./www'))