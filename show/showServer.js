var express = require('express');
var db = require('../database/database.js');
var bodyParser = require("body-parser");
var app = express();
app.set('view engine', 'jade'); //设置默认的模板引擎
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views'); //设置views路径映射到views文件夹
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// 当前页
var nowPage = 0;
// 总页数
var totalNumber;
db.getTotal(function(total) {
    totalNumber = total;
    console.log('--------获取总数-------',total);
});

app.get('/', function(req, res) {
    var page = req.query.page*1;
    var line = req.query.line*1;
    if(!line) line = 10;
    if(page < 0) page = 0;
    if(page * line > totalNumber) page = totalNumber/line;
    if(!page && page!=0) page = nowPage;
    nowPage = page;
    db.load(page, line, function(data) {
        res.render('index', {
            movieList: data,
            total:totalNumber,
            nowPage : nowPage,
            line : line
        });
    })
});


app.listen(10219);
