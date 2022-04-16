// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlaBb0mIanTbVat0JAyndkyKOHvuXJvyk",
  authDomain: "health-coach-4ffb0.firebaseapp.com",
  projectId: "health-coach-4ffb0",
  storageBucket: "health-coach-4ffb0.appspot.com",
  messagingSenderId: "670499219105",
  appId: "1:670499219105:web:8fedd65b7f31a624a072e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
