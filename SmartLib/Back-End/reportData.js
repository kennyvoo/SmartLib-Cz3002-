const firebase = require('./firebase')
const db = firebase.firestore()

const math = require('mathjs')

//express
var express = require('express')
var router = express.Router()

//formated data type
/*

    seatlog : {
        timestamp : xx-xx-xx
        value : {
            occupied : xx
            Available : xx 
            Hogged : xx
            Unavailable : xx
        }
    }

    levelLog :{
        level 1 :{
            {
                timestamp : xx-xx-xx
                value : {
                    occupied : xx
                    Available : xx 
                    Hogged : xx
                    Unavailable : xx
                }
            }
            .
            .
        }
        level 2 : {
            {
                timestamp : xx-xx-xx
                value : {
                    occupied : xx
                    Available : xx 
                    Hogged : xx
                    Unavailable : xx
                }
            }
            .
            .
        }
    }
*/

function checkSeatStatus(status){
    
    if(status == "Available")
        return [1,0,0,0,0]
    else if(status == "Occupied")
        return [0,1,0,0,0]
    else if(status == "Reserved")
        return [0,0,1,0,0]
    else if (status == "Hogged")
        return [0,0,0,1,0]
    else if (status == "Unavailable")
        return [0,0,0,0,1]
 
}

function pharseLog(data){
    //Available , Occupied, Reserved, Hogged, Unavailable

    var level1 = [0,0,0,0,0]
    var level2 = [0,0,0,0,0]
    var level3 = [0,0,0,0,0]
    var level4 = [0,0,0,0,0]
    var level5 = [0,0,0,0,0]

    for (const x of data.Seats){
        if(x.level == '1')
            level1 = math.add(level1,checkSeatStatus(x.status))
        else if(x.level == '2')
            level2 =math.add(level2,checkSeatStatus(x.status))
        else if(x.level == '3')
            level3 = math.add(level3,checkSeatStatus(x.status))
        else if (x.level == '4')
            level4 =math.add(level4,checkSeatStatus(x.status))
        else if (x.level == '5')
            level5 =math.add(level5,checkSeatStatus(x.status))
    }
    var total = math.add(level1,level2,level3,level4,level5)

    return [total,level1,level2,level3,level4,level5]
}

function pharseStatus(data){
    return {
        Available : data[0],
        Occupied : data[1],
        Reserved : data[2],
        Hogged : data[3],
        Unavailable : data[4]
    }
}

async function pharsedata(res){
    let lvl1Log = []
    let lvl2Log = []
    let lvl3Log = []
    let lvl4Log = []
    let lvl5Log = []
    let seatLog = []
    //check database seat {id} status
    var data = await db.collection('seatLog').get();
    if (data.docs.length > 0) {
        for (const x of data.docs) {
            var [t,lvl1,lvl2,lvl3,lvl4,lvl5] = pharseLog(x.data())
            // add to seatLog
            seatLog.push({
                timestamp : x.id,
                value : pharseStatus(t)
            });
            
            //add to levelLog
            lvl1Log.push({
                timestamp : x.id,
                value : pharseStatus(lvl1)
            });
            lvl2Log.push({
                timestamp : x.id,
                value : pharseStatus(lvl2)
            });
            lvl3Log.push({
                timestamp : x.id,
                value : pharseStatus(lvl3)
            });
            lvl4Log.push({
                timestamp : x.id,
                value : pharseStatus(lvl4)
            });
            lvl5Log.push({
                timestamp : x.id,
                value : pharseStatus(lvl5)
            });
        }
    }
    
    res.json({
        seatLog: seatLog,
        levelLog :{
            level1 : lvl1Log,
            level2 : lvl2Log,
            level3 : lvl3Log,
            level4 : lvl4Log,
            level5 : lvl5Log
        }
    })

}

router.get('/', async (req, res, next) => {
    await pharsedata(res);
})

module.exports = router;


