import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCa7px64sFrbL1UVGkvKQDUHYRbCZMWZvQ",
    authDomain: "fir-login-practice-30147.firebaseapp.com",
    projectId: "fir-login-practice-30147",
    storageBucket: "fir-login-practice-30147.appspot.com",
    messagingSenderId: "182166992751",
    appId: "1:182166992751:web:1111f06e5e2c595ea91a9a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
