const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const consolidate = require('consolidate')
const bodyParser = require('body-parser')
const static = require('express-static')
const mysql = require("mysql")
const common = require('./libs/common')
var server = express()
server.listen(8888)

// createPool连接池
const db = mysql.createPool({host:"localhost",user:"root",password:"123456",database:"blog"})

// 1.解析cookie
server.use(cookieParser('sadsadsazcxzczx'))
// 2.使用session
var arr = []
for(var i=0;i<100000;i++){
    arr.push('keys_'+Math.random())
}
server.use(cookieSession({name:"zns_id_a",keys:arr,maxAge:20*3600*1000}))
// 3.post数据
server.use(bodyParser.urlencoded({extended:false}))

// 4.配置模板引擎
    // 输出什么东西
        server.set('view engine','html') //view engine 视图引擎，即以哪种方式呈现
    // 模板文件放在哪
        server.set('views','./template')
    // 要使用哪种模板引擎
        server.engine('html',consolidate.ejs)
    // 接受用户数据
        // 查询banner图
        server.get('/',(req,res,next)=>{
            db.query('SELECT * FROM banner_table',(err,data)=>{
                if(err){
                    res.status(500).send('database error').end()
                }else{
                    res.banners=data
                    next()
                }
            })
        })
        server.get('/',(req,res,next)=>{
            // 查询新闻列表
            db.query('SELECT title,summary,ID FROM article_table',(err,data)=>{
                if(err){
                    res.status(500).send('database error').end()
                }else{
                    res.articles=data
                    next()
                }
            })
        })
        server.get('/',(req,res)=>{
            res.render('index.ejs',{banners:res.banners,articles:res.articles})
        })
        server.get('/article',(req,res)=>{
            if(req.query.id){
                db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,(err,data)=>{
                    if(err){
                        res.status(500).send('数据有问题')
                    }else{
                        if(data.length==0){
                            res.status(404).send('您的请求找不到').end()
                        }else{
                            var articleData = data[0]
                            articleData.sDate = common.time2date(articleData.post_time)
                            articleData.content = articleData.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>')
                            res.render('conText.ejs',{
                                article_data:articleData
                            })
                        }
                    }
                })
            }else{
                res.status(404).send('您的请求找不到').end()
            }
            
        })
// 4.static数据
server.use(static('./www'))