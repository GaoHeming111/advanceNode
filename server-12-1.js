const jade = require('jade')
var str = jade.renderFile('./www/jade1.jade',{pretty:true})
console.log(str)
