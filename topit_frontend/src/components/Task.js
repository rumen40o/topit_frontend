import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Tasks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/task/admin/all")
      .then((res) => {
        console.log("Getting from ::::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteTask = (id, e) => {
    axios
      .delete(`http://localhost:8080/task/admin/delete/${id}`)
      .then(() => console.log("function successfull"))
      .then(window.location.reload());
  };
  return (
    <table>
      <tr>
        <th>TaskName</th>
        <th>View</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {data.map((data, index) => (
        <tr>
          <td>{data.nameTask}</td>
          <td>
            <button>
              <Link to={`/viewTask/${data.id}`}>View</Link>
            </button>
          </td>
          <td>
            <button>Edit</button>
          </td>
          <td>
            <button onClick={(e) => deleteTask(data.id, e)}>Delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Tasks;
