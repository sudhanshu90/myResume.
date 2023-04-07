// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNaMCAw-kdxGkwX24F2fPybKgRMKKDfo4",
  authDomain: "myresume-9253e.firebaseapp.com",
  projectId: "myresume-9253e",
  storageBucket: "myresume-9253e.appspot.com",
  messagingSenderId: "400981213994",
  appId: "1:400981213994:web:40b56ce6c375dfdb4d5453",
  measurementId: "G-J7ML4MNKDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth