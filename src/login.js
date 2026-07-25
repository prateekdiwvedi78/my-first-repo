/*function login() {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let emailError = document.getElementById("emailError");

    // Clear previous error
    emailError.innerHTML = "";

    // Email Pattern
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Empty Email
    if (email === "") {
        emailError.innerHTML = "Please enter your email.";
        return;
    }

    // Invalid Email
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        return;
    }

    // Empty Password
    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    // Login Check
    let savedEmail = localStorage.getItem("email");
let savedPassword = localStorage.getItem("password");

if(email===savedEmail && password===savedPassword){

        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";

    } else {

        alert("Invalid Email or Password");

    }
}*/
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("Login Successfully!");

        console.log(userCredential.user);

        window.location.href = "/home.html";

    } catch (error) {
        alert(error.message);
        console.error(error);
    }
});