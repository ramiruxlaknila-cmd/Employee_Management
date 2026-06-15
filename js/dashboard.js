import { auth } from "./firebase-config.js";

import {
    onAuthStateChanged,
    signOut
} from "firebase/auth";

const logoutBtn =
document.getElementById("logoutBtn");

/* =====================================
   PROTECT DASHBOARD
===================================== */

onAuthStateChanged(auth, (user) => {

    if (!user) {

        window.location.href =
        "/pages/login.html";
    }

});

/* =====================================
   LOGOUT
===================================== */

logoutBtn.addEventListener(
    "click",
    async () => {

        try {

            await signOut(auth);

            // Redirect to HOME page after logout
            window.location.href =
            "/index.html";

        } catch (error) {

            console.error(error);
        }

    }
);