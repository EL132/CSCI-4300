import './CreatePost.css'

function CreatePost() {
    return (
        <div class="create-post-body">
            <div class="create-post-title">
                Title: 
                <input type="text" class="create-post-input"></input>
            </div>
            <div class="create-post-content">
                Content:
                <textarea class="text-area"></textarea>
            </div>
            <button class="create-post-button">Submit</button>
        </div>
    );
}

export default CreatePost;