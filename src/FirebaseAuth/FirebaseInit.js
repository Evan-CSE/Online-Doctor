import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const FirebaseInit = ()=>{
    initializeApp(firebaseConfig);
}

export default FirebaseInit;