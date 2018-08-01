const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')
const pathLib = require('path')
// dest目标地点，只希望数据保存到哪里去
var objMulter = multer({dest:'upload/'})
var server = express()

server.use(objMulter.any())

server.post('/',function(req,res,next){
    //重命名文件分两步 1.获取原始文件拓展名
    //                2.重命名临时文件

    // pathLib.parse().ext()-----获取文件的拓展名
    console.log(req.files[0])
    var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext
    // (原始文件路径，新文件路径)
    fs.rename(req.files[0].path,newName,(err)=>{
        if(err){
            res.send('上传失败')
        }else{
            res.send('上传成功')
        }
    })
})
server.listen(8888)

