const moment = require('moment');

const Deck = function(){
    this.currentCard = null;
    this.items = [];

    //deck methods
    this.addCard = function(front, back){
        let id = this.items.length;
        let newCard = new Card(front, back, id);
        this.items.push(newCard);
    },
    this.findCard = function(id){
        let card = this.items.filter(function(x){
            return x.id === id;
        })
       card = card[0];
       if(card !== undefined);
       return card;
    }, 
    this.getRandomCard = function(){
        let random = Math.floor(Math.random() * this.items.length);
        return this.findCard(random);
    },
    this.drawCard = function(){
        let card = this.getRandomCard();
        this.currentCard = card;
    }
    this.gradeCurrentCard = function(){
        this.currentCard.setLastSeen();
        console.log("Last seen is now: " + this.currentCard.lastSeen.format("dddd, MMMM Do YYYY, h:mm:ss a"));
        this.currentCard.calculateNextUp();
        console.log("Card will appear again: " + this.currentCard.nextUp.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }
}

const Card = function(front, back, id){
    this.front = front;
    this.back = back;
    this.id = id;
    this.created = moment();
    this.lastSeen = 0;
    this.nextUp = 0;
    this.points = 0;
    this.level = 1;

    //card methods
    this.setLastSeen = function(){
        this.lastSeen = moment();
    }
    this.calculateNextUp = function(){
        let adjustment = this.level * 12; 
        this.nextUp = this.lastSeen;
        this.nextUp.add(adjustment, 'h');
    }
 
}

let newDeck = new Deck();
newDeck.addCard("this is the front", "this is the back");
newDeck.addCard("this is the front 2", "this is the back 2");
newDeck.addCard("this is the front 3", "this is the back 3");
newDeck.addCard("this is the front 4", "this is the back 4");

newDeck.drawCard();
newDeck.gradeCurrentCard();
console.log(newDeck.currentCard);


