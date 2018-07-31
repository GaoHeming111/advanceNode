const jade = require('jade')
var str = jade.renderFile('./www/jade2.jade',{pretty:true,name:'blue',a:2,b:15})
console.log(str)
