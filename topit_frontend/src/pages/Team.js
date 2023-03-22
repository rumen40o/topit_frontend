
import { Link } from "react-router-dom";
import Teams  from "../components/Teams";
import "./css/tasks.css";

const Team = () => {
  return (
    <div className="tasks">
      <div className="tasks--container">
        <Teams />

        <Link to="/addTask">
          <button className="tasks--button">+ Add Team</button>
        </Link>
      </div>
    </div>
  );
};

export default Team;