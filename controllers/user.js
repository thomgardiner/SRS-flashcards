let User = require('../models/user.js');

exports.test = function(req, res){
    console.log("hey");
    res.send('greetings from test land');
};

