// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyC31wvpbhIFWeuUaIYzPPP9X3Jjx7jxCvI",
  authDomain: "blog-app-a7424.firebaseapp.com",
  projectId: "blog-app-a7424",
  storageBucket: "blog-app-a7424.firebasestorage.app",
  messagingSenderId: "711014098747",
  appId: "1:711014098747:web:f6bd30879bf4c482fcf91e",
  measurementId: "G-RDLR94BE32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
