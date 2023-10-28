import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const ChangeEmail=(e)=>{
        setEmail(e.target.value);
    }

    const ChangePassword=(e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`Email is ${email} and Password is ${password}`);
        axios.post('http://localhost:5000/signup',
        {email:email,password:password})
        .then(()=>{
            console.log("Signed up successfully");
        })
        .catch((err)=>{
            console.error(err);
        })
    }

  return (
    <>
    <h1>Sign Up</h1>
    <form>
        <label htmlFor="email">Email: </label>
        <input type='text' name='email' id='email' value={email} onChange={ChangeEmail} /><br/>
        <label htmlFor="password">Password: </label>
        <input type='password' name='password' id='password' value={password} onChange={ChangePassword} /><br/>
        <button  onClick={handleSubmit}>Submit</button>
        <Link to={'/signin'}>Sign In</Link>
    </form>
    </>
  )
}

export default Signup