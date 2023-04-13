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
            <div class="create-post-content">
                Add an image:
                <input class="create-post-input" type='file'></input>
            </div>
            <button class="create-post-button">Submit</button>
        </div>
    );
}

export default CreatePost;