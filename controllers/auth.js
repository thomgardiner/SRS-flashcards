const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.login = (req, res) => {

    if(!req.body){
        return res.status(400).send({
            message: "cannot be empty"
        });
    }


    User.findOne({username: req.body.username }).exec(function (err, user) {
        
        if (err) {
          return res.send(err);
        } else if (!user) {
            return res.status(401).send({
                message: "Not found"
            });
        }

        bcrypt.compare(req.body.password, user.password, function (err, result) {

          console.log(result);

          if (result === true) {
            req.session.username = user.username;
            console.log(req.session.username + " is logged in.");
            res.redirect("/home");
          } else {
            // res.send("password doesn't match");
            res.redirect("/login");
          }
        })
      });
}

exports.logout = (req, res) => {

    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
          if (err) {
            return err;
          } else {
            return res.redirect('/');
          }}
        )
    }
}

exports.getSession = (req, res) =>{
  if(!req.session.username){
      res.send('cannot find logged in user');
  }
  res.send(req.session.username);
}