console.log("Register JS is running");

import { auth, db } from "./firebase-config.js";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", async () => {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
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
            role: "employee",
            createdAt: new Date()
        });

        alert("Registration Successful");

        window.location.href = "/pages/login.html";

    } catch (error) {
        alert(error.message);
    }
});