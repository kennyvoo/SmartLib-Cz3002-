//Express Configuration
var express = require('express');
const app = express();
var router = express.Router()
const PORT = 4000;

//Cors Configuration
const cors = require('cors');
app.use(cors());

//BodyParser Configuration
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//API for sending email
app.use("/api/sendEmail", require("./Back-End/sendEmail.js")); 


app.listen(PORT,function(){
    console.log('Server is running at PORT:',PORT);
})