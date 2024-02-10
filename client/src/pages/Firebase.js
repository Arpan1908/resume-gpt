// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEjaurUueq-8aIUU9mJ5ywF8gpCV0zaBc",
  authDomain: "resume-d5d97.firebaseapp.com",
  projectId: "resume-d5d97",
  storageBucket: "resume-d5d97.appspot.com",
  messagingSenderId: "798140682356",
  appId: "1:798140682356:web:f031d22553f85651638121",
  measurementId: "G-T4QW5WD0ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirebase = () =>{
    return app;
}

export const database = getAuth(app);
