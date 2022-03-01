import React,{ useState, useRef } from 'react';
import './login.scss'
import {signUp,
    // logOut,
    login, SignInWithGoogleFB, SignInWithFacebookFB} from '../../firebase/account.firebase'
import {auth} from '../../firebase/config.firebase'
import {onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login(props) {
    const emailRef = useRef()
    const navigate = useNavigate()
    const passwordRef = useRef()
    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState();
    
    useEffect(()=> {
        onAuthStateChanged(auth, user => setCurrentUser(user))
    },[])

    useEffect(()=> {
        currentUser && navigate('/')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentUser])

    
    const handleSignUp = async () => {
        setLoading(true)
        try {
            await signUp(emailRef.current.value , passwordRef.current.value)
            navigate('/login')
        } catch( err ) {
            console.log('error: ', err);
        }
        setLoading(false)
    }

    // const handleLogOut = async () => {
    //     setLoading(true)
    //     try {
    //         await logOut()
    //     } catch( err ) {
    //         console.log('error: ', err);
    //     }
    //     setLoading(false)
    // }

    const handleLogIn = async () => {
        setLoading(true)
        try {
            await login(emailRef.current.value , passwordRef.current.value)
            navigate('/')
        } catch( err ) {
            console.log('error: ', err);
        }
        setLoading(false)
    }

    const hangledSignupWithGoogle = async() => {
        try {
            await SignInWithGoogleFB() 
        } catch( err ) {
            console.log('error: ', err);
        }
        
    }

    const hangledSignupWithFacebook = async() => {
        
        try {
            await SignInWithFacebookFB()
        } catch( err ) {
            console.log('error: ', err);
        }
    }

    return (
        <div className='login'>
            <div className='login-inner'>
                <h2>{props?.signup ? 'Sign Up' : 'Log In'}</h2>
                <div className='form-control'>
                    <label>Username</label>
                    <input name='username' ref={emailRef} />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input name='password' type='password' ref={passwordRef} />
                </div>
                <div className='form-control group-btn'>
                    {props?.signup ? (
                        <button disabled={loading || currentUser} className='btn btn-primary' onClick={handleSignUp}>
                            Sign up
                        </button>
                    ) : (
                        <button disabled={loading || currentUser} className='btn btn-primary' onClick={handleLogIn}>
                            Log in
                        </button>
                    )}
                    {/* <button disabled={loading || !currentUser} className='btn btn-primary' onClick={handleLogOut}>
                        Log out
                    </button> */}
                </div>
                <hr />
                <div className='form-control group-btn'>
                    <button className='btn btn-primary' onClick={hangledSignupWithGoogle}>
                        Log in with GG
                    </button>
                    <button className='btn btn-primary' onClick={hangledSignupWithFacebook}>
                        Log in with FB
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;