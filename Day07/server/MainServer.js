var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var async = require('async');
var request = require('request').defaults({
    json: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/sports/api', function (req, res) {
    async.parallel({
        player: function (callback) {
            request({ uri: 'http://localhost:7001/players' }, function (error, response, body) {
                if (error) {
                    callback({ service: 'player', error: error });
                    return;
                };
                if (!error && response.statusCode === 200) {
                    callback(null, body.data);
                } else {
                    callback(response.statusCode);
                }
            });
        },
        team: function (callback) {
            request({ uri: 'http://localhost:7002/teams' }, function (error, response, body) {
                if (error) {
                    callback({ service: 'team', error: error });
                    return;
                };
                if (!error && response.statusCode === 200) {
                    callback(null, body.data);
                } else {
                    callback(response.statusCode);
                }
            });
        }
    }, function (error, results) {
        res.json({
            error: error,
            results: results
        });
    });
});

app.get('/aloha', function (req, res) {
    res.json({ yuhuuu: Date.now() });
});

var server = app.listen(7000, function () {
    console.log('MainServer is online http://localhost:7000/');
});