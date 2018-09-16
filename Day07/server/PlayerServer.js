var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Player = require('../models/player.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/player', { useMongoClient: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/players', function (req, res) {
    var newPlayer = new Player(req.body);
    newPlayer.save(function (err) {
        if (err) {
            res.json({ error: err });
        };
        res.json({ info: 'oyuncu bilgisi oluşturuldu' });
    });
});

app.get('/players', function (req, res) {
    Player.find(function (err, players) {
        if (err) {
            res.json({ error: err });
        };
        setTimeout(function () {
            res.json({ data: players });
        }, 7000);
    });
});

app.get('/players/:id', function (req, res) {
    Player.findById(req.params.id, function (err, player) {
        if (err) {
            res.json({ error: err });
        };
        if (player) {
            res.json({ data: player });
        } else {
            res.json({ info: 'oyuncu bulunamadı' });
        }
    });
});

var server = app.listen(7001, function () {
    console.log('PlayerServer is online http://localhost:7001/');
});