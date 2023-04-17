
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Signin from './Components/Signin';
import Homepage from './Components/Homepage';
import Navwrapper from './Components/ui-components/Navwrapper';
//import { BrowserRouter } from 'react-router-dom';
//import {Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    
    <Navwrapper>
      <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </Navwrapper>
    
    
  );
}

export default App;