'use strict';

var http = require('http');
var port = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
    if (req.method === 'GET' && req.url === '/cats') {
        var cats = ['meow'];
        var catsJSON = JSON.stringify(cats);
    
    res.setHeader('Content-Type', 'application/json');
    res.end(catsJSON);
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found')
    }
});

server.listen(port, function() {
  console.log('Listening on port', port);
});