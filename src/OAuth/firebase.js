// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqlk-h7OPF3YFg-FCYCYaz5qzdHW8D8tg",
  authDomain: "netflix-app-9123f.firebaseapp.com",
  projectId: "netflix-app-9123f",
  storageBucket: "netflix-app-9123f.firebasestorage.app",
  messagingSenderId: "247190204896",
  appId: "1:247190204896:web:3b8e20cef8b0a37da6bb85",
  measurementId: "G-4GVM7R82FM"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//Authentication
export const auth = getAuth(app);

//Google Auth
export const provider = new GoogleAuthProvider();