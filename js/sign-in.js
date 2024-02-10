import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getDatabase,
    get,
    ref,
    child
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";



// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCxXiuhSIZ9xVwz1p8WkpNMMQd9ULrVCxk",
    authDomain: "nacos-aksu-app.firebaseapp.com",
    projectId: "nacos-aksu-app",
    storageBucket: "nacos-aksu-app.appspot.com",
    messagingSenderId: "114628984478",
    appId: "1:114628984478:web:48a820605c2cdc8a5ac58f",
    measurementId: "G-6FMGFNSZW7"
};
 

// Initialize variables
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
const dbref = ref(db); 


let Email = document.getElementById("email");
let Password = document.getElementById("password");
let signInForm = document.getElementById("signInForm");



let signInUser = evt => {
    evt.preventDefault();

    document.getElementById("login-loader").style.display = 'inline-block';

    signInWithEmailAndPassword(auth, Email.value, Password.value)
    .then((userCredential) => {

        document.getElementById("verified-login").style.display = "block";
        document.getElementById("login-loader").style.display = 'none';


        get(child(dbref, 'userAuthList/' + userCredential.user.uid)).then((snapshot) => {
            if(snapshot.exists()){
                const userData = snapshot.val(); 
                sessionStorage.setItem("user-info", JSON.stringify({
                    firstname: userData.firstname,
                    lastname: userData.lastname,
                    regnumber: userData.regnumber

                }))
                sessionStorage.setItem("user-creds", JSON.stringify(userCredential));
            }
        })

        setTimeout(()=> {
            // Redirect to the home page or dashboard
           window.location.href = "/home.html";

           setTimeout(() =>{
               document.getElementById("verified-login").style.display = "none";
           }, 2000);

       }, 2000);

    })
    .catch((error) => {
        document.getElementById("login-loader").style.display = 'none';
        console.error("Login error:", error.message);

        console.log("Displaying login error message.");
        document.getElementById("wrongLogin").style.display = "block";

        document.getElementById("login").value = "Sign in";

        setTimeout(() => {
            document.getElementById("wrongLogin").style.display = "none";
        }, 3000);
    });
}





signInForm.addEventListener('submit', signInUser);



