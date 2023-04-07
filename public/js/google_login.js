
import { GoogleAuthProvider, signInWithCredential, getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js'

function handleCredentialResponse(response) {

  // Build Firebase credential with the Google ID token.

  const idToken = response.credential;
  const credential = GoogleAuthProvider.credential(idToken);

  console.log("credential", credential);

  // Sign in with credential from the Google user.
  const auth = getAuth();

  console.log(auth.currentUser);

  signInWithCredential(auth, credential).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The credential that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("uid", user.uid);
      const email = user.email;
      console.log("email", email);

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/tokensignin');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function () {
        console.log('Signed in as: ' + xhr.responseText);
      };
      xhr.send('idtoken=' + idToken);

      window.location = "profile";

      // ...
    } else {
      // User is signed out
      // ...
    }
  });

}

window.onload = function () {

  google.accounts.id.initialize({
    client_id: "302884190983-t3b8rj7q5qqvvtecm564a8om3ak7j11m.apps.googleusercontent.com",
    callback: handleCredentialResponse

  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog

}