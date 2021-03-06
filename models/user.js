const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true, max: 30},
    password: {type: String, required: true, max: 150},
    email: {type: String, required: true, unique: true, max: 75},
    joined: {type: String, required: true, max: 75},
    decks: []
});

UserSchema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        console.log(err);
      }
      user.password = hash;
      next();
    })
});


module.exports = mongoose.model('User', UserSchema);
