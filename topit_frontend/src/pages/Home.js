import "./css/home.css";
import { Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import HomeCalendar from "../Calendar/HomeCalendar";
import topit_logo from "../assets/topit_logo.svg";
import account_icon from "../assets/icons8-male-user-64.png";

const Home = () => {
  return (
    <div>
      <img className="logo" src={topit_logo} alt="logo"></img>
      <Link to="/login">
        <button className="account--logo">
          <img src={account_icon} />
        </button>
      </Link>
      <div className="calendar">
        <HomeCalendar />
      </div>
      <div className="buttons">
        <Link to="/task">
          <button className="Task--button">Tasks</button>
        </Link>
        <Link to="/employee">
          <button className="Task--button">Employees</button>
        </Link>
        <Link to="/teams">
          <button className="Task--button">Teams</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
