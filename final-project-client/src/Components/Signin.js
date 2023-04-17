import './Signin.css';
import { Link } from 'react-router-dom';

import { isLoggedIn } from '../globals';
import { logOut } from '../globals';

function Signin () {
    if (isLoggedIn()) {
        return (
            <div className="sign-in-body">
                <h1>You are already logged in!</h1>
                <button onClick={logOut} className="sign-in-button">Logout</button>
            </div>
        )
    }

    return (
        <div className="sign-in-body">
            <h1 className="sign-in-header">Sign in</h1>
            <div className="sign-in-username-container">
                <h2>Username</h2>
                <input type="text" class="sign-in-username-input" />
            </div>
            <div class="sign-in-password-container">
                <h2>Password</h2>
                <input type="password" class="sign-in-password-input" />
            </div>

            <button class="sign-in-button">Submit</button>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>
                <button class="sign-in-button">Create Account</button>
            </Link>
        </div>
    )
}

export default Signin;