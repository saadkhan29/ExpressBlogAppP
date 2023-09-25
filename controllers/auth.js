
// API's

// Require User Model
const User = require('../models/User');

// Require bcrypt module
const bcrypt = require('bcrypt');

// Require Passport Configurations
let passport = require('../helper/ppConfig')

// Random Number 5 - 15, to make the hash unpredictable 
const salt = 10;

// HTTP GET - Signup Route - To load the signup form
exports.auth_signup_get = (req, res) => {
  res.render("auth/signup");
}


// HTTP POST - Signup Route - To post the data into the database
exports.auth_signup_post = (req, res) => {
  let user = User(req.body);

  let hash = bcrypt.hashSync(req.body.password, salt);
  user.password = hash;
  console.log(hash);

  user.save()
  .then(() => {
    res.redirect("/")
  })
  .catch((err) => {
    console.log(err);
  })
}


// HTTP GET - Signin Route - To load the signin form
exports.auth_signin_get = (req, res) => {
  res.render("auth/signin");
}

// HTTP POST - Signin Route - To post the data
exports.auth_signin_post = 
passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/signin"
})

// HTTP GET - Logout Route - To logout the user