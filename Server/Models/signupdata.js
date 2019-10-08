var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Comment = new Schema({
    username: String,
    useremail: String,
    userpassword: String,
    // multifile:Array,
    // thumbnail:String
    //createdAt: { type: Date, default: Date.now }
});

const signupdata = mongoose.model("SignUpData", Comment);
module.exports = signupdata;