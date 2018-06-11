module.exports = function(app){

    const decks = require('../controllers/deck')

    app.post('/decks', decks.create);

    app.get('/decks', decks.getAll);

    app.get('/decks/:deckname', decks.getOne);

    app.put('/decks/:deckname', decks.update);

    app.delete('/decks/:deckname', decks.delete);

}
