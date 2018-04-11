var fs = require('fs');
var http = require('http');

var server = http.createServer().on('request', function (req, res) {
    var source = fs.createReadStream('lorem_big.blob');
    source.pipe(res);

    // Aşağıdaki kod 2.Gb lık dosya için http talebini refuse edecektir ama pipe tekniği ile bu çalışır.
    /*
     fs.readFile('lorem_big.blob', function (err, data) {
         if (err)
             throw err;
         res.end(data);
     });
    */ 
});
server.listen(65002);
console.log('Server is online');

/*Ek

// pipe yerine stream eventlerini kullanmak
// daha küçük boyutlu bir dosya seçelim ki takibimiz kolay olsun
 

for (var i = 0; i < 50; i++) {
    someFile.write('{"fname": "Devon","lname": "Karma"},{"fname": "Lorenz","lname": "Douglas"},{"fname": "Ora","lname": "Wade"},{"fname": "Kelly","lname": "Ragusa"},{"fname": "Teresa","lname": "Gergely"},{"fname": "Wendy","lname": "Kerkemeyer"},{"fname": "Georgia","lname": "Malo"},{"fname": "Tonja","lname": "Lichtenwalner"},{"fname": "Dorota","lname": "Breiter"},{"fname": "Priscilla","lname": "Bartovics"}');
}
someFile.end();

var server = http.createServer().on('request', function (req, res) {
    var source = fs.createReadStream('lorem_big.blob');
    // aşağıdaki data ve end olayları da bir nevi pipe'ın karşılığıdır.
    source.on('data',function(chunk){
        res.write(chunk);
        var date=new Date().toISOString();
        console.log('\n'+date+'\n');
        console.log('\t'+chunk);
    });
    source.on('end',function(){
        res.end();
        console.log('end');
    });
});

*/