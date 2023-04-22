import { useEffect } from 'react';
import './PostDiscoveryPage.css'
import AdBar from './ui-components/AdBar';
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
        <div className="dsicovery-page-body">
            <div className="filter">
                <div className="filter-box">
                    <div className="filter-title">
                        Search:
                    </div>
                    <div className="filter-input">
                        <input 
                        type="text" 
                        placeholder="Search for a post"
                        onChange={(e) => {
                            const value1 = {
                                title: e.target.value
                            }
                            setSearch(value1);
                        }}
                        onKeyPress={e => {
                            if (e.key==='Enter') {
                                console.log('search!');
                                console.log(search);
                                find(search);
                            }
                        }}
                        ></input>
                    </div>
                </div>
                <div className="filter-box">
                    <div className="filter-title">
                        Genre:
                    </div>
                    <div className="filter-input">
                        <select>
                            <option value="all">All</option>
                            <option value="sports">Sports</option>
                            <option value="food">Food</option>
                            <option value="music">Music</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="posts">
                {
                    //need to change post model to say content instead of description
                }
                {
                data.map(data => {
                        return <PostCard title={data.title} author={data.author} content={data.description} image={data.image} id={data._id} />
                    })}
            
            
            </div>
            <AdBar/>
        </div>
    );
}

export default PostDiscoveryPage;