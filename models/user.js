const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    joined: {type: String, required: true, max: 100},
    decks: {type: Array, required: true}
});

module.exports = mongoose.model('User', UserSchema);