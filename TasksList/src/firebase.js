
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUTnxxwWo4EkZXXdI0_k68lNG7KAXikCw",
  authDomain: "taskslist-bd412.firebaseapp.com",
  projectId: "taskslist-bd412",
  storageBucket: "taskslist-bd412.appspot.com",
  messagingSenderId: "1037199124186",
  appId: "1:1037199124186:web:2c8d392c6684200b3b27e3",
  measurementId: "G-0S4P8P2DB1"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };