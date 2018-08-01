const mysql = require('mysql')
// 1-连接
// createConnection(哪台服务器，用户名，密码，哪个库)
var db = mysql.createConnection({host:'localhost',user:'root',password:'123456',database:'20180801'})

// 2-查询（向服务器发送一个数据）
// query(干啥，回掉函数)
db.query('SELECT * FROM `user_table`',(err,data)=>{
    if(err){
        console.log('有错')
    }else{
        console.log('成功了')
        // 返回字符串形式
        console.log(JSON.stringify(data))
    }
})