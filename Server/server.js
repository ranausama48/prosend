
//import nodemodule
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const mongoose = require("mongoose");

//import from custom files
var todosRoutes = require('./routes/routes');
//var fileuploadroutes = require('./routes/fileupload');
var dbConnection = require('./config/dbconfig');

//app creates
var app = express();

// midleware
var app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//dbconnection
dbConnection();


//user route
app.use('/',todosRoutes);
//app.use('/uploads',fileuploadroutes)


app.listen(4848, function () {
    console.log('express server running on port 4848');

});