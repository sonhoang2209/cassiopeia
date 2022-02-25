import { auth } from "./config.firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

export function signUp (email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function logOut () {
    return signOut(auth)
}

export function login (email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function UserAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
        return unsub
    },[])
    return currentUser
}

const provider = new GoogleAuthProvider()

export function SignInWithGoogleFB() {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err)
        });
}