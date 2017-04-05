var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var colors = require('colors');
var tools = require('../tools/b.js');
module.exports = {
    run:run
}


function run(body){
    var result = null;
    var buf =  iconv.decode(body, 'gb2312');
    var $ = cheerio.load(buf);
    var list = $('#Zoom tbody td a');
    var href = $(list).attr('href');
    result = tools(href);
    return result;
}
