// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD1op17gO0Hk5kei0Bn6eO5I3aBaM1Dqc",
  authDomain: "login-auth-177cf.firebaseapp.com",
  projectId: "login-auth-177cf",
  storageBucket: "login-auth-177cf.firebasestorage.app",
  messagingSenderId: "342217218594",
  appId: "1:342217218594:web:ad2ab8308629231705087b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Inputs
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

//submit button

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
