import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import "./css/register.css";


const Account = () => {

    const [data,setData]= useState([{
        firstname : "",
        lastname : "",
         email : "",
        password : ""
    }
    ]
    )

    console.log(data)

    const [unPassword, setUnPassword] = useState("")

    const handleClick = () => {
            data.password === unPassword ?
            axios.post('http://localhost:8080/auth/register',{
            firstname:data.firstname,
            lastname:data.lastname,
            email:data.email,
            password:data.password
           }).then(() => console.log('registration successfull'))
           :
           console.log("paroalta e ta6ak")
    }

    const handleChange = (event) => {
        const {id , value} = event.target

        if(id === 'confirmPassword') {
            if(value === unPassword) {
                setData(prevData => ({
                    ...prevData, password : value
                }))
            } else {
                console.log("passwords don't match")
            }
        }else if(id === "password"){ 
            setUnPassword(value)
        }else {
            setData(prevData => ({
                ...prevData, [id] : value
            }))
        }
    }


    return (
        <div id="container-signup">
            <h1>TopIT</h1>
            <div id="signup-div">
                <div id="input-div">
                    <input type="text" id="firstname" placeholder="First name" onChange={handleChange} autofocus/>
                    <input type="text" id="lastname" placeholder="Last name" onChange={handleChange}/>
                    <input type="email" id="email" placeholder="E-mail" onChange={handleChange}/>
                    <input type="password" id="password" placeholder="Password" onChange={handleChange}/>
                    <input type="password" id="confirmPassword" placeholder="Confirm password" onChange={handleChange}/>
                </div>
                <button id="login-button" tabindex="-1" onClick={handleClick}>Sign Up</button>
            </div>
            <Link to="/login"><a href="/login/login.html">I already have an account</a></Link>
        </div>
   );
  };
  
  export default Account;