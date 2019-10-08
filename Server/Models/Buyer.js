var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Comment = new Schema({
    Buyer_Name: String,
    Address: String,
    Contactnumber: String,
   
   
});

const Buyer = mongoose.model("Buyer", Comment);
module.exports = Buyer;