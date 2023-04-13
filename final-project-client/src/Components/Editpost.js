import './Editpost.css'
import { useLocation } from "react-router-dom";

function Viewpost() {
    const location = useLocation();
    const data = location.state?.data;

    const titlePlaceholder = data.title;
    const contentPlaceholder = data.content;

    const updatePost = () => {
        // authenticate the user's input by making sure the input and textarea inputs aren't blank, and then update post
        alert('Post updated!');
        window.location.href = '/';
    }

    return (
        <div class="edit-post-body">
            <h1 class="edit-post-header">
                <input type="text" placeholder={titlePlaceholder}></input>
            </h1>
            <br></br>
            <textarea class="edit-post-textarea" placeholder={contentPlaceholder}></textarea>
            <img class='jaguar' src='https://cdn.britannica.com/20/77420-050-26F48228/Jaguar.jpg' alt='jaguar'></img>
            <button onClick={updatePost} class="edit-post-button">Save changes</button>
        </div>
    )
}

export default Viewpost;