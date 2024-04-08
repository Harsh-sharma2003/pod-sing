// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlfv21tGXr6lmLvZhmIHtyGDbjwMihO9M",
  authDomain: "podcast-app-react-rec-1dd73.firebaseapp.com",
  projectId: "podcast-app-react-rec-1dd73",
  storageBucket: "podcast-app-react-rec-1dd73.appspot.com",
  messagingSenderId: "1014518372842",
  appId: "1:1014518372842:web:4d7b130d756fc8e314fa93",
  measurementId: "G-VRTEGKY3HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };