import {Link} from 'react-router-dom';

import './Nav.css'

function Nav () {
     return (
         <header className='header'>
            <div className='logo'>logo</div>
            <nav>
                 <ul>
                     <li>
                         <Link to='/'>Homepage</Link>
                     </li>
                     <li>
                         <Link to='/signin'>Signin</Link>
                     </li>
                 </ul>
             </nav>
         </header>
         
             
             
         
     );
 }

 export default Nav;