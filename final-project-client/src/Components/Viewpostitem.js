import './Viewpostitem.css'
function Viewpostitem(props) {
    return (
        <div className='div'>
            <h1>{props.title}</h1>
            <br></br>
            <p className='p'>{props.content}</p>
        </div>
    )

}

export default Viewpostitem;