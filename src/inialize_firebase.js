import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCWluCW71rZF56veVt-uz3j9rUH0yZorxU",
    authDomain: "jlaude-labs-dev.firebaseapp.com",
    projectId: "jlaude-labs-dev",
    storageBucket: "jlaude-labs-dev.appspot.com",
    messagingSenderId: "302884190983",
    appId: "1:302884190983:web:97023b3d94d216bd2263a2",
    measurementId: "G-86B7N73E0Z"
  };
  
function inializeFirebase() {
  initializeApp(firebaseConfig);
}

export {inializeFirebase};
