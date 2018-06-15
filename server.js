const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


const User = require('./models/user.js');

const dbURL = "mongodb://admin:password1@ds231205.mlab.com:31205/benkyo"
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("views/public"));

const mongoDB = process.env.MONGODB_URI || dbURL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("connected to the mainframe");
});

app.use(session({
  secret: 'nic cage',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: new MongoStore({
    mongooseConnection: db
  })
}))

console.log("after mongo but not connected");

require('./routes/userRoutes.js')(app);
require('./routes/deckRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);
require('./routes/loginRoutes.js')(app);


console.log("after session stuff");

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

