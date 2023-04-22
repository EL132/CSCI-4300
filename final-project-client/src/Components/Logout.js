import { useContext } from 'react';
import UserContext from "../context/UserContext";


const Logout = () => {
    const userCtx = useContext(UserContext);

    const handleLogout = (e) => {
        e.preventDefault();

        userCtx.logout();

        window.location.href = '/';
    }

    return (
        <div>
            <h1>Logout</h1>
            <form onSubmit={handleLogout}>
                <button>Logout</button>
            </form>
        </div>
    )
}

export default Logout