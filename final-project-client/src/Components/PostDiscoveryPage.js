import { useEffect } from 'react';
import './PostDiscoveryPage.css'
import PostCard from './ui-components/PostCard';
import axios from 'axios'
import { useState } from 'react';

function PostDiscoveryPage () {
    const[isLoading, setIsLoading] = useState(true);
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/posts')
        .then(response => {
            if (response.data.length > 0) {
                console.log(response.data)
                setdata(response.data);
                console.log(data);
                setIsLoading(false);
            }
        })
    }, []);

    if (isLoading) {
        return (
            <div>loading</div>
        );
    } 
    
    return (
        <div>
            <h1 class="discovery-page-header">What does the World Have to Say Today?</h1>
            <div class="posts">
                {
                data.map(data => {
                    return <PostCard title={data.title} author={data.author} content={data.description} image={data.image} id={data._id} />
                })}
            </div>
        </div>
    );
}

export default PostDiscoveryPage;