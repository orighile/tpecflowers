import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlazH7xvjiucLlC7075N9a8SV6WgS2ODg",
  authDomain: "tpecflowers.firebaseapp.com",
  projectId: "tpecflowers",
  storageBucket: "tpecflowers.firebasestorage.app",
  messagingSenderId: "681634166894",
  appId: "1:681634166894:web:95cc74dc159101aeea4e7f",
  measurementId: "G-Q5Y08BF0W7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
