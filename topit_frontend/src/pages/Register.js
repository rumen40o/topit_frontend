import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import topit_logo from "C:/Users/User/Desktop/diplomna2/topit_frontend/src/topit_logo.svg";

import "./css/register.css";

const Account = () => {
  const [data, setData] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  ]);

  console.log(data);

  const [unPassword, setUnPassword] = useState("");

  const handleClick = () => {
    data.password === unPassword
      ? axios
          .post("http://localhost:8081/auth/register", {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
          })
          .then(() => console.log("registration successfull"))
      : console.log("paroalta e ta6ak");
  };

  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id === "confirmPassword") {
      if (value === unPassword) {
        setData((prevData) => ({
          ...prevData,
          password: value,
        }));
      } else {
        console.log("passwords don't match");
      }
    } else if (id === "password") {
      setUnPassword(value);
    } else {
      setData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  return (
    <div id="container-signup">
      <img className="login--logo" src={topit_logo} alt="logo"></img>
      <div id="signup-div">
        {/* <div id="input-div"> */}
        <input
          className="login-input"
          type="text"
          id="firstname"
          placeholder="First name"
          onChange={handleChange}
          autofocus
        />
        <input
          className="login-input"
          type="text"
          id="lastname"
          placeholder="Last name"
          onChange={handleChange}
        />
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
        <input
          className="login-input"
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          onChange={handleChange}
        />
        {/* </div> */}
        <button id="login-button" onClick={handleClick}>
          Sign Up
        </button>
      </div>
      <a className="login-switch">
        <Link to="/login">
          <a className="login-switch">I already have an account</a>
        </Link>
      </a>
    </div>
  );
};

export default Account;
