import { Link, useNavigate } from "react-router-dom";
import "./css/account.css";
import topit_logo from "../assets/topit_logo.svg";
import { useState } from "react";

const Account = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="account">
      <img
        className="login--logo"
        src={topit_logo}
        alt="logo"
        draggable="false"
      />
      <h1 className="account--welcome">WELCOME,</h1>
      <h2 className="account--name">Eeee Traqnkaa</h2>
      <Link to="/login">
        <button className="account--logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default Account;
