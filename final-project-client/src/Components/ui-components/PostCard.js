import './PostCard.css'
import {Link} from 'react-router-dom';
import {useState} from 'react';

function PostCard (props) {
    // here we will use the props of author, title, and description 
    // we will use the author and title to display the title and author of the post in the postcard
    // we will use the description to pass it in as a prop for an individual event page component
    const [post] = useState({
        title: props.title,
        content: props.content,
        image: props.image,
        id: props.id
    });

    return (
        <div>
            <Link to='/viewpost' state={{ data: post }} style={{ textDecoration: 'none', color: 'white' }}>
                <div class="postcard-body">
                    <div class="title">
                        {props.title}
                    </div>
                    <div class="author">
                        By: {props.author}
                    </div>                       
                </div>
            </Link>
        </div>
        
    );
}

export default PostCard;