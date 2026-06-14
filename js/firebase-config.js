import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjTMiaHzRpsRmULn-URU9CCfjrZddpIbM",
  authDomain: "ems-pro-7af9e.firebaseapp.com",
  projectId: "ems-pro-7af9e",
  storageBucket: "ems-pro-7af9e.firebasestorage.app",
  messagingSenderId: "613034060564",
  appId: "1:613034060564:web:614aa217c3f0c94777b001"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);