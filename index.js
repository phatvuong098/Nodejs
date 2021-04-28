const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const user_model = require("./model/user_model");
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const info = require('./api/info');
app.use('/info', info);

const userController = require("./api/UserController");
app.use("/user/", userController);

app.listen(5000, () => {
    console.log("Server started at port: 5000");
});

const url = "mongodb://"+ process.env.DB_USER +":"+ process.env.DB_PASS +"@"+process.env.DB_HOST+":27017/K1_2020?authSource=admin";
let option = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(url, option).then((res, err) => {
    console.log("thanh cong");
}, (err) => {
    console.log("that bai");
});