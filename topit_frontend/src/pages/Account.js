import { Link, useNavigate, useParams } from "react-router-dom";
import "./css/account.css";
import topit_logo from "../assets/topit_logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../Contexts/userContext";

const Account = (props) => {
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    navigate("/login");
  }

  const { currentUser } = useAuth();
  const email = currentUser.email;

  const [loginInfo, setLoginInfo] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const loadEvent = async () => {
    const result = await axios.get(`http://localhost:8081/auth/find/${email}`, {
      headers: {
        Authorization: "Bearer " + localStorage.token,
      },
    });
    setLoginInfo(result.data);
  };

  useEffect(() => {
    loadEvent();
  }, []);

  return (
    <div className="account">
      <img
        className="login--logo"
        src={topit_logo}
        alt="logo"
        draggable="false"
      />
      <h1 className="account--welcome">WELCOME,</h1>

      <h2 className="account--name">
        {localStorage.email}
      </h2>

      <Link to="/login">
        <button className="account--logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default Account;
