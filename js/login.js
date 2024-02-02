// Import the necessary functions from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxXiuhSIZ9xVwz1p8WkpNMMQd9ULrVCxk",
    authDomain: "nacos-aksu-app.firebaseapp.com",
    projectId: "nacos-aksu-app",
    storageBucket: "nacos-aksu-app.appspot.com",
    messagingSenderId: "114628984478",
    appId: "1:114628984478:web:48a820605c2cdc8a5ac58f",
    measurementId: "G-6FMGFNSZW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Auth instance
const auth = getAuth(app);

// Function to handle login
async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user);
        // You can redirect to another page or perform other actions after successful login

        window.location.href = "../home.html";
    } catch (error) {
        console.error("Login error:", error.message);
        // Handle login errors, e.g., display an error message to the user
    }
}

// Event listener for the login form
document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Call the loginUser function with the provided email and password
    loginUser(email, password);
});



function checkAuthentication() {
    const user = auth.currentUser;
    console.log('User:', user);
    console.log('Current Page:', window.location.pathname);

    if (!user && window.location.pathname !== '/index.html') {
        window.location.href = 'index.html';
    }
}

document.addEventListener('DOMContentLoaded', checkAuthentication);