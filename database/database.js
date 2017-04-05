var mongoose = require('mongoose');
var dbPath = "mongodb://localhost/movie";
options = {
    server: {
        auto_reconnect: true,
        poolSize: 10
    }
};

var db = mongoose.connect(dbPath, options);
var jockSchema = mongoose.Schema({
    movieTitle:String,
    downUrl:String
});
var dataModel = db.model("movieList", jockSchema);

db.connection.on("error", function(error) {
    console.log("数据库连接失败：" + error);
});

db.connection.on("open", function() {
    console.log("------数据库连接成功！------");
});

module.exports = {
    save : save,
    close: close,
    load : load,
    getTotal : getTotal
}

function save(title,url){
    var data = new dataModel({
        movieTitle : title,
        downUrl    : url
    });

    data.save(function(error, doc) {
        if (error) console.log("error :" + error);
        else console.log(`存储完毕`);
    })
}

function close(){
    db.disconnect()
}

function load(page,line,fn){
    page *= 1;
    line *= 1;
    dataModel.find({}).skip(page*line).limit(line).exec(function(err,docs){
        fn(docs);

    });
}

function getTotal(fn){
    dataModel.count(function(err,total){
        fn(total);
    });
}
