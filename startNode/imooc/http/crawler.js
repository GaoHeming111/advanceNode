var http = require('https')
// cheerio 是用来nodejs抓取页面模块
var cheerio = require('cheerio')
var url = "https://www.imooc.com/learn/348"

function filterChapters(html){
    var $ = cheerio.load(html)
    var chapters = $('.chapter')
    // [{
    //     chapterTitle: '',
    //     videos:{
    //         title: '',
    //         id: ''
    //     }
    // }]

    var courseData = []
    chapters.each(function(item){
        var chapter = $(this)
        var chapterTitle = chapter.find('h3').text().trim()
        var videos = chapter.find('.video').children('li')
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }

        videos.each(function(item){
            var video = $(this).find('.J-media-item')
            var videoTitle = video.text().trim()    
            var id = video.attr('href').split('video/')[1]
            chapterData.videos.push({
                title: videoTitle,
                id: id
            })
        })

        courseData.push(chapterData)
    })
    return courseData
}

function printCourseInfo(courseData){
    courseData.forEach(function(item){
        var chapterTitle = item.chapterTitle
        console.log(chapterTitle)
        item.videos.forEach(function(video){
            console.log('[' + video.id + ']' + video.title)
        })
    })
}

http.get(url, function(res){
    var html = ''

    res.on('data', function(data){
        html += data
    })

    res.on('end', function(){
        var  courseData = filterChapters(html)
        printCourseInfo(courseData)
    })
}).on("error", function(){
    console.log('出错')
})