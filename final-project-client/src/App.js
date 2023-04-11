
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Signin from './components/Signin';
import Homepage from './components/Homepage';
import Navwrapper from './components/ui-components/Navwrapper';

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