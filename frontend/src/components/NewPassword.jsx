import React,{ useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function NewPassword() {
    const navigate = useNavigate()
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('');

    const changeOtp=(e)=>{
        setOtp(e.target.value);
    }

    const changePassword=(e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(otp,password);
        axios.post('http://localhost:5000/submit-otp',{
            otp : otp,
            password : password
        })
        .then((result)=>{
            console.log(result.data);
            if (result.data.code===200) {
                navigate('/signup')
                alert("Password is Updated")
            }
            else{
                alert("Invalid OTP");
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <>
    <h1>New Password</h1>
    <label htmlFor="otp">OTP</label>
    <input type="text" name='OTP' id='otp' value={otp} onChange={changeOtp}/> <br />
    <label htmlFor="new-password">New Password</label>
    <input type="password" name='New Password' id='new-password' value={password} onChange={changePassword} />
    <button onClick={handleSubmit}>Change Password</button>
    </>
  )
}

export default NewPassword