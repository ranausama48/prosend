
var app = require('express').Router();
var signupdata = require('../Models/signupdata');
var Dogproduct = require('../Models/Dogproduct');
var Buyer = require('../Models/Buyer')

app.post('/Add', function (req, res) {


    console.log('req body', req.body);

    let saveNewRow = new signupdata();
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
    })
});
app.post('/dogproductadd', function (req, res) {


    console.log('req body', req.body);

    let saveNewDogRow = new Dogproduct();
    saveNewDogRow.dogname = req.body.dogname;
    saveNewDogRow.dogtype = req.body.dogtype;
    saveNewDogRow.dogprice = req.body.dogprice;
    saveNewDogRow.ownerlocation = req.body.ownerlocation;
    saveNewDogRow.dogdetail = req.body.dogdetail;
    console.log(req.body.dogname,req.body.dogtype,req.body.dogprice,req.body.ownerlocation,req.body.dogdetail);
    
    saveNewDogRow.save((err, save) => {
        if (err) {
            console.log(err);
            
            return res.send("error occured")
        }
        else {
            console.log("saved");
            res.json(save);
            // return res.send("your data saved in database")
        }
    })
});
app.post('/addcart', function (req, res) {


    console.log('req body', req.body);
    let NewBuyer = new Buyer();
    NewBuyer.Buyer_Name = req.body.Buyer_Name;
    NewBuyer.Address = req.body.Address;
    NewBuyer.Contactnumber = req.body.Contactnumber;
    console.log(req.body.Buyer_Name,req.body.Address,req.body.Contactnumber);
    NewBuyer.save((err, save) => {
        if (err) {
            console.log(err);
            
            return res.send("error occured")
        }
        else {
            console.log("Buyer Record Save saved");
            res.json(save);
            // return res.send("your data saved in database")
        }
    })
    
});

app.post('/getrequest',function (req,res) {

    Buyer.find()
    .exec(function(err, data){
        if(err)
        {
            console.log('err' , err);
            res.json('error occored')
        }
        res.json(data);
    });
        console.log('request from /getrequest');
        
        
        
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
        
        app.post('/getdogproduct',function (req,res) {

            Dogproduct.find()
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

            // app.post("/deltestudent", function(req, res) {
            //     Dogproduct
            //     console.log(req.body)
            //       .findOneAndDelete()
            //       .where("_id")
            //       .equals(req.body.useridtodelte)
            //       .exec(function(err, data) {
            //         if (err) {
            //           console.log(err);
              
            //           res.json("error");
            //         }
            //         res.json(data);
            //         console.log("data",data)
            //         // athletes contains an ordered list of 5 athletes who play Tennis
            //       });
            //   });

module.exports = app;
