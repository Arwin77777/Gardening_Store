import React, { useState } from 'react';
import './login.css'
import { login } from '../feature/user';
import { Link, Navigate, json } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import { useDispatch } from "react-redux";
  

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const dispatch=useDispatch();

  // const uname = localStorage.getItem("uname",);

  const validateEmail = (email) => {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    return pattern.test(email);
  }
  const navigate = useNavigate();

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    try{
      const responce=await axios.post("http://localhost:8181/api/v1/auth/authenticate",{email,password});
      navigate('/home');
      let token=responce.data.token;
      console.log(responce);
      let user=responce.data.userResponce;
      // dispatch(login(
      //   {name: user.data.name}
      // ))
      localStorage.setItem('token',token);
      localStorage.setItem('user',JSON.stringify(user));
    }
    catch(error){
      console.error("Error: " ,error);
      alert("Password is Incorrect");
    }
    setEmailError('');
  }
  
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary1">
            Login
          </button>
        </form>
        <p className="register-link1" id='reg-link'>
          <Link style={{color:'black'}} to="/signup">Create an Account</Link>
        </p>
        {/* <p className="register-link2">
          <Link style={{color:'black'}} to="/signup">Forgot Password?</Link>
        </p> */}
      </div>
    </div>
  );
}

export default Login;