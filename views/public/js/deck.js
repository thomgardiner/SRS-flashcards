$(document).ready(function(){

console.log("main.js is hooked up");

let user;
let userObj;


const renderCards = (deckId) => {


    let currentDeck = userObj.decks[deckId];  
    console.log(userObj);

    authorDisplay(currentDeck)

    let cardContainer = $("<div>");
    cardContainer.addClass("card-container");
    cardContainer.attr("deck", deckId);
    $("#deck-container").append(cardContainer);

    for(i=0; i < currentDeck.cards.length; i++){
    console.log(currentDeck.cards[i]);

    let newCard = $("<div>");
    newCard.addClass("study-card");
    newCard.attr("card", i);
    newCard.html('<h2 class="front-edit">' + 'Front: ' + '</h2>' + '<input type="text" class="front-text-display" value="' + currentDeck.cards[i].front + '">'+ '<h2 class="back-edit">' + 'Back: ' + '</h2>' + '<input type="text" class="back-text-display" value="' + currentDeck.cards[i].back + '">');
    $(".card-container").append(newCard);
  }

  // let cardList = $("<div>");
}

const renderDecks = (user) => {

    for(i=0; i < user.decks.length; i++){
        let newDeckWrapper = $("<div>");
        newDeckWrapper.attr("id", "deck-wrapper-" + i);
        newDeckWrapper.attr("deck", i);
        newDeckWrapper.addClass("deck-wrapper row");
        $("#deck-container").append(newDeckWrapper);
        
        let newDeck = $("<div>");
        newDeck.attr("id", "deck-" + i);
        newDeck.addClass("deck");
        newDeck.html('<h2 class="deckname">' + user.decks[i].deckname + '</h2>' + '<p class="createdby"> by ' + user.decks[i].createdBy + '</p>');
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
}

const authorDisplay = (deck) => {

    $("#mydecks").hide();
    $("#decktitle").show();
    $("#decktitle").html(deck.deckname);

}

//grab user data
$.get('/session', function(data) {
   user = data;
  //  console.log(user);
  })

//initial deck render
$.get('/getuserdecks', function(data){
  userObj = data;
  console.log(userObj);
  // console.log(userRes.decks);
    renderDecks(userObj);

//   for(i=0; i < userRes.decks.length; i++){
//     let newDeckWrapper = $("<div>");
//     newDeckWrapper.attr("id", "deck-wrapper-" + i);
//     newDeckWrapper.attr("deck", i);
//     newDeckWrapper.addClass("deck-wrapper row");
//     $("#deck-container").append(newDeckWrapper);
    
//     let newDeck = $("<div>");
//     newDeck.attr("id", "deck-" + i);
//     newDeck.addClass("deck");
//     newDeck.html('<h2 class="deckname">' + userRes.decks[i].deckname + '</h4>' + '<p class="createdby"> by ' + userRes.decks[i].createdBy + '</p>');
//     $("#deck-wrapper-" + i).append(newDeck);

//     let newStudyBtn = $("<div>");
//     newStudyBtn.addClass("study-btn btn");
//     newStudyBtn.html("Study");
//     newStudyBtn.attr("deck", i);
//     $("#deck-wrapper-" + i).append(newStudyBtn);

//     let newEditBtn = $("<div>");
//     newEditBtn.addClass("edit-btn btn");
//     newEditBtn.html("Edit");
//     newEditBtn.attr("deck", i);
//     $("#deck-wrapper-" + i).append(newEditBtn);
//   }
})


//on click functions

$("body").on("click", ".study-btn", function(){
    let id = $(this).attr("deck");
    console.log("study button" + id);
    // renderCards(id);
  //   $('.deck-wrapper').hide();
  })

$("body").on("click", ".edit-btn", function(){
    let id = $(this).attr("deck");
    console.log("edit button " + id);
    $('.deck-wrapper').remove();
    renderCards(id);
  })

});