import { initializeApp } from "firebase/app";
import { getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBeiA5CDHKbVNBAT-fRo9L4YwhuKkpM6qY",
    authDomain: "cassopeia-4d6fd.firebaseapp.com",
    projectId: "cassopeia-4d6fd",
    storageBucket: "cassopeia-4d6fd.appspot.com",
    messagingSenderId: "948602823539",
    appId: "1:948602823539:web:6682d2b19b8a3d8277db06",
    measurementId: "G-SPHJ40F5M2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);