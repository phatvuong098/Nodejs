var mongoose = require("mongoose");

// schema
const userInfo = new mongoose.Schema({
    username: { 
        type: String,
        required: true
    },
    password: { 
        type: String,
        required: true 
    }
},{
    collection: "UserData"
});

module.exports = mongoose.model("UserData", userInfo);