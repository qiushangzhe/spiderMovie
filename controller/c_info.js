var request = require('request');
var colors = require('colors');
var analyser = require('../analyzer/a_info.js');
var fs = require('fs');

function run(page,url,fn) {
    request({
        url:url,
        encoding: null
    }, function(error, response, body) {
        if (error) {
            console.log('访问出错'.red);
            return;
        }
        var infoData = analyser.run(body);
        console.log(('当前分析第'+page+'个电影的详细信息').green);
        fn(infoData);
    });
}

module.exports = {
    run:run
}

// run(2,'http://www.ygdy8.net/html/gndy/dyzz/20130927/43252.html',function(data){
//     console.log("最后的结果是"+JSON.stringify(data));
// });
