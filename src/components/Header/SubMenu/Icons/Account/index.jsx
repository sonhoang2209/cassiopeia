import React,{useState} from 'react';
import {auth} from '../../../../../firebase/config.firebase'
import {onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { logOut} from '../../../../../firebase/account.firebase'


function Account(props) {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState();

    onAuthStateChanged(auth, user => setCurrentUser(user))
    const handleLogOut = async () => {
        try {
            await logOut()
        } catch( err ) {
            console.log('error: ', err);
        }
    }

    const AccountPopover = () => {
        
        return (
            <div className='account-thumbnail'>
                <img alt='' src={currentUser?.photoURL} />
                <div className='popover'>
                    <div className='popover-inner login'>
                        <span className='btn' onClick={() => navigate('/account')}>
                            Your Account
                        </span>
                        <span className='btn' onClick={handleLogOut}>
                            Log Out
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    const AccountMethod = () => {
        return (
            <div className='sign-in-sign-out'>
                <span className='' onClick={() => navigate('/login')}>
                    Log In
                </span>/
                <span className='' onClick={() => navigate('/signup')}>
                    Sign up
                </span>
            </div>
        )
    }

    return (
        
        <div className='account'>
            <div className='account-inner login'>
                {
                    currentUser !== null ? AccountPopover(): AccountMethod()
                }
            </div>
        </div>
    );
}

export default Account;