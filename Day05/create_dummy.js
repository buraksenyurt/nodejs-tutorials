var fs = require('fs');

console.log("Big file is creating...");
var bigEF = fs.createWriteStream('bigEF.data');
for (var i = 0; i < 3e6; i++) {
    bigEF.write('{"fname": "Devon","lname": "Karma"},{"fname": "Lorenz","lname": "Douglas"},{"fname": "Ora","lname": "Wade"},{"fname": "Kelly","lname": "Ragusa"},{"fname": "Teresa","lname": "Gergely"},{"fname": "Wendy","lname": "Kerkemeyer"},{"fname": "Georgia","lname": "Malo"},{"fname": "Tonja","lname": "Lichtenwalner"},{"fname": "Dorota","lname": "Breiter"},{"fname": "Priscilla","lname": "Bartovics"}');
}
bigEF.end();