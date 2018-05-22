const Deck = function(){
    this.items = [];
    this.learning = [];
    this.know = [];
    this.confident = [];
    this.memorized = [];
    this.mastered = [];
    this.addCard = function(front, back){
        this.items.push({
            id: this.items.length,
            currentPile: 0,
            front: front,
            back: back,
            points: 0
        })
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
        console.log(card.front);
    }
}


// const findCard = function(deck, id){
//     let card = deck.items.filter(function(x){
//         return x.id === id;
//     })
//    card = card[0];
//    console.log(card);
//    return card;
// }

// const getRandomCard = function(deck){
//     let random = Math.floor(Math.random() * deck.items.length);
//     return findCard(deck, random);
// }

// const getCardPoints = function(card){
//     console.log(card.points);
// }

// const drawCard = function(deck){
//     let card = getRandomCard(deck);
//     console.log(card.front);

// }


let newDeck = new Deck();
newDeck.addCard("this is the front", "this is the back");
newDeck.addCard("this is the front 2", "this is the back 2");
newDeck.addCard("this is the front 3", "this is the back 3");
newDeck.addCard("this is the front 4", "this is the back 4");

console.log(newDeck.drawCard());

// deckOne.findCard(1);
// drawCard(deckOne);

