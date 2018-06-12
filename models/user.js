const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, max: 15},
    password: {type: String, required: true, max: 15},
    email: {type: String, required: true, max: 50},
    joined: {type: String, required: true, max: 50},
    decks: []
});

UserSchema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  });




module.exports = mongoose.model('User', UserSchema);