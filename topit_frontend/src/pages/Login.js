import "./css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import topit_logo from "C:/Users/User/Desktop/diplomna2/topit_frontend/src/topit_logo.svg";
import axios from "axios";

const Login = (props) => {
  const [loginInfo, setLoginInfo] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const navigate = useNavigate();

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
      .post("http://localhost:8081/auth/login", {
        email: loginInfo.email,
        password: loginInfo.password,
      })
      .then((response) => localStorage.setItem("token", response.data))
      .then((response) => console.log(localStorage))
      .then(console.log("Log in"));
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.clear();
    console.log(localStorage);
    window.location.reload();
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

      {localStorage.token && (
        <button onClick={() => handleLogout()}>Log out</button>
      )}
    </div>
  );
};

export default Login;
