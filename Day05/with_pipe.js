var fs = require('fs');
var http = require('http');

var server = http.createServer().on('request', function (req, res) {
    var source = fs.createReadStream('bigEF.data');
    source.pipe(res);
});
server.listen(65002);
console.log('Server is online');