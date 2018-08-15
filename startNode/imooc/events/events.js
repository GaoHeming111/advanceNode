var EventEmitter = require('events').EventEmitter
var life = new EventEmitter()

// addEventListener
//官方建议对一个事件不要设置超过十个监听器，可能会导致内存泄露
function water(who){
    console.log('给' + who + '倒水')
}

life.on('求安慰',water)

life.on('求安慰',function(who){
    console.log('给' + who + '洗脚')
})
//移除监听器 
life.removeListener('求安慰',water)
// 下面这种是移除所有监听器的数量
life.removeAllListeners('求安慰')

// 查询监听器的数量,listeners里面必须写事件的名字
console.log(life.listeners('求安慰').length)
// 下面这种写法也行
// console.log(EventEmitter.listenerCount(life,'求安慰'))

// 设置监听器的最大数量
life.setMaxListeners(11)

// 当hasConfortListener值返回true时，表示事件被监听
var hasConfortListener = life.emit('求安慰','汉子')