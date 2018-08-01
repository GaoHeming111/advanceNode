const ejs = require('ejs')
ejs.renderFile('./www/ejs1.ejs',{name:"blue",type:"user",json:{arr:[
    {'user':'blue','pass':'123456'},
    {'user':'blue1','pass':'111111'},
    {'user':'blue2','pass':'222222'}
]}},(err,data)=>{
    console.log(data)
})