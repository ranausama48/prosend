
var app = require('express').Router();
var Dogproduct = require('../Models/Dogproduct')
app.post('/Add', function (req, res) {


    console.log('req body', req.body);

    let saveNewRow = new Dogproduct();
    saveNewRow.username = req.body.username;
    saveNewRow.useremail = req.body.useremail;
    saveNewRow.userpassword = req.body.userpassword;
    console.log(req.body.username,req.body.useremail,req.body.userpassword);
    
    saveNewRow.save((err, save) => {
        if (err) {
            console.log(err);
            
            return res.send("error occured")
        }
        else {
            console.log("saved");
            res.json(save);
            // return res.send("your data saved in database")
        }
    });
    

      //new rout

   
    
});
app.get('/getdogproduct',function(req,res){
    Dogproduct.find()
    .exec(function(err,dogfinalproduct){
        if(err)
        {
            console.log('err' , err);
            res.json('error occored')
        }
        res.json(data);
    });
    console.log('request from /getdogproduct');
    
 });
 app.post('/signuplist',function (req,res) {

    signupdata.find()
    .exec(function(err, data){
        if(err)
        {
            console.log('err' , err);
            res.json('error occored')
        }
        res.json(data);
    });
        console.log('request from /getdatafromdb');
        
        
        
    }); 
    //  app.post("/deltestudent", function(req, res) {
    //             Dogproduct
    //             console.log(req.body)
    //               .findOneAndDelete()
    //               .where("_id")
    //               .equals(req.body.productidtodelte)
    //               .exec(function(err, data) {
    //                 if (err) {
    //                   console.log(err);
              
    //                   res.json("error");
    //                 }
    //                 res.json(data);
    //                 console.log("data",data)
    //                 // athletes contains an ordered list of 5 athletes who play Tennis
    //               });
    //           });
module.exports = app;
