const User = require('../models/user');

exports.create = (req, res) => {

    if(!req.body){
        return res.status(400).send({
            message: "cannot be empty"
        });
    }

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        joined: req.body.joined,
    })

    user.save(function(err){
        if (err) return handleError(err);
        res.send(req.body.username + " has been added!");
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

exports.update = (req, res) => {
    if(!req.body.content){
        return res.status(400).send({
            message: "cannot be empty"
        });
    }

    let query = req.params.username;
    User.findOneAndUpdate({username: query}, {
        username: req.body.username,
        email: req.body.email,
        joined: req.body.joined,
        decks: req.body.decks
    }, {new: true}).then(function(users){
        res.send(users);
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
        createdBy: req.params.username,
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

