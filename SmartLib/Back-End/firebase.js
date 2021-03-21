const firebase = require('firebase');

const db  = firebase.initializeApp(
    {
        apiKey: "AIzaSyCSpEdAkTWd2HMTcY-cTeppis3K963HJH0",
        authDomain: "smartlib-66322.firebaseapp.com",
        projectId: "smartlib-66322",
        storageBucket: "smartlib-66322.appspot.com",
        messagingSenderId: "469013252936",
        appId: "1:469013252936:web:346ee2436f298ae191417d",
        measurementId: "G-LGSWT5K4MV"
    }
)

module.exports = db;

