import Home from './Home'
import Movies from './Movies'
import Contact from './Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div>
         <Routes>
           <Route path="/" element={<Home/>}> 
               
           </Route>
           <Route path="/movies" element={<Movies/>}>
                
           </Route>
           <Route path="/contact" element={<Contact/>}>
                
           </Route>
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
