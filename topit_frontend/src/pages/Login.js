import "./css/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import topit_logo from "C:/Users/User/Desktop/diplomna/topit_frontend/topit_frontend/src/topit_logo.svg";

const Login = (props) => {
  const [loginInfo, setLoginInfo] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const handleChange = (event) => {
    console.log("boobs");
    const { id, value } = event.target;
    setLoginInfo((prevLoginInfo) => ({
      ...prevLoginInfo,
      [id]: value,
    }));
  };
  const handleClick = () => {
    axios
      .post("http://localhost:8080/auth/login", {
        email: loginInfo.email,
        password: loginInfo.password,
      })
      .then((response) => props.setUser(response));
  };

  return (
    <div className="login">
      <img className="login--logo" src={topit_logo} alt="logo"></img>
      <div className="login-div">
        {/* <div id="input-div"> */}
        <input
          className="login-input"
          type="email"
          id="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <input
          className="login-input"
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {/* </div> */}
        <button id="login-button" onClick={handleClick}>
          Log In
        </button>
      </div>
      <a className="login-switch">
        <Link to="/register">
          <a className="login-switch">I don't have an account</a>
        </Link>
      </a>
    </div>
  );
};

export default Login;
