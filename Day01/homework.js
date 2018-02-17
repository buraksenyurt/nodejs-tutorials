/*
Ön gereksinimler
npm install express
npm install body-parser
*/

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var fs = require('fs');
app.use(bodyparser.json());

// HTTP Get
app.get('/api/jobs', function (request, response) {
    fs.readFile('jobs.json', 'utf8', function (err, data) {
        console.log('%s:%s', Date(), request.url);
        response.end(data);
    });
});

app.get('/api/jobs/:jobId', function (request, response) {
    console.log('%s:Requested job id %s',Date(),request.params.jobId);
    response.status(200);
    // Bu kısım sizde :)
    response.end();
});

// HTTP Post
app.post('/api/addJob', function (request, response) {
    console.log('%s:%s', Date(), request.url);
    console.log(request.body);
    response.status(200).send('Job has been added');
     // Bu kısım sizde :)
    response.end();  
});

// HTTP Delete Burası da sizde
// HTTP Update Burası da sizde

var server = app.listen(5006, function () {
    console.log('Sunucu dinlemde');
});