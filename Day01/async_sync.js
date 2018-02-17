//var fs=require("fs");

// Birinci örnek (Bloklama yok)
// fs.readFile('loremipsum.txt',function(err,data){
//     if(err) return console.error(err);
//     console.log(data.toString()+"\n\n");
// });
// console.log("### Program sonu ###\n"); 

// ikinci örnek (Bloklama söz konusu)
//var loremData=fs.readFileSync('loremipsum.txt');
//console.log(loremData.toString()+"\n\n");
//console.log("*** Bitmeyen kod yapmışlar ***\n");


var fs = require("fs");

var readCallback = function (err, content) {
    if (err) {
        console.log(err.message);
        return;
    }
    var lines = content.toString().split("\n");
    lines.forEach(l => {
        console.log(l);
    });
}

fs.readFile('cats.txt', readCallback);
console.log("### Program sonu ###\n");