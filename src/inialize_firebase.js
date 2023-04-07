import { initializeApp } from "firebase/app";
import dotenv from "dotenv"
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASEAPIKEY,
  authDomain: process.env.FIREBASEAUTHDOMAIN,
  projectId: process.env.FIREBASEPROJECTID,
  storageBucket: process.env.FIREBASESTORAGEBUCKET,
  messagingSenderId: process.env.FIREBASEMESSAGINGSENDERID,
  appId: process.env.FIREBASEAPPID,
  measurementId: process.env.FIREBASEMEASUREMENTID
  };
  
function inializeFirebase() {
  initializeApp(firebaseConfig);
}

export {inializeFirebase};
