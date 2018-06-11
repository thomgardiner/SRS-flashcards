const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, max: 15},
    password: {type: String, required: true, max: 15},
    email: {type: String, required: true, max: 50},
    joined: {type: String, required: true, max: 50},
    decks: []
});

module.exports = mongoose.model('User', UserSchema);