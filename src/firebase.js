import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
import { getDatabase, ref} from "firebase/database";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8OIIAsOK1wioWP4P6yPVPsgSP36VLS9o",
  authDomain: "myhomeddel.firebaseapp.com",
  projectId: "myhomeddel",
  storageBucket: "myhomeddel.appspot.com",
  messagingSenderId: "796518970216",
  appId: "1:796518970216:web:23c61c3b2653eaad03dcdd",
  measurementId: "G-3CYHFF5EL5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const databaseref = ref;
export const signInWithGoogle = ()=> {
  signInWithPopup(auth, provider)
  .then((result)=>{
    console.log(result)
  }).catch((error) => {
    console.log(error)
  }); 
};