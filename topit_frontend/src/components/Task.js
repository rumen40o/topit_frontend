import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../pages/css/tasks.css";

const Tasks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/task/admin/all")
      .then((res) => {
        console.log("Getting from ::::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteTask = (id, e) => {
    axios
      .delete(`http://localhost:8081/task/admin/delete/${id}`)
      .then(() => console.log("function successfull"))
      .then(window.location.reload());
  };
  return (
    <table className="tasks--table">
      <tr className="tasks--headers">
        <th className="task--name">Task Name</th>
        <th>View</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {data.map((data, index) => (
        <tr>
          <td>{data.nameTask}</td>
          <td>
            <Link to={`/viewTask/${data.id}`}>
              <p className="tasks--link">View</p>
            </Link>
          </td>
          <td>
            <Link to={`/updateTask/${data.id}`}>
              <p className="tasks--link">Edit</p>
            </Link>
          </td>
          <td>
            <button
              className="tasks--link"
              onClick={(e) => deleteTask(data.id, e)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Tasks;
