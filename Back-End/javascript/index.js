// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "@firebase/auth";
import "@firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  "type": "service_account",
  "project_id": "cz3002-33787",
  "private_key_id": "ef5af6f8bf9df32dd3e68516e09fb53a5cb32e60",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCnYw9PGaj8EyXP\nt1b+CNUuwzsVH2+P4yVTSSiRnmxKzEkRXxto4k6qa9aYJa4ltjxpFQID6VF1y7J5\ngjYRW+uULehnyT6QTXB2YT18ObYzQ7yrWHpN5hLQA5Mv4xzC6MzIlShW4Cs1Pn+H\n8YxHFu48qD6pWKDgsYe4AlULxAWMWmZd5A+vvkLLi+21bLvf4Ka2xOhkfMbiyj4s\nJNPOAC3IkcQPsk+ahaHSMA1xqb4XyVVsr9G8bBPGUiIC4roVD7Zz5PbxONbkIZT9\nV5dF0vON0S9GH/Lfl4u8sx7dVnYuczB3GE4yeDHAWvtHQayIDNx0XgLNW1+nELjv\nLPC1vpBxAgMBAAECggEAAryYYfsx65kmi5xcREABuEeB3kkKymf00sVF8AeOjrSD\nV1DeQls83QVxV0B6dexiVXd99nFonwvrCZiK6MK/ecc8XwIHz1Usywqw9ih9ZZ4s\nZgLG0SI7WYJNdEF61Wb3/imOJMl6e17ft+nHmNvznjND/wHPc40DgosrN8uHKbHD\n3/XacQ3rAHVCpm7MWGsdx4H3QEPH6MSDorMTRTqNrQ4fCJhcTMVAbbeUOwDdk84k\n6sROusdX/fjp12Xu0sKPj2zQIggDCycYZvp0vSv7vtCnxmZmU6jcuGv/cQ4W+kjk\nKPec8yiIxX/il8nFrUdADxOzobJCTviQ5AlkamQ7YQKBgQDlC7NGm6P/99SvUdzb\nbaii5O8EwqWA7lIM2UFPgs+6p9/FVyEnECGlCQMpJGX4eXOfbU3Q2SsBYksKw0/d\n2/Mb9MxzQfX7R96A/s38VLj6KvdU12MCcNZY0Nrygg9osk/au92v+tErmrVlit+H\nxmSkn5icoJuZzbNsQQx4zd3+yQKBgQC7Fc82DANPwhe9kPf6b7glmMuNzkWcjQlb\nrjlqLdgxR6/xaMs9iLSxp13h5JiRfmLq8GWWjIJ4c9GeKYcZsr+WjsZusnOy1e1p\nv39Hpgc9Ktk8BGDIR8QYNs/2lmbwubDJhUmwjJdkRb5pBFRqB8v5omquHQG2gOAj\nzP+/g2CQaQKBgAXLZ/uvUFTXdkABOC8s9Qk59XoPWpSKcvT0Qhy62HqGaLjbXXFZ\njSBZvAS8cP/6QpyT7VYNSHM+g1uAWXLpb5sTdGCuGIUE6nIlAB0UH6HkmGFDGbQk\nGqggkIl2FOG3MSH9grxDAiuyPEiXXNRYho9LolbEEWuwsotYkfI0cxtRAoGAc3zb\nFPoFcU7XaOX8rlQY0NypizgyMJm/lSDPwIPcWU9vhQ6zp6CkKqauhaufovDqDy2n\nCHBkegbE92WbSHnXWxF33Q277kGw9P6Ji6kp/tBcmXf6ZqgmnOv5JLdjhGacg0oM\nWzfunK+RAzLxCSMW/1sLj7/INukHdBIwLgDjs0ECgYAgNMkeukNf4OTKh9Tnw0+2\nawTIc2OXMytvHK8KF6StqJ8QvQ+25r4Wh2fzGUYWDAH98vcfcoAreuF47YIxlSXA\nzJf3x2CWeTaNuKlrfnsF1eKWoPlsR8XcvJfcmE2EjLWdfdYU+mvCL2nzQK3IgLLo\niKR5biW834eHesnS6cg7YA==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-mu28c@cz3002-33787.iam.gserviceaccount.com",
  "client_id": "111096677718394613580",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mu28c%40cz3002-33787.iam.gserviceaccount.com"
};
firebase.initializeApp({
  apiKey: "AIzaSyC-ceQkBg9QLh2nNzb4XgOWSnrg1BwLc9A",
  authDomain: "cz3002-33787.firebaseapp.com",
  projectId: "cz3002-33787"
});
var db = firebase.firestore();
// var cityRef = db.collection('test').doc('1');
// var setWithMerge = cityRef.set({
//   capital: true
// }, { merge: true });
class Booking_Rec {
  static index = -1;
  static Booking_Rec_Converter = {
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Booking_Rec(data.AID, data.Booked_time, data.Start_time, data.End_time, data.LID, data.SID);
    }
};
  constructor (AID, Booked_time, Start_time, End_time, LID, SID ) {
      this.AID = AID;
      this.Booked_time = Booked_time;   
      this.Start_time = Start_time;
      this.End_time = End_time;
      this.LID = LID;
      this.SID = SID;
      Booking_Rec.index = Booking_Rec.index + 1;
  }
  to_dict() {
    return {
        AID: this.AID,
        Booked_time: this.Booked_time,
        Start_time: this.Start_time,
        End_time: this.End_time,
        LID: this.LID,
        SID: this.SID
        };
  }
  to_firebase(db) {
    db.collection("Booking_Rec").doc(Booking_Rec.index.toString()).set(this.to_dict());
  }
  static reset() {
    Booking_Rec.index = -1;
  }
  static update(doc,key,value,db) {
    var ref = db.collection("Booking_Rec").doc(doc);
    switch (key) {
      case "AID":
        ref.update({"AID": value});
        break;
      case "Booked_time":
        ref.update({"Booked_time": value});
        break;
      case "Start_time":
        ref.update({"Start_time": value});
        break;
      case "End_time":
        ref.update({"End_time": value});
        break;
      case "LID":
        ref.update({"LID": value});
        break;
      case "SID":
        ref.update({"SID": value});
        break;
      default:
        console.error("Error updating document: ", error);
    }
  }
  static get_doc(doc,db) {
    return db.collection("Booking_Rec").doc(doc).withConverter(Booking_Rec.Booking_Rec_Converter).get().then((doc) => {
      if (doc.exists){
        // Convert to City object
        var Booking_Rec = doc.data();
        // Use a City instance method
        console.log(Booking_Rec.toString());
      } else {
        console.log("No such document!");
      }}).catch((error) => {
        console.log("Error getting document:", error);
      });
  }
  toString() {
      return this.AID + ', ' + this.Booked_time + ', ' + this.Start_time + ', ' + this.End_time + ', ' + this.LID + ', ' + this.SID;
  }
}


