const jade = require('jade')
const fs = require('fs')
var str = jade.renderFile('./www/index.jade',{pretty:true})

fs.writeFile('./www/index.html',str,(err)=>{
    if(err){
        console.log('失败')
    }else{
        console.log('成功')
    }
})