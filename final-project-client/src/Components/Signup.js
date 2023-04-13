import './Signup.css';

function Signin () {
    return (
        <div class="sign-in-body">
            <h1 class="sign-in-header">Sign up</h1>
            <div class="sign-in-username-container">
                <h2>Username</h2>
                <input type="text" class="sign-in-username-input" />
            </div>
            <div class="sign-in-password-container">
                <h2>Password</h2>
                <input type="password" class="sign-in-password-input" />
            </div>

            <button class="sign-in-button">Register!</button>
        </div>
    )
}

export default Signin;