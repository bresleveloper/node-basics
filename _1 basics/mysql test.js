
console.log('mysql test start');

//sudo npm install mysql
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "shuki",
    password: "2",
    database: "shuky play",
    port: 3306
});


con.connect(function(err) {
    if (err) {
        console.error('connect error', err); 
    }
    console.log("Connected to mysql!");

    let sql = 'SELECT * FROM `shuky play`.`shuky person`;'

    con.query(sql, function (err, result) {
        if (err) {
            console.error('query error', err); 
        }
        console.log("Result: " + result);
    });
});

