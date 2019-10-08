

// var app = require("express").Router();
// var upload = require('../config/multerconfig');
// var studentdata = require('../Models/studentdata');

// app.post("/multifiles", upload.any(),(req,res)=>{
//     let multifile = [];
//     req.files.forEach(files =>{
//         multifile.push(file.filename);
//     });

//     let user = new studentdata();
//     // user.studentname = req.body.studentname;
//     // user.studentpassword = req.body.studentpassword;
//     // user.studentaddress = req.body.studentaddress;
//     user.multifile = multifile;
//     user.thumbnail = req.files[0].filename;

//     user.save((err , add)=>{
//         if (err) {
//             res.status(500).json("Error occured while saving adds");
//         }
//         else{
//             res.status(200).json("Your Add successfully submit");
//         }
//     });

// });
// module.exports = fileupload;