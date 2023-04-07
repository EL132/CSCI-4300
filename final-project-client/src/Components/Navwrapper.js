import Nav from "./Nav";
import './Navwrapper';

function Navwrapper(props) {
    return (
        <div>
            <Nav />
            <main className='main'>
                {props.children}
            </main>
        </div>
    );
}

export default Navwrapper;