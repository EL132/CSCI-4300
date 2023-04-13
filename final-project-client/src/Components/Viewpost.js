import Viewpostitem from "./Viewpostitem";
import './Viewpost.css'

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../globals";


function Viewpost(props) {
    const location = useLocation();
    const data = location.state?.data;
    // we are going to have to query db for the post with the id to get the src for the image; const src = location.state?.src;

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
                <div class="buttons">
                    <Link to='/editPost' state={{ data: post }} style={{ textDecoration: 'none', color: 'white' }}>
                        <button class="viewpost-button">Edit</button>
                    </Link>
                    <button onClick={promptUser} class="viewpost-button">Delete</button>
                </div>
                
                <Viewpostitem 
                    title={data.title}
                    content={data.content}
                />
                <img class='jaguar' src='https://cdn.britannica.com/20/77420-050-26F48228/Jaguar.jpg' alt='jaguar'></img>
            </div>
        )
    } else {
        return (
            <div>
                <Viewpostitem 
                title={data.title}
                content={data.content}
                />
                <img class='jaguar' src='https://cdn.britannica.com/20/77420-050-26F48228/Jaguar.jpg' alt='jaguar'></img>
            </div>
        )
    }
}

export default Viewpost;