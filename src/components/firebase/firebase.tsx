// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD1lK2GhdGNZXVWOACvdGjqZPM-QYEHbVc",
    authDomain: "gametheinfinity-f7622.firebaseapp.com",
    projectId: "gametheinfinity-f7622",
    storageBucket: "gametheinfinity-f7622.appspot.com",
    messagingSenderId: "770666816117",
    appId: "1:770666816117:web:a90b2e280ce7169c9a0e3c",
    measurementId: "G-B1LVPMH1D6"
  };

firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleProvider }


  
  