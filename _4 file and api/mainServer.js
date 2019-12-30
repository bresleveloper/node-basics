
console.log('create http server');

var http = require('http');

var url = require('url');

//my stuff
var sf = require('./serveFile');
var shuki = require('./shukiDB');



http.createServer(function (req, res) {
    console.log('http server got request', req.url);
    //res.writeHead(200, {'Content-Type': 'application/json',});


    //if url is defauls (/) - send html file
    if (req.url == '/ariel/') {
        sf.getFile('index.html', function(data){
            res.end(data)
        })
    } 
    else if (req.url == '/ariel/api/users') {
        //if its 'api/users' return api res
        let sql = 'SELECT * FROM `shuky play`.`shuky person`;'
        shuki.askShuki(sql, function(json){
            res.end(json)
        })
    } else if (req.url.startsWith('/ariel/api/users/')) {
        //if its 'api/users' return api res
        let sql = 'SELECT * FROM `shuky play`.`shuky person`'
        let id = req.url.split('/ariel/api/users/')[1]
        sql += ' where id = ' + id + ';'
        shuki.askShuki(sql, function(json){
            res.end(json)
        })
    } else {
        res.end(req.url)
    }

}).listen(8080);
