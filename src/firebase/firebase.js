import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyALSO4DFm244BO_62BLMOdL3kZlQSq333c",
    authDomain: "seulskinlab-d97e9.firebaseapp.com",
    projectId: "seulskinlab-d97e9",
    storageBucket: "seulskinlab-d97e9.appspot.com",
    messagingSenderId: "740121660112",
    appId: "1:740121660112:web:7b52fac3cccc45a048ecd5",
    measurementId: "G-KP3CSVJQYG"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };