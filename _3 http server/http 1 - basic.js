
console.log('create http server');

var dt = require('../_1 basics/myModule');


var http = require('http');

http.createServer(function (req, res) {
    console.log('http server got request');
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'ariel-type': 'teacxher'
    });
    res.end('<h1>Hello CLASS fullstackers!</h1>' + dt.myDateTime());
}).listen(8080);
