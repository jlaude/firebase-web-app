// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";

import { initializeApp } from "firebase/app";

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

const app = express();

app.set('view engine', 'ejs');
const port = 8080;

// Initialize the FirebaseUI Widget using Firebase.
//var ui = new firebaseui.auth.AuthUI(firebase.auth());


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
  const { email, password } = req.body;
  const authz = getAuth();
  signInWithEmailAndPassword(authz, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('User signed in:', user);
      res.redirect('/profile');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing in:', errorCode, errorMessage);
      res.render('login', { message: errorMessage });
    });
});

// Handle user registration with email
app.get('/register', (req, res) => {
  res.render('register', { message: 'User registration page' });
});

app.post('/register', (req, res) => {
  const { email, password, displayName } = req.body;
  const authz = getAuth();

  createUserWithEmailAndPassword(authz, email, password)
    .then(userCredential => {
      const user = userCredential.user;

      updateProfile(authz.currentUser, {
        displayName: displayName
      });
      console.log('User registered:', user);
      const message = 'Registration successful! Please log in.';

      res.redirect('/login');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error registering user:', errorCode, errorMessage);
      res.render('register', { message: errorMessage });
    });
});


// Handle user logout

app.get('/logout', (req, res) => {
  res.render('logout')
});

// Render user profile page
app.get('/profile', (req, res) => {

  res.render('profile');

});

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

