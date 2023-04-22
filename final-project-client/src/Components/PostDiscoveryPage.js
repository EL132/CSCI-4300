import { useEffect } from 'react';
import './PostDiscoveryPage.css'
import PostCard from './ui-components/PostCard';
import axios from 'axios'
import { useState } from 'react';

function PostDiscoveryPage () {
    const[isLoading, setIsLoading] = useState(false);
    const [data, setdata] = useState([]);
    const [error, setError] = useState('');
    const [search, setSearch] = useState([]);

    function find(x) {
        setIsLoading(true);
        axios.get('http://localhost:3000/api/posts/search', search)
        .then(res => {
            if (res.data.length > 0) {
                console.log(res.data);
                setdata(res.data);
                console.log(data);
                setIsLoading(false);
                console.log('sucess');
            }
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
            console.log('error');
            err.res.data.msg && setError(err.res.data.msg);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        setIsLoading(true);
        axios.get('http://localhost:3000/api/posts')
        .then(response => {
            if (response.data.length > 0) {
                console.log(response.data)
                setdata(response.data);
                console.log(data);
                setIsLoading(false);
            }
        })
        .catch(err => {
            console.log(err);
            err.response.data.msg && setError(err.response.data.msg);
        })
    }, []);
    
    if (isLoading) {
        return (
            <div>loading</div>
        );
    }

    if (error) {
        return (
            
            <div>{error}</div>
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