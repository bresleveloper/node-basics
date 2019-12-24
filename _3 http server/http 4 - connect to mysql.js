
console.log('create http server');

var http = require('http');
//sudo npm install mysql
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "shuki",
    password: "2",
    database: "shuky play",
    port: 3306
});


http.createServer(function (req, res) {
    console.log('http server got request');
    res.writeHead(200, {'Content-Type': 'application/json',});


    con.connect(function(err) {
        if (err) res.end(err); 
        console.log("Connected to mysql!");

        let sql = 'SELECT * FROM `shuky play`.`shuky person`;'

        con.query(sql, function (err, result) {
            if (err) res.end(err); 
            let json = JSON.stringify(result)
            console.log("Result: " + json);
            res.end(json);
        });
    });

}).listen(8080);
