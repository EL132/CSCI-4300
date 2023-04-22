import { createContext, useState } from 'react';

const UserContext = createContext({
    username: '',
    loggedin: false,
    login: (user) => {},
    logout: () => {},
});

export function UserContextProvider(props) {
    const [newusername, setNewUsername] = useState('');
    const [auth, setAuth] = useState(false);

    function loginHandler(user) {
        setNewUsername(user);
        setAuth(true);
    }

    function logoutHandler() {
        setNewUsername('');
        setAuth(false);
    }

    const context = {
        username: newusername,
        loggedin: auth,
        login: loginHandler,
        logout: logoutHandler,
    };

    return <UserContext.Provider value={context}>
        {props.children}
    </UserContext.Provider>
}

export default UserContext;