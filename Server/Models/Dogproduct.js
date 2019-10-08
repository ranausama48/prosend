var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Comment = new Schema({
    dogname: String,
    dogtype: String,
    dogprice: String,
    ownerlocation:String,
    dogdetail: String
    // multifile:Array,
    // thumbnail:String
    //createdAt: { type: Date, default: Date.now }
});

const Dogproduct = mongoose.model("Dogproduct", Comment);
module.exports = Dogproduct;