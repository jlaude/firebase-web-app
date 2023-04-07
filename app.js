// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import "body-parser";
import {tokenSignin} from "./tokensignin.js";
import {emailLogin, emailRegister} from "./email_login.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWluCW71rZF56veVt-uz3j9rUH0yZorxU",
  authDomain: "jlaude-labs-dev.firebaseapp.com",
  projectId: "jlaude-labs-dev",
  storageBucket: "jlaude-labs-dev.appspot.com",
  messagingSenderId: "302884190983",
  appId: "1:302884190983:web:97023b3d94d216bd2263a2",
  measurementId: "G-86B7N73E0Z"
};

initializeApp(firebaseConfig);


import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.set('view engine', 'ejs');


// Set up middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Set up routes
app.get('/', (req, res) => {
  res.render('index');

});

// Handle user login
app.get('/login', (req, res) => {
  res.render('login', { message: 'Login to app' });
});

app.post('/login', (req, res) => {
  emailLogin(req,res);
});

// Handle user registration with email
app.get('/register', (req, res) => {
  res.render('register', { message: 'User registration page' });
});

app.post('/register', (req, res) => {
  emailRegister(req,res);
});

// Handle user logout
app.get('/logout', (req, res) => {
  res.render('logout')
});

// Render user profile page
app.get('/profile', (req, res) => {
  res.render('profile');
});

app.post('/tokensignin', (req, res, next) => {
    tokenSignin(req,res);
});

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

