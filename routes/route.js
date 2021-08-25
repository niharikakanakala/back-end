const express = require("express");
const router = express.Router();
const Signin = require("../model/signinSchema");
router.get('/', (req,res) => {
  res.send('hello');
})


router.post("/signin", (req, res) => {
  const signUser = new Signin({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  signUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;