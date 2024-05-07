
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// import {addDoc, collection} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0YZWXUKN3NOKab3WDSizS-ZV_IU1AP2I",
  authDomain: "virgil-1f70f.firebaseapp.com",
  projectId: "virgil-1f70f",
  storageBucket: "virgil-1f70f.appspot.com",
  messagingSenderId: "177379258400",
  appId: "1:177379258400:web:2763b486bbcf7db57acc45",
  measurementId: "G-1E073NMVRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);