// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnRjfCqLmaUy_zmwUhHbIMdFPC1f7rQtA",
  authDomain: "queen-of-cards-auth-v2.firebaseapp.com",
  projectId: "queen-of-cards-auth-v2",
  storageBucket: "queen-of-cards-auth-v2.appspot.com",
  messagingSenderId: "241476014056",
  appId: "1:241476014056:web:3b883ff08bcba4925fde5d",
  measurementId: "G-JNE3R6VCRH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig);
const analytics = getAnalytics(app);
