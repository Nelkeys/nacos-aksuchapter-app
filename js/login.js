import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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
const auth = getAuth(app);

// Function to check if the user is already authenticated
function checkAuthentication() {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            // User is authenticated, redirect to the home page or dashboard
            window.location.href = "/index.html";
        }
    });
}

// Function to handle login
async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user);

        // Set session data on the client side (using sessionStorage)
        sessionStorage.setItem('user_id', user.uid);
        sessionStorage.setItem('email', user.email);

        // Redirect to the home page or dashboard
        window.location.href = "/home.html";
    } catch (error) {
        console.error("Login error:", error.message);

        console.log("Displaying login error message.");
        document.getElementById("wrongLogin").style.display = "block";

        setTimeout(() => {
            document.getElementById("wrongLogin").style.display = "none";
        }, 3000);
    }
}

// Event listener for the login form
document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault();

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Call the loginUser function with the provided email and password
    console.log("Attempting to log in with:", email);
    loginUser(email, password);
});

// Call checkAuthentication on page load
checkAuthentication();