// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmHxQNnTS5sbMekBuStOrYX-qVJwsB5Hw",
  authDomain: "paint-tracker.firebaseapp.com",
  projectId: "paint-tracker",
  storageBucket: "paint-tracker.appspot.com",
  messagingSenderId: "465719596640",
  appId: "1:465719596640:web:ac400bee240a5f2b1d5505",
  measurementId: "G-6DQRF1XWHM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);