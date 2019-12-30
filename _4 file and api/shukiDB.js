

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
    if (err) console.log("connect error", err);
    console.log("Connected to mysql!");
})


exports.askShuki = function (mysqlQuery, callback) {
    console.log('askShuki', mysqlQuery);

    con.query(mysqlQuery, function (err, result) {
        if (err) callback(err); 
        let json = JSON.stringify(result)
        console.log("Result: " + json);
        callback(json);
    });
}
