
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import firebase from "firebase/app"
// import "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjswRMNFN95LkzGhZzgwPIqeK_601XLL8",
  authDomain: "pagfi-3feb5.firebaseapp.com",
  projectId: "pagfi-3feb5",
  storageBucket: "pagfi-3feb5.appspot.com",
  messagingSenderId: "907562486224",
  appId: "1:907562486224:web:46fe0b47c20431762891d5"
};
// Initialize Firebase
firebasse = firebase.initializeApp(firebaseConfig)

const database = firebasse.firestore()

export default database