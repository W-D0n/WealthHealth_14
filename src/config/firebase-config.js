import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApwo6eC_tVrrhjLyVKRGKqdGNbvwTYVGQ",
  authDomain: "p14hrnet.firebaseapp.com",
  databaseURL: "https://p14hrnet.firebaseio.com",
  projectId: "p14hrnet",
  storageBucket: "p14hrnet.appspot.com",
  messagingSenderId: "394632528371",
  appId: "1:394632528371:web:63a8d6855e1ee309649286",
  measurementId: "G-HYPQNTR9M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);