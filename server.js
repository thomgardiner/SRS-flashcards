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


// passport.use(new Strategy(
//   function(username, password, cb) {
//     db.users.findByUsername(username, function(err, user) {
//       if (err) { return cb(err); }
//       if (!user) { return cb(null, false); }
//       if (user.password != password) { return cb(null, false); }
//       return cb(null, user);
//     });
//   }));


// // Configure Passport authenticated session persistence.
// //
// // In order to restore authentication state across HTTP requests, Passport needs
// // to serialize users into and deserialize users out of the session.  The
// // typical implementation of this is as simple as supplying the user ID when
// // serializing, and querying the user record by ID from the database when
// // deserializing.
// passport.serializeUser(function(user, cb) {
//   cb(null, user.id);
// });

// passport.deserializeUser(function(id, cb) {
//   db.users.findById(id, function (err, user) {
//     if (err) { return cb(err); }
//     cb(null, user);
//   });
// });


const mongoDB = process.env.MONGODB_URI || dbURL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("connected to the mainframe");
});

app.use(session({
  secret: 'keyboard cat',
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

