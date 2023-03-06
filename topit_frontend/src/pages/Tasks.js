import { Link } from "react-router-dom";
import Task from "../components/Task";
import "./css/tasks.css";

const Tasks = () => {
  return (
    <div className="tasks">
      <div className="tasks--container">
        <Task />

        <Link to="/addTask">
          <button className="tasks--button">+ Add Task</button>
        </Link>
      </div>
    </div>
  );
};

export default Tasks;
