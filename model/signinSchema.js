const mongoose = require("mongoose");
const Signin = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  }
});
module.exports = mongoose.model('signin', Signin );