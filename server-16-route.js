const express = require('express')
var server = express()
server.listen(8888)
var routeUser = express.Router();
server.use('/user',routeUser)

routeUser.get('/index.html',(req,res)=>{
    res.send('index')
})