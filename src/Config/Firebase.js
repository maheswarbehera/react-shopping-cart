// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMYrSRUG4U0uTb3Z4wjvd824RFejwCJNM",
  authDomain: "react-auth-ac143.firebaseapp.com",
  projectId: "react-auth-ac143",
  storageBucket: "react-auth-ac143.appspot.com",
  messagingSenderId: "493258992989",
  appId: "1:493258992989:web:058f62914cc2ac72a20cb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
