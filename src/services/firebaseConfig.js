import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANBH1PJ5AqHCz2TWX56p5FhIe-33b4QLs",
  authDomain: "reactjs-tfi-quiroga.firebaseapp.com",
  projectId: "reactjs-tfi-quiroga",
  storageBucket: "reactjs-tfi-quiroga.firebasestorage.app",
  messagingSenderId: "798992700010",
  appId: "1:798992700010:web:16d3618d9b5fddc17f7013"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
export const db = getFirestore(app);