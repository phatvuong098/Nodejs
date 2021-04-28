const express = require('express');
const router = express.Router();
const user_model = require("../model/user_model");


router.route("/CreateUser").post(CreateUser);

async function CreateUser(req,resp){
    await user_model.create({username: req.body.username, password: req.body.password});
    resp.send("Create ok: " + req.body.username);
}

module.exports = router;