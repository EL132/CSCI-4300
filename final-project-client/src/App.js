
import './App.css';
import {Route, Routes} from 'react-router-dom';

import Navwrapper from './components/ui-components/Navwrapper';
import PostDiscoveryPage from './components/PostDiscoveryPage';
import CreatePost from './components/CreatePost';
import Homepage from './components/Homepage';
import Viewpost from './components/Viewpost';
import Editpost from './components/Editpost';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Logout from './components/Logout';



function App() {
  return (
    
    <Navwrapper>
      <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/viewPosts' element={<PostDiscoveryPage/>}/>
        <Route path='/viewpost' element={<Viewpost/>}/>
        <Route path='/createPost' element={<CreatePost/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/editPost' element={<Editpost/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </Navwrapper>
    
    
  );
}

export default App;