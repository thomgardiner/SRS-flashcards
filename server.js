const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require('mongoose');

const User = require('./models/user.js');

let dbURL = "mongodb://admin:password1@ds231205.mlab.com:31205/benkyo"
let app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let mongoDB = process.env.MONGODB_URI || dbURL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("connected to the mainframe");


    let newModel = new User({name: 'bob', email: 'bob@test.com', joined: '1999'});
    newModel.save(function(err){
        if (err) return handleError(err);
        console.log("saved");// saved
        console.log(db);
        console.log("///////////////////////////////////");
        console.log(db.collections);
        console.log("///////////////////////////////////");
        console.log("///////////////////////////////////");
        console.log(db.collections["users"]);
    })

   

});




require('./routes/apiRoutes.js')(app); 
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

