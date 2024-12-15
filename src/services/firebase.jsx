// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYVYhVs51IolkSFhKfMaXHDmCUjgRaUKc",
  authDomain: "app-coder-6745e.firebaseapp.com",
  projectId: "app-coder-6745e",
  storageBucket: "app-coder-6745e.firebasestorage.app",
  messagingSenderId: "964184743428",
  appId: "1:964184743428:web:5158e30798317a3aa99f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)