import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
    const [email,setEmail]=useState('');
   
    const navigate=useNavigate();
    const ChangeEmail=(e)=>{
        setEmail(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/send-otp',
        {email:email})
        .then((res)=>{
            if(res.data.code===200){
                navigate('/new-password');
            }
        })
        .catch((err)=>{
            console.error("The Axios is "+ err);
        })
    }

  return (
    <>
    <h1>Forget Password</h1>
    <label htmlFor="email">Email</label>
    <input type="email" name='email' value={email} onChange={ChangeEmail} id='email'/> <br />
    <button onClick={handleSubmit}>SEND OTP</button>
    </>
  )
}

export default ForgetPassword