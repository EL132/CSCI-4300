import './PostCard.css'

function PostCard (props) {
    // here we will use the props of author, title, and description 
    // we will use the author and title to display the title and author of the post in the postcard
    // we will use the description to pass it in as a prop for an individual event page component

    return (
        <div class="postcard-body">
            <div class="title">
                {props.title}
            </div>
            <div class="author">
                By: {props.author}
            </div>
        </div>
    );
}

export default PostCard;