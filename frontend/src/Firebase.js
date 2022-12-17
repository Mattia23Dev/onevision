// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, listAll } from "firebase/storage";
import { Firebase } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD4qX23Cy0HyYPGWygAZ5kHqWxr6dMTcxs",
    authDomain: "piattaforma-one-vision.firebaseapp.com",
    projectId: "piattaforma-one-vision",
    storageBucket: "piattaforma-one-vision.appspot.com",
    messagingSenderId: "264762798338",
    appId: "1:264762798338:web:64ad5082e01e6afa53521b",
    measurementId: "G-0B3C6EJL3C"
  };
const app = initializeApp(firebaseConfig);

//var admin = require("firebase-admin");
//var serviceAccount = require(GOOGLE_APPLICATION_CREDENTIALS);
//admin.initializeApp({
//  credential: admin.credential.cert(serviceAccount)
//});


const storage = getStorage(app);

// Create a reference under which you want to list

// Find all the prefixes and items.

// Initialize Firebase
const analytics = getAnalytics(app);

export {storage ,app , listAll as default};