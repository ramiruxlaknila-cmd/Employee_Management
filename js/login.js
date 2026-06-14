console.log("Login JS is running");

import { auth } from "./firebase-config.js";

import { signInWithEmailAndPassword } from "firebase/auth";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);

        alert("Login Successful");

        window.location.href = "/pages/dashboard.html";

    } catch (error) {
        alert(error.message);
    }
});