$(document).ready(function(){

let user;
let userObj;
let currentDeck;
let deckHelper;
let tempDeckLength = 0;
let tempDeck;
let deckLength;

let now = Date.now().toString();

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
    newCard.attr("id", "card-" + i);
    newCard.html('<h2 class="front-edit">' + 'Front: ' + '</h2>' + '<input type="text" class="front-text-display" value="' + currentDeck.cards[i].front + '">'+ '<h2 class="back-edit">' + 'Back: ' + '</h2>' + '<input type="text" class="back-text-display" value="' + currentDeck.cards[i].back + '">');
    $(".card-container").append(newCard);
  }

  // let cardList = $("<div>");
}

const addCard = (deckId) => {

    // console.log(currentDeck);
    // console.log(deckHelper + " is the deck id");

    deckLength = parseInt(currentDeck.cards.length);

    // console.log(deckLength + " is the decklength");
    // console.log(tempDeckLength + "is the tempdecklength");

    let blankCard = {
        front: "", 
        back: "",
        points: 0,
        level: 1,
        timesSeen: now,
        created: now,
        nextUp: now
                
    }

    currentDeck.cards.push(blankCard);

    // console.log(tempDeck.cards + "is the temporary deck");

    let newCard = $("<div>");
    newCard.addClass("study-card");
    newCard.attr("id", "card-" + deckLength);
    newCard.html('<h2 class="front-edit">' + 'Front: ' + '</h2>' + '<input type="text" class="front-text-display" value="' + "Front" + '">'+ '<h2 class="back-edit">' + 'Back: ' + '</h2>' + '<input type="text" class="back-text-display" value="' + "Back" + '">');
    $(".card-container").append(newCard);
}

const saveDeck = () =>{

    // console.log(userObj.decks);
    // console.log(deckLength + "is length");

    for(i=0; i < currentDeck.cards.length; i++){
        let frontText = $("#card-" + i).find(".front-text-display").val();
        currentDeck.cards[i].front = frontText;
        let backText = $("#card-" + i).find(".back-text-display").val();
        currentDeck.cards[i].back = backText;
    }

    // console.log(currentDeck);
    // console.log(userObj);

    let data ={
        username: userObj.username,
        email: userObj.email,
        joined: userObj.joined,
        decks: userObj.decks
    }
    // console.log(data);
    $.ajax({
        url: '/users/' + user + '/deck',
        type: 'PUT',
        data: {
            decks: userObj.decks
        },
        success: function(data) {
          console.log('Added deck.');
        }
      });

    // let frontText = $(this).find(".front-text-display").val();
    // let backText = $(this).find(".back-text-display").val();

}

const deleteDeck = () => {
    userObj.decks.splice(deckHelper, 1);
    console.log(userObj.decks);
    let answer = confirm("Are you sure?");

    if(!answer){
        return console.log("Deletion stopped.");
    }
    $.ajax({
        url: '/users/' + user + '/deck',
        type: 'PUT',
        data: {
            decks: userObj.decks
        },
        success: function(data) {
          console.log('deleted deck.');
          window.location.href = '/mydecks';
        }
      });
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

const editNavDisplay = (deck) => {

    $('#create-deck-btn').hide();
    $('#add-card-btn').show();
    $('#save-deck-btn').show();
    $('#share-deck-btn').show();
    $('#go-back-btn').show();
    $('#delete-deck').show();
    $('.deck-wrapper').remove();

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
    tempDeck = userObj.decks[id];
    editNavDisplay();
    renderCards(id);
  })

$("body").on("click", "#add-card-btn", function(){
    console.log("added a card");
    addCard();
  })

  $("body").on("click", "#delete-deck", function(){
    deleteDeck();
  })

$("body").on("click", "#save-deck-btn", function(){
    saveDeck();
  })


// $("body").on("click", ".study-card", function(){
//     let id = $(this).attr("card");
//     console.log("study card" + id);
//     let front = $(this).find(".front-text-display").val();
//     let back = $(this).find(".back-text-display").val();

//     console.log(front + " and " + back)

//   });







});
