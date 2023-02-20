// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-auth-firebase.firebaseapp.com",
  projectId: "admin-auth-firebase ",
  storageBucket: "admin-auth-firebase.appspot.com",
  messagingSenderId: "192470405799",
  appId: "1:192470405799:web:71104bf836a850e6160182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);