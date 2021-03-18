import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAHcwWnc7MDfB6oR293waIiqyswSRsmTWg",
    authDomain: "login-c88b6.firebaseapp.com",
    projectId: "login-c88b6",
    storageBucket: "login-c88b6.appspot.com",
    messagingSenderId: "332223947244",
    appId: "1:332223947244:web:51ab07b6beada5e204e0c9"
})

export const auth = app.auth()
export default app