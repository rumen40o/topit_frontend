import './css/login.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


const Login = (props) => {

    const [loginInfo, setLoginInfo] = useState([{
        email:"",
        password:"",

    }])

    const handleChange = (event) => {
        console.log('boobs')
        const { id, value } = event.target
        setLoginInfo(prevLoginInfo => ({
            ...prevLoginInfo, [id] : value
        })) 
        
    }
    const handleClick = () =>{
        console.log("pishki")
        let params;
        try {
            params = new URLSearchParams([['email', loginInfo.email],['password', loginInfo.password]])
        } catch {
        
        }
        axios.post("http://localhost:8080/auth/login", {params})
        .then((response) => props.setUser(response))
    
    }

   
    

    return (
        <div id="midDiv">
        <h1>TopIT</h1>
        <div id="loginDiv">
            <h2>Log In</h2>
            <div>
                <label for="emailInput">E-Mail</label>
                <input type="email" id="email" onChange={handleChange} value = {loginInfo.email} autofocus/>
            </div>
            <div>
                <label for="passwordInput">Password</label>
                <input type="password" id="password" onChange = {handleChange} value = {loginInfo.password}/>
            </div>
            <button id="loginButton" tabindex="-1" onClick={handleClick}>Log In</button>
        </div>
        <Link to="/register"><a href="/register/register.html">I don't have an account</a></Link>
    </div>
    );
  };
  
  export default Login;