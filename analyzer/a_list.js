var cheerio = require('cheerio');
var iconv = require('iconv-lite');

var url = 'http://www.ygdy8.net';
module.exports = {
    run:run
}


function run(body){
    var movieList = [];
    var buf =  iconv.decode(body, 'gb2312');
    var $ = cheerio.load(buf);
    var list = $('.co_content8 table tr td b a');
    list.each(function(index,obj){
        var movieTitle = $(obj).text();
        var movieLink = url+$(obj).attr('href');
        movieList.push({
            movieTitle:movieTitle,
            movieLink:movieLink
        });
    });
    return movieList;
}
