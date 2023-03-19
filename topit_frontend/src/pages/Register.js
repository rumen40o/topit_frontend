import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import topit_logo from "C:/Users/rumen/OneDrive/Работен плот/diplomna1/topit_frontend/src/topit_logo.svg";
import "./css/register.css";
import "./css/form.css";

const Register = () => {
  const [data, setData] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  ]);

  console.log(data);

  const handleClick = () => {
     axios
          .post("http://localhost:8081/auth/register", {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
          })
          .then(() => console.log("registration successfull"))
  };

  const handleChange = (event) => {
    console.log("works");
    const { name, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
  };

  return (
    <div id="container-signup">
      <img className="login--logo" src={topit_logo} alt="logo"></img>
      <form className="form">
        <input
          className="form-input"
          type="text"
          name="firstname"
          placeholder="First name"
          onChange={handleChange}
          autofocus
        />
        <input
          className="form-input"
          type="text"
          name="lastname"
          placeholder="Last name"
          onChange={handleChange}
        />
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
        <button className="form-button" onClick={handleClick}>
          Sign Up
        </button>
      </form>
      <a className="login-switch">
        <Link to="/login">
          <a className="login-switch">I already have an account</a>
        </Link>
      </a>
    </div>
  );
};

export default Register;
