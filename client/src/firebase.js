// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "personalblog-7b682.firebaseapp.com",
  projectId: "personalblog-7b682",
  storageBucket: "personalblog-7b682.firebasestorage.app",
  messagingSenderId: "385310800922",
  appId: "1:385310800922:web:220ca24d2de601e2a6a5a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
