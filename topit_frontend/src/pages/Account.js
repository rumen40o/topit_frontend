import { Link, useNavigate ,useParams} from "react-router-dom";
import "./css/account.css";
import topit_logo from "../assets/topit_logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const Account = (props) => {

  const [loginInfo, setLoginInfo] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const { id } = useParams();

  const loadEvent = async () => {
    const result = await axios.get(
      `http://localhost:8081/auth/find/${id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      }
    );
    setLoginInfo(result.data);
  };

useEffect(() => {
    loadEvent()
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
      
        <h2 className="account--name">{loginInfo.first_name}</h2>
  
      <Link to="/login">
        <button className="account--logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default Account;
