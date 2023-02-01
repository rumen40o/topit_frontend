import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react";


const Account = () => {

    let navigate= useNavigate()

    const [data,setData]= useState([{
        firstname : "",
        lastname : "",
         email : "",
        password : ""
    }
    ]
    )

    console.log(data)

    const handleClick = () => {
           axios.post('http://localhost:8080/auth/register',{
            firstname:data.firstname,
            lastname:data.lastname,
            email:data.email,
            password:data.password
           }).then(() => console.log('rumen'))
    }

    const handleChange = (event) => {
        const {id , value} = event.target

        setData(prevData => ({
            ...prevData, [id] : value
        }))
    }


    return (
        <div id="midDiv">
        <h1>TopIT</h1>
        <div id="signupDiv">
            <h2>Sign up</h2>
            <div>
                <label for="firstNameInput">First Name: </label>
                <input type="text" id="firstname" onChange={handleChange} autofocus/>
            </div>
            <div>
                <label for="lastNameInput">Last Name: </label>
                <input type="text" id="lastname" onChange={handleChange}/>
            </div>
            <div>
                <label for="emailInput">E-Mail: </label>
                <input type="email" id="email" onChange={handleChange}/>
            </div>
            <div>
                <label for="passwordInput">Password: </label>
                <input type="password" id="password" onChange={handleChange}/>
            </div>
            <button id="loginButton" tabindex="-1" onClick={handleClick}>Sign Up</button>
        </div>
       <Link to="/login"><a href="/login/login.html">I already have an account</a></Link>
    </div>



   );
  };
  
  export default Account;