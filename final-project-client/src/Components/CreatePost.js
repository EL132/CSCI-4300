import './CreatePost.css';
import { useState } from 'react';
import axios from 'axios';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    //need to get current user
    const [author, setAuthor] = useState('Need to get current user');

    const submitHandler = (e) => {
        e.preventDefault();
        const post = {
            title: title,
            author: author,
            description: content,
            image: image
        }

        axios.post('http://localhost:3000/api/posts', post)
        .then(res => console.log(res.data));

        setTitle('');
        setContent('');
        setImage('');
        setAuthor('');
        window.location.href = '/viewPosts'
    }

    return (
        <div className='create'>
            <h2 className='h2'>Create New Post</h2>
            <form onSubmit={submitHandler}>
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
                <button className='button'>Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;

/*
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
        */