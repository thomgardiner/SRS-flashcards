$(document).ready(function(){

    console.log("main.js is hooked up");

    let user;
let userRes;


const renderCards = function(deckId){
  let currentDeck = userRes.decks[deckId];  
  console.log(currentDeck);

  for(i=0; i < currentDeck.cards.length; i++){
    console.log(currentDeck.cards[i]);
  }
  
  
  // let cardList = $("<div>");
}

//grab user data
$.get('/session', function(data) {
   user = data;
  //  console.log(user);
  })

//initial deck render
$.get('/getuserdecks', function(data){
  userRes = data;
  // console.log(userRes.decks);

  for(i=0; i < userRes.decks.length; i++){

    let newDeckWrapper = $("<div>");
    newDeckWrapper.attr("id", "deck-wrapper-" + i);
    newDeckWrapper.attr("deck", i);
    newDeckWrapper.addClass("deck-wrapper");
    $("#deck-container").append(newDeckWrapper);
    
    let newDeck = $("<div>");
    newDeck.attr("id", "deck-" + i);
    newDeck.addClass("deck");
    newDeck.html('<p>' + userRes.decks[i].deckname + ' | ' + 'STUDY ' + '|' + 'EDIT'  + '</p>');
    $("#deck-wrapper-" + i).append(newDeck);
  }
})


//edit card display

$("body").on("click", ".deck-wrapper", function(){
  let id = $(this).attr("deck");
  console.log(id);
  renderCards(id);
  $('.deck-wrapper').hide();
})





















});