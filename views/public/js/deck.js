$(document).ready(function(){

let user;
let userObj;
let currentDeck;


const renderCards = (deckId) => {
    currentDeck = userObj.decks[deckId];  
    authorDisplay(currentDeck)

    let cardContainer = $("<div>");
    cardContainer.addClass("card-container");
    cardContainer.attr("deck", deckId);
    $("#deck-container").append(cardContainer);

    for(i=0; i < currentDeck.cards.length; i++){
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
        newStudyBtn.addClass("study-btn btn btn-success");
        newStudyBtn.html("Study");
        newStudyBtn.attr("deck", i);
        $("#deck-wrapper-" + i).append(newStudyBtn);
    
        let newEditBtn = $("<div>");
        newEditBtn.addClass("edit-btn btn btn-danger");
        newEditBtn.html("Edit");
        newEditBtn.attr("deck", i);
        $("#deck-wrapper-" + i).append(newEditBtn);
      }
}

const authorDisplay = (deck) => {

    $("#mydecks").hide();
    $("#decktitle").show();
    $("#cardnum").show();
    $("#cardnum").html(deck.cards.length + " cards");
    $("#decktitle").html(deck.deckname);

}

//grab user data
$.get('/session', function(data) {
   user = data;
})

//initial deck render
$.get('/getuserdecks', function(data){
    userObj = data;
    renderDecks(userObj);
})


//on click functions

$("body").on("click", ".study-btn", function(){
    let id = $(this).attr("deck");
    console.log("study button" + id);
    // renderCards(id);
  //   $('.deck-wrapper').hide();
  });

$("body").on("click", ".edit-btn", function(){
    let id = $(this).attr("deck");
    console.log("edit button " + id);
    $('#create-deck-btn').hide();
    $('#add-card-btn').show();
    $('#save-deck-btn').show();
    $('#share-deck-btn').show();
    $('#go-back-btn').show();
    $('#delete-deck').show();
    $('.deck-wrapper').remove();
    renderCards(id);
  })


$("body").on("click", ".study-card", function(){
    let id = $(this).attr("card");
    console.log("study card" + id);
    let front = $(this).find(".front-text-display").val();
    let back = $(this).find(".back-text-display").val();

    console.log(front + " and " + back)

  });







});
