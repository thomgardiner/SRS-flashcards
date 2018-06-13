module.exports = function(app){

    const users = require('../controllers/user')

    app.post('/users', users.create);

    app.get('/users', users.getAll);

    app.get('/users/:username', users.getOne);

    app.put('/users/:username', users.update);

    app.put('/users/:username/add', users.addDeck);

    app.delete('/users/:username', users.delete);

    app.get('/getuserdecks', users.getUserDecks);

}

