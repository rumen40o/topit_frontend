import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import topit_logo from "C:/Users/rumen/OneDrive/Работен плот/diplomna1/topit_frontend/src/topit_logo.svg";
import "./css/register.css";
import "./css/form.css";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  ]);

  console.log(data);

  const handleClick = () => {
    if (
      data.first_name == null ||
      data.last_name == null ||
      data.email == null ||
      data.password == null
    ) {
      alert("Не валидни данни");
    } else {
      axios
        .post("http://localhost:8081/auth/register", {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          password: data.password,
        })
        .then(() => console.log("registration successfull"))
        .then(navigate("/login"))
        .then(alert("Signed in"));
    }
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
          name="first_name"
          placeholder="first_name"
          onChange={handleChange}
          autofocus
        />
        <input
          className="form-input"
          type="text"
          name="last_name"
          placeholder="last_name"
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
