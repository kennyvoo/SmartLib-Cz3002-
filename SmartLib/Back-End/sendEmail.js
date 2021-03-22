//express
var express = require('express')
var router = express.Router()

//Nodemailer configuration
var nodemailer = require('nodemailer');
const ejs = require("ejs");

//Create Email transporter
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: 'NoReply.SmartLib@gmail.com',
      pass: 'SmartLib123'
    }
  });

//name, email, subject
router.post('/', (req, res, next) => {
    ejs.renderFile(__dirname + "/emailTemplate/test.ejs", { name: req.body.name, seat: req.body.seat }, function (err, data) {
  
      if(err){
        console.log(err);
      }else{
        var mailOption = {
          from: 'NoReply.SmartLib@gmail.com',
          to: req.body.email,
          subject: "Confirmation - Seat Reservation",
          html: data
        };
      }
  
      console.log(data)
      
      transporter.sendMail(mailOption, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
      res.json({
        msg: 'sent email'
      })
    })
  }) 

module.exports = router;