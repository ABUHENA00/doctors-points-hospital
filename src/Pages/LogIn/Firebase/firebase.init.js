
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const inititalizeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default inititalizeAuthentication;
