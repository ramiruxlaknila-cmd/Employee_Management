console.log("Login JS is running");

import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");
const loader =
document.getElementById("loader");

loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        loader.style.display = "flex";

await signInWithEmailAndPassword(
    auth,
    email,
    password
);

setTimeout(() => {

    window.location.href =
    "/pages/dashboard.html";

}, 1500);

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        message.textContent = "Login Successful ✓";
        message.className = "message success";

        setTimeout(() => {

            window.location.href =
            "/pages/dashboard.html";

        }, 1500);

    } catch (error) {

    if(error.code === "auth/invalid-credential"){

        message.textContent =
        "Invalid email or password";
        loader.style.display = "none";

    }
    else if(error.code === "auth/user-not-found"){

        message.textContent =
        "Account not found";

    }
    else{

        message.textContent =
        "Login failed. Please try again.";

    }

    message.className =
    "message error";
}});