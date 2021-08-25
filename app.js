const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authrouter = require("./routes/auth");
const router = require("./routes/route");
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();

app.use(cors());
app.use("/user", authrouter);
app.use("/api", router);

//if (process.env.DataBase_Connection) {
  //try {
 //   mongoose.connect(process.env.DataBase_Connection, {
  //    useNewUrlParser: true,
  //  });
  //} catch (err) {
 //   console.log("errr  while connecting db", "errr");
  //}
//}
//app.listen(4000, () => console.log("server is running"));

mongoose.connect (
    process.env.DataBase_Connection
).then(result => {
    app.listen(4000);
})
.catch(err => console.log(err));