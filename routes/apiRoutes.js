module.exports = function(app){

app.get('/test', function(req, res) {
    return console.log("I work");
  });
}

