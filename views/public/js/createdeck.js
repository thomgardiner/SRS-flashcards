$(document).ready(function(){

    let user;

    $.get('/session', function(data) {
        user = data;
        console.log("done " + user);
     })


     $("body").on("click", "#add-deck", function(){

        let now = Date.now();
        console.log("hey");
        console.log(user);

        $.ajax({
            url: '/users/' + user + '/add',
            type: 'PUT',
            data: {
                deckname: $('#deck-name-input').val(),
                createdBy: user,
                cards: [{"front": "this is the front", 
                         "back": "this is the back",
                         "points": 0,
                         "level": 1,
                         "timesSeen": now,
                         "created": now,
                         "nextUp": now
                        }]
            },
            success: function(data) {
              console.log('Added deck.');
            }
          });


     })




});