const express = require('express')
var server = express()
// 发送cookie
server.use('/',(req,res)=>{
    res.cookie('user','blue')
    res.send('ok')
})
server.listen(8888)