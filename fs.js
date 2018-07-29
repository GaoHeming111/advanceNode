// fs文件系统
const fs = require('fs');

fs.readFile('file/aaa.txt',(err,data)=>{
    if(err){
        console.log(读取失败);
    }else{
        console.log(data.toString())
    }
})

// writeFile('文件名'，'内容'，'回调')
fs.writeFile('file/bbb.txt',"bbbbb",(err)=>{
    console.log(err)
})
