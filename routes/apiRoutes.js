module.exports = function(app){

    const user = require('../controllers/user')

    app.post('/users', users.create);

    app.get('/users', users.findAll);

    app.get('/users/:username', notes.findOne);

    app.put('/users/:username', notes.update);

    app.delete('/users/:username', notes.delete);
}

