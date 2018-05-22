const deckOne  = {
    items : [
        {id: 0,
        currentPile: 0,
        front: "What is this card? 0",
        back: "It's an example",
        points: 2},
        {id: 1,
        currentPile: 0,
        front: "What is this card? 1",
        back: "It's an example",
        points: 1},
        {id: 2,
        currentPile: 0,
        front: "What is this card? 2",
        back: "It's an example",
        points: 2},
    ],

    learning : [],
    know : [],
    confident : [],
    memorized : [],
    mastered : [],
}


const findCard = function(deck, id){
    let card = deck.items.filter(function(x){
        return x.id === id;
    })
   card = card[0];
   if(card !== undefined)
   return card;
}

const getRandomCard = function(deck){
    let random = Math.floor(Math.random() * deck.items.length);
    return findCard(deck, random);
}

const getCardPoints = function(card){
    console.log(card.points);
}

const drawCard = function(deck){
    let card = getRandomCard(deck);
    console.log(card.front);

}


drawCard(deckOne);

