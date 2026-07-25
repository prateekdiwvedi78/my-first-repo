/*  import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    // If all validations pass:
    try {

        await createUserWithEmailAndPassword(auth, email, password);

        alert("Account Created Successfully!");

        window.location.href = "login.html";

    } catch (error) {

        alert(error.message);

    }

});           */
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const dob = document.getElementById("dob").value;

    const gender = document.querySelector('input[name="gender"]:checked');

  /*  const country = document.getElementById("country").value;*/

    const skills = [];

    document.querySelectorAll(".skills input:checked").forEach((box) => {
        skills.push(box.value);
    });
console.log("Password:", password);
console.log("Confirm Password:", confirmPassword);
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            dob: dob,
            gender: gender,
            country: country,
            skills: skills
        });

        alert("Account Created Successfully!");

        window.location.href = "/index.html";

    } catch (error) {

        alert(error.message);
        console.error(error);
    }
});