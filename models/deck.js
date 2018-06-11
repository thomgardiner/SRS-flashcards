const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = new Schema({
    deckname: {type: String, required: true, max: 100},
    createdBy: {type: String, required: true, max: 100},
    cards: []
});

module.exports = mongoose.model('Deck', DeckSchema);