const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const consolidate = require('consolidate')
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

// 4.配置模板引擎
    // 输出什么东西
        server.set('view engine','html') //view engine 视图引擎，即以哪种方式呈现
    // 模板文件放在哪
        server.set('views','./views')
    // 要使用哪种模板引擎
        server.engine('html',consolidate.ejs)
    // 接受用户数据
        server.get('/index',(req,res)=>{
            res.render('server-16.ejs',{name:"blue"})
            // if(req.session.userid){ //登陆过
            //     res.render('server-16.ejs',{name:"blue"})
            // }else{ //未登陆
            //     res.render('server-login.ejs',{})
            // }
        })
// 4.static数据
server.use(static('./www'))