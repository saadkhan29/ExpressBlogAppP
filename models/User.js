const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  firstName: {
    type: String,
    required: true,
    minlength: [2, "First name must be more than 2 characters"],
    maxlength: [99, "This is too much man.... Chill !!!!"]
  },

  lastName: {
    type: String,
    required: true,
    minlength: [2, "Last name must be more than 2 characters"],
    maxlength: [99, "This is too much man.... Chill !!!!"]
  },

  emailAdress: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    minlength: [6, "Khalaaas.... your password is too weak!!!"]
  }

})

const User = mongoose.model("User", userSchema);

module.exports = User;