// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase products that you want to use
import "body-parser";
import {tokenSignin} from "./tokensignin.js";
import {emailLogin, emailRegister} from "./email_login.js";
import pkg from 'compression';
import {createAssessment} from "./createRecaptchaAssessment.js";
import { evaluateScore } from "./evaluateRecaptchaScore.js";
const compression = pkg;

import express from "express";
import bodyParser from "body-parser";

import dotenv from "dotenv"
import { LoginTicket } from "google-auth-library";
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

// Block malicious traffic
app.get('/blocked', (req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.render('blocked');
});

app.post('/createRecaptchaAssessment', async (req,res) => {

    const token = req.body.recaptchaAssessment;
    console.log("recaptcha token: " + token);

  let score = await createAssessment({
    projectID: "jlaude-labs-dev",
    recaptchaKey: "6Lcgk2MpAAAAAMxdw1R_ys0iw_dTd3NOL_lDwyCY",
    token: token,
    recaptchaAction: "LOGIN",

  });

  console.log("Score: " + score);

  res.send({score: score});

  //evaluateScore(req, res, score);
    
});


// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

