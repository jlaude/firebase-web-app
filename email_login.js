import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


function emailLogin(req,res) {

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

};

function emailRegister(req,res) {
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
}

export {emailLogin, emailRegister};