module.exports = function(app){

var express = require('express');

app.get('/test', function(req, res) {
    res.send("I work");
  });

app.get('/user', function(req, res){
    res.send('user stuff');
});

app.post('/new', function(req, res){

});

}

