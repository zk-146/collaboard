// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAszYgaeVS7WgaaAoeaKvZzzUjeRdkhMzc",
  authDomain: "collaboard-30402.firebaseapp.com",
  projectId: "collaboard-30402",
  storageBucket: "collaboard-30402.appspot.com",
  messagingSenderId: "605923633511",
  appId: "1:605923633511:web:0599c243fd5dd3b8b627c2",
  measurementId: "G-B7PXX2L276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);