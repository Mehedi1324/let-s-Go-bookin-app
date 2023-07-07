import firebaseAuthentication from './firebaseConfig';
import React, { useEffect, useRef, useState } from 'react';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  updateProfile,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
firebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const auth = getAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // onAuth state chage________________________

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  //   Google Signin _________________________________________

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleUser = result.user;
        setUser(googleUser);
      })
      .catch((err) => setError(err.message));
  };

  // Facebook Signin_________________________________________

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const facebookUser = result.user;
        setUser(facebookUser);
      })
      .catch((err) => setError(err.message));
  };

  // Sign up with email address  ______________________________________

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((result) => {
        const signedUpUser = result.user;
        signedUpUser.updateProfile({
          displayName: nameRef.target.value,
        });
        setError('');
        setUser(signedUpUser);
        emailVerification();
        alert('successfully registered');
      })
      .catch((error) => {
        setError(error.message);
      });
    e.target.reset();
  };

  // Login With email and password __________________________________________________

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((result) => {
        const signInInfo = result.user;
        setUser(signInInfo);
        console.log(user);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      });
    // e.target.reset();
  };

  // // //   Set Display name____________________________________________

  // const displayName = () => {
  //   updateProfile(auth.currentUser, {
  //     displayName: nameRef.current.value,
  //   })
  //     .then(() => {})
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

  // Verify Account  ________________________________________________________________

  const emailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert('check email to verify');
    });
  };

  // Log Out ______________________________________________________________

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Password Reset _________________________________________________

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, emailRef.current.value)
      .then(() => {
        setError('Please check your mail to reset the password');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    nameRef,
    emailRef,
    passwordRef,
    handleLogout,
    handleGoogleSignIn,
    handleFacebookSignIn,
    handleSignIn,
    handleSignUp,
    handleResetPassword,
  };
};

export default useFirebase;
