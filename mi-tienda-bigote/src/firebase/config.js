import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZaigdLW7jf98yzXwUwxMwGx9hBMJZvKA",
    authDomain: "tienda-de-los-bigotes.firebaseapp.com",
    projectId: "tienda-de-los-bigotes",
    storageBucket: "tienda-de-los-bigotes.appspot.com",
    messagingSenderId: "103561136671",
    appId: "1:103561136671:web:6301d7a1e14630a0f3232a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);