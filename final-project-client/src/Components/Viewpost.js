import Viewpostitem from "./Viewpostitem";
import './Viewpost.css'

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../globals";


function Viewpost(props) {
    const location = useLocation();
    const data = location.state?.data;

    if (isLoggedIn()) {
        const promptUser = () => {
            let answer = window.confirm('Are you sure you want to delete this post?');
            if (answer) {
                // delete post
                window.location.href = '/';
            }
        }
        const post = {
            title: data.title,
            content: data.content
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