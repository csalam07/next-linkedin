import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVWXGNBVwvKZwubRNTqrF34KcEP2GHTbs",
  authDomain: "next-linkedin.firebaseapp.com",
  projectId: "next-linkedin",
  storageBucket: "next-linkedin.appspot.com",
  messagingSenderId: "165769841688",
  appId: "1:165769841688:web:afc3c02ece4aec7e45476d",
  measurementId: "G-HR8J1PJ91Y",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
