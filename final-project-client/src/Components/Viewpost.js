import Viewpostitem from "./Viewpostitem";
import './Viewpost.css'

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { isLoggedIn } from "../globals";
import axios from "axios";
import UserContext from "../context/UserContext";



function Viewpost(props) {
    const location = useLocation();
    const data = location.state?.data;
    const userCtx = useContext(UserContext);

    function deleteHandler(id) {
        const del = 'http://localhost:3000/api/posts/' + id;
        axios.delete(del)
        .then(res => console.log(res.data));
    }

    if (isLoggedIn() && userCtx.username === data.author) {
        const promptUser = () => {
            let answer = window.confirm('Are you sure you want to delete this post?');
            if (answer) {
                deleteHandler(data.id);
                window.location.href = '/';
            }
        }
        const post = {
            title: data.title,
            content: data.content,
            id: data.id,
            image: data.image
        }

        return (
            <div>
                <div className="buttons">
                    <Link to='/editPost' state={{ data: post }} style={{ textDecoration: 'none', color: 'white' }}>
                        <button className="viewpost-button">Edit</button>
                    </Link>
                    <button onClick={promptUser} className="viewpost-button">Delete</button>
                </div>
                
                <Viewpostitem 
                    title={data.title}
                    content={data.content}
                    author={data.author}
                />
                <img className='jaguar' src={data.image} alt={data.title}></img>
            </div>
        )
    } else {
        return (
            <div>
                <Viewpostitem 
                title={data.title}
                content={data.content}
                author={data.author}
                />
                {
                    //dont know why the image is not loading, I used the same link that was hard coded -> https://cdn.britannica.com/20/77420-050-26F48228/Jaguar.jpg
                }
                <img className='jaguar' src={data.image} alt={data.title}></img>
            </div>
        )
    }
}
export default Viewpost;