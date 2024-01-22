// Import the functions you need from the SDKs you need
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJW6kMPCsuYorFsOas-yT_DUJNNojjL0c",
  authDomain: "snuff-poetry.firebaseapp.com",
  projectId: "snuff-poetry",
  storageBucket: "snuff-poetry.appspot.com",
  messagingSenderId: "248904715103",
  appId: "1:248904715103:web:a580b4d90c110071e104ea",
  measurementId: "G-2XEVN9E1YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);