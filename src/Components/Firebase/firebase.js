// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0JT-bdrCSmiqfQilv-2_rGXkuYQipT_s",
  authDomain: "simple-firebase2-1f2f4.firebaseapp.com",
  projectId: "simple-firebase2-1f2f4",
  storageBucket: "simple-firebase2-1f2f4.firebasestorage.app",
  messagingSenderId: "604482975609",
  appId: "1:604482975609:web:c844419e0ba103869f21a8",
  measurementId: "G-8LPZKRVT4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;