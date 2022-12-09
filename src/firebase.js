import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDQ5z16WiQqAaqJugmeeyyZOGDfDbYZjJg",
    authDomain: "learning-in-public.firebaseapp.com",
    projectId: "learning-in-public",
    storageBucket: "learning-in-public.appspot.com",
    messagingSenderId: "306422992669",
    appId: "1:306422992669:web:62a8f8eee092647c7a1bf4",
    measurementId: "G-Q85HPYVN21"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};