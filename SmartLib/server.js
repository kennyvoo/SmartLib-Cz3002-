//Express Configuration
var express = require('express');
const app = express();
var router = express.Router()
const PORT = 4000;

//Corn job
var jobs = require("./Back-End/seatLogger")
const cron = require('node-cron')

//Cors Configuration
const cors = require('cors');
app.use(cors());

//BodyParser Configuration
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//API for sending email
app.use("/api/sendEmail", require("./Back-End/sendEmail.js")); 
app.use("/api/reservationChecker", require("./Back-End/reservationChecker.js"));
app.use("/api/reportData", require("./Back-End/reportData.js"));

// setup cron job
cron.schedule("* * * * *", () => {
    console.log("running cron job")
    //jobs()
})

app.listen(PORT,function(){
    console.log('Server is running at PORT:',PORT);
})