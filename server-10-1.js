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
