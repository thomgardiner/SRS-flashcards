module.exports = function(app){

var express = require('express');

app.get('/test', function(req, res) {
    return console.log("I work");
  });

}

