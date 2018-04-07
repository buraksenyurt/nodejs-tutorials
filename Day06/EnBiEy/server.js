var express = require('express');
var app = express();
var port = 65003;

app.use(express.static('public/images'))
app.set('views', './src/views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index'
        , {
            teams: ['bulls', 'celtics', 'lakers'],
            players: [
                {
                    name: 'sitivin köri',
                    bio: 'benzersiz top tekniği, yüksek şut yüzdesi, sınır tanımaz üçlükleri...',
                    height: "190cm",
                    url: 'http://www.espn.com/nba/player/_/id/3975',
                    photo: 'curry.gif'
                },
                {
                    name: 'löbron ceyms',
                    bio: 'çok güçlü, ani hızlanma, meydan okuma, istatistikleri alt üst etme...',
                    height: "206cm",
                    url: 'http://www.espn.com/nba/player/_/id/1966',
                    photo: 'lebron.gif'
                },
                {
                    name: 'divayt hauvırd',
                    bio: 'o boyla o fudamental hareketleri yapabiliyor olmak, oyun zekası...',
                    height: "206cm",
                    url: 'http://www.espn.com/nba/player/_/id/2384',
                    photo: 'howard.gif'
                }
            ]
        }
    );
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});