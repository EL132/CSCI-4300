import './PostCard.css'
import {Link} from 'react-router-dom';
import {useState} from 'react';

function PostCard (props) {
    // here we will use the props of author, title, and description 
    // we will use the author and title to display the title and author of the post in the postcard
    // we will use the description to pass it in as a prop for an individual event page component
const [post, setPost] = useState({
    title: 'Lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

    return (
        <div class="postcard-body">
            <div class="title">
                {props.title}
            </div>
            <div class="author">
                By: {props.author}
            </div>
            <Link to='/viewpost' state={{ data: post }} >Go TO</Link>
        </div>
    );
}

export default PostCard;