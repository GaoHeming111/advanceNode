const express = require('express');
const bodyParser = require('body-parser')
const server = express()

//有这个中间插件 req.body才生效
server.use(bodyParser.urlencoded({
    extended:  false,   //为true表示是拓展模式 返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
    limit: 2*1024*1024      //限制：2M 
})) 

server.use('/',(req,res)=>{
    console.log(req.body) //POST
})
server.listen(8888)
