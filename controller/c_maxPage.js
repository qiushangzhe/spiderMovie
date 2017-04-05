var request = require('request');
var colors = require('colors');
var analyser = require('../analyzer/a_maxpage.js');
var url = 'http://www.ygdy8.net/html/gndy/dyzz/index.html';


module.exports = {
    run : function (fn){
        request({
            url : url,
            encoding : null
        }, function(error, response, body) {

            if (error) {
                console.log('访问出错'.red);
                return;
            }
            var maxPage = analyser.init(body);
            console.log(("当前网站最大页面是"+maxPage).red);
            fn(maxPage);
        });
    }
}
