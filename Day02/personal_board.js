var express = require('express');
var app = express();
var fs = require('fs');

// HTTP Get
app.get('/api/tasks', function (request, response) {
    fs.readFile('daily_task.json', 'utf8', function (err, data) {
        console.log('%s:%s', Date(), request.url);
        response.end(data);
    });
});

var server = app.listen(process.env.PORT || 8080, function () {
    console.log('Sunucu dinlemde');
});