var http = require('http')
var url = require('url')
var fs=require('fs')
var utility = require('./utility')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write("<h2>Wellcome to West-World</h2>")
    res.write("<b>" + Date() + "</b><br/>")
    res.write("<i>Request url " + req.url + "</i><br/>")
    var q = url.parse(req.url, true).query
    if (typeof q.nick == 'undefined') {
        console.log("[Error]:%s,URL string'de hata var",Date())
        res.write("<a href='http://localhost:5009/?nick=murdock&point=450'><p style='color:darkgreen'>Try this! ;)</p></a>")
    }
    else {
        res.write("<p style='color:darkblue'>your nickname is " + q.nick + "</p>")
        res.write("<p style='color:magenta;'>or " + utility.reverse(q.nick) + "</p>")
    }
    res.end();
}).listen(5002);

http.createServer(function (request, response) {    
    fs.readFile("intro.html", function (err, data) {
        if (err) {
            console.log("[Error]:%s,%s",Date(),err.message)
            res.status(404).send('Not found')
            response.end()
        }
        else{
            response.writeHead(200, { 'Content-Type': 'text/html' })
            console.log("[Request]:%s,intro.html",Date())
            response.write(data.toString());
            response.end();
        }
    });    
}).listen(5003);