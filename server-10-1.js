const express = require('express');
const server = express()


server.use('/',(req,res,next)=>{
    console.log(1)
    next()  //有了next才可以执行链式操作
})

server.use('/',(req,res,next)=>{
    console.log(2)
})
server.listen(8888)
/*
那么，什么时用app.use，什么时用app.get呢？

路由规则是app.use(path,router)定义的，
router代表一个由express.Router()创建的对象，在路由对象中可定义多个路由规则。
可是如果我们的路由只有一条规则时，可直接接一个回调作为简写，也可直接使用app.get或app.post方法。
*/
