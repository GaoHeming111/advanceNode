const express = require('express')
var server = express()
server.listen(8888)
var routeUser = express.Router();
server.use('/user',routeUser)

// 浏览器中输入 http://localhost:8888/user/index.html
routeUser.get('/index.html',(req,res)=>{
    res.send('index')
})