class Seats {
  static index = -1;
  static Seats_Converter = {
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Seats(data.LID, data.status);
    }
};
  constructor (LID, status) {
      this.LID = LID;
      this.status = status;
      Seats.index = Seats.index + 1;
  }
  to_dict() {
    return {
        LID: this.LID,
        status: this.status
        };
  }
  to_firebase(db) {
    db.collection("Seats").doc(Seats.index.toString()).set(this.to_dict());
  }
  static reset() {
    Seats.index = -1;
  }
  static update(doc,key,value,db) {
    var ref = db.collection("Seats").doc(doc);
    switch (key) {
      case "LID":
        ref.update({"LID": value});
        break;
      case "status":
        ref.update({"status": value});
        break;
      default:
        console.error("Error updating document: ", error);
    }
  }
  static get_doc(doc,db) {
    return db.collection("Seats").doc(doc).withConverter(Seats.Seats_Converter).get().then((doc) => {
      if (doc.exists){
        // Convert to City object
        var Seats = doc.data();
        // Use a City instance method
        console.log(Seats.toString());
      } else {
        console.log("No such document!");
      }}).catch((error) => {
        console.log("Error getting document:", error);
      });
  }
  toString() {
      return this.LID + ', ' + this.status;
  }
}

class Libraries {
  static index = -1;
  static Libraries_Converter = {
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Libraries(data.location, data.name);
    }
};
  constructor (location, name) {
      this.location = location;
      this.name = name;
      Libraries.index = Libraries.index + 1;
  }
  to_dict() {
    return {
        location: this.location,
        name: this.name
        };
  }
  to_firebase(db) {
    db.collection("Libraries").doc(Libraries.index.toString()).set(this.to_dict());
  }
  static reset() {
    Libraries.index = -1;
  }
  static update(doc,key,value,db) {
    var ref = db.collection("Libraries").doc(doc);
    switch (key) {
      case "location":
        ref.update({"location": value});
        break;
      case "name":
        ref.update({"name": value});
        break;
      default:
        console.error("Error updating document: ", error);
    }
  }
  static get_doc(doc,db) {
    return db.collection("Libraries").doc(doc).withConverter(Libraries.Libraries_Converter).get().then((doc) => {
      if (doc.exists){
        // Convert to City object
        var Libraries = doc.data();
        // Use a City instance method
        console.log(Libraries.toString());
      } else {
        console.log("No such document!");
      }}).catch((error) => {
        console.log("Error getting document:", error);
      });
  }
  toString() {
      return this.location + ', ' + this.name;
  }
}

class Students {
  static index = -1;
  static Students_Converter = {
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Students(data.password, data.name, data.has_reserved);
    }
};
  constructor (password, name, has_reserved) {
      this.password = password;
      this.name = name;   
      this.has_reserved = has_reserved;
      Students.index = Students.index + 1;
  }
  to_dict() {
    return {
        password: this.password,
        name: this.name,
        has_reserved: this.has_reserved,
        };
  }
  to_firebase(db) {
    db.collection("Students").doc(Students.index.toString()).set(this.to_dict());
  }
  static reset() {
    Students.index = -1;
  }
  static update(doc,key,value,db) {
    var ref = db.collection("Students").doc(doc);
    switch (key) {
      case "password":
        ref.update({"password": value});
        break;
      case "name":
        ref.update({"name": value});
        break;
      case "has_reserved":
        ref.update({"has_reserved": value});
        break;
      default:
        console.error("Error updating document: ", error);
    }
  }
  static get_doc(doc,db) {
    return db.collection("Students").doc(doc).withConverter(Students.Students_Converter).get().then((doc) => {
      if (doc.exists){
        // Convert to City object
        var Students = doc.data();
        // Use a City instance method
        console.log(Students.toString());
      } else {
        console.log("No such document!");
      }}).catch((error) => {
        console.log("Error getting document:", error);
      });
  }
  toString() {
      return this.password + ', ' + this.name + ', ' + this.has_reserved;
  }
}



// let test = new Booking_Rec(0,0,0,0,0,0).to_firebase(db);
// Booking_Rec.update("1","AID",5,db)
// console.log("hello");
// console.log(Booking_Rec.get_doc("1",db));
