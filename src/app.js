// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase products that you want to use
import "body-parser";
import {tokenSignin} from "./tokensignin.js";
import {emailLogin, emailRegister} from "./email_login.js";
import pkg from 'compression';
import {createAssessment} from "./createRecaptchaAssessment.js";
const compression = pkg;

import express from "express";
import bodyParser from "body-parser";

import dotenv from "dotenv"
dotenv.config();

const app = express();
const port = 8080;

// Set up middleware
app.use(compression());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static('config'));

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
/*
app.post('/createRecaptchaAssessment', (req,res) => {
    console.log("recaptcha token" + req.body.recaptchaAssessment);
    //createAssessment(token=req.body.recaptchaAssessment);
    
}); 
*/

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

