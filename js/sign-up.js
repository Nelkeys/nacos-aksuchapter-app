import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getDatabase,
    set,
    ref
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification
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





let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let regNumber = document.getElementById("reg_number");
let Email = document.getElementById("email");
let Password = document.getElementById("password");
let signUpForm = document.getElementById("signUpForm");



let RegisterUser = evt => {
    evt.preventDefault();

    document.getElementById("login-loader").style.display = 'inline-block';

    createUserWithEmailAndPassword(auth, Email.value, Password.value)
    .then((userCredential) => {

        /*
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("Email verification link sent!");
            });
        */

        console.log(userCredential);
        set(ref(db,'userAuthList/' + userCredential.user.uid),{
            firstname : firstName.value,
            lastname : lastName.value,
            registrationNumber : regNumber.value
        })
        .then(() => {
            // Redirect to index.html after successful registration
            setTimeout(()=> {
                document.getElementById("login-loader").style.display = 'none';
                // Redirect to the home page or dashboard
                document.getElementById("verified-signup").style.display = "flex";

               setTimeout(() =>{
                    window.location.href = "/";
               }, 2000);
   
            }, 2000);
        })
        .catch((error) => {
            console.error("Error updating database:", error);
        });
    })
    .catch((error) => {
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    });
}






signUpForm.addEventListener('submit', RegisterUser);



