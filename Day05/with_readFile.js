var fs = require('fs');
var http = require('http');

var server = http.createServer().on('request', function (req, res) {
    fs.readFile('bigEF.data', function (err, data) {
        if (err)
            throw err;
        res.end(data);
    });
});
server.listen(65002);
console.log('Server is online');