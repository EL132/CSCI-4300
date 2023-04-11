import {Link} from 'react-router-dom';

import './Nav.css'

function Nav () {
    return (
        <nav class="nav-bar">
            <Link to='/'>
                <img class="logo" src='https://i.pinimg.com/564x/e6/38/21/e63821bc41308bbde13502542ad539e8.jpg' alt="Letter A logo"></img>    
            </Link>
            <div class="nav-bar-element">
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>View posts</Link>
            </div>
            <div class="nav-bar-element">
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/signin'>Sign in</Link>
            </div>
        </nav>
    );
}

export default Nav;