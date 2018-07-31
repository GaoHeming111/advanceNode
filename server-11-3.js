const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
var server = express()

// session
// 必须先用cookieParser解析才能在调用cookieSession
var arr=[]
for(var i=0;i<10000;i++){
    arr.push('sign_'+Math.random())
}
server.use(cookieParser())
server.use(cookieSession({
    keys: arr,
    maxAge: 2*3600*1000
}))
server.use('/',(req,res)=>{
    if(req.session['count']==null){
        req.session['count']=1
    }else{
        req.session['count']++
    }
    console.log(req.session['count'])
    res.send('ok')
})

server.listen(8888)