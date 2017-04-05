var cheerio = require('cheerio');
var iconv = require('iconv-lite');

module.exports = {
    init : init
}

function init(body){
    var maxPage = null;
    var buf =  iconv.decode(body, 'gb2312');
    var $ = cheerio.load(buf);
    var tag = $(".x a:contains('末页')");
    tag.each(function(index , obj){
        var href = $(obj).attr('href');
        maxPage = href.split('.')[0].split('_')[2];
    });
    return maxPage;
}
