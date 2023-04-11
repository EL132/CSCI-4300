import Viewpostitem from "./Viewpostitem";


//use state and or context to keep track of current post and function
// to chagne it on click on view posts so the viewpost page can render 
// data correctly

//passed state data array as prop
function Viewpost(props) {
    return (
        <div>
            <Viewpostitem 
            title='title'
            content='content'
            />
        </div>
    )
}

export default Viewpost;