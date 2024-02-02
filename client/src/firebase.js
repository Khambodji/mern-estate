// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-eec46.firebaseapp.com",
  projectId: "mern-estate-eec46",
  storageBucket: "mern-estate-eec46.appspot.com",
  messagingSenderId: "193853903922",
  appId: "1:193853903922:web:6ab8cddc44beebef8b582b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);