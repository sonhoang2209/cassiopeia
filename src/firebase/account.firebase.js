import { auth } from "./config.firebase";
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider
} from "firebase/auth";

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function logOut() {
    return signOut(auth)
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}


export function SignInWithGoogleFB() {
    const googleProvider = new GoogleAuthProvider()
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            // console.log(result);
            return result
        })
        .catch((err) => {
            console.log(err)
        });
}

export function SignInWithFacebookFB() {
    const facebookProvider = new FacebookAuthProvider()
    signInWithPopup(auth, facebookProvider)
        .then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // const user = result.user;
            console.log(token);
        })
        .catch((error) => {
            console.log( error);
        });
}