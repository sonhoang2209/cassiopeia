import React,{ useState, useEffect, createContext, useRef } from 'react';
import './login.scss'

import {signUp, UserAuth, logOut, login, SignInWithGoogleFB} from '../../firebase/account.firebase'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [loading, setLoading] = useState(false)
    const currentUser = UserAuth();

    const handleSignUp = async () => {
        setLoading(true)
        try {
            await signUp(emailRef.current.value , passwordRef.current.value)
        } catch( err ) {
            console.log('error: ', err);
        }
        setLoading(false)
    }

    const handleLogOut = async () => {
        setLoading(true)
        try {
            await logOut()
        } catch( err ) {
            console.log('error: ', err);
        }
        setLoading(false)
    }

    const handleLogIn = async () => {
        setLoading(true)
        try {
            await login(emailRef.current.value , passwordRef.current.value)
        } catch( err ) {
            console.log('error: ', err);
        }
        setLoading(false)
    }

    const hangldSignupWithGoogle = async() => {
        await SignInWithGoogleFB()
    }

    return (
        <div className='login'>
            
            <div className='login-inner'>
            <h4>
                Day la tai khoan da dang nhap: {currentUser?.email}
            </h4>
                <h2>Login</h2>
                <div className='form-control'>
                    <label>Username</label>
                    <input name='username' ref={emailRef} />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input name='password' type='password' ref={passwordRef} />
                </div>
                <button disabled={loading || currentUser} className='btn btn-primary' onClick={handleSignUp}>
                    Sign up
                </button>
                <button disabled={loading || !currentUser} className='btn btn-primary' onClick={handleLogOut}>
                    Log out
                </button>

                <button disabled={loading || currentUser} className='btn btn-primary' onClick={handleLogIn}>
                    Log in
                </button>
                <div className='form-control'>
                    <button className='btn btn-primary' onClick={hangldSignupWithGoogle}>
                        Log in with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;