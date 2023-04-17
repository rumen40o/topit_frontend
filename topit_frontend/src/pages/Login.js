import "./css/login.css";
import "./css/form.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import topit_logo from "../assets/topit_logo.svg";
import axios from "axios";
import { useAuth } from "../Contexts/userContext";

const Login = (props) => {
  const navigate = useNavigate();

  if (localStorage.getItem("token")) navigate("/account");

  const { currentUser, login } = useAuth();

  const [loginInfo, setLoginInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

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
      alert("Invalid data");
    } else {
      axios
        .post("http://localhost:8081/auth/login", {
          email: loginInfo.email,
          password: loginInfo.password,
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data);
          localStorage.setItem("email", loginInfo.email);
          login({ email: loginInfo.email });
          console.log(response);
        })
        .then(alert("Logged in"))
        .then(navigate("/"))
        .then(window.location.reload())
      console.log(localStorage);
      console.log("loginInfo: " + JSON.stringify(loginInfo));
    }
  };

  return (
    <div className="login">
      <img className="login--logo" src={topit_logo} alt="logo" />
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
    </div>
  );
};

export default Login;
