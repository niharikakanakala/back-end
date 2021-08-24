const mongoose = require('mongoose');
const Joi = require('joi');

const loginSchema = new mongoose.Schema({
  //username: {
    //type: String,
    //required: true,
  //},
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


//module.exports = mongoose.model('signin', Signin );
const Login = mongoose.model('login', loginSchema);

const validateLogin = (login) => {
   const val = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
   });
   return val.validate(login);
}

module.exports = {
  Login,
  validateLogin
}

