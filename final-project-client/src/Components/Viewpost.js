import Viewpostitem from "./Viewpostitem";
import './Viewpost.css'

import { useLocation } from "react-router-dom";


function Viewpost(props) {
    const location = useLocation();
    const data = location.state?.data;
    // we are going to have to query db for the post with the id
    // to get the src for the image

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

export default Viewpost;