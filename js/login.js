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


// Function to handle login
async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user);

        // Set session data on the client side (using sessionStorage)
        sessionStorage.setItem('user_id', user.uid);
        sessionStorage.setItem('email', user.email);

        document.getElementById("login").value = "Login successful...";

        // Redirect to the home page or dashboard
        window.location.href = "/home.html";
    } catch (error) {
        console.error("Login error:", error.message);

        console.log("Displaying login error message.");
        document.getElementById("wrongLogin").style.display = "block";

        document.getElementById("login").value = "Sign in";

        setTimeout(() => {
            document.getElementById("wrongLogin").style.display = "none";
        }, 3000);
    }
}

// Event listener for the login form
document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("login").value = "Checking...";

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Call the loginUser function with the provided email and password
    console.log("Attempting to log in with:", email);
    loginUser(email, password);
});


// Add event listener for authentication state changes
onAuthStateChanged(auth, user => {
    if(user) {
        console.log("User is authenticated.");
    } else {
        console.log("User is not authenticated. Redirecting to login page");
        window.location.href = "../index.html";
    }
});



