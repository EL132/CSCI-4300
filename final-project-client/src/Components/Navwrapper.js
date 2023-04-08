import Nav from "./Nav";

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