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
    // also want to reload the page so that the nav bar updates
    window.location.reload();
}

export default user;