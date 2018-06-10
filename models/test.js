const mongoose = require('mongoose');
const Schema = mongoose.scehma;

let TestSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: string, required: true, max: 100},
});

module.exports = mongoose.model('test', TestSchema);