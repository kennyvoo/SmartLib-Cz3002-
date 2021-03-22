//Firebase
const firebase = require('./firebase')
const db = firebase.firestore()

async function getData(){
    let seats=[]
    //check database seat {id} status
    var data = await db.collection('Seats').get();
    if (data.docs.length > 0) {
        for (const seat of data.docs) {
         seats.push(seat.data())
      }
    }

    return seats;
}

function pharseData(seats){
    let data=[]
    seats.map(
        seat =>{
            data.push( {
                id : seat.id,
                status : seat.status,
                seatName : seat.seatName,
                level : seat.level
            })
        }
    )
    return data;
}

async function uploadData(Seats){
    const timeStamp = new Date().toISOString();
    //console.log("seats",Seats)
    await db.collection('seatLog').doc(timeStamp).set(
        {Seats}
    )
    return timeStamp;
}

module.exports = async function(){
    //Get data from fire base
    var seats = await getData();

    //pharse data
    var pharseSeats = pharseData(seats);

    //Uplooad data to firebase
    var dateTime = await uploadData(pharseSeats)

    console.log("updated data at: " + dateTime)
    
}

 