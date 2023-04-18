import "./css/home.css";
import { Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import HomeCalendar from "../Calendar/HomeCalendar";
import topit_logo from "../assets/topit_logo.svg";
import account_icon from "../assets/icons8-male-user-64.png";

const Home = () => {
  return (
    <div className="home">
      <img className="logo" src={topit_logo} alt="logo"></img>
      <Link to="/login">
        <p className="account--logo">
          <img src={account_icon} />
        </p>
      </Link>
      <div className="calendar">
        <HomeCalendar />
      </div>
      <div className="home--buttons-container">
        <Link to="/task">
          <p className="home--button">Tasks</p>
        </Link>
        <Link to="/employee">
          <p className="home--button">Employees</p>
        </Link>
        <Link to="/teams">
          <p className="home--button">Teams</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
