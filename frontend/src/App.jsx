import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'; 
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import ForgetPassword from './components/ForgetPassword';
import NewPassword from './components/NewPassword';


function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/forget-password' element={<ForgetPassword />}/>
      <Route path='/new-password' element={<NewPassword />}/>


    </Routes>
    </Router> 
   </>
  );
}

export default App;
