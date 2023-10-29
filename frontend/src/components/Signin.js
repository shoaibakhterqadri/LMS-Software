import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

function Signin() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const ChangeEmail=(e)=>{
        setEmail(e.target.value);
    }

    const ChangePassword=(e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`Email is ${email} and Password is ${password}`);
        axios.post('http://localhost:5000/signin',
        {email:email,password:password})
        .then((res)=>{

            if(res.data.code===500){
                alert("Invalid Email or password");
            }
            if(res.data.code===404){
                alert("Password Wrong");
            }
            if(res.data.code===200){
                navigate('/');
                localStorage.setItem("TOKEN",res.data.token);
                localStorage.setItem("EMAIL",res.data.email);
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }

  return (
    <>
    <h1>Sign In</h1>
    <form>
        <label htmlFor="email">Email: </label>
        <input type='text' name='email' id='email' value={email} onChange={ChangeEmail} /><br/>
        <label htmlFor="password">Password: </label>
        <input type='password' name='password' id='password' value={password} onChange={ChangePassword} /><br/>
        <button  onClick={handleSubmit}>Submit</button>
        <Link to={'/signup'}>Sign Up</Link>
        <Link to={'/forget-password'}>Forget Password</Link>

    </form>
    </>
  )
}

export default Signin