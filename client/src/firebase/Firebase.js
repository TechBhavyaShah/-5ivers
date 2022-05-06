import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
// import "firebase/auth";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

const firebaseApp = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export default firebaseApp;