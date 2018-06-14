$(document).ready(function(){

let user;
let userObj;
let currentDeck;
let deckHelper;

let now = Date.now();

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

const addCard = (deckId) => {

    console.log(deckHelper + " is the deck id");

    let deckLength = currentDeck.length;
    let blankCard = {
        front: "this is the front", 
        back: "this is the back",
        points: 0,
        level: 1,
        timesSeen: now,
        created: now,
        nextUp: now
                
    }
    
    let newCard = $("<div>");
    newCard.addClass("study-card");
    newCard.attr("card", deckLength + 1);
    newCard.html('<h2 class="front-edit">' + 'Front: ' + '</h2>' + '<input type="text" class="front-text-display" value="' + "Front" + '">'+ '<h2 class="back-edit">' + 'Back: ' + '</h2>' + '<input type="text" class="back-text-display" value="' + "Back" + '">');
    $(".card-container").append(newCard);
  
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
    deckHelper = id;
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

$("body").on("click", "#add-card-btn", function(){
    console.log("added a card");
    addCard();
  })





$("body").on("click", ".study-card", function(){
    let id = $(this).attr("card");
    console.log("study card" + id);
    let front = $(this).find(".front-text-display").val();
    let back = $(this).find(".back-text-display").val();

    console.log(front + " and " + back)

  });







});
