import "./css/login.css";
import "./css/form.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import topit_logo from "C:/Users/User/Desktop/topit_diplomna/topit_frontend/src/topit_logo.svg";
import axios from "axios";

const Login = (props) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginInfo.email == null || loginInfo.password == null) {
      alert("Не валидни данни");
    } else {
      axios
        .post("http://localhost:8081/auth/login", {
          email: loginInfo.email,
          password: loginInfo.password,
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data);
        })
        .then(alert("Logged in"));
      console.log(localStorage);
      console.log(loginInfo);
      // navigate("/");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    console.log(localStorage);
    window.location.reload();
  };

  return (
    <div className="login">
      <img className="login--logo" src={topit_logo} alt="logo"></img>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="form-button">Log In</button>
      </form>
      <a login-switch>
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
