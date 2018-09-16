var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Team = require('../models/team.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/team', { useMongoClient: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/teams', function (req, res) {
    var newteam = new Team(req.body);
    newteam.save(function (err) {
        if (err) {
            res.json({ error: err });
        };
        res.json({ info: 'takım bilgisi oluşturuldu' });
    });
});

app.get('/teams', function (req, res) {
    Team.find(function (err, teams) {
        if (err) {
            res.json({ error: err });
        };
        setTimeout(function () {
            res.json({ data: teams });
        }, 7000);
    });
});

app.get('/teams/:id', function (req, res) {
    Team.findById(req.params.id, function (err, team) {
        if (err) {
            res.json({ error: err });
        };
        if (team) {
            res.json({ data: team });
        } else {
            res.json({ info: 'takım bulunamadı' });
        }
    });
});

var server = app.listen(7002, function () {
    console.log('TeamServer is online http://localhost:7002/');
});