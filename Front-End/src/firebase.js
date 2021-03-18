import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth"

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyAHcwWnc7MDfB6oR293waIiqyswSRsmTWg",
//     authDomain: "login-c88b6.firebaseapp.com",
//     projectId: "login-c88b6",
//     storageBucket: "login-c88b6.appspot.com",
//     messagingSenderId: "332223947244",
//     appId: "1:332223947244:web:51ab07b6beada5e204e0c9"
// })

const app = firebase.initializeApp({
    apiKey: "AIzaSyDnGX3alVu6uWRCWM0YNfWK1MJzBiZbgOY",
    authDomain: "cz3003-d6c84.firebaseapp.com",
    databaseURL: "https://cz3003-d6c84-default-rtdb.firebaseio.com",
    projectId: "cz3003-d6c84",
    storageBucket: "cz3003-d6c84.appspot.com",
    messagingSenderId: "1037419195011",
    appId: "1:1037419195011:web:3a06e38ea94252b004c9b6",
    measurementId: "G-PD6RWC6N5Y"
})

export const auth = app.auth()
export default app