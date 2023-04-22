import {Link} from 'react-router-dom';
import './Homepage.css'

function Homepage() {

    // I want to take the user to the createPost page if they click this button
    // only if the user is logged in, otherwise I want to take them to the signup page
    return (
        <div class="homepage-body">
            <div class="homepage-title">
                Absque
            </div>
            <div class="definition">
                Adjective: without, apart from, lacking borders
            </div>
            <div class="homepage-subtitle pink">
                A unique blog viewing experience
            </div>
            <div class="homepage-buttons">
                <Link style={{ textDecoration: 'none', color: '#cc2062' }} to='/viewPosts'>
                    <div class="btn-three">
                        <div>View other people's thoughts</div>
                    </div>
                </Link>
                <Link class="center" style={{ textDecoration: 'none', color: '#cc2062' }} to='/createPost'>
                    <div class="btn-three">
                        <div>Share your own</div>
                    </div>
                </Link>                
            </div>
        </div>
    );
}

export default Homepage;