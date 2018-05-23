const moment = require('moment');
let newDeck = [];

const Deck = function(){
    this.idCount = 0;
    this.currentCard = null;
    this.items = [];

    //deck methods
    this.addCard = function(front, back){
        let id = this.idCount++;
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
    this.printCurrentCard = function(){
        console.log("|------------------------------------------------|");
        console.log("Front: " + this.currentCard.front);
        console.log("Back: " + this.currentCard.back);
        console.log("Level: " + this.currentCard.level);
        console.log("Last Seen: " + this.currentCard.lastSeen.format("dddd, MMMM Do YYYY, h:mm:ss a"));
        console.log("Next Up: " + this.currentCard.nextUp.format("dddd, MMMM Do YYYY, h:mm:ss a"));
        console.log("|------------------------------------------------|");
    }
}

const Card = function(front, back, id){
    this.front = front;
    this.back = back;
    this.id = id;
    this.created = moment();
    this.lastSeen = moment();
    this.nextUp = moment();
    this.points = 0;
    this.level = 1;

    //card methods
    this.setLastSeen = function(){
        this.lastSeen = moment();
    }
    this.calculateNextUp = function(){
        let adjustment = this.level * 12; 
        this.nextUp = moment();
        this.nextUp.add(adjustment, 'h');
    }
 
}

const createTestDeck = function(num){
    newDeck = new Deck();
    for(i=0; i < num; i++){
        newDeck.addCard("this is the front " + num, "this is the back " + num);
    }
}

createTestDeck(3);
newDeck.drawCard();
newDeck.printCurrentCard();
