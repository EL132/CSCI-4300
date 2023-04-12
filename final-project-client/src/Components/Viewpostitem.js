import './Viewpostitem.css'
function Viewpostitem(props) {
    return (
        <div class='div'>
            <h1>{props.title}</h1>
            <br></br>
            <p class='p'>{props.content}</p>
        </div>
    )

}

export default Viewpostitem;