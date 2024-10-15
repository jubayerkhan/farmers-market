// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqNaNrWLAF3JAoP6z6M21u35L-QxyOKek",
  authDomain: "farmers-market-7014c.firebaseapp.com",
  projectId: "farmers-market-7014c",
  storageBucket: "farmers-market-7014c.appspot.com",
  messagingSenderId: "784449209745",
  appId: "1:784449209745:web:40b0bf07817abd7bec8630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;