
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Signin from './components/Signin';
import Homepage from './components/Homepage';
import Navwrapper from './components/ui-components/Navwrapper';
import PostDiscoveryPage from './components/PostDiscoveryPage';
import Viewpost from './components/Viewpost';
import CreatePost from './components/CreatePost';



function App() {
  return (
    
    <Navwrapper>
      <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/viewPosts' element={<PostDiscoveryPage/>}/>
        <Route path='/viewpost' element={<Viewpost/>}/>
        <Route path='/createPost' element={<CreatePost/>}/>
      </Routes>
    </Navwrapper>
    
    
  );
}

export default App;