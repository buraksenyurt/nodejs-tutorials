var mongoose = require('mongoose');

var teamSchema = mongoose.Schema({
    name: String,
    city: String
});

module.exports = mongoose.model('Team', teamSchema);