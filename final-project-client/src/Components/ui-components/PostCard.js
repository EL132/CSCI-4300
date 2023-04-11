import './PostCard.css'

function PostCard (props) {
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