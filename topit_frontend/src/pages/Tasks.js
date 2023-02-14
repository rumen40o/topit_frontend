import { Link } from "react-router-dom";
import Task from "../components/Task";

const Tasks = () => {
  return (
    <div>
      <Link to="/addTask">
        <button id="addTaskButton">AddTask</button>
      </Link>

      <Task />
    </div>
  );
};

export default Tasks;
