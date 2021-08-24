const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use(cors());

//initialize routes
// /auth/login
app.use('/auth', authRoutes);




mongoose.connect (
    'mongodb+srv://niharika:HBuD33GZ8ZqdgamD@cluster0.2olws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(result => {
    app.listen(4000);
})
.catch(err => console.log(err));
//mongodb+srv://niharika:HBuD33GZ8ZqdgamD@cluster0.2olws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority