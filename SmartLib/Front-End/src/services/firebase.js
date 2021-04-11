//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: firebase.js                                                                                               //
//    Author: Wilson                                                                                                    //
//  Function: Initialize the firebase app to allow different components to connect and use the api provided by          //
//            firebase. The values initialized below is based on our groups firebase account.                           //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth"

//Shared Acc
const app = firebase.initializeApp({
    apiKey: "AIzaSyCSpEdAkTWd2HMTcY-cTeppis3K963HJH0",
    authDomain: "smartlib-66322.firebaseapp.com",
    projectId: "smartlib-66322",
    storageBucket: "smartlib-66322.appspot.com",
    messagingSenderId: "469013252936",
    appId: "1:469013252936:web:346ee2436f298ae191417d",
    measurementId: "G-LGSWT5K4MV"
})

export const auth = app.auth()
export default app