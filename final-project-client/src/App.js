
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Signin from './Components/Signin';
import Homepage from './Components/Homepage';
import Navwrapper from './Components/ui-components/Navwrapper';
import Viewpost from './Components/Viewpost';

function App() {
  return (
    
    <Navwrapper>
      <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/viewpost' element={<Viewpost/>}/>
      </Routes>
    </Navwrapper>
    
    
  );
}

export default App;