// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfvj8aildkBeklYu_z3h0Ap72d-i3o52s",
  authDomain: "erp-portal-d88f1.firebaseapp.com",
  projectId: "erp-portal-d88f1",
  storageBucket: "erp-portal-d88f1.firebasestorage.app",
  messagingSenderId: "627202545430",
  appId: "1:627202545430:web:f1148e4da356744a58e237"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inputs
const email = document.getElementById('Email').value;
const password = document.getElementById('password').value;
// submit button
const submit = document.getElementById('submit');
submit.addEventListener("click",function(event){
    event.preventDefault()
    alert (5)
})