import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
import { getDatabase, ref} from "firebase/database";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNTUYSRLGCxJx1pY31J6IoKOzzCq--aP4",
  authDomain: "myhomedel-e9588.firebaseapp.com",
  projectId: "myhomedel-e9588",
  storageBucket: "myhomedel-e9588.appspot.com",
  messagingSenderId: "374547844662",
  appId: "1:374547844662:web:a62f0d8ff36a35dfad9297",
  measurementId: "G-J0QEEPHXPR"
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