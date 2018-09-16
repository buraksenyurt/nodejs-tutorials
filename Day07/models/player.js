var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
    fullName: String,
    size: String,
    position: String
});

module.exports = mongoose.model('Player', playerSchema);