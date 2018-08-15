var pet = {
    words : "...",
    speak:function(say){
        console.log(say + ' ' +this.words)
    }
}

var dog = {
    words: 'wang'
}
// call 传入的是参数列表
// apply 传入的是参数数组
pet.speak.call(dog,"Speak")