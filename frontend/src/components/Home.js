import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Home() {
  const navigate=useNavigate();

  useEffect(()=>{
    const token=localStorage.getItem("TOKEN");
    if(!token){
       navigate('/signin');
       
    }
  },[]);

  const logout=()=>{
    localStorage.clear();
    navigate('/signin')
  }
  return (
    <>
    <div>Home</div>
    <h1>Email is {localStorage.getItem('EMAIL')}</h1>
    <button onClick={logout}>Logout</button>
    </>
  )
}

export default Home