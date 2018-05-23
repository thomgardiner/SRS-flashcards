const Deck = function(){
    this.items = [];
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
        console.log(card.created);
    }
}

const Card = function(front, back, id){
    this.front = front;
    this.back = back;
    this.id = id;
    this.created = Date.now();
}

let newDeck = new Deck();
newDeck.addCard("this is the front", "this is the back");
newDeck.addCard("this is the front 2", "this is the back 2");
newDeck.addCard("this is the front 3", "this is the back 3");
newDeck.addCard("this is the front 4", "this is the back 4");

newDeck.drawCard();


