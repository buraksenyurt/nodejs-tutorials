var express = require("express");
var app = express();
var path = require('path');

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/report", (req, res, next) => {

    var days = ['Day01', 'Day02', 'Day03', 'Day04', 'Day05', 'Day06', 'Day07'];
    var seri01 = {
        x: days,
        y: [5, 7, 9, 14, 12, 10, 9],
        name: 'dcist01',
        mode: 'lines+markers',
        type: 'scatter'        
    };
    var seri02 = {
        x: days,
        y: [5, 3, 8, 10, 12, 6, 3],
        mode: 'lines+markers',
        name: 'dcizm03',
        type: 'scatter'
    };
    var seri03 = {
        x: days,
        y: [0, 3, 5, 8, 8, 8, 7],
        mode: 'lines+markers',
        name: 'dclnd07',
        type: 'scatter'
    };
    var data = [seri01, seri02, seri03];
    res.json(data);
});

app.listen(6701, () => {
    console.log("Raporlama sunucusu aktif!");
});