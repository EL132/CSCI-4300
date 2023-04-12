import Viewpostitem from "./Viewpostitem";

import { useLocation } from "react-router-dom";





function Viewpost(props) {
const location = useLocation();
const data = location.state?.data;

    return (
        <div>
            <Viewpostitem 
            title={data.title}
            content={data.content}
            />
        </div>
    )
}

export default Viewpost;