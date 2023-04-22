import {Link} from 'react-router-dom';

import './Nav.css'
import { isLoggedIn } from '../../globals';
import user from '../../globals';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';

function Nav () {
    // let style = ''
    console.log(user)

    const userCtx = useContext(UserContext);

    if (userCtx.loggedin) {
        // style = 'nav-bar logged-in'

        return (
            <nav class='nav-bar'>
                <div class="nav-bar-left-side">
                    <Link to='/'>
                        <img class="logo" src='https://i.pinimg.com/564x/e6/38/21/e63821bc41308bbde13502542ad539e8.jpg' alt="Letter A logo"></img>    
                    </Link>
                </div>
                <div class="nav-bar-right-side">
                    <div class="nav-bar-element">
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/createPost'>Create post</Link>
                    </div>
                    <div class="nav-bar-element">
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/viewPosts'>View posts</Link>
                    </div>
                    <div class="nav-bar-element">
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/signin'>Welcome, { userCtx.username }</Link>
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <nav class='nav-bar'>
                <div class="nav-bar-left-side">
                    <Link to='/'>
                        <img class="logo" src='https://i.pinimg.com/564x/e6/38/21/e63821bc41308bbde13502542ad539e8.jpg' alt="Letter A logo"></img>    
                    </Link>
                </div>
                <div class="nav-bar-right-side">
                    <div class="nav-bar-element">
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/viewPosts'>View posts</Link>
                    </div>
                    <div class="nav-bar-element">
                    <Link style={{ textDecoration: 'none', color: 'white' }} to='/signin'>Sign in</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;