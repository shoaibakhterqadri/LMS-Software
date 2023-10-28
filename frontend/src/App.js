import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'; 
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';


function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/' element={<Home />}/>

    </Routes>
    </Router> 
   </>
  );
}

export default App;
