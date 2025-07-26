// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSxgt4ro6BowqQ8Ly_fTojOSjUaQNk8d8",
  authDomain: "crimson-clover-kitchen.firebaseapp.com",
  projectId: "crimson-clover-kitchen",
  storageBucket: "crimson-clover-kitchen.firebasestorage.app",
  messagingSenderId: "833737823926",
  appId: "1:833737823926:web:8169b75e515b070c52f817",
  measurementId: "G-PMMJJM2R44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);