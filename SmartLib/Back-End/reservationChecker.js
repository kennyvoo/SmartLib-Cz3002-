//express
var express = require('express')
var router = express.Router()
const firebase = require('./firebase')
const db = firebase.firestore()

//Check if it is still reserved
async function isReserved(seatID){
    let seats=[]
    //check database seat {id} status
    var data = await db.collection('Seats').where('id',"==",seatID).get();
    if (data.docs.length > 0) {
        for (const seat of data.docs) {
         seats.push(seat.data())
      }
    }
    //If reserved change to avalilable
    var seatStatus = seats[0].status
    if(seatStatus  == "Reserved" ){
        await db.collection('Seats').doc(seatID).update(
            {
                status : "Available"
            }
        )
    }
}

router.post('/', (req, res, next) => {
    console.log("setting up timmer")
    setTimeout(function(){
        return isReserved(req.body.seatID);
    },1000)    

    res.json({
        msg: 'checking'
      })
})

module.exports = router;

