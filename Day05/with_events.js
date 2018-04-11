var fs = require('fs');
var http = require('http');

// pipe yerine stream eventlerini kullanmak
// daha küçük boyutlu bir dosya seçelim ki takibimiz kolay olsun
// Kolay izlemek için küçük boyutlu bir dosya oluşturalım

var server = http.createServer().on('request', function (req, res) {
    var source = fs.createReadStream('bigEF.data');
    // aşağıdaki data ve end olayları da bir nevi pipe'ın karşılığıdır.
    source.on('data', function (chunk) {
        res.write(chunk);
        var date = new Date().toISOString();
        console.log('\n' + date + '\n');
        console.log('\t' + chunk);
    });
    source.on('end', function () {
        res.end();
        console.log('end');
    });
});

server.listen(65002);
console.log('Server is online');