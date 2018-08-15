var http = require('http')
var querystring = require('querystring')

// parse（）将字符串转换为对象
// stringfy()将对象转换为字符串
var postData = querystring.stringify({
    'content': '一起期待下一个课程',
    'mid': 8837
})

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=75c08e53-2370-43c3-ac14-8afb62b90b41; imooc_isnew_ct=1514338477; imooc_isnew=2; loginstate=1; apsid=IwN2U1Yjk5MTlhYTgxZGZiMjhmMjNiNWE0Yjc3MjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzY5OTg4OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2NTE4MTI0NjRAcXEuY29tAAAAAAAAAAAAAAAAAAAAADEwZjQ1OWY4NjE3ZDkzNDYzOTJhMjhhMmRkMWM2ZGM3LTw3Wy08N1s%3DMG; last_login_username=651812464%40qq.com; PHPSESSID=knq6adcp42ouur18i927co18f5; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1529657543,1530241094,1530346515,1530369114; IMCDNS=0; Hm_lvt_fb538fdd5bd62072b6a984ddbc658a16=1529657543,1530241094,1530369407; Hm_lpvt_fb538fdd5bd62072b6a984ddbc658a16=1530370065; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1530370165; cvde=5b37945815bc6-42',
        'Host': 'www.imooc.com',
        'Origin': 'https://www.imooc.com',
        'Referer': 'https://www.imooc.com/video/8837',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req = http.request(options,function(res){
    console.log('Status' + res.statusCode)
    console.log('Headers' + JSON.stringify(res.headers))
    res.on('data', function(chunk){
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })
    res.on('end',function(){
        console.log('评论完毕')
    })
})
req.on('error',function(e){
    console.log('Error' + e.message)
})
req.write(postData)
req.end()