const jade = require('jade')
var str = jade.renderFile('./www/jade2.jade',{pretty:true})
console.log(str)
