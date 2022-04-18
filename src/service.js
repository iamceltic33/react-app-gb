// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALw0KwUM_GbLDfnYdFT_2CNxQ3tIZoGeQ",
    authDomain: "react-gb-9bcf7.firebaseapp.com",
    databaseURL: "https://react-gb-9bcf7-default-rtdb.firebaseio.com",
    projectId: "react-gb-9bcf7",
    storageBucket: "react-gb-9bcf7.appspot.com",
    messagingSenderId: "295510598351",
    appId: "1:295510598351:web:e2c47e58d101f87e334dba"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();


export { auth }