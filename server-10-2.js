const express = require('express');
const server = express()
const querystring = require('querystring')

server.use((req,res,next)=>{
    var str = '';
    req.on('data',(data)=>{
        str+=data
    })
    req.on('end',()=>{
        req.body =  querystring.parse(str)
        next()
    })
})

server.use('/',(req,res)=>{
    console.log(req.body)
})

server.listen(8888)
