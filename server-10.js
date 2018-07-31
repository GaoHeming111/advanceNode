const express = require('express');
const bodyParser = require('body-parser')
const server = express()

//有这个中间插件 req.body才生效
server.use(bodyParser.urlencoded({
    extended:  false,   //为true表示是拓展模式
    limit: 2*1024*1024      //限制：2M 
})) 

server.use('/',(req,res)=>{
    console.log(req.body) //POST
})
server.listen(8888)
