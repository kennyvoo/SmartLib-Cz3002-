//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: crudFirebase.js                                                                                           //
//    Author: Wilson                                                                                                    //
//  Function: Central location which contains renamed firebase functions for ease of programming and understanding.     //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import app from './firebase'

const getAll = (q) => {
  const db = app.firestore().collection(q);
  return db;
};

const create = (q,id,data) => {
  const db = app.firestore().collection(q);
  return db.doc(id).set(data);
};

const update = (q,id, value) => {
  const db = app.firestore().collection(q);
  return db.doc(id).update(value);
};

const set = (q,id, value) => {
  const db = app.firestore().collection(q);
  return db.doc(id).set(value);
};

const bookingSetup = (uid, loc, value) => {
  const db = app.firestore().collection('User_Booking').doc(uid).collection('Bookings');
  return db.doc(loc).set(value);
};

const bookingHistorySetup = async(uid, value) => {
  const db = app.firestore().collection('User_Booking').doc(uid).collection('Bookings').doc('Booking_History').collection('History');
  return await db.add(value);
};

const booking = (uid, loc, value) => {
  const db = app.firestore().collection('User_Booking').doc(uid).collection('Bookings');
  return db.doc(loc).update(value);
};

const checkbooking = async(uid, loc) => {
  const db = app.firestore().collection('User_Booking').doc(uid).collection('Bookings');
  return await db.doc(loc).get();
};

const removebooking = (uid) => {
  const db = app.firestore().collection('User_Booking').doc(uid).collection('Bookings');
  return db.doc('Booking_Current').delete();
};

const remove = (q,id) => {
  const db = app.firestore().collection(q);
  return db.doc(id).delete();
};

const crudFirebase = {
  getAll,
  create,
  update,
  remove,
  set,
  bookingSetup,
  booking,
  checkbooking,
  removebooking,
  bookingHistorySetup
};

export default crudFirebase;