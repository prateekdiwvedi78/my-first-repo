// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaFyF-ic3EIQ21hX6pHE80J3zqPDaH8YU",
  authDomain: "first-app-55865.firebaseapp.com",
  projectId: "first-app-55865",
  storageBucket: "first-app-55865.firebasestorage.app",
  messagingSenderId: "496419826726",
  appId: "1:496419826726:web:8dc1df57f0447bea628ae7",
  measurementId: "G-BZJ8J0J97N"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);