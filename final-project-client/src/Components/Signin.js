import './Signin.css'

function Signin () {
     return (
        //creates a form that a user can sign in with a username and a password
        <div class="container">
            <form class="form" id="login">
                <h1 class="form__title">Login</h1>
                <div class="form__message form__message--error"></div>
                <div class="form__input-group">
                    <input type="text" class="form__input" autofocus placeholder="Username" />
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="password" class="form__input" autofocus placeholder="Password" />
                    <div class="form__input-error-message"></div>
                </div>
                <button class="form__button" type="submit">Continue</button>
            </form>
            <form class="form" id="createAccount">
                <h1 class="form__title">Create Account</h1>
                <div class="form__message form__message--error"></div>
                <div class="form__input-group">
                    <input type="text" class="form__input" autofocus placeholder="Username" />
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="text" class="form__input" autofocus placeholder="Email Address" />
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="password" class="form__input" autofocus placeholder="Password" />
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="password" class="form__input" autofocus placeholder="Confirm Password" />
                    <div class="form__input-error-message"></div>
                </div>
                <button class="form__button" type="submit">Continue</button>
            </form>
        </div>
     )

     document.addEventListener("DOMContentLoaded", () => {
        const loginForm = document.querySelector(#login);
     });
 }

export default Signin;