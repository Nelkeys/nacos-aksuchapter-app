import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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
        document.getElementById("login-loader").style.display = 'inline-block';
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user);

        sessionStorage.setItem("userSession", user)

        document.getElementById("verified-login").style.display = "block";
        document.getElementById("login-loader").style.display = 'none';


        setTimeout(()=> {
             // Redirect to the home page or dashboard
            window.location.href = "/home.html";
        }, 2000);

    
    } catch (error) {
        document.getElementById("login-loader").style.display = 'none';
        console.error("Login error:", error.message);

        console.log("Displaying login error message.");
        document.getElementById("wrongLogin").style.display = "block";

        document.getElementById("login").value = "Sign in";

        setTimeout(() => {
            document.getElementById("wrongLogin").style.display = "none";
        }, 3000);
    }
}


document.getElementById("verified-login").style.display = "none";

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