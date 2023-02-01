import './css/login.css';
import { Link } from "react-router-dom";


const Login = () => {

    return (
        <div id="midDiv">
        <h1>TopIT</h1>
        <div id="loginDiv">
            <h2>Log In</h2>
            <div>
                <label for="emailInput">E-Mail</label>
                <input type="email" id="emailInput" autofocus/>
            </div>
            <div>
                <label for="passwordInput">Password</label>
                <input type="password" id="passwordInput"/>
            </div>
            <button id="loginButton" tabindex="-1" onclick="Login()">Log In</button>
        </div>
        <Link to="/register"><a href="/register/register.html">I don't have an account</a></Link>
    </div>
    );
  };
  
  export default Login;