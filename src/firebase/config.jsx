import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = firebase.initializeApp( {
    apiKey: "AIzaSyDM9TTTPqWJQUos1hIFMKDAPS4BMdlOOb8",
    authDomain: "authtutorial-466ea.firebaseapp.com",
    projectId: "authtutorial-466ea",
    storageBucket: "authtutorial-466ea.appspot.com",
    messagingSenderId: "34402593485",
    appId: "1:34402593485:web:daa72de905c20f21f2d784",
    measurementId: "G-VMCLH7HLJH"
  });

     export const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default config;