const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    front: {type: String, required: true, max: 100},
    back: {type: String, required: true, max: 100},
    level: 1,
    points: 0
});

module.exports = mongoose.model('Card', CardSchema);