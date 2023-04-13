let loggedIn = true;
let user = 'eliaslind3'

export function isLoggedIn() {
    return loggedIn;
}

export function logIn(username) {
    loggedIn = true;
    user = username;
}

export function logOut() {
    loggedIn = false;
    user = '';
}

export default user;