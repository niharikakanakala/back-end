//const { validationResult } = require('express-validator/check');

const { Login } = require('../model/login');

//create (post)
exports.login = async(req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const login = new Login({
        email: email,
        password: password
    });
    try {
        await login.save();
        res.status(201).json({
            message: 'LOGGEDIN SUCCESSFULLY',
            login: login
        });
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
    }
};

//get