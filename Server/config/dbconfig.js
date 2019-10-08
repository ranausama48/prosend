var mongoose = require('mongoose');

function dbConnection() {

    mongoose.connect('mongodb+srv://saylaniFYP:saylaniFYP@cluster0-w4wmj.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.log("err", err);
    } else {
      console.log("successfully connected");
    }
  }
);

}

module.exports = dbConnection;