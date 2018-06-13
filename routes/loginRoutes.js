module.exports = function(app){
    
    const auth = require('../controllers/auth');

    app.post('/login', auth.login);

    app.get('/logout', auth.logout);

    app.get('/session', auth.getSession);

    
}