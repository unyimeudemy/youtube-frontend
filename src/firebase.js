// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4bObtL7-c7K0XEs41doJulWTzurFNqhk",
  authDomain: "clone-e4510.firebaseapp.com",
  projectId: "clone-e4510",
  storageBucket: "clone-e4510.appspot.com",
  messagingSenderId: "1055130521817",
  appId: "1:1055130521817:web:eb8b3395fd22afbf78aec8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
