import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA_UKwaoH6VENyPhKS7u5KlYL4He1rqB8o",
    authDomain: "smartlib-b2430.firebaseapp.com",
    projectId: "smartlib-b2430",
    storageBucket: "smartlib-b2430.appspot.com",
    messagingSenderId: "16550524555",
    appId: "1:16550524555:web:9d454da8948877a59a068e",
    measurementId: "G-18XG5TQCHP"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export default firebase


