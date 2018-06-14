$(document).ready(function(){

    let user;

    $.get('/session', function(data) {
        user = data;
     })


     $("body").on("click", "#save-button", function(){


        
     })




});