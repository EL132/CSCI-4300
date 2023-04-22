import { useRef, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import './Signup.css';

import UserContext from "../context/UserContext";
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../globals';

const LOGIN_URL = 'localhost:8080/login';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucess] = useState(false);

    const [error, setError] = useState('');

    const userCtx = useContext(UserContext);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const loginUser = { user, pwd };
            const loginuser = {
                username: user,
                password: pwd,
            }
            const loginRes = await axios.post("http://localhost:3000/api/users/login", loginuser);
            /*setUserData({
                token: loginRes.data.token,
                user: loginRes.data.username,
            });*/
            //localStorage.setItem("auth-token", loginRes.data.token);
            setSucess(true);

            userCtx.login(user);

            //Navigate('/');

        } catch (err) {
            console.log(err);
            err.response.data.msg && setError(err.response.data.msg);

        }

        // i have user, pwd as the username and password from the form
        // i need to send them to the server to check if that combination is valid
        // if it is, i need to set success to true
        // if it is not, i need to set the error message to the error message from the server
        // maybe able to use mongoose to see if the combination is valid or not?
        // if valid, change the global loggedIn state to true
        // get request needed

        return user;
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p  className={error ? "errmsg" : "offscreen"} >{error}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>Sign Up</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login







// import './Signin.css';
// import { Link } from 'react-router-dom';

// import { isLoggedIn } from '../globals';
// import { logOut } from '../globals';

// function Signin () {
//     if (isLoggedIn()) {
//         return (
//             <div className="sign-in-body">
//                 <h1>You are already logged in!</h1>
//                 <button onClick={logOut} className="sign-in-button">Logout</button>
//             </div>
//         )
//     }

//     return (
//         <div className="sign-in-body">
//             <h1 className="sign-in-header">Sign in</h1>
//             <div className="sign-in-username-container">
//                 <h2>Username</h2>
//                 <input type="text" class="sign-in-username-input" />
//             </div>
//             <div class="sign-in-password-container">
//                 <h2>Password</h2>
//                 <input type="password" class="sign-in-password-input" />
//             </div>

//             <button class="sign-in-button">Submit</button>
//             <Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>
//                 <button class="sign-in-button">Create Account</button>
//             </Link>
//         </div>
//     )
// }

// export default Signin;