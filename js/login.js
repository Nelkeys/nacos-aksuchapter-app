
// Import the necessary functions from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth,  onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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

// Check if the user is authenticated on page load
onAuthStateChanged(auth, (user) => {
    // Check if the user is on the login or home page
    const isLoginPage = window.location.pathname.includes("index.html");
    const isHomePage = window.location.pathname.includes("home.html");

    if (user) {
        // User is signed in
        if (isLoginPage) {
            
        }
    } else {
        // User is not signed in
        if (isHomePage) {
            // Redirect to login page only if not already on login page
            window.location.href = "../index.html";
        }
    }
});

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

        document.getElementById("wrongLogin").style.display = "block";

        setTimeout(() => {
            document.getElementById("wrongLogin").style.display = "none";
        }, 3000);
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