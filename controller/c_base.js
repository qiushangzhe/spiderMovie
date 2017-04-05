var request = require('request');
var colors = require('colors');
var analyser = require('../analyzer/a_list.js');
var fs = require('fs');
var url = 'http://www.ygdy8.net/html/gndy/dyzz/list_23_2.html';

function run(page,fn) {
    request({
        url:'http://www.ygdy8.net/html/gndy/dyzz/list_23_'+page+'.html',
        encoding: null
    }, function(error, response, body) {
        if (error) {
            console.log('访问出错'.red);
            return;
        }
        var list = analyser.run(body);
        console.log(('当前爬取第'+page+'页数据').blue);
        fn(list);
    });
}

module.exports = {
    run:run
}
