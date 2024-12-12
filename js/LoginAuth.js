// Import the functions you need from the SDKs you need
// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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

// Initialize Auth
const auth = getAuth(app);

// Login functionality
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Logging In...");
      window.location.href = "Home-page.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// Password reset functionality
const resetPassword = document.getElementById("reset");
resetPassword.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter your email address to reset the password.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent. Check your inbox.");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
