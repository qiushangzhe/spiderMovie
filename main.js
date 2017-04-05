var c_page = require('./controller/c_maxPage.js');
var c_base = require('./controller/c_base.js');
var c_info = require('./controller/c_info.js');

var db = require('./database/database.js');
var fs = require('fs');

var total = null;
var nowPage = 11;
var list = [];

c_page.run(function(maxPage){
    total = maxPage;
    spider();
});


var nowMovie = 0;
var maxMovie = 0;
function spider(){
    nowPage++;
    if(nowPage > total) {
        console.log('全部抓取完毕'.red);
        // fs.writeFile('./database/main.json',JSON.stringify(list));
        db.close();
        return ;
    }
    nowMovie = 0;
    c_base.run(nowPage,function(data){
        maxMovie = data.length;
        console.log(`第${nowPage}页的电影数是${maxMovie}`);
        spiderInfo(data);
    });
}


function spiderInfo(pageData){
    nowMovie++;
    if(nowMovie >= maxMovie){
        spider();
        return;
    }
    var url = pageData[nowMovie].movieLink;
    c_info.run(nowMovie,url,function(downUrl){
        db.save(pageData[nowMovie].movieTitle,downUrl);
        spiderInfo(pageData);
    });
}
