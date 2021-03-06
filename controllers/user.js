const User = require('../models/user');

exports.create = (req, res) => {

    if(!req.body){
        return res.status(400).send({
            message: "cannot be empty"
        });
    }

    if(req.body.password !== req.body.passwordconfirm){
        return res.send("passwords don't match");
    }

    const timestamp = Date.now();

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        joined: timestamp
    })

    user.save(function(err){
        if (err) return handleError(err);
        res.redirect("/login");
    })
};

exports.getAll = (req, res) => {
    User.find().select().then(function(users){
        res.send(users)
    });
};

exports.getOne = (req, res) => {
    let query = req.params.username;
    User.findOne({username: query }).then(function(users){
        res.send(users);
    })
};

exports.getUserDecks = (req, res) => {
    let query = req.session.username;
    User.findOne({username: query }).then(function(data){
        res.send(data);
    })
};

exports.update = (req, res) => {
    let query = req.params.username;
    User.findOneAndUpdate({username: query}, {
        decks: req.body.decks
    }, {new: true}).then(function(users){
        res.send("deck has been updated");
    });
};

exports.delete = (req, res) => {
    let query = req.params.username;
    User.findOneAndDelete({username: query}).then(function(){
        res.send("User has been deleted");
    })
};

exports.addDeck = (req, res) =>{

    let target = req.params.username;
    let deck = {
        deckname: req.body.deckname,
        createdBy: req.body.createdBy,
        cards: req.body.cards
    }

    User.findOneAndUpdate({username: target}, {
        $push: {decks: deck}
    }).then(function(){
        res.send(req.body.deckname + " has been added to " + target + "'s decklist!");
    })

};

exports.addCardToDeck = (req, res) =>{
}

