const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

  emailAddress: {
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

// Verify Password Method
userSchema.methods.verifyPassword = function(password){
  console.log("password", password);
  console.log("this.password", this.password);
  return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;