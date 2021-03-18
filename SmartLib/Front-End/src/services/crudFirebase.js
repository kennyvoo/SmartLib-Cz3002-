import app from '../firebase'

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

const remove = (q,id) => {
  const db = app.firestore().collection(q);
  return db.doc(id).delete();
};

const crudFirebase = {
  getAll,
  create,
  update,
  remove,
  set
};

export default crudFirebase;