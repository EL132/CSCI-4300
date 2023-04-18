import './Editpost.css'
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function Viewpost() {
    const location = useLocation();
    const data = location.state?.data;
    
    const [title, setTitle] = useState(data.title);
    const [content, setContent] = useState(data.content);
    const [image, setImage] = useState(data.image); 

    const updatePost = () => {
        // authenticate the user's input by making sure the input and textarea inputs aren't blank, and then update post
        const post = {
            title: title,
            description: content,
            image: image
        }

        axios.put(`http://localhost:3000/api/posts/${data.id}`, post)
        .then(res => console.log(res.data));

        //setTitle('');
        //setContent('');
        //setImage('');
        alert('Post updated!');
        window.location.href = '/';
        // for some reason it redirects to a non-existent page 
    }

    return (
        <div className='create'>
            <h2 className='h2'>Edit Post</h2>
            <form onSubmit={updatePost}>
                <label className='label'>Title: </label>
                <input
                className='input' 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label className='label'>Content: </label>
                <textarea 
                className='textarea' 
                required 
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                />
                <label className='label'>Image: </label>
                <input 
                className='input'
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                <button className='button'>Edit Post</button>
            </form>
        </div>
    )
}

export default Viewpost;

/*
<div class="edit-post-body">
            <h1 class="edit-post-header">
                <input type="text" placeholder={titlePlaceholder}></input>
            </h1>
            <br></br>
            <textarea class="edit-post-textarea" placeholder={contentPlaceholder}></textarea>
            <img class='jaguar' src={imagePlaceholder} alt={titlePlaceholder}></img>
            <button onClick={updatePost} class="edit-post-button">Save changes</button>
        </div>
*/