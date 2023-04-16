import './Signup.css';

function Signin () {
    return (
        <div className="sign-in-body">
            <h1 className="sign-in-header">Sign up</h1>
            <div className="sign-in-username-container">
                <h2>Username</h2>
                <input type="text" className="sign-in-username-input" />
            </div>
            <div className="sign-in-password-container">
                <h2>Password</h2>
                <input type="password" className="sign-in-password-input" />
            </div>

            <button className="sign-in-button">Register!</button>
        </div>
    )
}

export default Signin;