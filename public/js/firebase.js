import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import {config} from "./config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: config.FIREBASEAPIKEY,
  authDomain: config.FIREBASEAUTHDOMAIN,
  projectId: config.FIREBASEPROJECTID,
  storageBucket: config.FIREBASESTORAGEBUCKET,
  messagingSenderId: config.FIREBASEMESSAGINGSENDERID,
  appId: config.FIREBASEAPPID,
  measurementId: config.FIREBASEMEASUREMENTID
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);