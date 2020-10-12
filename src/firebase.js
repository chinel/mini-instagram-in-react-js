import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA3ZoMt1-5J00yHwpBeZORBWf-jK_zfUOk",
  authDomain: "mini-instagram-clone.firebaseapp.com",
  databaseURL: "https://mini-instagram-clone.firebaseio.com",
  projectId: "mini-instagram-clone",
  storageBucket: "mini-instagram-clone.appspot.com",
  messagingSenderId: "94709248331",
  appId: "1:94709248331:web:5627ab736820a06c7f38ce",
  measurementId: "G-3MDHYB588F",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
