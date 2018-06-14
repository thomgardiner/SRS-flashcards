$(document).ready(function(){

    console.log("main.js is hooked up");

    let user;
let userRes;


const renderCards = (deckId) => {
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
    newDeckWrapper.addClass("deck-wrapper row");
    $("#deck-container").append(newDeckWrapper);
    
    let newDeck = $("<div>");
    newDeck.attr("id", "deck-" + i);
    newDeck.addClass("deck");
    newDeck.html('<h4 class="deckname">' + userRes.decks[i].deckname + '</h4>' + '<p class="createdby"> by ' + userRes.decks[i].createdBy + '</p>');
    $("#deck-wrapper-" + i).append(newDeck);

    let newStudyBtn = $("<div>");
    newStudyBtn.addClass("study-btn btn");
    newStudyBtn.html("Study");
    newStudyBtn.attr("deck", i);
    $("#deck-wrapper-" + i).append(newStudyBtn);

    let newEditBtn = $("<div>");
    newEditBtn.addClass("edit-btn btn");
    newEditBtn.html("Edit");
    newEditBtn.attr("deck", i);
    $("#deck-wrapper-" + i).append(newEditBtn);
  }
})


//on click functions

// $("body").on("click", ".deck-wrapper", function(){
//   let id = $(this).attr("deck");
//   console.log(id);
// //   renderCards(id);
// //   $('.deck-wrapper').hide();
// })

$("body").on("click", ".study-btn", function(){
    let id = $(this).attr("deck");
    console.log("study button" + id);
    // renderCards(id);
  //   $('.deck-wrapper').hide();
  })

$("body").on("click", ".edit-btn", function(){
    let id = $(this).attr("deck");
    console.log("edit button " + id);
    // renderCards(id);
  //   $('.deck-wrapper').hide();
  })



















});