const Deck = require('../models/deck');

exports.create = (req, res) => {

    if(!req.body){
        return res.status(400).send({
            message: "cannot be empty"
        });
    }

    const deck = new Deck({
        deckname: req.body.deckname,
        createdBy: req.body.createdBy,
    })

    deck.save(function(err){
        if(err) return handleError(err);
        res.send(req.body.deckname + " has been added!");
    });
};

exports.getAll = (req, res) => {
   Deck.find().then(function(decks){
       res.send(decks);
   })
};
    
exports.getOne = (req, res) => {
    let query = req.params.deckname;
    Deck.findOne({deckname: query }).then(function(decks){
        res.send(decks);
    })
};
    
exports.update = (req, res) => {
       Deck.findOneAndUpdate({deckname: query}, {
        deckname: req.body.deckname,
        createdBy: req.body.createdBy,
        cards: req.body.cards
        }, {new: true}).then(function(decks){
           res.send(req.body.deckname + " has been updated!");
       })
};
    
exports.delete = (req, res) => {
        let query = req.params.deckname;
        Deck.findOneAndDelete({deckname: query}).then(function(){
            res.send(req.params.deckname + " has been deleted!");
        })
};

