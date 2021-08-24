const express = require('express');

const { validateLogin } = require('../model/login');
const validateMiddleware = require('../validateMiddleware');
const loginController = require('../controller/auth');

const routes = express.Router();



//post  
routes.post('/login', [validateMiddleware(validateLogin)],  loginController.login);


module.exports = routes;